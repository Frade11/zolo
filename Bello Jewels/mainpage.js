    const toggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.main-nav');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
        toggle.classList.toggle('active');
    });

    //nav bar ca sa apara pestetot

    window.addEventListener("scroll", function () {
        const nav = document.getElementById("mainNav");
        if (window.scrollY > 10) {
        nav.classList.add("scrolled");
        } else {
        nav.classList.remove("scrolled");
        }
    });


    //carousel
    const track = document.getElementById('track');
    const slides = document.querySelectorAll('.carousel-slide');

    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(() => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    }, 5000); 


document.addEventListener('DOMContentLoaded', () => {
  const loginLink = document.querySelector('.login a');
  const authModal = document.getElementById('authModal');
  const closeAuth = document.getElementById('closeAuth');
  const authTabs = document.querySelectorAll('.auth-tab');
  const authForms = document.querySelectorAll('.auth-form');

  if (loginLink && authModal && closeAuth && authTabs.length && authForms.length) {
    loginLink.addEventListener('click', function(e) {
      e.preventDefault();
      authModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });

    closeAuth.addEventListener('click', function() {
      authModal.style.display = 'none';
      document.body.style.overflow = '';
    });

    authTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        authTabs.forEach(t => t.classList.remove('active'));
        authForms.forEach(f => f.classList.remove('active'));

        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        const form = document.getElementById(tabId + 'Form');
        if (form) form.classList.add('active');
      });
    });

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (email && password) {
          document.getElementById('loginSuccess').textContent = 'Autentificare reușită!';
          document.getElementById('loginSuccess').style.display = 'block';
          document.getElementById('loginError').style.display = 'none';

          setTimeout(() => {
            authModal.style.display = 'none';
            document.body.style.overflow = '';
          }, 2000);
        } else {
          document.getElementById('loginError').textContent = 'Completați toate câmpurile!';
          document.getElementById('loginError').style.display = 'block';
          document.getElementById('loginSuccess').style.display = 'none';
        }
      });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirm = document.getElementById('regConfirm').value;

        if (name && email && password && confirm) {
          if (password !== confirm) {
            document.getElementById('regError').textContent = 'Parolele nu coincid!';
            document.getElementById('regError').style.display = 'block';
            document.getElementById('regSuccess').style.display = 'none';
          } else {
            document.getElementById('regSuccess').textContent = 'Înregistrare reușită!';
            document.getElementById('regSuccess').style.display = 'block';
            document.getElementById('regError').style.display = 'none';

            setTimeout(() => {
              authTabs[0].click();
              this.reset();
            }, 2000);
          }
        } else {
          document.getElementById('regError').textContent = 'Completați toate câmpurile!';
          document.getElementById('regError').style.display = 'block';
          document.getElementById('regSuccess').style.display = 'none';
        }
      });
    }
  }
});

 document.addEventListener('DOMContentLoaded', function() {
        const modal = document.getElementById('privacyModal');
        const modalContent = modal.querySelector('.modal-content');
        const closeBtn = modal.querySelector('.modal-close');
        const acceptBtn = document.getElementById('acceptPrivacy');
        const privacyLinks = document.querySelectorAll('.privacy-policy-link');
        
        function openModal() {
            document.body.style.overflow = 'hidden';
            modal.classList.add('active');
                        document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        }
                function closeModal() {
            document.body.style.overflow = '';
            modal.classList.remove('active');
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
        
        privacyLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                openModal();
            });
        });
        
        closeBtn.addEventListener('click', closeModal);
        acceptBtn.addEventListener('click', closeModal);
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        modal.addEventListener('wheel', function(e) {
            const isScrollable = this.scrollHeight > this.clientHeight;
            const isAtTop = this.scrollTop === 0;
            const isAtBottom = this.scrollTop + this.clientHeight >= this.scrollHeight - 1;
            
            if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
                e.preventDefault();
            }
        }, { passive: false });
    });
    const products = {
        1: {
            id: 1,
            name: "Inel de aur cu diamant",
            description: "Inel elegant din aur 14k cu diamant central de 0.25ct",
            price: 2500,
            image: "./images/inel1.png",
            category: "inele",
            specs: {
                material: "Aur 14k",
                weight: "3.2g",
                stone: "Diamant 0.25ct"
            }
        },
        2: {
            id: 2,
            name: "Brățară din argint",
            description: "Brățară din argint 925 cu motiv floral",
            price: 850,
            image: "./images/bracelet.png",
            category: "bratari",
            specs: {
                material: "Argint 925",
                weight: "12.5g",
                length: "18cm"
            }
        },
        3: {
            id: 3,
            name: "Cercei din aur",
            description: "Cercei clasici din aur 18k cu pandantiv",
            price: 1200,
            image: "./images/cercei3.png",
            category: "cercei",
            specs: {
                material: "Aur 18k",
                weight: "2.8g",
                type: "Pandantiv"
            }
        },
        4: {
            id: 4,
            name: "Set bijuterii argint",
            description: "Set complet (inel + brățară + cercei) din argint 925",
            price: 2200,
            image: "./images/set4.png",
            category: "seturi",
            specs: {
                material: "Argint 925",
                pieces: "3"
            }
        },
        5: {
            id: 5,
            name: "Colier din aur roz",
            description: "Colier delicat din aur roz 14k cu pandantiv de inimioară",
            price: 1800,
            image: "./images/colier5.png",
            category: "coliere",
            specs: {
                material: "Aur roz 14k",
                length: "45cm",
                pendant: "Inimioară"
            }
        },
        6: {
            id: 6,
            name: "Lant cu medalion",
            description: "Lant din argint 925 cu medalion personalizabil",
            price: 950,
            image: "./images/lant6.png",
            category: "coliere",
            specs: {
                material: "Argint 925",
                length: "50cm",
                personalization: "Da"
            }
        },
        7: {
            id: 7,
            name: "Cercei stud cu perle",
            description: "Cercei stud din argint cu perle naturale de apă dulce",
            price: 650,
            image: "./images/cercei7.png",
            category: "cercei",
            specs: {
                material: "Argint 925",
                pearls: "Perle naturale",
                size: "6mm"
            }
        },
        8: {
            id: 8,
            name: "Inel cu safir",
            description: "Inel din aur alb 14k cu safir albastru central",
            price: 3200,
            image: "./images/inel8.png",
            category: "inele",
            specs: {
                material: "Aur alb 14k",
                stone: "Safir 0.3ct",
                purity: "VS"
            }
        },
        9: {
            id: 9,
            name: "Brățară pandantiv",
            description: "Brățară din aur galben cu pandantiv personalizabil",
            price: 1500,
            image: "./images/bratara9.png",
            category: "bratari",
            specs: {
                material: "Aur 14k",
                length: "17cm",
                personalization: "Da"
            }
        },
        10: {
            id: 10,
            name: "Set de logodnă",
            description: "Set inel + cercei din platina cu diamante",
            price: 7800,
            image: "./images/set10.png",
            category: "seturi",
            specs: {
                material: "Platina",
                diamonds: "0.75ct total",
                pieces: "2"
            }
        },
        11: {
            id: 11,
            name: "Cercei clipse",
            description: "Cercei clipse din aur cu design minimalist",
            price: 890,
            image: "./images/cercei11.png",
            category: "cercei",
            specs: {
                material: "Aur 14k",
                type: "Clipse",
                weight: "1.8g"
            }
        }
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayProducts(containerId, items) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = items.map(product => `
            <div class="product-card">
                <a href="product.html?id=${product.id}" class="product-link">
                    <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='./images/placeholder.jpg'">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <p class="product-price">${product.price} MDL</p>
                    </div>
                </a>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Adaugă în coș</button>
                </div>
            </div>
        `).join('');
    }

    function displayHomeProducts() {
        const featuredProducts = Object.values(products).slice(0, 4);
        displayProducts('products-container', featuredProducts);
    }

    function displayCatalogProducts(category = null) {
        let filtered = Object.values(products);
        if (category) {
            filtered = filtered.filter(p => p.category === category);
        }
        displayProducts('products-container', filtered);
    }

    function setupCatalogPage() {
        const container = document.querySelector('.products-section');
        if (!container) return;

        const categories = [...new Set(Object.values(products).map(p => p.category))];

        const filterDiv = document.createElement('div');
        filterDiv.className = 'filter-buttons';

        const allBtn = document.createElement('button');
        allBtn.className = 'filter-btn active';
        allBtn.textContent = 'Toate';
        allBtn.dataset.category = 'all';
        filterDiv.appendChild(allBtn);

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.textContent = cat;
            btn.dataset.category = cat;
            filterDiv.appendChild(btn);
        });

        container.insertBefore(filterDiv, container.querySelector('#products-container'));
        filterDiv.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                filterDiv.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                const category = e.target.dataset.category;
                displayCatalogProducts(category === 'all' ? null : category);
            }
        });

        displayCatalogProducts();
    }

    function loadProductPage() {
        const image = document.getElementById('product-main-image');
        if (!image) return;

        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = products[productId];

        if (!product) return (window.location.href = 'index.html');

        document.getElementById('product-title').textContent = product.name;
        document.getElementById('product-price').textContent = `${product.price} MDL`;
        document.getElementById('product-description').textContent = product.description;
        image.src = product.image;
        image.alt = product.name;
        document.getElementById('add-to-cart-btn').dataset.id = productId;

        const specsList = document.getElementById('product-specs');
        specsList.innerHTML = Object.entries(product.specs).map(([k, v]) => `<li>${k}: ${v}</li>`).join('');

        const related = Object.values(products)
            .filter(p => p.id !== product.id && p.category === product.category)
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);

        const relatedContainer = document.getElementById('related-products');
        relatedContainer.innerHTML = related.length ? related.map(product => `
            <div class="product-card">
                <a href="product.html?id=${product.id}" class="product-link">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <p class="product-price">${product.price} MDL</p>
                    </div>
                </a>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Adaugă în coș</button>
                </div>
            </div>
        `).join('') : '<p>Nu există produse similare momentan.</p>';
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('products-container')) {
            const isCatalog = document.querySelector('.products-title')?.textContent.includes('Catalog');
            isCatalog ? setupCatalogPage() : displayHomeProducts();
        }
        if (document.getElementById('product-main-image')) {
            loadProductPage();
        }
        if (document.getElementById('cart-items')) {
            loadCartPage();
        }

        document.addEventListener('click', e => {
            if (e.target.classList.contains('add-to-cart')) {
                const productId = e.target.dataset.id;
                const product = products[productId];
                if (!product) return;

                const existing = cart.find(item => item.id === productId);
                existing ? existing.quantity++ : cart.push({ ...product, quantity: 1 });
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();

                e.target.textContent = "✓ Adăugat";
                e.target.style.backgroundColor = "#4CAF50";
                setTimeout(() => {
                    e.target.textContent = "Adaugă în coș";
                    e.target.style.backgroundColor = "#b8860b";
                }, 1500);
            }
        });
        updateCartCount();
    });
    const orderButton = document.querySelector('.order-button');
    const form = document.querySelector('.delivery-form');

    let orderMessage = document.querySelector('.order-message');
    if (!orderMessage) {
        orderMessage = document.createElement('div');
        orderMessage.className = 'order-message';
        orderMessage.style.color = 'green';
        orderMessage.style.marginTop = '10px';
        orderMessage.style.display = 'none';
        orderButton.insertAdjacentElement('afterend', orderMessage);
    }

    orderButton.addEventListener('click', function(e) {
        e.preventDefault();

        const requiredFields = form.querySelectorAll('input[required]');
        let allFilled = true;

        requiredFields.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (!allFilled) {
            orderMessage.style.color = 'red';
            orderMessage.textContent = 'Te rugăm să completezi toate câmpurile obligatorii.';
            orderMessage.style.display = 'block';
            return;
        }

        orderMessage.style.color = 'green';
        orderMessage.textContent = 'Comanda a fost realizată cu succes!';
        orderMessage.style.display = 'block';

        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));

        loadCartPage();
        updateCartCount();

        form.reset();
    });


    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }
    function loadCartPage() {
        const container = document.getElementById('cart-items');
        if (!container) return;

        const totalContainer = document.getElementById('cart-total');
        let total = 0;

        if (cart.length === 0) {
            container.innerHTML = '<p>Coșul este gol.</p>';
            totalContainer.textContent = '0';
            return;
        }

        container.innerHTML = cart.map((item, index) => {
            total += item.price * item.quantity;
            return `
                <div class="cart-item">
                    <div class="cart-item-left">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        <div>
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                            <p>${item.price} mdl</p>
                        </div>
                    </div>
                    <div class="cart-item-right">
                        <span>Cantitate: ${item.quantity}</span>
                        <button class="remove-btn" data-index="${index}">x</button>
                    </div>
                </div>
            `;
        }).join('');

        totalContainer.textContent = `Total spre plată: ${total} mdl`;

    }
    document.addEventListener('click', e => {
        if (e.target.classList.contains('remove-btn')) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCartPage();
            updateCartCount();
        }
    });