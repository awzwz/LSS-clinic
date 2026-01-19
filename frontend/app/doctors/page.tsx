"use client";

import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";
import { motion } from "framer-motion";

export default function DoctorsPage() {
    return (
        <main>
            <section className="container" style={{ paddingTop: "48px", paddingBottom: "100px" }}>
                <FadeIn>
                    <h1 className="section-title">Врачи LSS Clinic</h1>
                    <p className="section-subtitle" style={{ marginBottom: "60px" }}>
                        Эксперты с опытом, которым доверяют пациенты. Ознакомьтесь с профилями
                        ключевых специалистов.
                    </p>
                </FadeIn>
                <div className="doctors-grid">
                    <FadeIn delay={0.1}>
                        <motion.article
                            className="doctor-card"
                            id="almira"
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="doctor-photo doctor-almira" />
                            <h3>Нарымбаева Альмира Манатовна</h3>
                            <p className="notice">Врач стоматолог-терапевт · стаж 3+ года</p>
                            <p>
                                Бережное лечение кариеса, эстетические реставрации и поддержка
                                пациентов с повышенной чувствительностью.
                            </p>
                        </motion.article>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <motion.article
                            className="doctor-card"
                            id="urstem"
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="doctor-photo doctor-urstem" />
                            <h3>Кенжалин Урстем Берлибекович</h3>
                            <p className="notice">
                                Врач стоматолог, ортопед, хирург · стаж 25+ лет
                            </p>
                            <p>
                                Ортопедические и хируррические работы высокой сложности, планирование
                                имплантации и функциональная реабилитация.
                            </p>
                        </motion.article>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
