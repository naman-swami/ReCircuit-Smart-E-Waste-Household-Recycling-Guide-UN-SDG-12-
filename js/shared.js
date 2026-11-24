// ReCircuit v2 — js/shared.js
// Safe state persistence, global Cmd/Ctrl+K Command Palette, Toast & Region Manager

const STORAGE_KEYS = {
  MANIFEST: 'recircuit_manifest_v3',
  REGION: 'recircuit_region_v3'
};

function safeRead(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch (e) {
    return fallback;
  }
}

function safeWrite(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
}

const AppState = {
  region: safeRead(STORAGE_KEYS.REGION, 'IN'),
  manifest: safeRead(STORAGE_KEYS.MANIFEST, []),

  saveManifest() {
    safeWrite(STORAGE_KEYS.MANIFEST, this.manifest);
    this.updateManifestBadges();
  },

  setRegion(reg) {
    this.region = reg;
    safeWrite(STORAGE_KEYS.REGION, reg);
    window.dispatchEvent(new CustomEvent('regionChanged', { detail: reg }));
    const label = reg === 'IN' ? 'India (CPCB Rules 2022)' : reg === 'US' ? 'USA (EPA / RCRA)' : 'Global / EU (WEEE)';
    this.showToast(`Protocol switched to ${label}`);
  },

  addToManifest(itemId, qtyToAdd = 1) {
    const existing = this.manifest.find(item => item.id === itemId);
    if (existing) {
      existing.qty = (existing.qty || 1) + qtyToAdd;
    } else {
      this.manifest.push({ id: itemId, qty: qtyToAdd, addedAt: Date.now() });
    }
    this.saveManifest();
    const found = (typeof ITEMS !== 'undefined') ? ITEMS.find(i => i.id === itemId) : null;
    this.showToast(found ? `Added "${found.name}" to Drop-Off Manifest` : 'Added item to Drop-Off Manifest');
    window.dispatchEvent(new CustomEvent('manifestUpdated'));
  },

  removeFromManifest(itemId) {
    this.manifest = this.manifest.filter(item => item.id !== itemId);
    this.saveManifest();
    this.showToast('Removed item from Manifest');
    window.dispatchEvent(new CustomEvent('manifestUpdated'));
  },

  updateQty(itemId, qty) {
    const item = this.manifest.find(i => i.id === itemId);
    if (!item) return;
    if (qty <= 0) {
      this.removeFromManifest(itemId);
    } else {
      item.qty = qty;
      this.saveManifest();
      window.dispatchEvent(new CustomEvent('manifestUpdated'));
    }
  },

  loadSampleJunkDrawer() {
    this.manifest = [
      { id: 1, qty: 2, addedAt: Date.now() },   // Smartphone
      { id: 2, qty: 1, addedAt: Date.now() },   // Laptop
      { id: 13, qty: 1, addedAt: Date.now() },  // Power Bank
      { id: 14, qty: 3, addedAt: Date.now() },  // Coin Batteries
      { id: 17, qty: 2, addedAt: Date.now() },  // CFL Bulbs
      { id: 30, qty: 4, addedAt: Date.now() }   // Chargers & Cables
    ];
    this.saveManifest();
    this.showToast('Loaded sample household junk drawer (6 item types)');
    window.dispatchEvent(new CustomEvent('manifestUpdated'));
  },

  clearManifest() {
    this.manifest = [];
    this.saveManifest();
    this.showToast('Cleared Drop-Off Manifest');
    window.dispatchEvent(new CustomEvent('manifestUpdated'));
  },

  updateManifestBadges() {
    const totalCount = this.manifest.reduce((acc, curr) => acc + (curr.qty || 1), 0);
    document.querySelectorAll('.manifest-counter').forEach(el => {
      el.textContent = String(totalCount);
      el.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    });
  },

  showToast(message, duration = 2600) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'bg-obsidian text-paper text-xs font-medium px-4 py-2.5 rounded-xl shadow-2xl border border-white/15 flex items-center gap-2.5 transform translate-y-3 opacity-0 transition-all duration-200';
    toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-limeaccent shrink-0"></span><span>${message}</span>`;

    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.remove('translate-y-3', 'opacity-0'));

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 220);
    }, duration);
  }
};

