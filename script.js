// ========== PC Mode (3D Book Effect) ==========
const pages = document.querySelectorAll(".book-page.page-right");
const coverRight = document.querySelector(".cover.cover-right");

let currentPage = 0;

document.querySelectorAll(".nextprev-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const pageId = btn.getAttribute("data-page");
    const page = document.getElementById(pageId);

    if (btn.classList.contains("back")) {
      page.classList.remove("turn");
      currentPage--;
      if (currentPage === 0) coverRight.classList.remove("turn");
    } else {
      page.classList.add("turn");
      currentPage++;
      if (currentPage === 1) coverRight.classList.add("turn");
    }
  });
});

// ปุ่ม Contact Me! → กระโดดไปหน้าสุดท้าย
document.querySelectorAll(".contact-me").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const contactPage = document.getElementById("turn-3");
    contactPage.classList.add("turn");
    coverRight.classList.add("turn");
  });
});

// ========== Mobile Mode (Card Navigation) ==========
if (window.innerWidth <= 768) {
  const sections = document.querySelectorAll(".book .book-page");
  let currentSection = 0;

  // สร้างปุ่ม Next/Prev เฉพาะ Mobile
  sections.forEach((section, index) => {
    const navWrapper = document.createElement("div");
    navWrapper.classList.add("mobile-nav");

    if (index > 0) {
      const prevBtn = document.createElement("button");
      prevBtn.className = "btn mobile-prev";
      prevBtn.innerHTML = "<i class='bx bx-chevron-left'></i> Prev";
      prevBtn.onclick = () => showSection(index - 1);
      navWrapper.appendChild(prevBtn);
    }

    if (index < sections.length - 1) {
      const nextBtn = document.createElement("button");
      nextBtn.className = "btn mobile-next";
      nextBtn.innerHTML = "Next <i class='bx bx-chevron-right'></i>";
      nextBtn.onclick = () => showSection(index + 1);
      navWrapper.appendChild(nextBtn);
    }

    section.appendChild(navWrapper);
  });

  function showSection(index) {
    sections[currentSection].style.display = "none";
    sections[index].style.display = "block";
    currentSection = index;
  }

  // แสดงหน้าแรก
  sections.forEach((s, i) => (s.style.display = i === 0 ? "block" : "none"));
}
