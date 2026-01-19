"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8001"}/api/appointments`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                setStatus("Заявка успешно отправлена! Мы свяжемся с вами.");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("Ошибка при отправке. Попробуйте позже.");
            }
        } catch (err) {
            setStatus("Ошибка сети. Проверьте подключение.");
        } finally {
            setLoading(false);
        }
    };

    // Stagger variants for grids
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <>
            <main>
                {/* HERO SECTION */}
                <section className="hero">
                    <div className="hero-overlay" />
                    <div className="container hero-content-dual">
                        <div className="hero-text-side">
                            <FadeIn delay={0.1}>
                                <h1 className="hero-title-main">
                                    LSS CLINIC
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="hero-description" style={{ fontSize: "1.8rem", fontFamily: "Times New Roman, serif", fontStyle: "italic", maxWidth: "500px", lineHeight: "1.2" }}>
                                    Коротко о нашей <br />
                                    команде и клинике
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <div className="hero-benefits-list">
                                    <div className="benefit-item-inline">
                                        <strong>10+ лет</strong>
                                        <span>опыта</span>
                                    </div>
                                    <div className="benefit-item-inline">
                                        <strong>0-0-12</strong>
                                        <span>рассрочка</span>
                                    </div>
                                    <div className="benefit-item-inline">
                                        <strong>Гарантия</strong>
                                        <span>на работу</span>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.4}>
                                <div className="hero-actions-main">
                                    <Link className="button primary-lg" href="#appointment">Записаться</Link>
                                    <Link className="button outline-lg" href="#services">Услуги</Link>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="hero-form-side">
                            <FadeIn delay={0.6} direction="left" className="width-full-responsive">
                                <div className="quick-booking">
                                    <h3>Запись на прием</h3>
                                    <p>Оставьте номер телефона, и мы перезвоним вам в течение 5 минут для подбора времени.</p>
                                    <form className="booking-form-mini" onSubmit={handleSubmit}>
                                        <input type="text" name="name" placeholder="Ваше имя" required />
                                        <input type="tel" name="phone" placeholder="+7 (___) ___-__-__" required />
                                        <button type="submit" className="button accent-full" disabled={loading}>
                                            {loading ? "Отправка..." : "Перезвоните мне"}
                                        </button>
                                        <span className="privacy-text">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</span>
                                    </form>
                                    {status && <p style={{ marginTop: "12px", fontSize: "0.9rem", color: "var(--accent-dark)" }}>{status}</p>}
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section className="container section-padding" id="services">
                    <FadeIn>
                        <div className="section-header-centered">
                            <span className="section-tag">Наши услуги</span>
                            <h2 className="section-title-alt">Специализированная помощь <span>в каждом направлении</span></h2>
                            <p className="section-description-alt">
                                От профилактики до высокотехнологичных операций. <br />
                                Используем оборудование экспертного класса для точной диагностики.
                            </p>
                        </div>
                    </FadeIn>

                    <motion.div
                        className="services-grid-redesign"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {[
                            { title: "Ортодонтия", desc: "Исправление прикуса современными системными брекетами.", icon: "🦷" },
                            { title: "Ортопедия", desc: "Восстановление эстетики и функции: коронки и протезирование.", icon: "💎" },
                            { title: "Имплантация", desc: "Восстановление утраченных зубов с гарантией на работу.", icon: "🔩" },
                            { title: "Хирургия", desc: "Безболезненное удаление любой сложности.", icon: "🏥" },
                            { title: "Пародонтология", desc: "Лечение десен и тканей пародонта.", icon: "🩹" },
                            { title: "Гнатология", desc: "Работа с ВНЧС и сложными нарушениями жевания.", icon: "⚖️" },
                            { title: "Отбеливание", desc: "Безопасное осветление эмали.", icon: "✨" },
                            { title: "Диагностика", desc: "Прицельные снимки для точного планирования.", icon: "📸" },
                        ].map((service) => (
                            <motion.div
                                className="service-card-new"
                                key={service.title}
                                variants={itemVariants}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            >
                                <div className="card-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <Link href="/services" className="card-link">Подробнее →</Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    <FadeIn delay={0.2}>
                        <div className="section-cta">
                            <Link className="button secondary" href="/services">Все услуги</Link>
                            <Link className="button primary" href="#appointment">Записаться онлайн</Link>
                        </div>
                    </FadeIn>
                </section>

                {/* WHY CHOOSE US - TRUST SECTION */}
                <section className="section-padding" style={{ background: "var(--primary)", color: "#fff" }}>
                    <div className="container">
                        <FadeIn>
                            <div className="section-header-centered">
                                <span className="section-tag" style={{ color: "var(--accent)" }}>Преимущества LSS Clinic</span>
                                <h2 className="section-title-alt" style={{ color: "#fff" }}>Почему нам <span>доверяют пациенты</span></h2>
                            </div>
                        </FadeIn>

                        <motion.div
                            className="services-grid-redesign"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {[
                                { title: "Цифровая точность", desc: "Работаем под микроскопом и используем 3D-сканирование для идеального результата.", icon: "🔬" },
                                { title: "Честные цены", desc: "Составляем прозрачный план лечения. Никаких скрытых платежей или лишних процедур.", icon: "🛡️" },
                                { title: "Забота и комфорт", desc: "Атмосфера, в которой забываешь о страхе. Бережное лечение даже в сложных случаях.", icon: "🍃" }
                            ].map((trust) => (
                                <motion.div
                                    className="service-card-new"
                                    key={trust.title}
                                    variants={itemVariants}
                                    style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)", transition: { duration: 0.3 } }}
                                >
                                    <div className="card-icon">{trust.icon}</div>
                                    <h3 style={{ color: "#fff" }}>{trust.title}</h3>
                                    <p style={{ color: "rgba(255,255,255,0.7)" }}>{trust.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* DOCTORS SECTION */}
                <section className="container section-padding" id="doctors">
                    <FadeIn>
                        <div className="section-header-centered">
                            <span className="section-tag">Наша команда</span>
                            <h2 className="section-title-alt">Врачи <span>экспертного класса</span></h2>
                            <p className="section-description-alt">Специалисты с многолетним опытом, постоянно совершенствующие свои навыки.</p>
                        </div>
                    </FadeIn>

                    <div className="doctors-grid">
                        <FadeIn delay={0.1} className="h-full">
                            <motion.article className="doctor-card h-full" whileHover={{ y: -5 }}>
                                <div className="doctor-photo doctor-almira" />
                                <Link className="button outline" href="/doctors#almira" style={{ width: "100%", borderRadius: "99px" }}>О враче →</Link>
                            </motion.article>
                        </FadeIn>
                        <FadeIn delay={0.2} className="h-full">
                            <motion.article className="doctor-card h-full" whileHover={{ y: -5 }}>
                                <div className="doctor-photo doctor-urstem" />
                                <Link className="button outline" href="/doctors#urstem" style={{ width: "100%", borderRadius: "99px" }}>О враче →</Link>
                            </motion.article>
                        </FadeIn>
                    </div>
                </section>

                {/* REVIEWS SECTION */}
                <section className="section-padding" style={{ background: "#f9f7f5" }} id="reviews">
                    <div className="container">
                        <FadeIn>
                            <div className="section-header-centered">
                                <span className="section-tag">Отзывы</span>
                                <h2 className="section-title-alt">Что говорят <span>наши пациенты</span></h2>
                                <p className="section-description-alt">Более 1000 успешных кейсов и благодарных улыбок.</p>
                            </div>
                        </FadeIn>

                        <motion.div
                            className="reviews-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {[
                                { text: "Очень внимательная команда и спокойная атмосфера. Лечение прошло без боли, всё понятно объяснили на каждом этапе.", author: "Айгерим К.", date: "Январь 2024" },
                                { text: "Профессиональный подход во всем. Урстем Берлибекович — мастер своего дела. Очень доволен результатом протезирования.", author: "Данияр С.", date: "Декабрь 2023" },
                                { text: "LSS Clinic — это про качество и отношение. Спасибо за мою новую улыбку! Рекомендую всем знакомым.", author: "Айнаш М.", date: "Февраль 2024" }
                            ].map((review) => (
                                <motion.div
                                    className="review-card"
                                    key={review.author}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <p>“{review.text}”</p>
                                    <div className="review-meta" style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <strong style={{ color: "var(--primary)" }}>{review.author}</strong>
                                        <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{review.date}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* FINAL CTA & APPOINTMENT */}
                <section className="container section-padding" id="appointment">
                    <div className="location-grid">
                        <FadeIn direction="left">
                            <div className="info-column" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                <div style={{ background: "#f8f9fa", padding: "32px", borderRadius: "24px", border: "1px solid var(--border)" }}>
                                    <h3 style={{ marginBottom: "12px", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#666" }}>График работы</h3>
                                    <p style={{ fontWeight: "700", fontSize: "1.2rem", color: "#1a1a1a" }}>Пн — Вс: 09:00 – 21:00</p>
                                    <p style={{ marginTop: "12px", fontSize: "0.85rem", opacity: 0.7, color: "#1a1a1a" }}>Без выходных и праздников по предварительной записи.</p>
                                </div>

                                <div style={{ background: "#fff", padding: "32px", borderRadius: "24px", border: "1px solid var(--border)" }}>
                                    <h3 style={{ marginBottom: "16px", fontSize: "1.4rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Контакты</h3>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <span style={{ fontSize: "1.2rem" }}>📍</span>
                                            <span>г. Астана, пр. Аль-Фараби 15</span>
                                        </div>
                                        <a href="tel:+77020073400" style={{ fontWeight: "700", fontSize: "1.4rem", color: "#1a1a1a", margin: "8px 0" }}>+7 702 007 34 00</a>
                                        <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                                            <a href="https://api.whatsapp.com/send/?phone=77020073400" className="button outline" style={{ flex: 1, padding: "14px", borderRadius: "99px", fontSize: "0.9rem" }}>WhatsApp</a>
                                            <a href="https://www.instagram.com/lss_clinic_/" className="button primary" style={{ flex: 1, padding: "14px", borderRadius: "99px", fontSize: "0.9rem" }}>Instagram</a>
                                        </div>
                                    </div>
                                </div>

                                {/* GOOGLE MAP */}
                                <div style={{ width: "100%", height: "280px", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2503.8847!2d71.449721!3d51.095329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDA1JzQzLjIiTiA3McKwMjYnNTkuMCJF!5e0!3m2!1sen!2skz!4v1737311420000!5m2!1sen!2skz"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="right" delay={0.2}>
                            <div className="form-column" style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="form-card" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", border: "none", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", padding: "40px", background: "#ffffff", borderRadius: "32px", width: "100%", maxWidth: "440px" }}>
                                    <h2 style={{ marginBottom: "10px", fontSize: "2.4rem", color: "#1a1a1a", fontWeight: "700", textTransform: "uppercase", textAlign: "left" }}>Запись на прием</h2>
                                    <p style={{ marginBottom: "30px", color: "#666", fontSize: "0.95rem" }}>Заполните форму ниже, чтобы мы могли связаться с вами.</p>
                                    <form className="booking-form-mini light-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                        <input type="text" name="name" placeholder="Ваше имя" required style={{ width: "100%", padding: "20px 24px", borderRadius: "99px", fontSize: "1rem" }} />
                                        <input type="tel" name="phone" placeholder="+7 (___) ___-__-__" required style={{ width: "100%", padding: "20px 24px", borderRadius: "99px", fontSize: "1rem" }} />
                                        <select name="service" style={{ width: "100%", padding: "18px 24px", borderRadius: "99px", fontSize: "1rem", appearance: "none", backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E')", backgroundRepeat: "no-repeat", backgroundPosition: "right 20px center", backgroundSize: "12px" }}>
                                            <option value="">Выберите услугу (необязательно)</option>
                                            <option value="consultation">Первичная консультация</option>
                                            <option value="orthodontics">Ортодонтия</option>
                                            <option value="implantology">Имплантация</option>
                                        </select>
                                        <textarea name="message" placeholder="Ваши пожелания или вопросы" style={{ width: "100%", padding: "20px 24px", borderRadius: "24px", border: "1px solid rgba(0,0,0,0.1)", background: "#fcfcfd", minHeight: "120px", fontSize: "1rem", resize: "none" }}></textarea>
                                        <button type="submit" className="button primary" style={{ width: "100%", padding: "20px", borderRadius: "99px", textTransform: "uppercase", fontWeight: "700", letterSpacing: "0.05em" }} disabled={loading}>
                                            {loading ? "Отправка..." : "Отправить заявку"}
                                        </button>
                                    </form>
                                    {status && <p style={{ marginTop: "16px", color: "var(--accent-dark)", fontWeight: "600", textAlign: "center" }}>{status}</p>}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>
        </>
    );
}
