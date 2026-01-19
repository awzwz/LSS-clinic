"use client";

import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import { motion } from "framer-motion";

export default function PricesPage() {
    return (
        <main style={{ background: "#fff", minHeight: "100vh" }}>
            <section className="container" style={{ paddingTop: "80px", paddingBottom: "120px" }}>
                <FadeIn>
                    <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 100px auto" }}>
                        <h1 className="section-title" style={{ fontSize: "3.5rem", marginBottom: "24px" }}>Цены и рассрочка</h1>
                        <p className="section-subtitle" style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.6" }}>
                            Мы за честную медицину. Итоговая стоимость лечения фиксируется в плане после диагностики и не меняется в процессе. Никаких скрытых платежей.
                        </p>
                    </div>
                </FadeIn>

                {/* KASPI SECTION */}
                <FadeIn delay={0.2}>
                    <div style={{
                        background: "#fafafa",
                        borderRadius: "48px",
                        padding: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "100px",
                        border: "1px solid rgba(0,0,0,0.03)"
                    }} className="kaspi-block-responsive">
                        <div style={{ maxWidth: "500px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
                                <img
                                    src="/kaspi-logo.png"
                                    alt="Kaspi Logo"
                                    style={{ height: "40px" }}
                                />
                                <span style={{ fontWeight: "700", fontSize: "1.2rem", letterSpacing: "-0.02em" }}>Рассрочка Kaspi.kz</span>
                            </div>
                            <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "4rem", lineHeight: "0.9", marginBottom: "24px" }}>
                                Лечитесь сейчас, <br /> платите потом
                            </h2>
                            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6", marginBottom: "40px" }}>
                                На все виды услуг в нашей клинике доступна удобная рассрочка без переплат и первоначального взноса. Оформление занимает всего пару минут прямо в приложении Kaspi.
                            </p>
                            <div style={{ display: "flex", gap: "40px" }}>
                                <div>
                                    <div style={{ fontSize: "2rem", fontWeight: "700" }}>12</div>
                                    <div style={{ fontSize: "0.8rem", textTransform: "uppercase", opacity: "0.6", letterSpacing: "0.05em" }}>Месяцев</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: "2rem", fontWeight: "700" }}>0%</div>
                                    <div style={{ fontSize: "0.8rem", textTransform: "uppercase", opacity: "0.6", letterSpacing: "0.05em" }}>Переплат</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: "2rem", fontWeight: "700" }}>0 ₸</div>
                                    <div style={{ fontSize: "0.8rem", textTransform: "uppercase", opacity: "0.6", letterSpacing: "0.05em" }}>Взнос</div>
                                </div>
                            </div>
                        </div>
                        <div className="kaspi-badge-desktop" style={{
                            background: "#fff",
                            padding: "40px",
                            borderRadius: "32px",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                            textAlign: "center"
                        }}>
                            <div style={{ color: "#F14635", fontSize: "3rem", fontWeight: "800", marginBottom: "10px" }}>0-0-12</div>
                            <div style={{ fontSize: "1rem", fontWeight: "600", opacity: "0.8" }}>Фирменная рассрочка</div>
                        </div>
                    </div>
                </FadeIn>

                {/* INFO TILES */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "100px" }} className="prices-info-responsive">
                    <FadeIn delay={0.4} direction="right">
                        <div style={{ padding: "50px", border: "1px solid #eee", borderRadius: "40px" }}>
                            <h3 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Прозрачный прайс</h3>
                            <p style={{ color: "#666", lineHeight: "1.7", fontSize: "1.05rem" }}>
                                Мы составляем подробную смету до начала лечения. Вы всегда знаете, за что платите, и какие этапы впереди. Никаких навязанных услуг.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.5} direction="left">
                        <div style={{ padding: "50px", border: "1px solid #eee", borderRadius: "40px" }}>
                            <h3 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Консультация — 0 ₸</h3>
                            <p style={{ color: "#666", lineHeight: "1.7", fontSize: "1.05rem" }}>
                                Первичный осмотр и составление плана лечения у наших экспертов — абсолютно бесплатно. Мы поможем выбрать оптимальный путь к здоровой улыбке.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* CALL TO ACTION */}
                <FadeIn delay={0.6}>
                    <div style={{ textAlign: "center" }}>
                        <div className="section-cta" style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                            <a
                                className="button primary"
                                style={{ padding: "20px 40px", borderRadius: "100px" }}
                                href="https://api.whatsapp.com/send/?phone=77020073400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Узнать стоимость в WhatsApp
                            </a>
                            <Link className="button secondary" style={{ padding: "20px 40px", borderRadius: "100px" }} href="/contacts">
                                Контакты и карта
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}
