document.addEventListener("DOMContentLoaded", () => {
  // Tạo phần tử con trỏ nếu chưa có
  let cursor = document.querySelector(".custom-cursor");
  if (!cursor) {
    cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);
  }

  // Di chuyển con trỏ theo chuột
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  // Khi rê chuột vào phần có thể click
  document.querySelectorAll("a, button, .menu-item, input, .clickable").forEach(el => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("clickable");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("clickable");
    });
  });

  // Hiệu ứng phóng – thu khi bấm chuột
  document.addEventListener("mousedown", () => {
    cursor.classList.add("active");
  });
  document.addEventListener("mouseup", () => {
    setTimeout(() => cursor.classList.remove("active"), 100);
  });
});
