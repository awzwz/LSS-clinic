import sqlite3
from datetime import datetime
from typing import Optional, List
from contextlib import contextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI(title="LSS Clinic API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database setup
DATABASE_PATH = "appointments.db"


@contextmanager
def get_db():
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()


def init_db():
    """Initialize the database with the appointments table"""
    with get_db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS appointments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                service TEXT,
                message TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                status TEXT DEFAULT 'new'
            )
        """)
        conn.commit()


# Initialize database on startup
@app.on_event("startup")
async def startup_event():
    init_db()


class AppointmentRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=5, max_length=30)
    service: Optional[str] = None
    preferred_date: Optional[str] = None
    message: Optional[str] = Field(default=None, max_length=500)


class AppointmentResponse(BaseModel):
    received_at: datetime
    message: str


class AppointmentDB(BaseModel):
    id: int
    name: str
    phone: str
    service: Optional[str]
    message: Optional[str]
    created_at: str
    status: str


@app.get("/health")
async def health() -> dict:
    return {"status": "ok"}


@app.post("/api/appointments", response_model=AppointmentResponse)
async def create_appointment(payload: AppointmentRequest) -> AppointmentResponse:
    """Create a new appointment request and save to database"""
    with get_db() as conn:
        cursor = conn.execute(
            """
            INSERT INTO appointments (name, phone, service, message)
            VALUES (?, ?, ?, ?)
            """,
            (payload.name, payload.phone, payload.service, payload.message)
        )
        conn.commit()
    
    return AppointmentResponse(
        received_at=datetime.utcnow(),
        message=f"Спасибо, {payload.name}! Мы получили вашу заявку и скоро свяжемся.",
    )


@app.get("/api/appointments", response_model=List[AppointmentDB])
async def get_appointments() -> List[AppointmentDB]:
    """Retrieve all appointment requests from database"""
    with get_db() as conn:
        cursor = conn.execute(
            """
            SELECT id, name, phone, service, message, created_at, status
            FROM appointments
            ORDER BY created_at DESC
            """
        )
        rows = cursor.fetchall()
        
        appointments = []
        for row in rows:
            appointments.append(AppointmentDB(
                id=row["id"],
                name=row["name"],
                phone=row["phone"],
                service=row["service"],
                message=row["message"],
                created_at=row["created_at"],
                status=row["status"]
            ))
        
        return appointments
