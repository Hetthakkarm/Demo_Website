# Morning & Mug — Local Business Website Demo

A polished, responsive static website designed as a sales/demo template for local cafés and restaurants.

## Run locally

No build tools are required.

### Option 1 — VS Code
Open the folder in VS Code and use the Live Server extension.

### Option 2 — Python
From this folder:

```bash
python -m http.server 5500
```

Then open:

http://localhost:5500

## Deploy

This is a static HTML/CSS/JS site. It can be deployed directly to:
- GitHub Pages
- Netlify
- Vercel

No database or backend is required.

## Client customization

Edit `index.html` to replace:
- Business name
- Address
- Phone
- Email
- Instagram
- Zomato link
- Swiggy link
- Google Maps link
- WhatsApp number/message
- Menu items and prices
- Reviews
- Opening hours

### Important links to customize

Search for these placeholders in `index.html`:

`https://www.zomato.com/`

`https://www.google.com/maps/search/?api=1&query=Gandhinagar%2C%20Gujarat`

`https://wa.me/919999999999`

`tel:+919999999999`

`hello@morningandmug.example`

## Images

The demo intentionally uses attractive CSS placeholders so it works immediately without external image dependencies.

For a real client:
1. Ask for permission to use their business photos.
2. Put optimized images inside `assets/`.
3. Replace the placeholder `<div>` blocks with `<img>` elements.
4. Add descriptive `alt` text.

## Sales idea

Use this as a visual prototype. Show the business owner how their own:
- menu
- photos
- reviews
- Google Maps
- WhatsApp
- phone
- Instagram
- Zomato/Swiggy ordering

can live in one professional website.

Do not publish demo business details as if they are real. Replace all demo information before going live.
