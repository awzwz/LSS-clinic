"use client";

import FadeIn from "../../components/FadeIn";

export default function ContactsContent() {
    return (
        <main style={{ background: "#fff", minHeight: "100vh" }}>
            {/* HERO SECTION */}
            <section style={{
                paddingTop: "140px",
                paddingBottom: "100px",
                textAlign: "center",
                background: "linear-gradient(to bottom, #f5f5f7, #fff)"
            }}>
                <div className="container">
                    <FadeIn>
                        <span className="section-tag">Свяжитесь с нами</span>
                        <h1 className="section-title-alt" style={{ marginBottom: "24px" }}>Наши <span>Контакты</span></h1>
                        <p className="section-description-alt">
                            Мы всегда на связи, чтобы ваша улыбка оставалась безупречной. Запишитесь на консультацию или посетите нашу клинику в Астане.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="container" style={{ paddingBottom: "140px" }}>
                <div className="location-grid">
                    <FadeIn direction="right" delay={0.2}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                            <div className="info-card">
                                <strong>📍 Наш адрес</strong>
                                <span style={{ fontSize: "1.2rem", color: "#1a1a1a", fontWeight: "600" }}>г. Астана, пр. Аль-Фараби 15</span>
                                <span className="notice">Есильский район, проспект Аль-Фараби 15</span>
                            </div>

                            <div className="info-card">
                                <strong>🕘 График работы</strong>
                                <span>Понедельник — Воскресенье</span>
                                <span style={{ fontSize: "1.2rem", color: "#1a1a1a", fontWeight: "600" }}>09:00 – 21:00</span>
                                <span className="notice">Прием ведется по предварительной записи</span>
                            </div>

                            <div className="info-card">
                                <strong>📞 Телефоны</strong>
                                <a href="tel:+77020073400" style={{ fontSize: "1.6rem", fontWeight: "700", color: "var(--brand-grey)" }}>+7 702 007 34 00</a>
                                <span className="notice">Доступны для звонков и консультаций</span>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left" delay={0.4}>
                        <div className="map-container">
                            <iframe
                                className="map-frame"
                                title="LSS Clinic на карте"
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2505.7116406005825!2d71.449721!3d51.095329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDA1JzQzLjIiTiA3McKwMjYnNTkuMCJF!5e0!3m2!1skk!2skz!4v1768839063432!5m2!1skk!2skz"
                                loading="lazy"
                            />
                        </div>
                    </FadeIn>
                </div>

                <FadeIn delay={0.6}>
                    <div style={{
                        marginTop: "120px",
                        textAlign: "center",
                        padding: "80px 40px",
                        background: "var(--primary)",
                        borderRadius: "40px",
                        color: "#fff",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
                    }}>
                        <h3 style={{ fontSize: "3rem", color: "#fff", marginBottom: "24px" }}>Остались вопросы?</h3>
                        <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px auto", fontSize: "1.1rem" }}>
                            Оставьте заявку на обратный звонок, и наш администратор свяжется с вами в течение 10 минут для подробной консультации.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                            <a href="tel:+77020073400" className="button primary-lg">Позвонить сейчас</a>
                            <button className="button outline-lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Записаться онлайн</button>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}

