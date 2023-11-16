
const iconToggler = document.getElementById('icon-toggle');
const menu = document.querySelector('#menu');
const closeMenu = document.getElementById('closeMenu');
const lis = document.querySelectorAll('li');
const heading = document.getElementById("animate-heading");

const toggleMenu = () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
};


window.addEventListener('load', function () {
    var chars = document.querySelectorAll('#animate-heading span, #animate-heading br, #animate-heading');
    gsap.from(chars, {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "power1",
    });
});


lis.forEach((li) => {
    li.addEventListener('click', function () {
        toggleMenu();
        console.log('click');
    });
});

iconToggler.addEventListener('click', function () {
    toggleMenu();
    console.log('click');
});

closeMenu.addEventListener('click', function () {
    toggleMenu();
    closeMenu.addEventListener('click', function () {
        toggleMenu();
        console.log('click');

    })
})