import type { Metadata } from "next";
import ContactsContent from "./ContactsContent";

export const metadata: Metadata = {
    title: "Контакты | LSS Clinic — Центр современной стоматологии"
};

export default function ContactsPage() {
    return <ContactsContent />;
}
