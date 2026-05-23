# Rasa Nusantara — Landing Page Restoran

Website landing page modern untuk restoran **Rasa Nusantara** — kuliner Indonesia modern premium. Dibangun dengan HTML5, CSS3, dan JavaScript vanilla tanpa framework berat.

## Fitur

- Landing page single-page dengan 9 section lengkap
- Desain premium: glassmorphism, gradient, animasi fade-up
- Mobile-first responsive (768px tablet, 1024px desktop)
- Navbar sticky dengan efek scroll & hamburger menu
- Slider testimoni dengan auto-play dan kontrol manual
- SEO: meta tags, Open Graph, JSON-LD Restaurant schema
- Aksesibilitas: skip link, ARIA, focus-visible, prefers-reduced-motion
- Icon SVG inline (gaya Lucide) — tanpa emoji
- Semua konten Bahasa Indonesia

## Struktur Folder

```
website-webinar/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── favicon.svg
│   ├── images/          ← gambar WebP (lihat docs/ASSETS.md)
│   └── icons/           ← SVG icon tambahan
├── robots.txt
├── sitemap.xml
├── README.md
├── .gitignore
└── docs/
    ├── BRANDING.md
    ├── TYPOGRAPHY.md
    ├── ASSETS.md
    ├── AI-IMAGE-PROMPTS.md
    └── DEPLOY.md
```

## Menjalankan di Lokal

### Python 3

```bash
cd website-webinar
python3 -m http.server 8080
```

Buka: http://localhost:8080

### Node.js (npx)

```bash
npx serve .
```

### PHP

```bash
php -S localhost:8080
```

## Warna Brand

| Token | Hex | Penggunaan |
|-------|-----|------------|
| Primary | `#C2410C` | CTA, aksen utama |
| Secondary | `#FB923C` | Hover, highlight |
| Dark | `#1E293B` | Footer, navbar scrolled |
| Cream | `#FFF7ED` | Background halaman |
| Text | `#0F172A` | Teks utama |
| Gold | `#F59E0B` | Rating, badge |

## Panduan Kustomisasi

1. **Konten bisnis** — Edit teks di `index.html` (telepon, email, alamat, menu, testimoni)
2. **Warna** — Ubah variabel di `:root` pada `css/style.css`
3. **Gambar** — Ganti file di `assets/images/` (lihat `docs/ASSETS.md`)
4. **WhatsApp** — Update link `wa.me/6281234567890` di CTA dan footer
5. **Domain** — Ganti `rasanusantara.com` di meta canonical, sitemap, JSON-LD

## QA Checklist

- [ ] Semua gambar di `assets/images/` sudah ada dan tampil
- [ ] Navbar scroll & mobile menu berfungsi
- [ ] Smooth scroll ke semua section
- [ ] Slider testimoni: prev/next, dots, auto-play
- [ ] Link WhatsApp & telepon membuka aplikasi yang benar
- [ ] Responsif di mobile (375px), tablet (768px), desktop (1280px)
- [ ] Lighthouse: Performance > 80, A11y > 90, SEO > 90
- [ ] Validasi HTML (W3C Validator)
- [ ] `prefers-reduced-motion` mematikan animasi

## Lisensi

Proyek webinar Jelajah Kode — untuk keperluan edukasi.
