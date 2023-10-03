const dropDownBtn = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navTransparent = document.querySelector('.nav-transparent');
const navbarHeightPx = 50;
let displayWhiteNav = false;
function setNavBackgroundVisibility(isVisible) {
    if (isVisible) {
      nav.classList.remove('nav-transparent'); 
      nav.classList.add('nav-visible');
    } else {
      nav.classList.remove('nav-visible');   
      nav.classList.add('nav-transparent');
    }
}
window.onload = function () {
    
  dropDownBtn.addEventListener('click', ()=> {
    dropDownBtn.classList.toggle('is-active');
    
    if (dropDownBtn.classList.contains('is-active')) {
      console.log("burger is active");
      setNavBackgroundVisibility(true);
      // nav.classList.remove('nav-transparent'); 
      // nav.classList.add('nav-visible');
    }
    else {
      console.log("burger not active");
      setNavBackgroundVisibility(displayWhiteNav);
      // same as this : 
      // if (displayWhiteNav) {
      //   setNavBackgroundVisibility(true);
      // }
      // else {
      //   setNavBackgroundVisibility(false);
      // }
    }
  })  
}
// End of burger animation
// Nav bar scroll animation to remove background
window.addEventListener('scroll', () => {
    
displayWhiteNav = (document.documentElement.scrollTop > navbarHeightPx);
setNavBackgroundVisibility(displayWhiteNav);
  //same as this :
  //  if (document.documentElement.scrollTop > navbarHeightPx) {
  //   setNavBackgroundVisibility(displayWhiteNav);
  //   displayWhiteNav = true;  
  //  } else {
  //    displayWhiteNav = false;
  //    setNavBackgroundVisibility(displayWhiteNav);
  //  }
});
// End of nav bar scroll animation
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
// End of navbar slide animation
