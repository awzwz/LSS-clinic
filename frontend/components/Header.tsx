"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    // Close menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className="site-header">
            <div className="header-top">
                <div className="container top-nav">
                    <div className="top-info">
                        <span>📍 г. Астана, пр. Аль-Фараби 15</span>
                        <span>🕘 Пн–Вс: 09:00 – 21:00</span>
                    </div>
                    <div className="top-socials">
                        <a href="https://www.instagram.com/lss_clinic_/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://api.whatsapp.com/send/?phone=77020073400" target="_blank" rel="noreferrer">WhatsApp</a>
                    </div>
                </div>
            </div>
            <div className="container nav-main">
                <Link href="/" className="logo">
                    LSS Clinic
                </Link>
                <nav className="nav-links">
                    <Link href="/" className={pathname === "/" ? "active" : ""}>Главная</Link>
                    <Link href="/services" className={pathname === "/services" ? "active" : ""}>Услуги</Link>
                    <Link href="/doctors" className={pathname === "/doctors" ? "active" : ""}>Врачи</Link>
                    <Link href="/about" className={pathname === "/about" ? "active" : ""}>О клинике</Link>
                    <Link href="/prices" className={pathname === "/prices" ? "active" : ""}>Цены</Link>
                    <Link href="/contacts" className={pathname === "/contacts" ? "active" : ""}>Контакты</Link>
                </nav>
                <div className="header-actions">
                    <a className="button-call" href="tel:+77020073400">
                        <span className="phone">+7 702 007 34 00</span>
                        <span className="cta">Заказать звонок</span>
                    </a>
                    {/* Hamburger Menu Button */}
                    <button
                        className="mobile-menu-button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <Link href="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
                        LSS Clinic
                    </Link>
                    <button
                        className="mobile-menu-close"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>
                <nav className="mobile-nav-links">
                    <Link href="/" className={pathname === "/" ? "active" : ""}>Главная</Link>
                    <Link href="/services" className={pathname === "/services" ? "active" : ""}>Услуги</Link>
                    <Link href="/doctors" className={pathname === "/doctors" ? "active" : ""}>Врачи</Link>
                    <Link href="/about" className={pathname === "/about" ? "active" : ""}>О клинике</Link>
                    <Link href="/prices" className={pathname === "/prices" ? "active" : ""}>Цены</Link>
                    <Link href="/contacts" className={pathname === "/contacts" ? "active" : ""}>Контакты</Link>
                </nav>
                <div className="mobile-menu-footer">
                    <a className="mobile-phone-link" href="tel:+77020073400">
                        <span className="phone">+7 702 007 34 00</span>
                        <span className="cta">Заказать звонок</span>
                    </a>
                    <div className="mobile-socials">
                        <a href="https://www.instagram.com/lss_clinic_/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://api.whatsapp.com/send/?phone=77020073400" target="_blank" rel="noreferrer">WhatsApp</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
