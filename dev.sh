#!/bin/bash

# Цвета для вывода
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Запуск LSS Clinic Dev Environment...${NC}"

# Функция для завершения при Ctrl+C
cleanup() {
    echo -e "\n${BLUE}Остановка серверов...${NC}"
    kill $BACKEND_PID
    kill $FRONTEND_PID
    exit
}

trap cleanup SIGINT

# 0. Очистка портов (на случай если серверы уже запущены)
echo -e "${BLUE}Очистка портов 8001 и 3000...${NC}"
lsof -ti :8001 | xargs kill -9 2>/dev/null
lsof -ti :3000 | xargs kill -9 2>/dev/null
echo -e "${GREEN}Запуск бэкенда (FastAPI)...${NC}"
cd backend
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi
source venv/bin/activate
python3 -m pip install -r requirements.txt
python3 -m uvicorn main:app --port 8001 &
BACKEND_PID=$!
cd ..

# 2. Запуск фронтенда
echo -e "${GREEN}Запуск фронтенда (Next.js)...${NC}"
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo -e "${BLUE}Бэкенд: http://localhost:8001${NC}"
echo -e "${BLUE}Фронтенд: http://localhost:3000${NC}"
echo -e "Нажмите Ctrl+C для выхода."

# Ожидание
wait
