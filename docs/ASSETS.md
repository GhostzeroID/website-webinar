# Assets Checklist — Rasa Nusantara

## Folder Structure

```
assets/
├── favicon.svg
├── images/
│   ├── hero-bg.webp
│   ├── about-interior.webp
│   ├── menu-rendang.webp
│   ├── menu-nasigoreng.webp
│   ├── menu-gadogado.webp
│   ├── menu-cendol.webp
│   ├── gallery-01.webp
│   ├── gallery-02.webp
│   ├── gallery-03.webp
│   ├── gallery-04.webp
│   ├── gallery-05.webp
│   ├── testimoni-01.webp
│   ├── testimoni-02.webp
│   ├── testimoni-03.webp
│   └── og-cover.jpg
└── icons/
    ├── chef-hat.svg
    ├── clock.svg
    ├── facebook.svg
    ├── gem.svg
    ├── instagram.svg
    ├── leaf.svg
    ├── logo.svg
    ├── mail.svg
    ├── map-pin.svg
    ├── menu.svg
    ├── phone.svg
    ├── star.svg
    ├── tiktok.svg
    ├── trophy.svg
    ├── whatsapp.svg
    ├── youtube.svg
    └── zap.svg
```

## Checklist Gambar

| File | Ukuran Target | Aspect | Digunakan Di |
|------|---------------|--------|--------------|
| [x] hero-bg.webp | 1920×1080 | 16:9 | Hero background |
| [x] about-interior.webp | 800×600 | 4:3 | Section Tentang |
| [x] menu-rendang.webp | 400×300 | 4:3 | Menu card 1 |
| [x] menu-nasigoreng.webp | 400×300 | 4:3 | Menu card 2 |
| [x] menu-gadogado.webp | 400×300 | 4:3 | Menu card 3 |
| [x] menu-cendol.webp | 400×300 | 4:3 | Menu card 4 |
| [x] gallery-01.webp | 800×500 | 16:10 | Gallery wide |
| [x] gallery-02.webp | 400×400 | 1:1 | Gallery grid |
| [x] gallery-03.webp | 400×400 | 1:1 | Gallery grid |
| [x] gallery-04.webp | 400×400 | 1:1 | Gallery grid |
| [x] gallery-05.webp | 800×500 | 16:10 | Gallery wide |
| [x] testimoni-01.webp | 112×112 | 1:1 | Avatar Sari Dewi |
| [x] testimoni-02.webp | 112×112 | 1:1 | Avatar Budi |
| [x] testimoni-03.webp | 112×112 | 1:1 | Avatar Maya |
| [x] og-cover.jpg | 1200×630 | ~1.91:1 | Open Graph / Twitter |

## Optimasi

- Format utama: **WebP** (kualitas 80–85)
- OG cover: **JPG** (kualitas 85)
- Kompresi target: < 200KB per gambar hero/menu
- Gunakan `loading="lazy"` kecuali hero (`fetchpriority="high"`)
- Alt text unik dan deskriptif di setiap `<img>`

## Generate Gambar

Gambar saat ini menggunakan foto berkualitas dari Unsplash sebagai placeholder siap presentasi. Untuk branding final, ganti dengan hasil generate AI menggunakan prompt di `docs/AI-IMAGE-PROMPTS.md`.

## Favicon

`assets/favicon.svg` — icon utensils/orange, sudah disertakan.

## Verifikasi

```bash
# Cek file yang ada
ls -la assets/images/

# Cek ukuran total
du -sh assets/images/
```

Semua 15 slot gambar harus terisi sebelum deploy production.
