# Rapid Fix Physio — Website

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser: http://localhost:5173
```

## How to Edit Content

All clinic content is in `src/data/` — no design knowledge needed:

| File | What to edit |
|------|-------------|
| `src/data/services.js` | Service names & descriptions |
| `src/data/treatments.js` | Treatment names & descriptions |
| `src/data/doctors.js` | Doctor names, qualifications, SLMC numbers |
| `src/components/Testimonials.jsx` | Patient testimonials |
| `src/components/Contact.jsx` | Phone, email, address, map |
| `src/components/Footer.jsx` | Opening hours, contact info |

## Adding Images

Place all images in `public/images/` with the exact filenames listed in `public/images/README.md`.

## Deploy to Vercel

1. Push this folder to GitHub
2. Go to vercel.com → Import Project → select your GitHub repo
3. Click Deploy — done! Your site is live.

## Connect Custom Domain (.lk)

1. Buy domain at domains.lk or nic.lk
2. In Vercel: Project Settings → Domains → Add your domain
3. In your registrar: Add CNAME record pointing to `cname.vercel-dns.com`
4. Done — usually takes 10–30 minutes to go live.

## Submit to Google

After deploy, go to: https://search.google.com/search-console
Add your URL and submit `sitemap.xml` for Google indexing.
