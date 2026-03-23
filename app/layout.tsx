import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sky Permit Designs | BCIN-Certified Building Permit Drawings — Ontario",
    template: "%s | Sky Permit Designs",
  },
  description:
    "Professional BCIN-certified permit drawings for residential projects across Ontario. Decks, basement renovations, home additions, and more. Serving Toronto, Ajax, Pickering, Whitby, Oshawa & GTA.",
  keywords: [
    "building permit drawings Ontario",
    "BCIN certified drawings",
    "permit drawings Toronto",
    "residential permit drawings GTA",
    "deck permit drawings",
    "basement renovation drawings",
    "home addition plans Ontario",
    "AutoCAD drafting Ontario",
  ],
  authors: [{ name: "Sky Permit Designs" }],
  creator: "Sky Permit Designs",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.skypermitdesigns.com",
    siteName: "Sky Permit Designs",
    title: "Sky Permit Designs | BCIN-Certified Building Permit Drawings — Ontario",
    description:
      "Professional BCIN-certified permit drawings for residential projects across Ontario. Decks, basement renovations, home additions, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sky Permit Designs | BCIN-Certified Building Permit Drawings",
    description: "Professional permit drawings for Ontario homeowners and contractors.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
