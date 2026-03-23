import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Free Quote for Permit Drawings in Ontario",
  description:
    "Contact Sky Permit Designs for a free, same-day quote on your building permit drawings. Serving Ontario homeowners and contractors — phone, email, or WhatsApp.",
};

export default function ContactPage() {
  return <ContactClient />;
}
