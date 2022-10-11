let menuButton = document.querySelector('#menu');
let menuContainer = document.querySelector('.menu-container');
let closeButton = document.querySelector('#close-btn');
let menuElements = document.querySelectorAll('.menu-button');

menuButton.addEventListener('click',()=>{
    menuContainer.classList.remove('display-none')
})

closeButton.addEventListener('click',()=>{
    menuContainer.classList.add('display-none');
})

menuElements.forEach((item)=>{
    item.addEventListener('click',()=>{
        menuContainer.classList.add('display-none');
    })
})
