// hamburgerr
const hamburger = document.querySelector('#hamburger')
hamburger.addEventListener('click', function( ){
  hamburger.classList.toggle('hamburger-active');
})

// navbar fixed
window.onscroll = function ( ){
  const header = document.querySelector('header')
  const fixednav = header.offsetTop;

  if(window.pageYOffset > fixednav){
    header.classList.add('navbar-fixed')
  }else {
    header.classList.remove(navbar-fixed)
  }
}