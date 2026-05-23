# Typography — Rasa Nusantara

## Font Families

| Peran | Font | Weight | CSS Variable |
|-------|------|--------|--------------|
| Heading | Poppins | 600, 700, 800 | `--font-heading` |
| Body | Inter | 400, 500, 600 | `--font-body` |

## Loading

Font dimuat via Google Fonts di `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
```

Preconnect untuk performa:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

## Hierarki

| Elemen | Font | Size | Weight | Line-height |
|--------|------|------|--------|-------------|
| H1 (Hero) | Poppins | clamp(2rem, 6vw, 3.5rem) | 800 | 1.15 |
| H2 (Section) | Poppins | clamp(1.75rem, 4vw, 2.5rem) | 700 | 1.2 |
| H3 (Card) | Poppins | 1.125rem – 1.375rem | 700 | 1.3 |
| Body | Inter | 1rem (16px) | 400 | 1.6 |
| Section desc | Inter | 1.0625rem | 400 | 1.6 |
| Label/Badge | Poppins | 0.75rem | 700 | 1 |
| Button | Poppins | 0.875rem – 1rem | 600 | 1 |
| Footer | Inter | 0.875rem – 0.9375rem | 400 | 1.5 |

## Aturan

1. **Satu H1** per halaman — hanya di hero
2. Hierarki tidak boleh loncat: H1 → H2 → H3
3. Body minimum **16px** untuk keterbacaan mobile
4. `clamp()` untuk heading responsif
5. Warna teks: `--color-text` utama, `--color-text-muted` sekunder

## Section Label

Pill badge uppercase kecil di atas setiap judul section:

```css
.section__label {
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
}
```

## Spacing Typography

- Margin bawah judul section: `0.75rem`
- Margin bawah deskripsi section: `2.5rem` (via section header)
- Paragraf about: `margin-bottom: 1.5rem`
