const dropdownBox = document.querySelectorAll(".dropdown");
const dropdownBtn = document.querySelectorAll(".dropdownBtn");
const openmenu = document.querySelector('.menu')
const navmenu = document.querySelector('.navbar')
const closemenu = document.querySelector('.close-menu')
 
const container = document.querySelector('.container');

closemenu.addEventListener('click', closeMenu);
openmenu.addEventListener('click', openMenu);



function openMenu() {
    navmenu.style.display = 'block';
}
function closeMenu() {

    navmenu.style.display = 'hidden';
}

 




dropdownBtn.forEach(btn => {
    let style = btn.lastElementChild.style;
    let img = btn.firstElementChild;

    style.display = 'none'
    btn.addEventListener('click', (e) => {



        if (style.display == 'none') {
            style.display = 'flex';
            img.src = './images/icon-arrow-up.svg'

        } else {
            style.display = 'none'
            img.src = './images/icon-arrow-down.svg'
        }
    }

    )
})
