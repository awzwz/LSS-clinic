"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "../../components/FadeIn"; // Adjust path if needed
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main style={{ background: "#fafafa" }}>
            {/* HERO SECTION */}
            <section className="container section-padding">
                <FadeIn>
                    <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 80px auto" }}>
                        <h1 className="section-title" style={{ fontSize: "4rem", marginBottom: "24px" }}>О клинике LSS</h1>
                        <p className="section-subtitle" style={{ fontSize: "1.2rem", color: "#666" }}>
                            Лаборатория современной стоматологии. Мы создаем пространство, где передовые технологии встречаются с искренней заботой о каждом пациенте.
                        </p>
                    </div>
                </FadeIn>

                {/* FEATURE 1: COMFORT */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "120px" }} className="about-block-responsive">
                    <FadeIn direction="right">
                        <div>
                            <span style={{ color: "var(--accent)", fontWeight: "600", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.1em" }}>Приоритет №1</span>
                            <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "3rem", margin: "16px 0 24px 0", lineHeight: "1" }}>Комфорт пациентов</h2>
                            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6", marginBottom: "32px" }}>
                                Наш интерьер спроектирован так, чтобы вы забыли, что находитесь в стоматологии. Уютный лаунж, внимание к деталям и премиальный сервис обеспечивают полное спокойствие на каждом этапе.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn direction="left">
                        <div style={{ borderRadius: "40px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                            <img
                                src="/brain/a8391ad0-20c3-4e15-b467-1b718e244f2c/clinic_interior_modern_1768723132457.png"
                                alt="Интерьер клиники"
                                style={{ width: "100%", height: "500px", objectFit: "cover" }}
                            />
                        </div>
                    </FadeIn>
                </div>

                {/* FEATURE 2: TECHNOLOGY */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "120px" }} className="about-block-responsive reverse">
                    <FadeIn direction="right">
                        <div style={{ borderRadius: "40px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                            <img
                                src="/brain/a8391ad0-20c3-4e15-b467-1b718e244f2c/clinic_technology_dental_1768723147406.png"
                                alt="Оборудование клиники"
                                style={{ width: "100%", height: "500px", objectFit: "cover" }}
                            />
                        </div>
                    </FadeIn>
                    <FadeIn direction="left">
                        <div>
                            <span style={{ color: "var(--accent)", fontWeight: "600", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.1em" }}>Инновации</span>
                            <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "3rem", margin: "16px 0 24px 0", lineHeight: "1" }}>Качество и контроль</h2>
                            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6", marginBottom: "32px" }}>
                                Мы используем диагностическое и лечебное оборудование последнего поколения. Это гарантирует максимальную точность, безопасность и долговечность результата для наших пациентов.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* FINAL CTA */}
                <FadeIn>
                    <div style={{ background: "#1a1a1a", padding: "80px", borderRadius: "40px", textAlign: "center", color: "#fff" }}>
                        <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "3.5rem", marginBottom: "24px" }}>Готовы к новому уровню лечения?</h2>
                        <p style={{ fontSize: "1.2rem", opacity: "0.8", maxWidth: "600px", margin: "0 auto 40px auto" }}>
                            Запишитесь на первичную консультацию и получите персональный план лечения от наших экспертов.
                        </p>
                        <Link href="/contacts" className="button accent-full" style={{ padding: "18px 48px", fontSize: "1.1rem" }}>Связаться с нами</Link>
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}
