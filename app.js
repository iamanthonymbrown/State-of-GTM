// ════════════════════════════════════════
// LeadGen Compare — Data + Interactivity
// ════════════════════════════════════════

const platforms = [
  {
    name: "Origami",
    url: "https://origami.chat",
    rating: 4.7,
    ratingNote: "63 reviews (Comparateur-IA)",
    ratingSource: "comparateur-ia",
    free: "Yes",
    freeDetail: "1,000 one-time credits",
    startPrice: 29,
    startPriceLabel: "$29/mo",
    startPriceNote: "Starter — 2,000 credits",
    topPlan: "$129/mo",
    topPlanNote: "9,000 credits (most popular)",
    icpMethod: "Natural language prompt — describe your ideal customer and AI searches the web",
    enrichSources: 100,
    enrichSourcesLabel: "100+",
    enrichTypes: ["Email", "Phone", "LinkedIn", "Web Research", "Fit Score"],
    crm: "CSV export only",
    bestFor: "Fast AI-powered list building for SMBs and solo founders",
    plans: [
      { name: "Free", price: "$0 (1,000 credits)" },
      { name: "Starter", price: "$29/mo" },
      { name: "Popular", price: "$129/mo" },
      { name: "Enterprise", price: "Custom" }
    ]
  },
  {
    name: "Persana AI",
    url: "https://persana.ai",
    rating: 4.5,
    ratingNote: "G2 avg",
    ratingSource: "g2",
    free: "Yes",
    freeDetail: "50 credits, 5 phone lookups",
    startPrice: 68,
    startPriceLabel: "$68/mo",
    startPriceNote: "Starter (billed annually)",
    topPlan: "$600/mo",
    topPlanNote: "Unlimited — 600K credits/yr",
    icpMethod: "AI agents + filters — automated prospect research with ICP scoring",
    enrichSources: 75,
    enrichSourcesLabel: "75+",
    enrichTypes: ["Email", "Phone", "LinkedIn", "AI Personalization", "Intent Signals"],
    crm: "HubSpot, Salesforce",
    bestFor: "AI-first prospecting teams on HubSpot/Salesforce with budget under $100/mo",
    plans: [
      { name: "Free", price: "$0 (50 credits)" },
      { name: "Starter", price: "$68/mo (annual)" },
      { name: "Growth", price: "$151/mo (annual)" },
      { name: "Pro", price: "$400/mo (annual)" },
      { name: "Unlimited", price: "$600/mo (annual)" }
    ]
  },
  {
    name: "Bitscale",
    url: "https://bitscale.ai",
    rating: 4.1,
    ratingNote: "G2 + review sites",
    ratingSource: "g2",
    free: "Limited",
    freeDetail: "200 lifetime credits",
    startPrice: 349,
    startPriceLabel: "$349/mo",
    startPriceNote: "Growth — 20K credits",
    topPlan: "$799/mo",
    topPlanNote: "Booster — 65K credits",
    icpMethod: "Spreadsheet interface + templated playbooks (GEO framework)",
    enrichSources: 100,
    enrichSourcesLabel: "100+",
    enrichTypes: ["Email", "Phone", "Intent Signals", "Hiring/Funding", "AI Research"],
    crm: "HubSpot ($349+), Salesforce ($799+)",
    bestFor: "Mid-market RevOps teams (5+ SDRs) processing 50K+ leads/mo",
    plans: [
      { name: "Free", price: "$0 (200 lifetime)" },
      { name: "Growth", price: "$349/mo" },
      { name: "Booster", price: "$799/mo" },
      { name: "Enterprise", price: "$15K+/yr" }
    ]
  },
  {
    name: "Clay",
    url: "https://clay.com",
    rating: 4.8,
    ratingNote: "G2 (192 reviews)",
    ratingSource: "g2",
    free: "Yes",
    freeDetail: "100 data credits, 500 actions",
    startPrice: 185,
    startPriceLabel: "$185/mo",
    startPriceNote: "Launch — 2,500 data credits",
    topPlan: "$495/mo",
    topPlanNote: "Growth — 6K credits + CRM",
    icpMethod: "Spreadsheet workflow builder — define columns, chain enrichment steps + Claygent AI",
    enrichSources: 150,
    enrichSourcesLabel: "150+",
    enrichTypes: ["Email", "Phone", "Waterfall Enrichment", "AI Agent", "Web Research", "Intent"],
    crm: "Salesforce, HubSpot, Pipedrive ($495+ Growth)",
    bestFor: "Technical RevOps teams building custom enrichment workflows at scale",
    plans: [
      { name: "Free", price: "$0 (100 credits)" },
      { name: "Launch", price: "$185/mo" },
      { name: "Growth", price: "$495/mo" },
      { name: "Enterprise", price: "Custom" }
    ]
  },
  {
    name: "Apollo.io",
    url: "https://apollo.io",
    rating: 4.7,
    ratingNote: "G2 (9,000+ reviews)",
    ratingSource: "g2",
    free: "Yes",
    freeDetail: "10K email credits, 5 mobile",
    startPrice: 49,
    startPriceLabel: "$49/user/mo",
    startPriceNote: "Basic (billed annually)",
    topPlan: "$119/user/mo",
    topPlanNote: "Organization (min 3 seats)",
    icpMethod: "Filter-based search — industry, title, company size, intent topics, saved lists",
    enrichSources: 15,
    enrichSourcesLabel: "Proprietary DB (275M+)",
    enrichTypes: ["Email", "Phone", "Company Data", "Intent Signals", "Sequences", "Dialer"],
    crm: "Salesforce, HubSpot (Basic+)",
    bestFor: "All-in-one outbound for SMBs needing database + sequencing + CRM in one tool",
    plans: [
      { name: "Free", price: "$0" },
      { name: "Basic", price: "$49/user/mo (annual)" },
      { name: "Professional", price: "$79/user/mo (annual)" },
      { name: "Organization", price: "$119/user/mo (annual)" }
    ]
  },
  {
    name: "Seamless.AI",
    url: "https://seamless.ai",
    rating: 4.2,
    ratingNote: "G2 (1,200+ reviews)",
    ratingSource: "g2",
    free: "Limited",
    freeDetail: "50 lifetime credits",
    startPrice: 147,
    startPriceLabel: "$147/mo",
    startPriceNote: "Basic — 250 credits/mo",
    topPlan: "Custom",
    topPlanNote: "Pro/Enterprise — quote required",
    icpMethod: "Real-time AI search engine — keyword + filter search with live web scanning",
    enrichSources: 20,
    enrichSourcesLabel: "AI real-time scanning",
    enrichTypes: ["Email", "Phone", "Real-time Search", "Buyer Intent", "Job Changes"],
    crm: "Salesforce, HubSpot, Pipedrive (Pro+)",
    bestFor: "Sales reps who need real-time contact discovery beyond static databases",
    plans: [
      { name: "Free", price: "$0 (50 lifetime)" },
      { name: "Basic", price: "$147/mo" },
      { name: "Pro", price: "Custom (~$150-300/mo)" },
      { name: "Enterprise", price: "Custom ($300-500+/mo)" }
    ]
  },
  {
    name: "ZoomInfo",
    url: "https://zoominfo.com",
    rating: 4.5,
    ratingNote: "G2 (9,000+ reviews)",
    ratingSource: "g2",
    free: "Yes",
    freeDetail: "Lite — monthly credits, no contract",
    startPrice: 1250,
    startPriceLabel: "~$1,250/mo",
    startPriceNote: "Professional (~$15K/yr, 3 seats)",
    topPlan: "~$3,333+/mo",
    topPlanNote: "Elite (~$40K+/yr)",
    icpMethod: "AI-generated ICP from CRM win/loss data + advanced filters (firmographic, technographic, intent)",
    enrichSources: 500,
    enrichSourcesLabel: "500M+ contacts",
    enrichTypes: ["Email", "Phone", "Firmographics", "Technographics", "Intent Signals", "Org Charts"],
    crm: "Salesforce, HubSpot, Dynamics (all tiers)",
    bestFor: "Enterprise teams ($25K+ budget) needing the deepest B2B database + intent signals + Copilot AI",
    plans: [
      { name: "Lite", price: "$0 (limited credits)" },
      { name: "Professional", price: "~$15K/yr (3 seats)" },
      { name: "Advanced", price: "~$25K/yr" },
      { name: "Elite", price: "~$40K+/yr" },
      { name: "Enterprise", price: "$80K–$150K+/yr" }
    ]
  },
  {
    name: "Sales Navigator",
    url: "https://business.linkedin.com/sales-solutions",
    rating: 4.3,
    ratingNote: "G2 (2,100+ reviews)",
    ratingSource: "g2",
    free: "No",
    freeDetail: "Free trial available",
    startPrice: 100,
    startPriceLabel: "$99.99/mo",
    startPriceNote: "Core (billed annually ~$90/mo)",
    topPlan: "$159.99/mo",
    topPlanNote: "Advanced ($1,800/yr) + Plus custom",
    icpMethod: "Advanced LinkedIn filters — seniority, headcount, growth, tech, Persona matching + CSV upload",
    enrichSources: 1,
    enrichSourcesLabel: "LinkedIn (1B+ members)",
    enrichTypes: ["LinkedIn Profiles", "InMail", "Buyer Intent", "Job Changes", "Relationship Maps"],
    crm: "Salesforce, HubSpot, Dynamics (Advanced+)",
    bestFor: "AEs and SDRs who prospect on LinkedIn and need real-time professional graph data",
    plans: [
      { name: "Core", price: "$99.99/mo ($1,080/yr)" },
      { name: "Advanced", price: "$159.99/mo ($1,800/yr)" },
      { name: "Advanced Plus", price: "Custom (~$1,600+/seat/yr)" }
    ]
  }
];

