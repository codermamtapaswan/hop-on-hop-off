document.addEventListener("DOMContentLoaded", function () {

    // JavaScript to initialize Flatpickr  ============ start =====>

    flatpickr("#datePicker", {
      enableTime: false, 
      dateFormat: "Y-m-d H:i", 
      altInput: true, 
      altFormat: "F j, Y", 
      disableMobile: "true"
    });
  
  
  new Swiper(".popular-tour-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
      nextEl: ".popular-tour-slider .swiper-button-next",
      prevEl: ".popular-tour-slider .swiper-button-prev",
    },
 
    breakpoints: {
      320: {
        slidesPerView: 1,

      },
      480: {
        slidesPerView: 2,

      },
      769: {
        slidesPerView: 3,

      },
      991: {
        slidesPerView: 4,
      }
    }
  });

 new Swiper(".popular-month-tour-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,

      },
      480: {
        slidesPerView: 2,

      },
      769: {
        slidesPerView: 3,

      },
      991: {
        slidesPerView: 4,
      }
    }
  });

 new Swiper(".popular-handpicked-tour-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
    breakpoints: {
      320: {
        slidesPerView: 1,

      },
      480: {
        slidesPerView: 2,

      },
      769: {
        slidesPerView: 3,

      },
      991: {
        slidesPerView: 4,
      }
    }
  });

 new Swiper(".testimonials", {
    slidesPerView: 3,
    autoplay: true,
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


  // Tour Single feature  ..............
  const tourThumbs =  new Swiper(".tours-img", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });


  new Swiper(".tour-feature-img", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: tourThumbs,
    },
  });



  // Tour Single page  tab
  window.addEventListener("scroll", onScroll);

  function onScroll() {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    document.querySelectorAll(".tour-tab a").forEach((currLink) => {
      const refElement = document.querySelector(currLink.getAttribute("href"));
      if (
        refElement.offsetTop - 0 <= scrollPos &&
        refElement.offsetTop + refElement.offsetHeight > scrollPos
      ) {
        document.querySelectorAll(".tour-tab a").forEach((link) => {
          link.classList.remove("active");
        });
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    });
  }

document.querySelectorAll(".tour-single-content a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const currentId = link.getAttribute("href");
    setTimeout(() => {
      window.scrollTo({
        top: document.querySelector(currentId).offsetTop - 50,
        behavior: "smooth" // To match the behavior of animate with duration 0
      });
    }, 0);
  });
});


  // Scroll to top   ============ start =====>

  const scrollTopBtn = document.getElementById("scroll_to_top");

  window.addEventListener('scroll', function () {
     scrollTopBtn.classList.toggle("show", window.scrollY > 20);

  });

  scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });



 });  // Dcumnet Script  ============ End =====> 










