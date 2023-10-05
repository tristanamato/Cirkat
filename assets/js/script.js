// Burger animation on click

const dropDownBtn = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navTransparent = document.querySelector('.nav-transparent');
const navbarHeightPx = 50;

window.onload = function () {
    
  dropDownBtn.addEventListener('click', ()=> {
    dropDownBtn.classList.toggle('is-active');

    
    if (dropDownBtn.classList.contains('is-active')) {
      console.log("burger is active");
      setNavBackgroundVisibility(true);
    }
    else {
      console.log("burger not active");
      setNavBackgroundVisibility(displayWhiteNav);
    }
  })  
}


// End of burger animation

// Slide up and down animation for dropdown menu

const dropDownMenu = document.querySelector('.dropdown-menu');
const slideDown = element => element.style.height = `${element.scrollHeight}px`;
const slideUp = element => element.style.height = 0;
let navBarHeightOnLoad = dropDownMenu.style.height = '0px';

dropDownBtn.addEventListener('click', () => {
    
    if(dropDownMenu.style.height === '0px'){
        slideDown(dropDownMenu);     
    }
    else {
        slideUp(dropDownMenu);        
    }       
})

document.addEventListener('click', function(e) {
  if (!nav.contains(e.target)) {
    slideUp(dropDownMenu);
    dropDownBtn.classList.remove('is-active');
  }
})

// End of navbar slide animation