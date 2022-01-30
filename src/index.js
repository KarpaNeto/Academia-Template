const openMenuBtn = document.querySelector('#openBtn');
const closeMenuBtn = document.querySelector('.closeBtn');
const navBar = document.querySelector('.navBar');
const linkActive = document.querySelectorAll('.navLink');
const allPages = document.querySelector('.allPages');
const paginationBtn = document.querySelectorAll('.paginationBtn');
const btn = document.querySelector('.btn');
const about = document.querySelector('.about')
// active navbar links
linkActive.forEach((items, index) => {
  items.addEventListener('click', () => {
    linkActive.forEach(remove => {
      remove.classList.remove('active');
    })
    paginationBtn.forEach(pag_remove => {
      pag_remove.classList.remove('paginationActive');
    })
    paginationBtn[index].classList.add('paginationActive')
    allPages.style.left = -(index * 100) + 'vw';
    items.classList.add('active');
  })
});

// open & close menu
if (openMenuBtn) {
  openMenuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
}
// close menu when click on link
if (linkActive) {
  linkActive.forEach(function (item) {
    item.addEventListener("click", () => {
      navBar.classList.remove("open");
    });
  });
}

// pagination active

paginationBtn.forEach((pag_items, pag_index) => {
  pag_items.addEventListener('click', () => {
    paginationBtn.forEach(pag_remove => {
      pag_remove.classList.remove('paginationActive');
    })
    linkActive.forEach(remove => {
      remove.classList.remove('active');
    })
    linkActive[pag_index].classList.add('active');
    allPages.style.left = -(pag_index * 100) + 'vw';
    pag_items.classList.add('paginationActive')
  })
  btn.addEventListener('click', () => {
    const nextPage = allPages.style.left = '-100vw';
    const pageTwo = getElementById('page2');
    nextPage;
    if (nextPage == '-100vw') {
      paginationBtn.classList.remove('paginationActive')
      pageTwo.classList.add('paginationActive')
    }
  })
})



//link pagination buttons
