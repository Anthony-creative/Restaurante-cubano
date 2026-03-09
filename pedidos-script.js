// =============================================
//   PEDIDOS - SABOR CUBANO | pedidos-script.js
// =============================================

// ── PRODUCTS DATA ──────────────────────────────
const products = [
    // ENTRADAS
    {
        id: 1, category: 'entradas', categoryLabel: 'Entradas',
        name: 'Tostones con Mojo',
        desc: 'Plátanos verdes fritos y aplastados, servidos con una refrescante salsa de ajo y cítricos.',
        price: 7.00,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023341/Gemini_Generated_Image_lnildzlnildzlnil_qgkxic.png'
    },
    {
        id: 2, category: 'entradas', categoryLabel: 'Entradas',
        name: 'Yuca Frita',
        desc: 'Crujientes bastones de yuca frita, acompañados de nuestra mayonesa de ajo casera.',
        price: 6.50,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023756/unnamed_t6f4iq.jpg'
    },
    {
        id: 3, category: 'entradas', categoryLabel: 'Entradas',
        name: 'Croquetas de Jamón',
        desc: 'Delicadas croquetas caseras de jamón serrano, empanadas y fritas a la perfección.',
        price: 8.00,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023749/unnamed_1_tvi1wy.jpg'
    },
    // PLATOS FUERTES
    {
        id: 4, category: 'fuertes', categoryLabel: 'Platos Fuertes',
        name: 'Ropa Vieja',
        desc: 'Carne de res desmechada cocinada lentamente en una salsa criolla con pimientos y cebolla.',
        price: 18.50,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023755/unnamed2_u8yloz.jpg'
    },
    {
        id: 5, category: 'fuertes', categoryLabel: 'Platos Fuertes',
        name: 'Lechón Asado',
        desc: 'Pierna de cerdo marinada en nuestro mojo especial, asada lentamente hasta obtener piel crujiente.',
        price: 22.00,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023755/unnamed4_a6biqe.jpg'
    },
    {
        id: 6, category: 'fuertes', categoryLabel: 'Platos Fuertes',
        name: 'Picadillo a la Habanera',
        desc: 'Carne molida de res con aceitunas, papas y pasas en una salsa sabrosa.',
        price: 16.00,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023755/unnamed5_toov2x.jpg'
    },
    {
        id: 7, category: 'fuertes', categoryLabel: 'Platos Fuertes',
        name: 'Camarones Enchilados',
        desc: 'Tiernos camarones en una salsa criolla picante con pimientos y cebolla.',
        price: 20.50,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023760/unnamed7_f7f5z9.jpg'
    },
    {
        id: 8, category: 'fuertes', categoryLabel: 'Platos Fuertes',
        name: 'Bistec de Palomilla',
        desc: 'Fino corte de carne de res a la plancha, marinado en mojo y cubierto con cebolla caramelizada.',
        price: 19.00,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023760/unnamed8_fnfs8t.jpg'
    },
    // ACOMPAÑAMIENTOS
    {
        id: 9, category: 'acompanamientos', categoryLabel: 'Acompañamientos',
        name: 'Moros y Cristianos',
        desc: 'Arroz blanco cocido con frijoles negros sazonados, un clásico de la cocina cubana.',
        price: 5.00,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023763/unnamed9_rikrxi.jpg'
    },
    {
        id: 10, category: 'acompanamientos', categoryLabel: 'Acompañamientos',
        name: 'Arroz Blanco',
        desc: 'Arroz jazmín perfectamente cocido, ideal para acompañar cualquier plato.',
        price: 3.50,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023761/unnamed10_nsvzkw.jpg'
    },
    {
        id: 11, category: 'acompanamientos', categoryLabel: 'Acompañamientos',
        name: 'Frijoles Negros',
        desc: 'Frijoles negros cocidos a fuego lento con especias tradicionales cubanas.',
        price: 4.50,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023764/unnamed11_bk9etq.jpg'
    },
    {
        id: 12, category: 'acompanamientos', categoryLabel: 'Acompañamientos',
        name: 'Plátanos Maduros Fritos',
        desc: 'Rodajas de plátano maduro fritas hasta caramelizar, dulce y delicioso.',
        price: 4.00,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023764/unnamed12_te9tok.jpg'
    },
    // POSTRES
    {
        id: 13, category: 'postres', categoryLabel: 'Postres',
        name: 'Flan Cubano',
        desc: 'Clásico flan de huevo con un suave caramelo, el postre más emblemático de Cuba.',
        price: 6.00,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023769/unnamed13_ybuvo8.jpg'
    },
    {
        id: 14, category: 'postres', categoryLabel: 'Postres',
        name: 'Cascos de Guayaba con Queso',
        desc: 'Dulce de guayaba en almíbar servido con queso crema. Una combinación perfecta.',
        price: 7.00,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023768/unnamed14_ls02yp.jpg'
    },
    // BEBIDAS
    {
        id: 15, category: 'bebidas', categoryLabel: 'Bebidas',
        name: 'Mojito Clásico',
        desc: 'Ron blanco, hierbabuena fresca, lima, azúcar y soda. La bebida nacional de Cuba.',
        price: 9.50,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023770/unnamed15_uaxse5.jpg'
    },
    {
        id: 16, category: 'bebidas', categoryLabel: 'Bebidas',
        name: 'Cuba Libre',
        desc: 'Ron, Coca-Cola y un toque de lima. Sencillo y refrescante.',
        price: 8.50,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023769/unnamed16_gswi5c.jpg'
    },
    {
        id: 17, category: 'bebidas', categoryLabel: 'Bebidas',
        name: 'Café Cubano',
        desc: 'Expreso fuerte con una capa de espuma dulce, energizante y delicioso.',
        price: 3.00,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023770/unnamed17_co6fjn.jpg'
    },
    {
        id: 18, category: 'bebidas', categoryLabel: 'Bebidas',
        name: 'Jugo Natural (del día)',
        desc: 'Pregunta por nuestra selección de jugos naturales frescos del día (mango, guayaba, tamarindo).',
        price: 4.00,
        img: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1773023769/unnamed18_bixue3.jpg'
    }
];

