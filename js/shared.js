// ReCircuit - Shared UI & Global State Management
// UN SDG 12: Responsible Consumption and Production

const STORAGE_KEYS = {
  MANIFEST: 'recircuit_manifest_v2',
  REGION: 'recircuit_region_v2',
  QUIZ: 'recircuit_quiz_v2'
};

// Global App State
const AppState = {
  region: localStorage.getItem(STORAGE_KEYS.REGION) || 'IN',
  manifest: JSON.parse(localStorage.getItem(STORAGE_KEYS.MANIFEST) || '[]'),
  
  saveManifest() {
    localStorage.setItem(STORAGE_KEYS.MANIFEST, JSON.stringify(this.manifest));
    this.updateManifestBadges();
  },
  
  setRegion(reg) {
    this.region = reg;
    localStorage.setItem(STORAGE_KEYS.REGION, reg);
    window.dispatchEvent(new CustomEvent('regionChanged', { detail: reg }));
    this.showToast(`Region set to ${reg === 'IN' ? 'India (CPCB Rules)' : reg === 'US' ? 'USA (EPA / RCRA)' : 'Global / EU (WEEE)'}`);
  },
  
  addToManifest(itemId) {
    const existing = this.manifest.find(item => item.id === itemId);
    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      this.manifest.push({ id: itemId, qty: 1, addedAt: Date.now() });
    }
    this.saveManifest();
    this.showToast('Item added to your Drop-Off Manifest!');
    window.dispatchEvent(new CustomEvent('manifestUpdated'));
  },
  
  removeFromManifest(itemId) {
    this.manifest = this.manifest.filter(item => item.id !== itemId);
    this.saveManifest();
    this.showToast('Item removed from manifest');
    window.dispatchEvent(new CustomEvent('manifestUpdated'));
  },

  updateQty(itemId, qty) {
    const item = this.manifest.find(i => i.id === itemId);
    if (item) {
      if (qty <= 0) {
        this.removeFromManifest(itemId);
      } else {
        item.qty = qty;
        this.saveManifest();
        window.dispatchEvent(new CustomEvent('manifestUpdated'));
      }
    }
  },
  
  clearManifest() {
    this.manifest = [];
    this.saveManifest();
    this.showToast('Manifest cleared');
    window.dispatchEvent(new CustomEvent('manifestUpdated'));
  },
  
  updateManifestBadges() {
    const totalCount = this.manifest.reduce((acc, curr) => acc + (curr.qty || 1), 0);
    document.querySelectorAll('.manifest-counter').forEach(el => {
      el.textContent = totalCount;
      el.classList.toggle('hidden', totalCount === 0);
    });
  },
  
  showToast(message, duration = 2600) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'bg-obsidian text-paper text-xs font-medium px-4 py-2.5 rounded-lg shadow-xl border border-white/10 flex items-center gap-2 transform translate-y-3 opacity-0 transition-all duration-200 z-50';
    toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-limeaccent shrink-0"></i><span>${message}</span>`;
    
    container.appendChild(toast);
    if (window.lucide) lucide.createIcons({ root: toast });
    
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-3', 'opacity-0');
    });
    
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }
};

// Initialize navigation, active links, and region switcher
document.addEventListener('DOMContentLoaded', () => {
  // Update badge
  AppState.updateManifestBadges();
  
  // Highlight active nav item based on current location pathname
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Setup region selector if present
  const regionSelector = document.getElementById('region-selector');
  if (regionSelector) {
    regionSelector.value = AppState.region;
    regionSelector.addEventListener('change', (e) => {
      AppState.setRegion(e.target.value);
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }
});
