document.addEventListener("DOMContentLoaded", () => {
  // ----- Navbar scroll effect -----
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // ----- Preloader effect -----
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  window.addEventListener("load", () => {
    // 0.5s sau khi load xong, ẩn preloader
    setTimeout(() => {
      preloader.classList.add("hide"); // CSS fade-out
      // 1.2s sau khi preloader ẩn, hiển thị nội dung chính
      setTimeout(() => {
        mainContent.classList.add("show"); // CSS fade-in
      }, 1200);
    }, 500);
  });

  // ----- Type effect cho title -----
  const fullTitle = "khhaanslay";
  let currentTitle = "";
  let i = 0;

  function typeTitle() {
    if (i < fullTitle.length) {
      currentTitle += fullTitle.charAt(i);
      document.title = currentTitle;
      i++;
      setTimeout(typeTitle, 300);
    } else {
      // Xóa dần và bắt đầu lại sau 2s
      setTimeout(() => {
        currentTitle = "";
        i = 0;
        typeTitle();
      }, 2000);
    }
  }
  typeTitle();
});
