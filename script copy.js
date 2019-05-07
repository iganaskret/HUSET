const position = document.querySelector(".position");
const date = document.querySelector(".date");
const positionMenu = document.querySelector(".position-menu");
const dateMenu = document.querySelector(".date-menu");
const searchButton = document.querySelector(".findEvents");


date.addEventListener("click", () => {
    dateMenu.classList.toggle("hide");
});

position.addEventListener("click", () => {
    positionMenu.classList.toggle("hide");
});


// Open and Close Burger menu //
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    filterButton.style.zIndex=0;
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    setTimeout(()=>{
        filterButton.style.zIndex=1
    }, 500);
}
