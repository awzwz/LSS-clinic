import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue, Montserrat, Oswald } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-bebas",
    display: "swap",
});

const oswald = Oswald({
    subsets: ["latin", "cyrillic"],
    variable: "--font-oswald",
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    variable: "--font-montserrat",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        template: "%s | LSS Clinic",
        default: "LSS Clinic — стоматология в Астане"
    },
    description:
        "Современная стоматология LSS Clinic: лечение без боли, опытные врачи и удобная запись онлайн."
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={`${bebas.variable} ${montserrat.variable} ${oswald.variable}`}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