// ── STATE ──────────────────────────────────────
let cart = {};          // { productId: quantity }
let currentFilter = 'all';

// ── RENDER PRODUCTS ────────────────────────────
function renderProducts() {
    const container = document.getElementById('products-container');
    const categories = ['entradas', 'fuertes', 'acompanamientos', 'postres', 'bebidas'];
    const labels = {
        entradas:        '🥗 Entradas',
        fuertes:         '🍽️ Platos Fuertes',
        acompanamientos: '🍚 Acompañamientos',
        postres:         '🍮 Postres',
        bebidas:         '🍹 Bebidas'
    };

    container.innerHTML = '';

    const toShow = currentFilter === 'all' ? categories : [currentFilter];

    toShow.forEach(cat => {
        const items = products.filter(p => p.category === cat);
        if (!items.length) return;

        const section = document.createElement('div');
        section.className = 'menu-category';
        section.innerHTML = `<div class="category-label">${labels[cat]}</div>`;

        const grid = document.createElement('div');
        grid.className = 'items-grid';

        items.forEach(p => {
            const qty = cart[p.id] || 0;
            const inCart = qty > 0;

            const card = document.createElement('div');
            card.className = `product-card${inCart ? ' in-cart' : ''}`;
            card.id = `card-${p.id}`;

            card.innerHTML = `
                <span class="in-cart-badge" id="badge-${p.id}">${qty}</span>
                <img src="${p.img}" alt="${p.name}" loading="lazy">
                <div class="card-body">
                    <h4>${p.name}</h4>
                    <p>${p.desc}</p>
                    <div class="card-footer">
                        <span class="price">$${p.price.toFixed(2)}</span>
                        <div id="ctrl-${p.id}">
                            ${inCart
                                ? `<div class="qty-controls">
                                        <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
                                        <span class="qty-display" id="qty-${p.id}">${qty}</span>
                                        <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
                                   </div>`
                                : `<button class="add-btn" onclick="addToCart(${p.id})">+ Añadir</button>`
                            }
                        </div>
                    </div>
                </div>`;

            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

// ── CART LOGIC ─────────────────────────────────
function addToCart(id) {
    cart[id] = 1;
    updateCardUI(id);
    updateCartSidebar();
    showToast('✓ Añadido al pedido');
}

function changeQty(id, delta) {
    const current = cart[id] || 0;
    const next = current + delta;
    if (next <= 0) {
        delete cart[id];
    } else {
        cart[id] = next;
    }
    updateCardUI(id);
    updateCartSidebar();
}

function removeFromCart(id) {
    delete cart[id];
    updateCardUI(id);
    updateCartSidebar();
}

function updateCardUI(id) {
    const qty   = cart[id] || 0;
    const card  = document.getElementById(`card-${id}`);
    const ctrl  = document.getElementById(`ctrl-${id}`);
    const badge = document.getElementById(`badge-${id}`);

    if (!card) return;

    if (qty > 0) {
        card.classList.add('in-cart');
        badge.textContent = qty;
        ctrl.innerHTML = `
            <div class="qty-controls">
                <button class="qty-btn" onclick="changeQty(${id}, -1)">−</button>
                <span class="qty-display" id="qty-${id}">${qty}</span>
                <button class="qty-btn" onclick="changeQty(${id}, 1)">+</button>
            </div>`;
    } else {
        card.classList.remove('in-cart');
        badge.textContent = '0';
        ctrl.innerHTML = `<button class="add-btn" onclick="addToCart(${id})">+ Añadir</button>`;
    }
}

// ── UPDATE SIDEBAR ─────────────────────────────
function updateCartSidebar() {
    const cartItems      = document.getElementById('cartItems');
    const totalDisplay   = document.getElementById('totalDisplay');
    const subtotalDisplay = document.getElementById('subtotalDisplay');
    const cartCountBadge = document.getElementById('cartCountBadge');
    const sendBtn        = document.getElementById('sendBtn');

    const entries = Object.entries(cart);

    if (entries.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty" id="cartEmpty">
                <i class="fas fa-shopping-basket"></i>
                Aún no has añadido productos
            </div>`;
        totalDisplay.textContent   = '$0.00';
        subtotalDisplay.textContent = '$0.00';
        cartCountBadge.textContent = '0 items';
        sendBtn.disabled = true;
        return;
    }

    let total      = 0;
    let totalItems = 0;
    let html       = '';

    entries.forEach(([id, qty]) => {
        const p = products.find(x => x.id == id);
        if (!p) return;
        const subtotal = p.price * qty;
        total      += subtotal;
        totalItems += qty;
        html += `
            <div class="cart-item">
                <div>
                    <div class="cart-item-name">${p.name}</div>
                    <div class="cart-item-qty">x${qty} × $${p.price.toFixed(2)}</div>
                </div>
                <span class="cart-item-price">$${subtotal.toFixed(2)}</span>
                <button class="cart-item-remove" onclick="removeFromCart(${p.id})" title="Eliminar">
                    <i class="fas fa-times"></i>
                </button>
            </div>`;
    });

    cartItems.innerHTML             = html;
    totalDisplay.textContent        = `$${total.toFixed(2)}`;
    subtotalDisplay.textContent     = `$${total.toFixed(2)}`;
    cartCountBadge.textContent      = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
    sendBtn.disabled                = false;
}

// ── FILTER BY CATEGORY ─────────────────────────
function filterCategory(event, cat) {
    currentFilter = cat;
    document.querySelectorAll('.cat-tab').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderProducts();
}

// ── SEND ORDER VIA WHATSAPP ────────────────────
function sendOrder() {
    const address = document.getElementById('addressInput').value.trim();
    const notes   = document.getElementById('notesInput').value.trim();

    if (Object.keys(cart).length === 0) {
        showToast('⚠️ Agrega al menos un producto');
        return;
    }
    if (!address) {
        document.getElementById('addressInput').focus();
        showToast('⚠️ Por favor ingresa tu dirección');
        return;
    }

    let msg   = '🍽️ *PEDIDO - Sabor Cubano*\n';
    msg      += '━━━━━━━━━━━━━━━━━━━━\n\n';
    let total = 0;

    Object.entries(cart).forEach(([id, qty]) => {
        const p = products.find(x => x.id == id);
        if (!p) return;
        const sub = p.price * qty;
        total += sub;
        msg   += `• ${p.name} x${qty} — $${sub.toFixed(2)}\n`;
    });

    msg += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `💰 *TOTAL: $${total.toFixed(2)}*\n\n`;
    msg += `📍 *Dirección de entrega:*\n${address}\n`;
    if (notes) msg += `\n📝 *Notas:* ${notes}\n`;
    msg += `\n¡Gracias por tu pedido! 🇨🇺`;

    const encoded = encodeURIComponent(msg);
    const waUrl   = `https://wa.me/5356735934?text=${encoded}`;
    window.open(waUrl, '_blank');
}

// ── TOAST NOTIFICATION ─────────────────────────
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
}

// ── INIT ───────────────────────────────────────
renderProducts();
document.getElementById('sendBtn').disabled = true;
