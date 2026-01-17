// InstaFolio | mouhatech.com -->
// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

function toggleMenu() {
  const isOpen = !mobileMenu.classList.contains("hidden");

  if (isOpen) {
    // Fermer le menu
    mobileMenu.classList.add("hidden");
    hamburgerIcon.classList.remove("opacity-0");
    closeIcon.classList.add("opacity-0");
  } else {
    // Ouvrir le menu
    mobileMenu.classList.remove("hidden");
    hamburgerIcon.classList.add("opacity-0");
    closeIcon.classList.remove("opacity-0");
  }
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
  hamburgerIcon.classList.remove("opacity-0");
  closeIcon.classList.add("opacity-0");
}

mobileMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});


document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    if (!mobileMenu.classList.contains("hidden")) {
      closeMenu();
    }
  }
});


window.addEventListener("scroll", () => {
  if (!mobileMenu.classList.contains("hidden")) {
    closeMenu();
  }
});
  

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      closeMenu();
    }
  });
});


const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll(".card-hover, .glass-effect").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});


// Form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let nom = document.getElementById("name").value;
    alert("✅ Super, votre message a été envoyé avec succès");
    this.reset();
  });

// funtion Oups
function oups(e) {
  e.preventDefault();
  alert("Oups 😒, les liens ne sont pas encore disponibles.");
  e.stopPropagation();
}

function projet(e) {
  e.preventDefault();
  alert("Oups 😒, le lien n'est pas encore disponible.");
  e.stopPropagation();
}
