const baseLink = "https://andreamakarova.dk/kea/wp-huset/wp-json/wp/v2/events/";

const params = new URLSearchParams(window.location.search);
const eventID = params.get("id");

fetch(baseLink + eventID + "?_embed").then(e => e.json()).then(showEvents);

function showEvents(data) {
    console.log(data);
    document.querySelector("h1").textContent = data.title.rendered;
    document.querySelector("h2").textContent = data.event_date;
    document.querySelector(".genre").textContent = "Genre: " + data.event_genre;
    document.querySelector(".eventContent").innerHTML = data.content.rendered;

    document.querySelector(".eventLocation").textContent = data.location;
    document.querySelector(".positions-available").textContent = "Positions available: " + data.positions;

    document.querySelector("img").src = data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;


};
