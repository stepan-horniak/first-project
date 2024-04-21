function burger (){
    const burgerBorder = document.querySelector('.header-burger');
    const burgerList = document.querySelector('.header__header-nav');
    const burgerVrapper = document.querySelector('.header__nav-wrapper');
    const burgerlist = document.querySelector('.header-nav__list');
    
    burgerBorder.addEventListener('click', function (e){
        burgerBorder.classList.toggle('active')
        burgerList.classList.toggle('active')
        burgerVrapper.classList.toggle('active')
        burgerlist.classList.toggle('active')
    
    })
}
burger()


document.addEventListener("DOMContentLoaded", function() {
    var blocks = document.querySelectorAll(".animated");
  
    window.addEventListener("scroll", function() {
      blocks.forEach(function(block) {
        var bounding = block.getBoundingClientRect();
        if (
          bounding.top >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
          block.classList.add("visible");
        }
      });
    });
  });