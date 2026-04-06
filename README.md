# LeadGen Compare

A sortable comparison dashboard for 6 major B2B lead generation and enrichment platforms: **Origami**, **Persana AI**, **Bitscale**, **Clay**, **Apollo.io**, and **Seamless.AI**.

![LeadGen Compare Dashboard](https://img.shields.io/badge/status-live-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

## What It Does

Side-by-side comparison of:

- **Pricing** — free plans, starting tiers, and top self-serve plans
- **ICP Input Methods** — how each platform lets you define your ideal customer (natural language, filters, spreadsheet workflows, AI agents)
- **Enrichment Sources** — number of data providers and key enrichment types (email, phone, intent signals, waterfall enrichment, etc.)
- **G2 Ratings** — community ratings and review counts
- **CRM Integrations** — which CRMs are supported and at what pricing tier
- **Best For** — quick-reference fit recommendations

## Features

- **Sortable columns** — click any header to sort ascending/descending
- **Table + Cards view** — toggle between a dense table and a card-based layout
- **Price filter** — filter platforms by maximum starting price
- **Dark mode** — auto-detects system preference with manual toggle
- **Responsive** — works on desktop, tablet, and mobile
- **Zero dependencies** — pure HTML, CSS, and vanilla JS

## Getting Started

Clone the repo and open `index.html` in a browser. No build step required.

```bash
git clone https://github.com/YOUR_USERNAME/leadgen-compare.git
cd leadgen-compare
open index.html
```

Or serve it locally:

```bash
npx serve .
```

## Deployment

This is a static site — deploy anywhere that serves HTML:

| Platform | How |
|----------|-----|
| **Netlify** | Drag the folder into [app.netlify.com](https://app.netlify.com) or connect the repo |
| **GitHub Pages** | Settings > Pages > Deploy from branch |
| **Vercel** | Import the repo at [vercel.com](https://vercel.com) |
| **Cloudflare Pages** | Connect the repo at [pages.cloudflare.com](https://pages.cloudflare.com) |

No build command or output directory config needed — just serve the root.

## Project Structure

```
leadgen-compare/
├── index.html    # Page structure and layout
├── style.css     # Design tokens, light/dark themes, responsive styles
├── app.js        # Platform data, sorting, filtering, rendering
└── README.md
```

All platform data lives in the `platforms` array at the top of `app.js`. To update pricing or add a new platform, edit that array.

## Updating Data

Open `app.js` and modify the `platforms` array. Each platform object contains:

```js
{
  name: "Platform Name",
  url: "https://example.com",
  rating: 4.5,
  ratingNote: "G2 (500+ reviews)",
  free: "Yes",               // "Yes", "Limited", or "No"
  freeDetail: "1,000 credits",
  startPrice: 49,             // numeric, used for sorting/filtering
  startPriceLabel: "$49/mo",
  startPriceNote: "Basic plan",
  topPlan: "$199/mo",
  topPlanNote: "Pro — 10K credits",
  icpMethod: "Description of how ICP targeting works",
  enrichSources: 75,          // numeric, used for sorting
  enrichSourcesLabel: "75+",
  enrichTypes: ["Email", "Phone", "Intent Signals"],
  crm: "Salesforce, HubSpot",
  bestFor: "Who this platform is ideal for",
  plans: [
    { name: "Free", price: "$0" },
    { name: "Starter", price: "$49/mo" }
  ]
}
```

## Data Sources

Pricing and feature data gathered from official product pages, G2 reviews, and third-party analysis as of April 2026. Sources include Landbase, Tekpon, Cleanlist, SyncGTM, Coldreach, and official vendor sites.

## License

MIT — use it however you want.

