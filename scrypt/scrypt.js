const burgerBorder = document.querySelector('.header-burger');
console.log(burgerBorder);
burgerBorder.addEventListener('click', function (e){
    burgerBorder.classList.toggle('active')
})