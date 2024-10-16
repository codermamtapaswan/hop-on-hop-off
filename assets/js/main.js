document.addEventListener("DOMContentLoaded", function () {

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop:true,
    autoplay:true,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      
      },
      480: {
        slidesPerView: 2,
      
      },
      769: {
        slidesPerView: 4,
      }
    }
  });


  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      
      },
      480: {
        slidesPerView: 2,
      
      },
      769: {
        slidesPerView: 4,
      }
    }
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      
      },
      480: {
        slidesPerView: 2,
      
      },
      769: {
        slidesPerView: 4,
      }
    }
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    autoplay:true,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      
      },
      480: {
        slidesPerView: 2,
      
      },
      769: {
        slidesPerView: 3,
      }
    }
  });



  // JavaScript to initialize Flatpickr
  flatpickr("#datePicker", {
      enableTime: true, // Enable time selection
      dateFormat: "Y-m-d H:i", // Format of the date
      altInput: true, // Use an alternate input field
      altFormat: "F j, Y", // Human-friendly format
  });



    // Scroll to top   ============ start =====>

      let mybutton = document.getElementById("scroll_to_top");
      window.onscroll = function () {
          scrollFunction();
      };
  
      function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              mybutton.classList.toggle('active');
          }
      }
      function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
      }
      mybutton.addEventListener("click", topFunction);
  


});


