"use client";

import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";

export default function ServicesPage() {
    return (
        <main>
            <section className="container" style={{ paddingTop: "48px", paddingBottom: "100px" }}>
                <FadeIn>
                    <h1 className="section-title">Услуги LSS Clinic</h1>
                    <p className="section-subtitle">
                        Выберите направление, а мы подготовим персональный план лечения и
                        расскажем о стоимости на консультации.
                    </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <div style={{
                        padding: "60px 0",
                        textAlign: "center",
                        color: "#666",
                        fontSize: "1.2rem",
                        fontFamily: "var(--font-montserrat)",
                        opacity: 0.8
                    }}>
                        Буду ждать подробной информации от вас
                    </div>
                </FadeIn>
                <FadeIn delay={0.15}>
                    <div className="section-cta">
                        <a
                            className="button primary"
                            href="https://api.whatsapp.com/send/?phone=77020073400&text=Здравствуйте%21%0A%0AПишу+из+приложения+2ГИС.%0A%0A&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Записаться в WhatsApp
                        </a>
                        <Link className="button secondary" href="/contacts">
                            Контакты и карта
                        </Link>
                    </div>
                </FadeIn>
            </section >
        </main >
    );
}
