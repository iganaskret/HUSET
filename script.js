let locations = document.querySelector(".location");
const genre = document.querySelector(".genre");
const date = document.querySelector(".date");
const locationMenu = document.querySelector("#location-menu");
const genreMenu = document.querySelector("#genre-menu");
const dateMenu = document.querySelector("#date-menu");
const searchButton = document.querySelector(".findEvents");


locations.addEventListener("click", () => {

    locationMenu.classList.toggle("hide");

    if (!genreMenu.classList.contains("hide")) {
        genreMenu.classList.add("hide");
    }
    if (!dateMenu.classList.contains("hide")) {
        dateMenu.classList.add("hide");
    }
      searchButton.style.display="block";
});

genre.addEventListener("click", () => {
    genreMenu.classList.toggle("hide");
    if (!locationMenu.classList.contains("hide")) {
        locationMenu.classList.add("hide");
    }
    if (!dateMenu.classList.contains("hide")) {
        dateMenu.classList.add("hide");
    }
    searchButton.style.display="block";
});

date.addEventListener("click", () => {
    dateMenu.classList.toggle("hide");
    if (!locationMenu.classList.contains("hide")) {
        locationMenu.classList.add("hide");}
        if (!genreMenu.classList.contains("hide")) {
            genreMenu.classList.add("hide");

        }

    searchButton.style.display="block";
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
