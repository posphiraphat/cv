
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {

        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 2 - index;
            }, 500);

        }else{
            pageTurn.classList.add('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 2 + index;
            }, 500);
        }
    }
});


// contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {

            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            },500);
        }, (index + 1) * 200 + 100)
    });
}


// create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}


// back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();

            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)

    })
}


// opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


// open animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);


pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();

        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)


}) 

// =============================
// 📱 Mobile Page Navigation
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".mobile-page");
  let current = 0;

  if (pages.length > 0) {
    pages[current].classList.add("active");
  }

  function showPage(index) {
    pages.forEach((p, i) => {
      p.classList.toggle("active", i === index);
    });
  }

  document.querySelectorAll(".nav-btn.next").forEach(btn => {
    btn.addEventListener("click", () => {
      if (current < pages.length - 1) {
        current++;
        showPage(current);
      }
    });
  });

  document.querySelectorAll(".nav-btn.prev").forEach(btn => {
    btn.addEventListener("click", () => {
      if (current > 0) {
        current--;
        showPage(current);
      }
    });
  });
});
// ✅ Script ของ PC (Book Flip) อยู่ด้านบน ...

// =============================
// 📱 Mobile Page Navigation
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".mobile-page");
  let current = 0;

  if (pages.length > 0) {
    pages[current].classList.add("active");
  }

  function showPage(index) {
    pages.forEach((p, i) => {
      p.classList.toggle("active", i === index);
    });
  }

  document.querySelectorAll(".nav-btn.next").forEach(btn => {
    btn.addEventListener("click", () => {
      if (current < pages.length - 1) {
        current++;
        showPage(current);
      }
    });
  });

  document.querySelectorAll(".nav-btn.prev").forEach(btn => {
    btn.addEventListener("click", () => {
      if (current > 0) {
        current--;
        showPage(current);
      }
    });
  });
});
// Mobile Page Navigation
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




