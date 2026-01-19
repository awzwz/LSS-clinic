import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <Link href="/" className="logo">LSS Clinic</Link>
                    <p className="footer-bio">
                        Лаборатория современной стоматологии в Астане. <br />
                        Профессиональное лечение с использованием современных технологий и заботой о каждом пациенте.
                    </p>
                </div>

                <div className="footer-links-col">
                    <h4>Навигация</h4>
                    <ul>
                        <li><Link href="/">Главная</Link></li>
                        <li><Link href="/about">О клинике</Link></li>
                        <li><Link href="/doctors">Наши врачи</Link></li>
                        <li><Link href="/prices">Цены</Link></li>
                        <li><Link href="/contacts">Контакты</Link></li>
                    </ul>
                </div>

                <div className="footer-links-col">
                    <h4>Услуги</h4>
                    <ul>
                        <li><Link href="/services">Ортодонтия</Link></li>
                        <li><Link href="/services">Имплантация</Link></li>
                        <li><Link href="/services">Ортопедия</Link></li>
                        <li><Link href="/services">Хирургия</Link></li>
                        <li><Link href="/services">Отбеливание</Link></li>
                    </ul>
                </div>

                <div className="footer-contact-col">
                    <h4>Контакты</h4>
                    <p>📍 г. Астана, пр. Аль-Фараби 15</p>
                    <a href="tel:+77020073400" className="footer-phone">+7 702 007 34 00</a>
                    <p>🕘 Пн–Вс: 09:00 – 21:00</p>
                    <Link href="#appointment" className="button accent-full" style={{ marginTop: "16px", padding: "12px" }}>Записаться</Link>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>© 2024 LSS Clinic. Все права защищены. Разработано с заботой о здоровье.</p>
                </div>
            </div>
        </footer>
    );
}
