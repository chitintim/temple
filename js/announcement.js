/* ========================================
   ANNOUNCEMENT BAR COMPONENT
   双威打扪白衣观音庙 
   ======================================== */

// Announcement Bar Component
function createAnnouncementBar() {
    const announcementHTML = `
    <div class="announcement-bar" id="announcementBar">
        <div class="announcement-label">最新资讯</div>
        <div style="flex: 1; overflow: hidden; position: relative; height: 40px;">
            <div class="announcement-content" id="announcementContent">
                <span style="line-height: 40px; padding-left: 20px;">正在加载最新资讯...</span>
            </div>
        </div>
    </div>
    `;
    
    // Insert announcement bar at the beginning of body (it's positioned fixed)
    document.body.insertAdjacentHTML('afterbegin', announcementHTML);
    
    // Load announcements
    loadAnnouncements();
    
    // Handle scroll visibility
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        const navbar = document.getElementById('navbar');
        const announcementBar = document.getElementById('announcementBar');
        
        if (currentScroll > 100) {
            navbar.classList.add('visible');
            // Show announcement bar at the same time as nav, but only if scrolled enough
            if (currentScroll > 150) {
                announcementBar.classList.add('visible');
            }
        } else {
            navbar.classList.remove('visible');
            announcementBar.classList.remove('visible');
        }
        
        lastScroll = currentScroll;
    });
}

// Load announcements from Blogger
function loadAnnouncements() {
    const BLOGGER_SUBDOMAIN = 'tbky';
    
    // Global callback for JSONP
    window.announcementCallback = function(data) {
        const content = document.getElementById('announcementContent');
        
        try {
            const posts = data.feed.entry || [];
            
            if (posts.length === 0) {
                content.innerHTML = '<span class="announcement-item">暂无最新资讯</span>';
                return;
            }
            
            // Create announcement items
            let announcementHTML = '';
            
            posts.slice(0, 5).forEach((entry, index) => {
                const title = entry.title.$t;
                let link = '#';
                
                if (entry.link) {
                    const altLink = entry.link.find(l => l.rel === 'alternate');
                    if (altLink) {
                        const bloggerUrl = altLink.href;
                        link = `blog-post.html?url=${encodeURIComponent(bloggerUrl)}`;
                    }
                }
                
                if (index > 0) {
                    announcementHTML += '<span class="announcement-separator">•</span>';
                }
                
                announcementHTML += `<a href="${link}" class="announcement-item">${title}</a>`;
            });
            
            // Add some padding at the end for better spacing
            announcementHTML += '<span style="padding-right: 100px;"></span>';
            
            // Set content
            content.innerHTML = announcementHTML;
            
        } catch (error) {
            console.error('Error loading announcements:', error);
            content.innerHTML = '<span class="announcement-item">无法加载最新资讯</span>';
        }
    };
    
    // Remove any existing script tags
    const oldScript = document.getElementById('announcement-jsonp');
    if (oldScript) {
        oldScript.remove();
    }
    
    // Create JSONP script tag
    const script = document.createElement('script');
    script.id = 'announcement-jsonp';
    script.src = `https://${BLOGGER_SUBDOMAIN}.blogspot.com/feeds/posts/default?alt=json-in-script&callback=announcementCallback&max-results=5`;
    
    // Handle script loading errors
    script.onerror = function() {
        const content = document.getElementById('announcementContent');
        content.innerHTML = '<span class="announcement-item">无法连接到资讯源</span>';
    };
    
    document.body.appendChild(script);
}

// Initialize announcement bar only on index page
const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
if (currentPage === 'index' || currentPage === '') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            createAnnouncementBar();
            // Reload announcements every 5 minutes
            setInterval(loadAnnouncements, 300000);
        });
    } else {
        createAnnouncementBar();
        // Reload announcements every 5 minutes
        setInterval(loadAnnouncements, 300000);
    }
}