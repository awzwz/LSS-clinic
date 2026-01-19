"use client";

import { useState, useEffect } from "react";
import FadeIn from "../../components/FadeIn";
import { motion } from "framer-motion";

interface Appointment {
    id: number;
    name: string;
    phone: string;
    service: string | null;
    message: string | null;
    created_at: string;
    status: string;
}

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

    // Check if already logged in (using sessionStorage)
    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem("admin_authenticated");
        if (isLoggedIn === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple password check - in production, use proper authentication
        if (password === "lss2024") {
            setIsAuthenticated(true);
            sessionStorage.setItem("admin_authenticated", "true");
            setLoginError("");
        } else {
            setLoginError("Неверный пароль");
            setPassword("");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem("admin_authenticated");
        setPassword("");
    };

    const fetchAppointments = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8001"}/api/appointments`
            );
            if (response.ok) {
                const data = await response.json();
                setAppointments(data);
            }
        } catch (error) {
            console.error("Error fetching appointments:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchAppointments();
            // Auto-refresh every 30 seconds
            const interval = setInterval(fetchAppointments, 30000);
            return () => clearInterval(interval);
        }
    }, [isAuthenticated]);

    const filteredAppointments = appointments.filter((apt) => {
        const matchesSearch =
            apt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            apt.phone.includes(searchTerm);
        const matchesStatus = filterStatus === "all" || apt.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("ru-RU", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).format(date);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "new":
                return "#10b981";
            case "contacted":
                return "#f59e0b";
            case "completed":
                return "#6b7280";
            default:
                return "#3b82f6";
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case "new":
                return "Новая";
            case "contacted":
                return "Связались";
            case "completed":
                return "Завершена";
            default:
                return status;
        }
    };

    // Login Page
    if (!isAuthenticated) {
        return (
            <main style={{
                background: "linear-gradient(135deg, var(--primary) 0%, #2c5f7a 100%)",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px"
            }}>
                <FadeIn>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: "#fff",
                            padding: "48px 40px",
                            borderRadius: "24px",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                            maxWidth: "420px",
                            width: "100%"
                        }}
                    >
                        <div style={{ textAlign: "center", marginBottom: "32px" }}>
                            <div style={{
                                width: "80px",
                                height: "80px",
                                background: "var(--primary)",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto 24px",
                                fontSize: "2.5rem"
                            }}>
                                🔒
                            </div>
                            <h1 style={{
                                fontSize: "2rem",
                                fontWeight: "700",
                                color: "#1f2937",
                                marginBottom: "8px"
                            }}>
                                Вход в админ-панель
                            </h1>
                            <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
                                LSS Clinic
                            </p>
                        </div>

                        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div>
                                <label style={{
                                    display: "block",
                                    marginBottom: "8px",
                                    color: "#374151",
                                    fontWeight: "600",
                                    fontSize: "0.9rem"
                                }}>
                                    Пароль
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Введите пароль"
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "14px 16px",
                                        borderRadius: "12px",
                                        border: loginError ? "2px solid #ef4444" : "1px solid #e5e7eb",
                                        fontSize: "1rem",
                                        outline: "none",
                                        transition: "all 0.2s"
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                                    onBlur={(e) => e.target.style.borderColor = loginError ? "#ef4444" : "#e5e7eb"}
                                />
                                {loginError && (
                                    <p style={{
                                        color: "#ef4444",
                                        fontSize: "0.85rem",
                                        marginTop: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px"
                                    }}>
                                        ⚠️ {loginError}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="button primary"
                                style={{
                                    width: "100%",
                                    padding: "16px",
                                    borderRadius: "12px",
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    marginTop: "8px"
                                }}
                            >
                                Войти
                            </button>
                        </form>

                        <div style={{
                            marginTop: "24px",
                            padding: "16px",
                            background: "#f9fafb",
                            borderRadius: "12px",
                            fontSize: "0.85rem",
                            color: "#6b7280",
                            textAlign: "center"
                        }}>
                            💡 Пароль по умолчанию: <strong style={{ color: "#374151" }}>lss2024</strong>
                        </div>
                    </motion.div>
                </FadeIn>
            </main>
        );
    }

    // Admin Dashboard (after login)
    return (
        <main style={{ background: "#f9fafb", minHeight: "100vh" }}>
            <section style={{ paddingTop: "100px", paddingBottom: "80px" }}>
                <div className="container">
                    <FadeIn>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "48px",
                            flexWrap: "wrap",
                            gap: "16px"
                        }}>
                            <div style={{ textAlign: "left" }}>
                                <h1 className="section-title" style={{ marginBottom: "8px" }}>
                                    Панель администратора
                                </h1>
                                <p className="section-subtitle">
                                    Все заявки на запись в клинику
                                </p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="button outline"
                                style={{
                                    padding: "12px 24px",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}
                            >
                                🚪 Выйти
                            </button>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div style={{
                            display: "flex",
                            gap: "16px",
                            marginBottom: "32px",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <input
                                type="text"
                                placeholder="Поиск по имени или телефону..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    flex: "1",
                                    minWidth: "250px",
                                    padding: "14px 20px",
                                    borderRadius: "12px",
                                    border: "1px solid #e5e7eb",
                                    fontSize: "1rem",
                                    background: "#fff"
                                }}
                            />
                            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                {["all", "new", "contacted", "completed"].map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => setFilterStatus(status)}
                                        style={{
                                            padding: "10px 20px",
                                            borderRadius: "12px",
                                            border: filterStatus === status ? "2px solid var(--primary)" : "1px solid #e5e7eb",
                                            background: filterStatus === status ? "var(--primary)" : "#fff",
                                            color: filterStatus === status ? "#fff" : "#374151",
                                            cursor: "pointer",
                                            fontWeight: filterStatus === status ? "600" : "400",
                                            transition: "all 0.2s"
                                        }}
                                    >
                                        {status === "all" ? "Все" : getStatusLabel(status)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {loading ? (
                        <div style={{ textAlign: "center", padding: "60px 0", color: "#6b7280" }}>
                            <p style={{ fontSize: "1.2rem" }}>Загрузка заявок...</p>
                        </div>
                    ) : filteredAppointments.length === 0 ? (
                        <div style={{ textAlign: "center", padding: "60px 0", color: "#6b7280" }}>
                            <p style={{ fontSize: "1.2rem" }}>Заявок не найдено</p>
                        </div>
                    ) : (
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                            gap: "24px"
                        }}>
                            {filteredAppointments.map((appointment, index) => (
                                <FadeIn key={appointment.id} delay={0.1 + index * 0.05}>
                                    <motion.div
                                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                        style={{
                                            background: "#fff",
                                            padding: "24px",
                                            borderRadius: "16px",
                                            border: "1px solid #e5e7eb",
                                            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                                            position: "relative"
                                        }}
                                    >
                                        <div style={{
                                            position: "absolute",
                                            top: "16px",
                                            right: "16px",
                                            padding: "6px 12px",
                                            borderRadius: "8px",
                                            background: getStatusColor(appointment.status),
                                            color: "#fff",
                                            fontSize: "0.75rem",
                                            fontWeight: "600",
                                            textTransform: "uppercase"
                                        }}>
                                            {getStatusLabel(appointment.status)}
                                        </div>

                                        <div style={{ marginBottom: "16px" }}>
                                            <h3 style={{
                                                fontSize: "1.3rem",
                                                fontWeight: "700",
                                                color: "#1f2937",
                                                marginBottom: "8px"
                                            }}>
                                                {appointment.name}
                                            </h3>
                                            <p style={{
                                                fontSize: "0.85rem",
                                                color: "#6b7280",
                                                marginBottom: "4px"
                                            }}>
                                                {formatDate(appointment.created_at)}
                                            </p>
                                        </div>

                                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                <span style={{ fontSize: "1.1rem" }}>📞</span>
                                                <a
                                                    href={`tel:${appointment.phone}`}
                                                    style={{
                                                        color: "var(--primary)",
                                                        fontWeight: "600",
                                                        fontSize: "1.05rem",
                                                        textDecoration: "none"
                                                    }}
                                                >
                                                    {appointment.phone}
                                                </a>
                                            </div>

                                            {appointment.service && (
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <span style={{ fontSize: "1.1rem" }}>🦷</span>
                                                    <span style={{ color: "#374151" }}>{appointment.service}</span>
                                                </div>
                                            )}

                                            {appointment.message && (
                                                <div style={{
                                                    marginTop: "8px",
                                                    padding: "12px",
                                                    background: "#f9fafb",
                                                    borderRadius: "8px",
                                                    borderLeft: "3px solid var(--accent)"
                                                }}>
                                                    <p style={{
                                                        fontSize: "0.9rem",
                                                        color: "#4b5563",
                                                        lineHeight: "1.5"
                                                    }}>
                                                        {appointment.message}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </FadeIn>
                            ))}
                        </div>
                    )}

                    <FadeIn delay={0.3}>
                        <div style={{
                            marginTop: "48px",
                            textAlign: "center",
                            padding: "24px",
                            background: "#fff",
                            borderRadius: "12px",
                            border: "1px solid #e5e7eb"
                        }}>
                            <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                                Всего заявок: <strong style={{ color: "#1f2937" }}>{appointments.length}</strong>
                                {" • "}
                                Показано: <strong style={{ color: "#1f2937" }}>{filteredAppointments.length}</strong>
                                {" • "}
                                Автообновление каждые 30 секунд
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
