
fetch("http://localhost:5500/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message }),
});

document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('contactBanner');
    const closeBtn = document.getElementById('closeBanner');
    
    // Check localStorage for banner state
    if(localStorage.getItem('bannerClosed') !== 'true') {
      setTimeout(() => {
        banner.style.display = 'block';
      }, 3000); // Show after 3 seconds
    }
  
    // Close functionality
    closeBtn.addEventListener('click', function() {
      banner.classList.add('hidden');
      localStorage.setItem('bannerClosed', 'true');
    });
    
    
    setInterval(() => {
      localStorage.removeItem('bannerClosed');
    }, 86400000);
  });