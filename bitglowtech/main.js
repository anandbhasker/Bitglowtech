document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector('.submit-btn');
    const status = document.getElementById('form-status');
    

    submitBtn.disabled = true;
    submitBtn.value = 'Sending...';
    
    try {
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: new FormData(e.target),
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            status.innerHTML = 'Thanks for your message! We\'ll contact you soon.';
            status.style.color = '#04df42'; 
            e.target.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        status.innerHTML = 'Oops! There was a problem. Please try again later.';
        status.style.color = '#e43f5a'; 
    } finally {
        submitBtn.disabled = false;
        submitBtn.value = 'Submit';
        setTimeout(() => status.innerHTML = '', 5000); 
    }
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
    
    // Optional: Reset after 24 hours
    setInterval(() => {
      localStorage.removeItem('bannerClosed');
    }, 86400000);
  });