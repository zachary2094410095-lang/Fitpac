// ================= 数据配置（六大包装大类） =================
    const packagingData = {
      paper: {
        name: 'Paper Packaging',
        icon: '📄',
        intro: 'Sustainable, printable, and recyclable paper-based packaging for retail, food service, and shipping. Available in a wide range of forms from boxes to cups.',
        coverImg: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
        categories: [
          { id: 'paper-boxes', name: 'Paper Boxes/Cartons', materials: 'Kraft paper, corrugated board, white card, art paper', products: 'Color boxes, card boxes, corrugated boxes, folding cartons, rigid boxes', examples: 'Gift boxes, electronics packaging, food boxes, shipping boxes, display stands', desc: 'Durable and printable paper boxes for retail and shipping.', img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80' },
          { id: 'paper-bags', name: 'Paper Bags', materials: 'Kraft paper (100g-250g), white card', products: 'Handled paper bags, kraft paper bags, eco-friendly bags', examples: 'Shopping bags, apparel bags, gift bags, food takeout bags', desc: 'Eco-friendly paper bags with handles for retail and food service.', img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80' },
          { id: 'paper-cans', name: 'Paper Cans/Tubes', materials: 'Paperboard, pulp', products: 'Paper cans, paper tubes, pulp molding', examples: 'Tea paper cans, paper tube packaging, pulp molded trays', desc: 'Cylindrical paper containers for dry goods and tea.', img: 'https://images.unsplash.com/photo-1585144860131-8b3c0b1a8b7a?w=600&q=80' },
          { id: 'paper-cups', name: 'Paper Cups/Bowls', materials: 'Food-grade paperboard, PE coated paper', products: 'Paper cups, paper bowls, pulp lunch boxes', examples: 'Disposable paper cups, takeout paper bowls, fast food boxes', desc: 'Food-safe paper cups and bowls for beverages and takeout.', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80' },
          { id: 'paper-food', name: 'Paper Food Containers', materials: 'Food-grade card, greaseproof paper', products: 'Pizza boxes, burger boxes, egg tart boxes, donut boxes', examples: 'Fast food packaging, bakery packaging', desc: 'Grease-resistant paper containers for fast food and bakery.', img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&q=80' }
        ]
      },
      plastic: {
        name: 'Plastic Packaging',
        icon: '♻️',
        intro: 'Versatile and durable plastic packaging available in bags, bottles, jars, tubes, and caps. Ideal for food, cosmetics, and household products.',
        coverImg: 'https://images.unsplash.com/photo-1627483262268-9c2b5b2834b3?w=800&q=80',
        categories: [
          { id: 'plastic-bags', name: 'Plastic Bags/Flexible Pouches', materials: 'PET/PE, BOPP, aluminum foil composite film', products: 'Stand-up pouches, zipper pouches, vacuum bags, foil bags, center seal, three-side seal, eight-side seal, spout pouches', examples: 'Coffee bags, pet food bags, snack bags, tea bags, liquid spout pouches', desc: 'Versatile flexible plastic pouches for various products.', img: 'https://images.unsplash.com/photo-1627483262268-9c2b5b2834b3?w=600&q=80' },
          { id: 'plastic-bottles', name: 'Plastic Bottles', materials: 'PET, PE, PP, HDPE, LDPE, PVC', products: 'PET bottles, PE bottles, PP bottles, HDPE bottles, LDPE bottles, PVC bottles', examples: 'Cosmetic bottles, beverage bottles, juice bottles, milk bottles, spray bottles', desc: 'Durable plastic bottles for liquids and cosmetics.', img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80' },
          { id: 'plastic-jars', name: 'Plastic Jars/Containers', materials: 'PP, PET, PS', products: 'Plastic jars, boxes, crates, buckets, cups', examples: 'Food storage jars, cosmetic jars, storage boxes, buckets', desc: 'Practical plastic jars and containers for storage.', img: 'https://images.unsplash.com/photo-1585144860131-8b3c0b1a8b7a?w=600&q=80' },
          { id: 'plastic-tubes', name: 'Plastic Tubes', materials: 'PE, PP, aluminum-plastic composite', products: 'Plastic tubes, squeeze tubes', examples: 'Toothpaste tubes, hand cream tubes, cosmetic tubes, ointment tubes', desc: 'Squeezable tubes for creams and gels.', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80' },
          { id: 'plastic-caps', name: 'Plastic Caps/Accessories', materials: 'PP, PE, PET', products: 'Caps, pumps, sprayers, droppers, lids, covers', examples: 'Cosmetic pumps, beverage caps, spray heads, dropper caps', desc: 'Functional plastic caps and dispensers.', img: 'https://images.unsplash.com/photo-1585144860131-8b3c0b1a8b7a?w=600&q=80' }
        ]
      },
      metal: {
        name: 'Metal Packaging',
        icon: '🥫',
        intro: 'Durable and premium metal packaging for food, beverages, and cosmetics. Offers excellent protection and a high-end feel.',
        coverImg: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=800&q=80',
        categories: [
          { id: 'metal-cans', name: 'Metal Cans', materials: 'Tinplate, aluminum, tin-coated steel', products: 'Tin cans, aluminum cans, easy-open cans, three-piece cans, two-piece cans', examples: 'Tea cans, coffee cans, food cans, beverage cans', desc: 'Durable metal cans for food and beverages.', img: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=600&q=80' },
          { id: 'metal-boxes', name: 'Metal Boxes', materials: 'Tinplate, aluminum', products: 'Metal boxes, iron boxes, aluminum boxes, square boxes, round boxes, flat boxes', examples: 'Gift tin boxes, chocolate boxes, cosmetic boxes, medicine boxes', desc: 'Decorative and protective metal boxes.', img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80' },
          { id: 'metal-bottles', name: 'Metal Bottles', materials: 'Aluminum, stainless steel, tinplate', products: 'Metal bottles, stainless steel bottles, aluminum bottles', examples: 'Perfume bottles, spray bottles, wine bottles, essential oil bottles', desc: 'Premium metal bottles for cosmetics and beverages.', img: 'https://images.unsplash.com/photo-1585144860131-8b3c0b1a8b7a?w=600&q=80' },
          { id: 'metal-aerosol', name: 'Aerosol Cans', materials: 'Tinplate', products: 'Aerosol cans, spray cans', examples: 'Insecticide cans, spray paint cans, cosmetic spray cans', desc: 'Pressurized aerosol cans for sprays.', img: 'https://images.unsplash.com/photo-1585144860131-8b3c0b1a8b7a?w=600&q=80' }
        ]
      },
      glass: {
        name: 'Glass Packaging',
        icon: '🍾',
        intro: 'Elegant and premium glass packaging that enhances product visibility. Perfect for beverages, cosmetics, and food preserves.',
        coverImg: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=800&q=80',
        categories: [
          { id: 'glass-bottles', name: 'Glass Bottles', materials: 'Glass', products: 'Glass bottles, dropper bottles, perfume bottles, wine bottles, beverage bottles', examples: 'Perfume bottles, essential oil bottles, red wine bottles, beverage bottles, medicine bottles', desc: 'Elegant glass bottles for beverages and cosmetics.', img: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=600&q=80' },
          { id: 'glass-jars', name: 'Glass Jars', materials: 'Glass', products: 'Glass jars, wide-mouth jars, sealed jars', examples: 'Food jars, jam jars, honey jars, candle jars', desc: 'Classic glass jars for preserves and candles.', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80' }
        ]
      },
      flexible: {
        name: 'Flexible/Composite Packaging',
        icon: '📦',
        intro: 'High-barrier and lightweight flexible packaging solutions. Ideal for food preservation, e-commerce shipping, and industrial applications.',
        coverImg: 'https://images.unsplash.com/photo-1627483262268-9c2b5b2834b3?w=800&q=80',
        categories: [
          { id: 'flex-bags', name: 'Composite Packaging Bags', materials: 'PET/VMPET/PE, BOPP/aluminum/PE', products: 'Foil bags, vacuum bags, retort pouches, high-barrier bags, yin-yang bags, pillow bags', examples: 'Food vacuum packaging, retort food bags, electronics anti-static bags', desc: 'High-barrier composite bags for food and electronics.', img: 'https://images.unsplash.com/photo-1627483262268-9c2b5b2834b3?w=600&q=80' },
          { id: 'flex-rolls', name: 'Roll Film', materials: 'BOPP, PE, PVC', products: 'Composite roll film, packaging film, shrink film', examples: 'Automatic packaging machine film, shrink wrap film', desc: 'Roll film for automated packaging lines.', img: 'https://images.unsplash.com/photo-1585144860131-8b3c0b1a8b7a?w=600&q=80' },
          { id: 'flex-mailers', name: 'Courier Bags/Envelopes', materials: 'PE, kraft paper, bubble film', products: 'Courier envelopes, bubble bags, document bags', examples: 'E-commerce courier bags, document mailing bags, bubble protective bags', desc: 'Protective mailers for shipping and e-commerce.', img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=600&q=80' }
        ]
      },
      other: {
        name: 'Other Packaging',
        icon: '🎁',
        intro: 'Specialty packaging solutions including wooden, cloth, labels, and auxiliary materials for a complete packaging ecosystem.',
        coverImg: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=800&q=80',
        categories: [
          { id: 'other-wood', name: 'Wooden Packaging', materials: 'Pine, bamboo', products: 'Wooden boxes, wooden gift boxes, wooden pallets', examples: 'Wine boxes, tea boxes, jewelry boxes, wooden pallets', desc: 'Natural wooden packaging for premium goods.', img: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=600&q=80' },
          { id: 'other-cloth', name: 'Cloth Packaging', materials: 'Cotton, non-woven, linen', products: 'Cloth bags, non-woven bags, cotton bags, drawstring bags', examples: 'Eco shopping bags, jewelry bags, gift bags, storage bags', desc: 'Reusable cloth bags for retail and gifts.', img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80' },
          { id: 'other-labels', name: 'Labels/Stickers', materials: 'Paper, PET, PVC', products: 'Packaging labels, adhesive labels, anti-counterfeit labels', examples: 'Product labels, security labels, barcode labels, stickers', desc: 'Custom printed labels and stickers for branding.', img: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=600&q=80' },
          { id: 'other-aux', name: 'Packaging Auxiliary Materials', materials: 'Plastic, paper', products: 'Adhesive tape, cable ties, zip ties, sealing clips', examples: 'Carton sealing tape, warning tape, zip ties, sealing clips', desc: 'Essential accessories for packaging and shipping.', img: 'https://images.unsplash.com/photo-1585144860131-8b3c0b1a8b7a?w=600&q=80' }
        ]
      }
    };

    // ================= 导航栏交互逻辑 =================
    function toggleMobileMenu() {
      document.getElementById('navMenu').classList.toggle('active');
    }

    document.querySelectorAll('.nav-item').forEach(item => {
      const link = item.querySelector('a');
      if (item.querySelector('.category-panel') || item.querySelector('.dropdown-panel')) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          item.classList.toggle('active');
        });
      }
    });

    document.addEventListener('click', function(e) {
      const isNavItem = e.target.closest('.nav-item');
      const isHamburger = e.target.closest('.hamburger');
      if (!isNavItem && !isHamburger) {
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        document.getElementById('navMenu').classList.remove('active');
      }
    });

    // ================= 渲染下拉面板 =================
    function renderAllPanels() {
      for (const key in packagingData) {
        const panel = document.getElementById('panel-' + key);
        if (!panel) continue;
        const categories = packagingData[key].categories;
        const cols = Math.min(categories.length, 4);
        panel.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

        panel.innerHTML = categories.map(cat => `
          <div class="category-card-sm" onclick="event.stopPropagation(); showCategoryDetail('${key}', '${cat.id}');">
            <h4>${cat.name}</h4>
            <ul>
              ${cat.products.split(',').slice(0, 5).map(p => `<li>• ${p.trim()}</li>`).join('')}
            </ul>
          </div>
        `).join('');
      }
    }

    // ================= 渲染一级目录页（六大类目概述）—— 仅显示名称+描述 =================
    function renderCategoryOverview() {
      const grid = document.getElementById('categoryOverviewGrid');
      grid.innerHTML = Object.keys(packagingData).map(key => {
        const data = packagingData[key];
        return `
          <div class="category-overview-card" onclick="showCategoryDetailView('${key}')">
            <div class="cat-overview-img">
              <img src="${data.coverImg}" alt="${data.name}" loading="lazy" />
              <div class="cat-overview-icon">${data.icon}</div>
            </div>
            <div class="cat-overview-info">
              <h3>${data.name}</h3>
              <p>${data.intro}</p>
            </div>
          </div>
        `;
      }).join('');
    }

    // ================= 渲染类目详情页（显示该类目下所有二级类目） =================
    function renderCategoryDetailView(categoryKey) {
      const data = packagingData[categoryKey];
      if (!data) return;

      document.getElementById('categoryHeroTitle').innerText = data.name;
      document.getElementById('categoryHeroIntro').innerText = data.intro;
      document.getElementById('categoryHeroImg').src = data.coverImg;
      document.getElementById('categoryHeroCount').innerText = `${data.categories.length} Sub-categories`;

      const grid = document.getElementById('subcategoryGrid');
      grid.innerHTML = data.categories.map(cat => `
        <div class="subcategory-card" onclick="showCategoryDetail('${categoryKey}', '${cat.id}')">
          <div class="subcat-card-img">
            <img src="${cat.img}" alt="${cat.name}" loading="lazy" />
          </div>
          <div class="subcat-card-body">
            <h4>${cat.name}</h4>
            <p class="subcat-desc">${cat.desc}</p>
            <div class="subcat-info-line">
              <span class="subcat-info-label">Materials:</span>
              <span class="subcat-info-value">${cat.materials}</span>
            </div>
            <div class="subcat-info-line">
              <span class="subcat-info-label">Examples:</span>
              <span class="subcat-info-value">${cat.examples}</span>
            </div>
          </div>
        </div>
      `).join('');

      showPage('category-detail');
    }

    // ================= 视图路由 =================
    function showPage(pageName) {
      document.querySelectorAll('.page-view').forEach(page => page.classList.remove('active'));
      document.getElementById('page-' + pageName).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      document.getElementById('navMenu').classList.remove('active');
      document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

      if (pageName === 'catalog') {
        renderCategoryOverview();
      }
    }

    function showCategoryDetailView(categoryKey) {
      renderCategoryDetailView(categoryKey);
    }

    // ================= 显示二级类目详情 =================
    function showCategoryDetail(parentKey, categoryId) {
      const parent = packagingData[parentKey];
      if (!parent) return;
      const category = parent.categories.find(c => c.id === categoryId);
      if (!category) return;

      document.getElementById('detailTitle').innerText = category.name;
      document.getElementById('detailDesc').innerText = category.desc;
      document.getElementById('detailMainImg').src = category.img;
      document.getElementById('detailTag').innerText = parent.name;

      document.getElementById('detailMaterials').innerHTML =
        category.materials.split(',').map(m => `<li>${m.trim()}</li>`).join('');

      document.getElementById('detailExamples').innerHTML =
        category.examples.split(',').map(e => `<li>${e.trim()}</li>`).join('');

      document.getElementById('detailProducts').innerHTML =
        category.products.split(',').map(p => `<li>${p.trim()}</li>`).join('');

      document.getElementById('detailBackBtn').onclick = function() {
        showCategoryDetailView(parentKey);
      };

      showPage('detail');
    }

    // ================= 初始化 =================
    document.addEventListener('DOMContentLoaded', () => {
      renderAllPanels();

      window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    });