// ── State ──
let currentSort = { col: null, dir: 'asc' };
let currentView = 'table';
let priceFilter = 'all';

// ── DOM ──
const tableBody = document.getElementById('table-body');
const cardsView = document.getElementById('cards-view');
const tableView = document.getElementById('table-view');
const pricingDetails = document.getElementById('pricing-details');

// ── Theme Toggle ──
(function () {
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  updateThemeIcon(t, d);

  t && t.addEventListener('click', () => {
    d = d === 'dark' ? 'light' : 'dark';
    r.setAttribute('data-theme', d);
    t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
    updateThemeIcon(t, d);
  });
})();

function updateThemeIcon(btn, theme) {
  if (!btn) return;
  btn.innerHTML = theme === 'dark'
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

// ── Filter ──
function getFilteredPlatforms() {
  let data = [...platforms];
  if (priceFilter !== 'all') {
    const max = parseInt(priceFilter);
    data = data.filter(p => p.startPrice <= max);
  }
  if (currentSort.col) {
    data.sort((a, b) => {
      let va = a[currentSort.col];
      let vb = b[currentSort.col];
      if (typeof va === 'string') va = va.toLowerCase();
      if (typeof vb === 'string') vb = vb.toLowerCase();
      if (va < vb) return currentSort.dir === 'asc' ? -1 : 1;
      if (va > vb) return currentSort.dir === 'asc' ? 1 : -1;
      return 0;
    });
  }
  return data;
}

// ── Render Table ──
function renderTable() {
  const data = getFilteredPlatforms();
  tableBody.innerHTML = data.map(p => `
    <tr>
      <td class="platform-name"><a href="${p.url}" target="_blank" rel="noopener">${p.name}</a></td>
      <td>
        <span class="rating-badge"><span class="star">★</span> ${p.rating}</span>
        <span class="rating-reviews">${p.ratingNote}</span>
      </td>
      <td><span class="badge ${p.free === 'Yes' ? 'badge-green' : p.free === 'Limited' ? 'badge-orange' : 'badge-muted'}">${p.free}</span>
        <span class="price-note">${p.freeDetail}</span>
      </td>
      <td class="price-cell">${p.startPriceLabel}<span class="price-note">${p.startPriceNote}</span></td>
      <td class="price-cell">${p.topPlan}<span class="price-note">${p.topPlanNote}</span></td>
      <td style="max-width:200px; font-size:12.5px; color:var(--color-text-muted)">${p.icpMethod}</td>
      <td><span class="enrich-count">${p.enrichSourcesLabel}</span></td>
      <td><div class="tag-list">${p.enrichTypes.map(t => `<span class="tag">${t}</span>`).join('')}</div></td>
      <td style="font-size:12.5px">${p.crm}</td>
      <td class="best-for">${p.bestFor}</td>
    </tr>
  `).join('');
}

// ── Render Cards ──
function renderCards() {
  const data = getFilteredPlatforms();
  cardsView.innerHTML = data.map(p => `
    <div class="platform-card">
      <div class="card-header">
        <h3 class="card-title"><a href="${p.url}" target="_blank" rel="noopener">${p.name}</a></h3>
        <span class="card-rating">★ ${p.rating}</span>
      </div>
      <div class="card-row">
        <span class="card-row-label">Starting Price</span>
        <span class="card-row-value">${p.startPriceLabel}</span>
      </div>
      <div class="card-row">
        <span class="card-row-label">Top Self-Serve</span>
        <span class="card-row-value">${p.topPlan}</span>
      </div>
      <div class="card-row">
        <span class="card-row-label">Free Plan</span>
        <span class="card-row-value"><span class="badge ${p.free === 'Yes' ? 'badge-green' : p.free === 'Limited' ? 'badge-orange' : 'badge-muted'}">${p.free}</span></span>
      </div>
      <div class="card-row">
        <span class="card-row-label">Enrichment Sources</span>
        <span class="card-row-value" style="color:var(--color-primary); font-weight:700">${p.enrichSourcesLabel}</span>
      </div>
      <div class="card-row">
        <span class="card-row-label">CRM</span>
        <span class="card-row-value" style="font-size:12px">${p.crm}</span>
      </div>
      <div class="card-row">
        <span class="card-row-label">ICP Method</span>
        <span class="card-row-value" style="font-size:12px; max-width:200px">${p.icpMethod}</span>
      </div>
      <div class="card-row" style="border-bottom:none; padding-bottom:0">
        <span class="card-row-label">Key Enrichments</span>
        <div class="card-tags">${p.enrichTypes.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
      <div class="card-best-for">${p.bestFor}</div>
    </div>
  `).join('');
}

// ── Render Pricing Details ──
function renderPricingDetails() {
  pricingDetails.innerHTML = platforms.map(p => `
    <div class="detail-card">
      <h3>${p.name}</h3>
      ${p.plans.map(plan => `
        <div class="plan-row">
          <span class="plan-name">${plan.name}</span>
          <span class="plan-price">${plan.price}</span>
        </div>
      `).join('')}
    </div>
  `).join('');
}

// ── Sorting ──
document.querySelectorAll('th.sortable').forEach(th => {
  th.addEventListener('click', () => {
    const col = th.dataset.col;
    if (currentSort.col === col) {
      currentSort.dir = currentSort.dir === 'asc' ? 'desc' : 'asc';
    } else {
      currentSort.col = col;
      currentSort.dir = 'asc';
    }
    // Update headers
    document.querySelectorAll('th.sortable').forEach(h => {
      h.classList.remove('sort-asc', 'sort-desc');
    });
    th.classList.add(currentSort.dir === 'asc' ? 'sort-asc' : 'sort-desc');
    renderTable();
    renderCards();
  });
});

// ── View Toggle ──
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentView = btn.dataset.view;
    document.querySelectorAll('.view-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    tableView.style.display = currentView === 'table' ? 'block' : 'none';
    cardsView.style.display = currentView === 'cards' ? 'grid' : 'none';
  });
});

// ── Price Filter ──
document.getElementById('price-filter').addEventListener('change', (e) => {
  priceFilter = e.target.value;
  renderTable();
  renderCards();
});

// ── Init ──
renderTable();
renderCards();
renderPricingDetails();
