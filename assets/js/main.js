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
      nextEl: ".month .swiper-button-next",
      prevEl: ".month .swiper-button-prev",
    },
    pagination: {
      el: '.month .swiper-pagination',
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
      nextEl: ".hanpicked .swiper-button-next",
      prevEl: ".hanpicked .swiper-button-prev",
    },
    pagination: {
      el: '.hanpicked .swiper-pagination',
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
  const tourThumbs = new Swiper(".tours-img", {
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
      nextEl: ".tour-feature-img .swiper-button-next",
      prevEl: ".tour-feature-img .swiper-button-prev",
    },
    thumbs: {
      swiper: tourThumbs,
    },
  });



  // Tour Single page  tab
  window.addEventListener("scroll", highlightActiveTab);

  function highlightActiveTab() {
    const scrollPos = window.scrollY + 1;

    document.querySelectorAll(".tour-tab a").forEach((link) => {
      const refElement = document.querySelector(link.getAttribute("href"));

      if (refElement.offsetTop <= scrollPos &&
        refElement.offsetTop + refElement.offsetHeight > scrollPos) {
        activateLink(link);
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Helper function to activate the current link
  function activateLink(activeLink) {
    document.querySelectorAll(".tour-tab a").forEach((link) => link.classList.remove("active"));
    activeLink.classList.add("active");
  }

  // Smooth scroll for internal links
  document.querySelectorAll(".tour-single-content a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor click behavior

      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 10,
          behavior: "smooth",
        });
      }
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










