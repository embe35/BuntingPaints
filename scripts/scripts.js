// off screen menu

const menuButton = document.querySelector('.menu-button');

const offScreenMenu = document.querySelector('.off-screen-menu');

menuButton.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
})

// menu accordion

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

// copyright current year

document.getElementById("year");
document.getElementById("year").innerHTML = new Date().getFullYear();