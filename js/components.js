/* ========================================
   REUSABLE COMPONENTS
   双威打扪白衣观音庙 
   ======================================== */

// Navigation Component
function createNavigation() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const isIndexPage = currentPage === 'index' || currentPage === '';
    
    // Adjust navigation links for index page
    const homeLink = isIndexPage ? '#hero' : 'index.html';
    
    const navHTML = `
    <nav class="nav" id="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">
                <img src="images/temple-logo.png" alt="Logo">
                <span class="nav-logo-text">双威打扪白衣观音庙</span>
            </a>
            
            <ul class="nav-menu" id="navMenu">
                <li><a href="${homeLink}" class="nav-link" data-page="index">首页</a></li>
                <li><a href="history.html" class="nav-link" data-page="history">观音庙历史</a></li>
                <li><a href="index.html#services" class="nav-link">祈福服务</a></li>
                <li><a href="index.html#events" class="nav-link">活动日程</a></li>
                <li><a href="index.html#gallery" class="nav-link">相册</a></li>
                <li><a href="blog-external.html" class="nav-link" data-page="blog">庙务资讯</a></li>
                <li><a href="index.html#contact" class="nav-link">联系方式</a></li>
            </ul>
            
            <button class="mobile-menu-toggle" id="mobileMenuToggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
    `;
    
    // For index page, insert navigation after hero section
    if (isIndexPage) {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.insertAdjacentHTML('afterend', navHTML);
        } else {
            document.body.insertAdjacentHTML('afterbegin', navHTML);
        }
    } else {
        // For other pages, insert at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }
    
    // Set active link based on current page
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    
    navLinks.forEach(link => {
        if (link.dataset.page === currentPage || 
            (currentPage === 'blog-external' && link.dataset.page === 'blog') ||
            (currentPage === 'blog-post' && link.dataset.page === 'blog')) {
            link.classList.add('active');
        }
    });
}

// Footer Component
function createFooter() {
    const footerHTML = `
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>双威打扪白衣观音庙</h3>
                <p>Sunway Tambun Kwanyin Temple</p>
                <p>慈悲为怀 · 普度众生</p>
            </div>
            <div class="footer-section">
                <h3>联系方式</h3>
                <p>地址：Lot 12345, Jalan Tambun, 31400 Ipoh, Perak</p>
                <p>电话：05-123 4567</p>
                <p>电邮：info@tambunkuanyintemple.org</p>
            </div>
            <div class="footer-section">
                <h3>开放时间</h3>
                <p>每日 Daily: 8:00 AM - 6:00 PM</p>
                <p>初一十五 1st & 15th: 7:00 AM - 8:00 PM</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 双威打扪白衣观音庙 Sunway Tambun Kwanyin Temple. All rights reserved.</p>
        </div>
    </footer>
    `;
    
    // Always append footer to the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// WhatsApp Float Button Component
function createWhatsAppButton() {
    const whatsappHTML = `
    <a href="https://wa.me/60123456789" class="whatsapp-float" target="_blank" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
    </a>
    `;
    
    document.body.insertAdjacentHTML('beforeend', whatsappHTML);
}

// Loading Screen Component
function createLoadingScreen() {
    const loadingHTML = `
    <div class="loading-screen" id="loadingScreen">
        <div class="loader">
            <svg class="lotus-loader" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 20 C30 20, 20 40, 20 50 C20 60, 30 80, 50 80 C70 80, 80 60, 80 50 C80 40, 70 20, 50 20 Z" 
                      fill="${getComputedStyle(document.documentElement).getPropertyValue('--temple-burgundy')}" 
                      opacity="0.8"/>
            </svg>
            <div style="margin-top: 1rem; font-family: var(--font-body); color: var(--temple-burgundy);">加载中...</div>
        </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', loadingHTML);
}

// Initialize all components
function initializeComponents() {
    // Create components in order
    createLoadingScreen();
    createNavigation();
    createFooter();
    createWhatsAppButton();
    
    // Initialize mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
    
    // Handle navbar visibility on index page
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const isIndexPage = currentPage === 'index' || currentPage === '';
    
    if (isIndexPage) {
        // Add class to body for index page styling
        document.body.classList.add('index-page');
    }
    
    // Hide loading screen after components are loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                loadingScreen.classList.add('fade-out');
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
        }, 300);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
    initializeComponents();
}