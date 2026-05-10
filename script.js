/**
 * LE PERLÉ — Main JavaScript
 * Premium skincare e-commerce
 */

(function() {
  'use strict';

  // ============================================================
  // PRODUCTS DATABASE
  // ============================================================
  const PRODUCTS = [
    {
      id: 'serum-eclat-30ml',
      name: 'Sérum Éclat',
      variant: 'Glow Light Serum · 30ml',
      price: 80,
      category: 'Sérum facial',
      image: 'SerumEclat.jpeg',
      description: 'Sérum Éclat es el sérum ligero del tratamiento dérmico de la piel. Se disuelve en el poro y el exceso de sebo para una limpieza profunda y una piel purificada, despejada y luminosa.',
      ingredients: 'Aqua, Niacinamide, Glycerin, Pentylene Glycol, Zinc PCA, Sodium Hyaluronate, Panthenol, Allantoin, Adenosine, Centella Asiatica Extract, Saccharide Isomerate, Bifida Ferment Lysate, Lactobacillus Ferment, Ceramide NP, Phytosphingosine, Cholesterol, Tocopherol, Camellia Sinensis Leaf Extract.'
    },
    {
      id: 'serum-eclat-50ml',
      name: 'Sérum Éclat',
      variant: 'Glow Light Serum · 50ml',
      price: 110,
      category: 'Sérum facial',
      image: 'SerumEclat.jpeg',
      description: 'Sérum Éclat es el sérum ligero del tratamiento dérmico de la piel. Se disuelve en el poro y el exceso de sebo para una limpieza profunda y una piel purificada, despejada y luminosa.',
      ingredients: 'Aqua, Niacinamide, Glycerin, Pentylene Glycol, Zinc PCA, Sodium Hyaluronate, Panthenol, Allantoin, Adenosine, Centella Asiatica Extract, Saccharide Isomerate, Bifida Ferment Lysate, Lactobacillus Ferment, Ceramide NP, Phytosphingosine, Cholesterol, Tocopherol, Camellia Sinensis Leaf Extract.'
    },
    {
      id: 'triple-ritual-cleanser-150ml',
      name: 'Triple Ritual Cleanser',
      variant: 'Limpiador facial · 150ml',
      price: 54,
      category: 'Limpiador',
      image: 'TripleRitualCleanser.jpeg',
      description: 'Limpiador facial de triple acción que elimina impurezas, maquillaje y exceso de sebo sin resecar la piel. Fórmula suave apta para todo tipo de pieles.',
      ingredients: 'Aqua, Glycerin, Coco-Glucoside, Sodium Cocoyl Isethionate, Caprylyl/Capryl Glucoside, Betaine, Aloe Barbadensis Leaf Juice, Chamomilla Recutita Flower Extract, Allantoin, Panthenol.'
    },
    {
      id: 'soft-cloud-cleaner-100ml',
      name: 'Soft Cloud Cleaner',
      variant: 'Limpiador suave · 100ml',
      price: 42,
      category: 'Limpiador',
      image: 'SoftCloudCleanse.jpeg',
      description: 'Limpiador ultrasuave con textura de nube que respeta el equilibrio natural de la piel. Ideal para pieles sensibles y reactivas.',
      ingredients: 'Aqua, Glycerin, Coco-Glucoside, Caprylyl Glucoside, Aloe Barbadensis Leaf Juice, Avena Sativa Kernel Extract, Calendula Officinalis Flower Extract, Allantoin, Bisabolol.'
    },
    {
      id: 'overnight-mask-50ml',
      name: 'Overnight Mask',
      variant: 'Mascarilla nocturna · 50ml',
      price: 68,
      category: 'Tratamiento',
      image: 'OvernightMask.jpeg',
      description: 'Mascarilla nocturna que restaura la piel mientras duermes. Al despertar, tu piel luce renovada, luminosa y profundamente hidratada.',
      ingredients: 'Aqua, Squalane, Glycerin, Niacinamide, Sodium Hyaluronate, Adenosine, Ceramide NP, Retinyl Palmitate, Tocopherol, Lavandula Angustifolia Oil.'
    },
    {
      id: 'eclat-skin-tint-30ml',
      name: 'Éclat Skin Tint',
      variant: 'Tratamiento con color · 30ml',
      price: 72,
      category: 'Tratamiento',
      image: 'EclatSkinTint.jpeg',
      description: 'Tratamiento con color que unifica el tono aportando un glow natural. Hidrata, protege y embellece la piel con acabado luminoso.',
      ingredients: 'Aqua, Cyclopentasiloxane, Titanium Dioxide, Glycerin, Niacinamide, Dimethicone, Iron Oxides, Sodium Hyaluronate, Vitamin E.'
    },
    {
      id: 'recarga-serum-eclat-50ml',
      name: 'Recarga Sérum Éclat',
      variant: 'Recambio · 50ml',
      price: 65,
      category: 'Sérum facial',
      image: 'SerumEclatRecarga.jpeg',
      description: 'Recambio eco-friendly del Sérum Éclat. Misma fórmula premium con menor impacto ambiental.',
      ingredients: 'Aqua, Niacinamide, Glycerin, Pentylene Glycol, Zinc PCA, Sodium Hyaluronate, Panthenol, Allantoin, Adenosine, Centella Asiatica Extract.'
    },
    {
      id: 'hydra-boost-cream-50ml',
      name: 'Hydra Boost Cream',
      variant: 'Crema hidratante · 50ml',
      price: 58,
      category: 'Hidratante',
      image: 'HydraBoostCream.jpeg',
      description: 'Crema hidratante intensiva con ácido hialurónico de triple peso molecular. Hidratación profunda y duradera para todo tipo de pieles.',
      ingredients: 'Aqua, Glycerin, Squalane, Sodium Hyaluronate, Niacinamide, Ceramide NP, Panthenol, Allantoin, Tocopherol.'
    }
  ];

  // Make products available globally
  window.LePerleProducts = PRODUCTS;

  // ============================================================
  // LOCAL STORAGE KEYS
  // ============================================================
  const STORAGE_KEYS = {
    CART: 'leperle_cart_v1',
    FAVORITES: 'leperle_favorites_v2',  // bumped to v2 to clear any stale data
    USER: 'leperle_user_v1',
    POPUP_SHOWN: 'leperle_popup_shown_v2'
  };

  // ============================================================
  // STORAGE MIGRATION — clears legacy keys on load
  // ============================================================
  function getStorageForKey(key) {
    return key === STORAGE_KEYS.FAVORITES ? sessionStorage : localStorage;
  }

  (function migrateStorage() {
    // Remove any legacy favorites key that may contain stale/unwanted data
    var legacyFavKeys = ['leperle_favorites_v1', 'leperle_favorites', 'leperle_fav'];
    legacyFavKeys.forEach(function(key) {
      try { localStorage.removeItem(key); } catch(e) {}
    });

    // If the v2 favorites key doesn't exist yet, seed it in sessionStorage
    try {
      if (getStorageForKey(STORAGE_KEYS.FAVORITES).getItem(STORAGE_KEYS.FAVORITES) === null) {
        getStorageForKey(STORAGE_KEYS.FAVORITES).setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([]));
      }
    } catch(e) {}
  })();

  // ============================================================
  // UTILITY FUNCTIONS
  // ============================================================
  function formatPrice(value) {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(Number(value) || 0);
  }

  function getFromStorage(key, defaultValue = []) {
    try {
      const storage = getStorageForKey(key);
      const data = storage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  function saveToStorage(key, data) {
    try {
      const storage = getStorageForKey(key);
      storage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to storage:', e);
    }
  }

  function getProductById(id) {
    if (!id) return null;
    return PRODUCTS.find(function(p) { return p.id === id; }) || null;
  }

  // ============================================================
  // MOBILE MENU
  // ============================================================
  function initMobileMenu() {
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const menuClose = document.querySelector('[data-menu-close]');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    if (!menuToggle || !sideMenu || !menuOverlay) return;

    function openMenu() {
      sideMenu.classList.add('is-open');
      menuOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      sideMenu.classList.remove('is-open');
      menuOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    menuToggle.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);
  }

  // ============================================================
  // SEARCH PANEL
  // ============================================================
  function initSearchPanel() {
    const searchToggle = document.querySelector('[data-search-toggle]');
    const searchPanel = document.getElementById('search-panel');
    const searchClose = document.getElementById('search-close-btn');
    const searchInput = searchPanel?.querySelector('input[type="search"]');

    if (!searchToggle || !searchPanel) return;

    // Create search results container
    let searchResults = searchPanel.querySelector('.search-results');
    if (!searchResults) {
      searchResults = document.createElement('div');
      searchResults.className = 'search-results';
      searchPanel.appendChild(searchResults);
    }

    function openSearch() {
      searchPanel.classList.add('is-open');
      setTimeout(() => searchInput?.focus(), 300);
    }

    function closeSearch() {
      searchPanel.classList.remove('is-open');
      if (searchInput) searchInput.value = '';
      searchResults.innerHTML = '';
    }

    searchToggle.addEventListener('click', openSearch);
    if (searchClose) searchClose.addEventListener('click', closeSearch);

    // Search functionality
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length < 2) {
          searchResults.innerHTML = '';
          return;
        }

        const results = PRODUCTS.filter(p => 
          p.name.toLowerCase().includes(query) ||
          p.variant.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
        );

        if (results.length === 0) {
          searchResults.innerHTML = '<p class="search-empty">No se encontraron productos</p>';
          return;
        }

        searchResults.innerHTML = results.map(p => `
          <a href="product.html?id=${p.id}" class="search-result-item">
            <span class="search-result-name">${p.name}</span>
            <span class="search-result-variant">${p.variant} — ${formatPrice(p.price)}</span>
          </a>
        `).join('');
      });

      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeSearch();
      });
    }
  }

  // ============================================================
  // FAVORITES SYSTEM
  // ============================================================
  function initFavorites() {
    // Always validate that stored favorites is a clean array of strings
    let favorites = getFromStorage(STORAGE_KEYS.FAVORITES, []);
    if (!Array.isArray(favorites)) {
      favorites = [];
      saveToStorage(STORAGE_KEYS.FAVORITES, favorites);
    }
    // Filter out any entries that are not valid product ID strings
    favorites = favorites.filter(function(id) {
      return typeof id === 'string' && id.trim().length > 0;
    });
    saveToStorage(STORAGE_KEYS.FAVORITES, favorites);
    
    // Update all favorite buttons on page load
    updateFavoritesUI(favorites);
    updateFavoritesBadge(favorites);

    // Handle favorite button clicks
    document.addEventListener('click', function(e) {
      const favBtn = e.target.closest('[data-fav]');
      if (!favBtn) return;

      e.preventDefault();
      e.stopPropagation();

      const productId = favBtn.dataset.productId || getProductIdFromContext(favBtn);
      if (!productId) return;

      toggleFavorite(productId);
    });
  }

  function getProductIdFromContext(btn) {
    // 1. Button itself may already have data-product-id
    if (btn.dataset.productId) return btn.dataset.productId;

    // 2. Parent product card — get id from sibling add-to-cart button
    const card = btn.closest('.product-card');
    if (card) {
      const addBtn = card.querySelector('[data-add-cart]');
      if (addBtn?.dataset.productId) return addBtn.dataset.productId;
    }

    // 3. Product detail page — id is set on the main add-to-cart button
    const addBtn = document.getElementById('btn-add-cart');
    if (addBtn?.dataset.productId) return addBtn.dataset.productId;

    return null;
  }

  function toggleFavorite(productId) {
    let favorites = getFromStorage(STORAGE_KEYS.FAVORITES, []);
    const index = favorites.indexOf(productId);

    if (index === -1) {
      favorites.push(productId);
    } else {
      favorites.splice(index, 1);
    }

    saveToStorage(STORAGE_KEYS.FAVORITES, favorites);
    updateFavoritesUI(favorites);
    updateFavoritesBadge(favorites);
  }

  function updateFavoritesUI(favorites) {
    // Update product card favorites
    // Always sync data-product-id from the sibling [data-add-cart] button
    // so fav buttons work even when HTML doesn't have the attribute set
    document.querySelectorAll('.product-card').forEach(card => {
      const addBtn = card.querySelector('[data-add-cart]');
      const favBtn = card.querySelector('[data-fav]');
      const productId = addBtn?.dataset.productId || favBtn?.dataset.productId;

      if (favBtn && productId) {
        favBtn.dataset.productId = productId;
        favBtn.classList.toggle('is-fav', favorites.includes(productId));
      }
    });

    // Update product page favorite button
    const productPageFav = document.querySelector('.fav-btn-large[data-fav]');
    if (productPageFav) {
      const addBtn = document.querySelector('.product-info [data-add-cart]');
      const productId = addBtn?.dataset.productId;
      if (productId) {
        productPageFav.dataset.productId = productId;
        productPageFav.classList.toggle('is-fav', favorites.includes(productId));
      }
    }
  }

  function updateFavoritesBadge(favorites) {
    document.querySelectorAll('.fav-badge').forEach(badge => {
      badge.textContent = favorites.length;
      badge.style.display = favorites.length > 0 ? 'flex' : 'none';
    });
  }

  // ============================================================
  // PRODUCT PAGE FUNCTIONALITY
  // ============================================================
  function initProductPage() {
    // Check if we're on a product page
    const productLayout = document.querySelector('.product-layout');
    if (!productLayout) return;

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
      loadProductData(productId);
    }

    // Gallery functionality
    initGallery();

    // Tabs
    initTabs();

    // Size selector
    initSizeSelector();
  }

  function loadProductData(productId) {
    const product = getProductById(productId);
    if (!product) return;

    // Update page title
    document.title = `${product.name} — Le Perlé`;

    // Update product info
    const nameEl = document.querySelector('.product-info__name');
    const taglineEl = document.querySelector('.product-info__tagline');
    const priceEl = document.querySelector('.product-info__price');
    const categoryEl = document.querySelector('.product-info__eyebrow');
    const mainImage = document.getElementById('main-product-image');
    const descriptionEl = document.querySelector('#tab-desc p');
    const ingredientsEl = document.querySelector('.ingredients-list');

    if (nameEl) nameEl.innerHTML = `${product.name}<br>${product.variant.split('·')[0]}`;
    if (taglineEl) taglineEl.textContent = product.description.substring(0, 100) + '...';
    if (priceEl) priceEl.textContent = formatPrice(product.price);
    if (categoryEl) categoryEl.textContent = product.category;
    if (mainImage) mainImage.src = product.image;
    if (descriptionEl) descriptionEl.textContent = product.description;
    if (ingredientsEl) ingredientsEl.textContent = product.ingredients;

    // Update add to cart button
    const addBtn = document.querySelector('.product-info [data-add-cart]');
    if (addBtn) {
      addBtn.dataset.productId = product.id;
      addBtn.dataset.productName = product.name;
      addBtn.dataset.productVariant = product.variant;
      addBtn.dataset.productPrice = product.price;
      addBtn.dataset.productImage = product.image;
    }

    // Update gallery thumbnails
    document.querySelectorAll('.gallery-thumb img').forEach(img => {
      img.src = product.image;
    });
  }

  function initGallery() {
    const thumbs = document.querySelectorAll('.gallery-thumb');
    const mainImage = document.getElementById('main-product-image');

    if (!thumbs.length || !mainImage) return;

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img) {
          mainImage.src = img.src;
          thumbs.forEach(t => t.classList.remove('is-active'));
          this.classList.add('is-active');
        }
      });
    });
  }

  function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const targetId = this.dataset.tab;

        tabBtns.forEach(b => b.classList.remove('is-active'));
        tabPanels.forEach(p => p.classList.remove('is-active'));

        this.classList.add('is-active');
        document.getElementById(targetId)?.classList.add('is-active');
      });
    });
  }

  function initSizeSelector() {
    const sizeBtns = document.querySelectorAll('.size-btn');
    const priceEl = document.querySelector('.product-info__price');
    const addCartBtn = document.querySelector('.product-info [data-add-cart]');

    const sizes = {
      '30ml': { price: 80, suffix: '-30ml' },
      '50ml': { price: 110, suffix: '-50ml' }
    };

    sizeBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        sizeBtns.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('is-active');
        this.setAttribute('aria-pressed', 'true');

        const size = this.textContent.trim();
        const sizeData = sizes[size];
        
        if (sizeData && priceEl) {
          priceEl.textContent = formatPrice(sizeData.price);
          
          if (addCartBtn) {
            const baseId = addCartBtn.dataset.productId.replace(/-\d+ml$/, '');
            addCartBtn.dataset.productId = baseId + sizeData.suffix;
            addCartBtn.dataset.productPrice = sizeData.price;
            addCartBtn.dataset.productVariant = addCartBtn.dataset.productVariant.replace(/\d+ml/, size);
          }
        }
      });
    });
  }

  // ============================================================
  // LEGAL PAGE TABS
  // ============================================================
  function initLegalTabs() {
    const legalBtns = document.querySelectorAll('.legal-nav-btn');
    const legalPanels = document.querySelectorAll('.legal-panel');

    legalBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const targetId = this.dataset.legal;

        legalBtns.forEach(b => b.classList.remove('is-active'));
        legalPanels.forEach(p => p.classList.remove('is-active'));

        this.classList.add('is-active');
        document.getElementById(targetId)?.classList.add('is-active');
      });
    });
  }

  // ============================================================
  // AUTH MODAL
  // ============================================================
  function initAuthModal() {
    const accountBtn = document.querySelector('[aria-label="Mi cuenta"]');
    const authModal = document.getElementById('auth-modal');

    if (!accountBtn || !authModal) return;

    const modalClose = authModal.querySelector('.modal-close');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    function openModal() {
      authModal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      authModal.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    // Check if user is logged in
    const user = getFromStorage(STORAGE_KEYS.USER, null);
    if (user) {
      updateUserUI(user);
    }

    accountBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const user = getFromStorage(STORAGE_KEYS.USER, null);
      
      if (user) {
        // Show logged in menu or logout
        if (confirm(`¿Deseas cerrar sesión, ${user.name}?`)) {
          localStorage.removeItem(STORAGE_KEYS.USER);
          updateUserUI(null);
        }
      } else {
        openModal();
      }
    });

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    // Close on overlay click
    authModal.addEventListener('click', function(e) {
      if (e.target === authModal) closeModal();
    });

    // Toggle between login and register
    if (showRegister) {
      showRegister.addEventListener('click', function() {
        loginForm?.classList.add('hidden');
        registerForm?.classList.remove('hidden');
      });
    }

    if (showLogin) {
      showLogin.addEventListener('click', function() {
        registerForm?.classList.add('hidden');
        loginForm?.classList.remove('hidden');
      });
    }

    // Login form submission
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('#login-email')?.value;
        const password = this.querySelector('#login-password')?.value;
        const errorEl = this.querySelector('.form-error');

        // Clear previous errors
        if (errorEl) errorEl.textContent = '';

        // Validation
        if (!email || !validateEmail(email)) {
          if (errorEl) errorEl.textContent = 'Por favor, introduce un email válido';
          return;
        }

        if (!password) {
          if (errorEl) errorEl.textContent = 'Por favor, introduce tu contraseña';
          return;
        }

        // Simulate login (check localStorage for existing user)
        const existingUser = getFromStorage(STORAGE_KEYS.USER + '_' + email, null);
        
        if (existingUser && existingUser.password === password) {
          saveToStorage(STORAGE_KEYS.USER, existingUser);
          updateUserUI(existingUser);
          closeModal();
          this.reset();
        } else {
          // For demo, create user if doesn't exist
          const user = {
            email,
            password,
            name: email.split('@')[0]
          };
          saveToStorage(STORAGE_KEYS.USER, user);
          saveToStorage(STORAGE_KEYS.USER + '_' + email, user);
          updateUserUI(user);
          closeModal();
          this.reset();
        }
      });
    }

    // Register form submission
    if (registerForm) {
      registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('#register-name')?.value;
        const email = this.querySelector('#register-email')?.value;
        const password = this.querySelector('#register-password')?.value;
        const errorEl = this.querySelector('.form-error');

        // Clear previous errors
        if (errorEl) errorEl.textContent = '';

        // Validation
        if (!name) {
          if (errorEl) errorEl.textContent = 'Por favor, introduce tu nombre';
          return;
        }

        if (!email || !validateEmail(email)) {
          if (errorEl) errorEl.textContent = 'Por favor, introduce un email válido';
          return;
        }

        if (!password || password.length < 6) {
          if (errorEl) errorEl.textContent = 'La contraseña debe tener al menos 6 caracteres';
          return;
        }

        // Create user
        const user = { name, email, password };
        saveToStorage(STORAGE_KEYS.USER, user);
        saveToStorage(STORAGE_KEYS.USER + '_' + email, user);
        updateUserUI(user);
        closeModal();
        this.reset();
      });
    }
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function updateUserUI(user) {
    const accountBtns = document.querySelectorAll('[aria-label="Mi cuenta"]');
    
    accountBtns.forEach(btn => {
      if (user) {
        btn.setAttribute('aria-label', `Mi cuenta: ${user.name}`);
        btn.title = `Conectado como ${user.name}`;
      } else {
        btn.setAttribute('aria-label', 'Mi cuenta');
        btn.title = 'Iniciar sesión';
      }
    });

    // Update side menu
    const sideMenuAccount = document.querySelector('.side-menu-actions a[href*="cuenta"], .side-menu-actions .user-logged-in');
    if (sideMenuAccount && user) {
      const parent = sideMenuAccount.parentElement;
      const existingUserEl = parent.querySelector('.user-logged-in');
      
      if (!existingUserEl) {
        const userEl = document.createElement('span');
        userEl.className = 'user-logged-in';
        userEl.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          ${user.name}
        `;
        parent.insertBefore(userEl, sideMenuAccount);
      }
    }
  }

  // ============================================================
  // WELCOME POPUP
  // ============================================================
  function initWelcomePopup() {
    // sessionStorage: resets every time the browser is closed
    const POPUP_KEY = STORAGE_KEYS.POPUP_SHOWN;
    const hasSeenPopup = sessionStorage.getItem(POPUP_KEY);

    // Inject popup HTML into body if not already present
    if (!document.getElementById('welcome-popup')) {
      const el = document.createElement('div');
      el.innerHTML = `
        <div class="modal-overlay" id="welcome-popup">
          <div class="club-popup">
            <button class="club-popup__close" aria-label="Cerrar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div class="club-popup__image">
              <img src="ChicaConSkincare.jpeg" alt="Le Perlé Club" onerror="this.parentElement.style.display='none'">
            </div>
            <div class="club-popup__body">
              <h2 class="club-popup__title">Únete a<br>Le Perlé Club</h2>
              <p class="club-popup__subtitle">Sé la primera en acceder a reposiciones y secretos profesionales para una Glass Skin perfecta.</p>
              <form class="club-popup__form" novalidate>
                <div class="club-popup__field">
                  <input type="email" id="club-email" placeholder="Correo electrónico" required>
                </div>
                <div class="club-popup__checks">
                  <label class="club-popup__check">
                    <input type="checkbox" required>
                    <span>He leído y acepto la <a href="legal.html">Política de Privacidad</a>.</span>
                  </label>
                  <label class="club-popup__check">
                    <input type="checkbox">
                    <span>Acepto recibir comunicaciones comerciales, novedades y contenido exclusivo de Le Perlé</span>
                  </label>
                </div>
                <button type="submit" class="club-popup__btn">QUIERO MI PASE VIP</button>
                <button type="button" class="club-popup__skip" data-popup-close>No, gracias</button>
              </form>
            </div>
          </div>
        </div>`;
      document.body.appendChild(el.firstElementChild);
    }

    const popup = document.getElementById('welcome-popup');

    function closePopup() {
      popup.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    // Show after 3.5s if not seen in this browser session
    if (!hasSeenPopup) {
      setTimeout(() => {
        popup.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        sessionStorage.setItem(POPUP_KEY, 'true');
      }, 3500);
    }

    // X button
    const closeBtn = popup.querySelector('.club-popup__close');
    if (closeBtn) closeBtn.addEventListener('click', closePopup);

    // "No, gracias" and any [data-popup-close]
    popup.querySelectorAll('[data-popup-close]').forEach(btn => {
      btn.addEventListener('click', closePopup);
    });

    // Click outside
    popup.addEventListener('click', function(e) {
      if (e.target === popup) closePopup();
    });

    // Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && popup.classList.contains('is-open')) closePopup();
    });

    // Form submit
    const popupForm = popup.querySelector('form');
    if (popupForm) {
      popupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]')?.value;
        if (email && validateEmail(email)) {
          alert('¡Gracias por suscribirte! Pronto recibirás nuestras novedades.');
          closePopup();
        }
      });
    }
  }

  // ============================================================
  // FAVORITES PAGE
  // ============================================================
  function initFavoritesPage() {
    const favoritesGrid = document.getElementById('favorites-grid');
    const emptyMessage = document.querySelector('.favorites-empty');
    
    if (!favoritesGrid) return;

    function renderFavorites() {
      const favorites = getFromStorage(STORAGE_KEYS.FAVORITES, []);
      
      if (favorites.length === 0) {
        favoritesGrid.innerHTML = '';
        if (emptyMessage) emptyMessage.style.display = 'block';
        return;
      }

      if (emptyMessage) emptyMessage.style.display = 'none';

      favoritesGrid.innerHTML = favorites.map(id => {
        const product = getProductById(id);
        if (!product) return '';

        return `
          <article class="product-card">
            <a href="product.html?id=${product.id}">
              <div class="product-card__image-wrap">
                <img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">
                <button class="product-card__fav is-fav" data-fav data-product-id="${product.id}" aria-label="Quitar de favoritos">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                </button>
              </div>
            </a>
            <div class="product-card__info">
              <h3 class="product-card__name">${product.name}</h3>
              <p class="product-card__variant">${product.variant}</p>
              <p class="product-card__price">${formatPrice(product.price)}</p>
              <button class="product-card__add" data-add-cart data-product-id="${product.id}" data-product-name="${product.name}" data-product-variant="${product.variant}" data-product-price="${product.price}" data-product-image="${product.image}">Añadir a la cesta</button>
            </div>
          </article>
        `;
      }).join('');
    }

    renderFavorites();

    // Re-render when favorites change
    document.addEventListener('click', function(e) {
      if (e.target.closest('[data-fav]')) {
        setTimeout(renderFavorites, 100);
      }
    });
  }

  // ============================================================
  // CONTACT FORM
  // ============================================================
  function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());

      // Basic validation
      if (!data.nombre || !data.apellido || !data.email || !data.asunto) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      if (!validateEmail(data.email)) {
        alert('Por favor, introduce un email válido.');
        return;
      }

      // Simulate form submission
      alert('¡Mensaje enviado correctamente! Te responderemos en menos de 24 horas.');
      this.reset();
    });
  }

  // ============================================================
  // NEWSLETTER FORM
  // ============================================================
  function initNewsletterForm() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput?.value;

        if (!email || !validateEmail(email)) {
          alert('Por favor, introduce un email válido.');
          return;
        }

        alert('¡Gracias por suscribirte! Pronto recibirás nuestras novedades.');
        this.reset();
      });
    });
  }

  // ============================================================
  // INIT
  // ============================================================
  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSearchPanel();
    initFavorites();
    initProductPage();
    initLegalTabs();
    initAuthModal();
    initWelcomePopup();
    initFavoritesPage();
    initContactForm();
    initNewsletterForm();
  });

})();

