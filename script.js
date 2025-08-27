document.addEventListener("DOMContentLoaded", function () {
  // Navbar Show/Hide on Scroll
  const navbar = document.getElementById("mainNavbar");
  const heroSection = document.querySelector(".hero");

  if (navbar && heroSection) {
    window.addEventListener("scroll", () => {
      const heroSectionHeight = heroSection.offsetHeight;

      if (window.scrollY > heroSectionHeight - 50) {
        navbar.classList.remove("hidden");
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("hidden");
      }
    });
  }

  // Slide-in from Right Animation
  const slideInRightElements = document.querySelectorAll(".slide-in-right");
  const slideInRightObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          slideInRightObserver.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.1 }
  );

  slideInRightElements.forEach((el) => slideInRightObserver.observe(el));

  // Slide-in from Left Animation
  const slideInLeftElements = document.querySelectorAll(".slide-in-left");
  const slideInLeftObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          slideInLeftObserver.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.1 }
  );

  slideInLeftElements.forEach((el) => slideInLeftObserver.observe(el));

  // Slide-up Animation
  const slideUpElements = document.querySelectorAll(".slide-up");
  const slideUpObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          slideUpObserver.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.2 }
  );

  slideUpElements.forEach((el) => slideUpObserver.observe(el));
});

const slidingBoxes = document.querySelectorAll('.slide-in');

const slideObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

slidingBoxes.forEach(box => slideObserver.observe(box));


  
 
  