// Global Command Palette (Cmd+K / Ctrl+K)
function initCommandPalette() {
  if (document.getElementById('cmd-palette')) return;

  const modal = document.createElement('div');
  modal.id = 'cmd-palette';
  modal.className = 'fixed inset-0 z-50 hidden items-start justify-center pt-[12vh] px-4 drawer-backdrop no-print';
  modal.innerHTML = `
    <div class="bg-white w-full max-w-xl rounded-2xl border hairline shadow-2xl overflow-hidden animate-fade-up">
      <div class="flex items-center gap-3 px-4 py-3.5 border-b hairline">
        <i data-lucide="search" class="w-4 h-4 text-neutral-400 shrink-0"></i>
        <input id="cmd-input" type="text" placeholder="Jump to any of 36 items, tools, or Red Box emergency..." class="w-full text-sm text-ink placeholder:text-neutral-400 focus:outline-none bg-transparent" />
        <kbd class="font-code text-[10px] px-1.5 py-0.5 rounded bg-paper border hairline text-neutral-500">ESC</kbd>
      </div>
      <div id="cmd-results" class="max-h-80 overflow-y-auto divide-y divide-[#EFECE5] p-2"></div>
      <div class="px-4 py-2.5 bg-paper border-t hairline flex items-center justify-between text-[11px] text-neutral-500 font-code">
        <span>ReCircuit Command Palette</span>
        <span>Press ⌘K or Ctrl+K anywhere</span>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const input = document.getElementById('cmd-input');
  const results = document.getElementById('cmd-results');

  const quickPages = [
    { label: 'Smart Item Directory (36 Items)', sub: 'Search hazards, minerals & NIST wipe guides', href: 'lookup.html', icon: 'search' },
    { label: 'Urban Mine & Right-to-Repair Calculator', sub: 'Model Gold, Copper, Cobalt & avoided CO₂e', href: 'calculator.html', icon: 'calculator' },
    { label: '15-Second Triage & Red Box Emergency', sub: 'Swollen lithium-ion containment protocol', href: 'triage.html', icon: 'flame' },
    { label: 'Drop-Off Manifest & 12 Certified Hubs', sub: 'Print dispatch slip & find CPCB / EPA / WEEE recyclers', href: 'dropoff.html', icon: 'map-pin' },
    { label: 'Wish-Cycling Myth-Buster Quiz', sub: '6 real-world UN SDG 12 scenarios', href: 'quiz.html', icon: 'award' }
  ];

  function renderCmd(q) {
    const query = (q || '').trim().toLowerCase();
    let html = '';

    if (!query) {
      html += `<div class="px-2.5 py-1.5 font-code text-[10px] uppercase tracking-wider text-neutral-400">Navigation</div>`;
      html += quickPages.map(p => `
        <a href="${p.href}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-paper transition">
          <div class="w-8 h-8 rounded-lg bg-paper border hairline flex items-center justify-center text-ink shrink-0">
            <i data-lucide="${p.icon}" class="w-4 h-4"></i>
          </div>
          <div class="min-w-0">
            <div class="text-xs font-semibold text-ink">${p.label}</div>
            <div class="text-[11px] text-neutral-500 truncate">${p.sub}</div>
          </div>
        </a>
      `).join('');
    } else {
      const matchedItems = (typeof ITEMS !== 'undefined' ? ITEMS : []).filter(it =>
        it.name.toLowerCase().includes(query) ||
        it.code.toLowerCase().includes(query) ||
        (it.aliases || []).some(a => a.toLowerCase().includes(query)) ||
        (it.criticalMinerals || []).some(m => m.toLowerCase().includes(query))
      ).slice(0, 6);

      if (matchedItems.length) {
        html += `<div class="px-2.5 py-1.5 font-code text-[10px] uppercase tracking-wider text-neutral-400">Matched Items (${matchedItems.length})</div>`;
        html += matchedItems.map(it => `
          <a href="lookup.html?q=${encodeURIComponent(it.name)}" class="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-paper transition">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-8 h-8 rounded-lg bg-paper border hairline flex items-center justify-center text-ink shrink-0">
                <i data-lucide="${it.icon || 'box'}" class="w-4 h-4"></i>
              </div>
              <div class="min-w-0">
                <div class="text-xs font-semibold text-ink truncate">${it.name}</div>
                <div class="text-[11px] text-neutral-500 truncate">${it.code} · ${it.category}</div>
              </div>
            </div>
            <span class="font-code text-[10px] uppercase px-2 py-0.5 rounded bg-paper border hairline text-neutral-600 shrink-0">${it.stream}</span>
          </a>
        `).join('');
      } else {
        html = `<div class="p-6 text-center text-xs text-neutral-500">No items match "${query}". <a href="triage.html" class="underline font-semibold text-ink">Run 15-Sec Triage →</a></div>`;
      }
    }

    results.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: modal });
  }

  function openCmd() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    input.value = '';
    renderCmd('');
    setTimeout(() => input.focus(), 30);
  }

  function closeCmd() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  window.openCommandPalette = openCmd;
  input.addEventListener('input', e => renderCmd(e.target.value));
  modal.addEventListener('click', e => { if (e.target.id === 'cmd-palette') closeCmd(); });

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('hidden')) openCmd();
      else closeCmd();
    } else if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeCmd();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  AppState.updateManifestBadges();
  initCommandPalette();

  // Active nav highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === currentPath || (currentPath === '' && href === 'index.html'));
  });

  // Region switcher
  const regionSelector = document.getElementById('region-selector');
  if (regionSelector) {
    regionSelector.value = AppState.region;
    regionSelector.addEventListener('change', e => AppState.setRegion(e.target.value));
  }

  // Command palette trigger buttons
  document.querySelectorAll('[data-open-cmd]').forEach(btn => {
    btn.addEventListener('click', () => window.openCommandPalette && window.openCommandPalette());
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }

  if (window.lucide) lucide.createIcons();
});
