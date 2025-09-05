/* ===== PC Version (3D Book) ===== */
const pageTurnBtns = document.querySelectorAll(".nextprev-btn");
pageTurnBtns.forEach((el) => {
  el.addEventListener("click", () => {
    let pageTurnId = el.getAttribute("data-page");
    document.getElementById(pageTurnId).classList.toggle("turn");
    setTimeout(() => {
      el.style.zIndex = el.style.zIndex === "1" ? "2" : "1";
    }, 500);
  });
});

/* ===== Mobile Version (Flat Pages) ===== */
const mobilePages = document.querySelectorAll(".mobile-page");
let currentPage = 0;

function showPage(index) {
  mobilePages.forEach((page, i) => {
    page.classList.remove("active");
    if (i === index) page.classList.add("active");
  });
}

document.querySelectorAll(".nav-btn.next").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentPage < mobilePages.length - 1) currentPage++;
    showPage(currentPage);
  });
});
document.querySelectorAll(".nav-btn.prev").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentPage > 0) currentPage--;
    showPage(currentPage);
  });
});

showPage(currentPage);
