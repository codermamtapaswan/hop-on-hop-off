document.addEventListener("DOMContentLoaded", function () {

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,
    autoplay: true,
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
        slidesPerView: 3,

      },
      991: {
        slidesPerView: 4,
      }
    }
  });

  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
        // If we need pagination
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

  var swiper = new Swiper(".mySwiper2", {
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
        slidesPerView: 3,

      },
      991: {
        slidesPerView: 4,
      }
    }
  });

  var swiper = new Swiper(".mySwiper3", {
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
  var swiper = new Swiper(".tours-img", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".tour-feature-img", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });



  // JavaScript to initialize Flatpickr
  flatpickr("#datePicker", {
    enableTime: false, // Enable time selection
    dateFormat: "Y-m-d H:i", // Format of the date
    altInput: true, // Use an alternate input field
    altFormat: "F j, Y", // Human-friendly format
    disableMobile: "true"
  });

  // Tour Single page  tab
  window.addEventListener("scroll", onScroll);

  function onScroll() {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    document.querySelectorAll(".tour-tab  a").forEach((currLink) => {
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
        behavior: "instant" // To match the behavior of animate with duration 0
      });
    }, 0);
  });
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










