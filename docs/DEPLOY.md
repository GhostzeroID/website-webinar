# Deploy — Rasa Nusantara

Panduan deploy website statis ke production.

## Prasyarat

- [ ] Semua gambar di `assets/images/` sudah terisi (lihat `ASSETS.md`)
- [ ] Domain `rasanusantara.com` sudah dikonfigurasi
- [ ] SSL/HTTPS aktif
- [ ] File `robots.txt` dan `sitemap.xml` sudah benar

## Opsi Deploy

### 1. Netlify

1. Push repo ke GitHub/GitLab
2. Login [netlify.com](https://netlify.com) → **Add new site** → Import repo
3. Build settings:
   - **Build command:** (kosongkan)
   - **Publish directory:** `/` (root project)
4. Domain custom: Site settings → Domain management → Add `rasanusantara.com`
5. HTTPS otomatis via Let's Encrypt

### 2. Vercel

1. Import project di [vercel.com](https://vercel.com)
2. Framework preset: **Other**
3. Output directory: root
4. Tambahkan domain custom di Project Settings → Domains

### 3. GitHub Pages

1. Push ke branch `main`
2. Settings → Pages → Source: Deploy from branch `main` / folder `/ (root)`
3. Custom domain: `rasanusantara.com`
4. Tambahkan file `CNAME` berisi `rasanusantara.com`

### 4. cPanel / Shared Hosting

1. Upload semua file via File Manager atau FTP ke `public_html/`
2. Pastikan `index.html` di root
3. Aktifkan SSL di cPanel → SSL/TLS

### 5. Cloudflare Pages

1. Connect repository
2. Build command: none
3. Build output: `/`
4. Custom domain + SSL Full (strict)

## Setelah Deploy

### Verifikasi

```bash
curl -I https://rasanusantara.com
curl https://rasanusantara.com/robots.txt
curl https://rasanusantara.com/sitemap.xml
```

### Google Search Console

1. Daftar property `https://rasanusantara.com`
2. Submit sitemap: `https://rasanusantara.com/sitemap.xml`
3. Request indexing halaman utama

### Performance

- Aktifkan CDN (Netlify/Vercel/Cloudflare otomatis)
- Kompresi Brotli/Gzip otomatis di platform modern
- Pertimbangkan WebP + lazy loading (sudah di HTML)

## Environment Variables

Website ini **statis** — tidak memerlukan `.env` atau API keys.

## Rollback

Simpan tag Git sebelum deploy:

```bash
git tag -a v1.0.0 -m "Production release"
git push origin v1.0.0
```

Rollback di Netlify/Vercel: pilih deploy sebelumnya dari dashboard.

## Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Gambar tidak tampil | Cek path case-sensitive, pastikan file ada di `assets/images/` |
| CSS tidak load | Pastikan path `css/style.css` relatif ke root |
| 404 di subpath | Deploy dari root, bukan subfolder |
| Mixed content | Pastikan semua URL HTTPS di meta OG |

## Checklist Go-Live

- [ ] HTTPS aktif
- [ ] Canonical URL benar
- [ ] OG image tampil di Facebook Debugger
- [ ] WhatsApp link berfungsi di mobile
- [ ] Google Maps link benar
- [ ] Lighthouse audit passed
