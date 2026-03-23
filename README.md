# Sky Permit Designs — Professional Website

A modern, premium Next.js website for **Sky Permit Designs**, a BCIN-certified building permit drawing service in Ontario, Canada.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17+ (required for Next.js 14)
- **npm** 9+ or **yarn**

### Installation & Running Locally

```bash
# 1. Navigate into the project folder
cd sky-permit-designs

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in your browser
# → http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
sky-permit-designs/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Navbar + Footer + meta)
│   ├── globals.css               # Global styles, CSS variables, animations
│   ├── page.tsx                  # Homepage
│   ├── not-found.tsx             # 404 page
│   ├── about/
│   │   └── page.tsx              # About Us page
│   ├── services/
│   │   └── page.tsx              # Services page
│   ├── portfolio/
│   │   └── page.tsx              # Portfolio grid page
│   ├── process/
│   │   └── page.tsx              # Process / How It Works page
│   └── contact/
│       ├── page.tsx              # Contact page (server wrapper + metadata)
│       └── ContactClient.tsx     # Contact form (client component)
│
├── components/
│   ├── Navbar.tsx                # Sticky navigation with mobile menu
│   ├── Footer.tsx                # Footer with links and contact info
│   ├── AnimateOnScroll.tsx       # Intersection Observer scroll animation
│   └── ui/
│       └── index.tsx             # Shared UI primitives (Button, SectionTag, etc.)
│
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind with custom design tokens
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `charcoal-900` | `#0C0C0C` | Primary background |
| `charcoal-800` | `#141414` | Section alternates |
| `charcoal-700` | `#1C1C1C` | Cards, elevated surfaces |
| `cream-200` | `#F4EFE6` | Primary text, light sections |
| `gold` | `#C8A96E` | Accent color, CTAs, highlights |
| `slate-warm` | `#8A8580` | Body text, secondary content |

### Typography
- **Display / Headings**: `Cormorant` (Google Fonts) — elegant serif
- **Body / UI**: `Outfit` (Google Fonts) — clean geometric sans-serif

### Key Classes
- `.gold-text` — gradient gold text effect
- `.grid-overlay` — subtle architectural grid background
- `.divider-gold` — gradient gold horizontal rule
- `.hover-underline` — animated underline on hover
- `.card-lift` — lift + shadow on hover
- `.fade-section` + `.visible` — scroll reveal animation

---

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero, services overview, portfolio preview, process, CTA |
| `/services` | Services | 5 detailed service listings with inclusions |
| `/portfolio` | Portfolio | 9-project grid with categories |
| `/process` | Process | 5-step workflow + FAQ + timeline |
| `/about` | About | Company story, mission, values, stats |
| `/contact` | Contact | Full quote form + contact details + WhatsApp |

---

## ⚙️ Tech Stack

- **Next.js 14** — App Router, server components, metadata API
- **TypeScript** — full type safety
- **Tailwind CSS** — utility-first with custom design tokens
- **Lucide React** — icon library
- **Google Fonts** — Cormorant + Outfit (loaded via `<head>`)

---

## 🌐 Deployment

### Deploy to Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the .next folder or connect your Git repo
```

---

## 🛠️ Customisation

### Update Contact Information
Edit phone, email, and location in:
- `components/Navbar.tsx` (phone in nav)
- `components/Footer.tsx` (all contact details)
- `app/contact/ContactClient.tsx` (contact page)

### Update Business Content
All content is in the respective page files under `app/`. Each page is self-contained and clearly structured.

### Update Colors / Fonts
Modify `tailwind.config.ts` for colors and `app/globals.css` for font imports.

---

## 📋 Notes

- The contact form is **frontend-only** — wire it to an email API (e.g. Resend, EmailJS, Formspree) for production
- Portfolio project images are placeholder gradients — replace with real project photos in `app/portfolio/page.tsx`
- WhatsApp link uses `https://wa.me/19057411886` — update the number as needed
- All pages have unique SEO `metadata` exports for title + description

---

Built with ❤️ for Sky Permit Designs — Ontario's trusted permit drawing service.
