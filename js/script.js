
document.addEventListener("DOMContentLoaded", function(){

  // Quote form submission handler
  const quoteForm = document.getElementById('quoteForm');
  if(quoteForm){
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = {
        form_type: 'quote',
        email: formData.get('email'),
        website: formData.get('website')
      };

      try {
        const response = await fetch('http://localhost:3000', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          alert('Quote request submitted successfully!');
          this.reset();
        } else {
          throw new Error('Failed to submit');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
      }
    });
  }

  const phoneInput = document.querySelector('input[name="phone"]');

  // Contact form submission handler
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const formData = new FormData(this);
      const form_type = formData.get('form_type') || 'contact';
      let data;

      if (form_type === 'grow_business') {
        data = {
          form_type: 'grow_business',
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          website: formData.get('website'),
          message: formData.get('message')
        };
      } else {
        data = {
          form_type: 'contact',
          first_name: formData.get('first_name'),
          last_name: formData.get('last_name'),
          country_code: formData.get('country_code'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          website: formData.get('website'),
          description: formData.get('description')
        };
      }

      const submitBtn = this.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      try {
        const response = await fetch('http://localhost:3000', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          // Hide the form and show success message
          this.style.display = 'none';
          document.getElementById('successMessage').classList.remove('d-none');
        } else {
          throw new Error('Failed to submit');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
      }
    });
  }

  if(phoneInput){
    window.intlTelInput(phoneInput,{
      initialCountry:"in",        
      separateDialCode:false,     
      preferredCountries:["au","in","us","gb"]
    });
  }

  // Dropdown hover for submenus
  document.querySelectorAll('.dropdown-submenu').forEach(function(element) {
    element.addEventListener('mouseenter', function() {
      this.classList.add('show');
      this.querySelector('.dropdown-menu').classList.add('show');
    });
    
    element.addEventListener('mouseleave', function() {
      this.classList.remove('show');
      this.querySelector('.dropdown-menu').classList.remove('show');
    });
  });

});

function showImage(src) {
    document.getElementById("modalImage").src = src;
}

window.addEventListener("scroll", function(){
  let nav = document.querySelector(".custom-navbar");
  if(window.scrollY > 80){
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});

const slider = document.querySelector(".wd-slider");
const overlay = document.querySelector(".wd-after-overlay");

slider.addEventListener("input",function(){
overlay.style.width = this.value + "%";
});



const modal = document.getElementById('videoModal');
const iframe = document.getElementById('heroVideo');

modal.addEventListener('shown.bs.modal', function () {
iframe.src = "https://www.youtube.com/embed/tkqHxXa6nIU?autoplay=1&rel=0&modestbranding=1";
});

modal.addEventListener('hidden.bs.modal', function () {
iframe.src = "https://www.youtube.com/embed/tkqHxXa6nIU";
});











