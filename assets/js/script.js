// Run JS only after the HTML has loaded
document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1) MOBILE NAV (HAMBURGER)
  // =========================
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  // Opens/closes the mobile menu
  function toggleMenu() {
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  }

  // Close menu (useful after clicking a link)
  function closeMenu() {
    navMenu.classList.remove("active");
    mobileMenu.classList.remove("active");
  }

  // Click to toggle menu
  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", toggleMenu);

    // Optional: allow Enter/Space to toggle (keyboard friendly)
    mobileMenu.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
      }
    });
  }

  // Close menu when any nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // =========================
  // 2) GALLERY LIGHTBOX
  // =========================
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const galleryImages = document.querySelectorAll(".gallery-item img");

  // Open the lightbox and show the clicked image
  function openLightbox(img) {
    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || "Gallery image";

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");

    // Stop the page from scrolling behind the modal
    document.body.style.overflow = "hidden";
  }

  // Close the lightbox and reset
  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;

    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");

    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  // Click an image to open the lightbox
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => openLightbox(img));
  });

  // Close button (X)
  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  // Click outside the image closes the lightbox
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Press Escape to close the lightbox
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // =========================
  // 3) QUICK CHECK
  // =========================
  console.log("Portfolio scripts loaded");
});
