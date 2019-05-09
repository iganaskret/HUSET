const baseLink = "https://andreamakarova.dk/kea/wp-huset/wp-json/wp/v2/events/";

const params = new URLSearchParams(window.location.search);
const eventID = params.get("id");

fetch(baseLink + eventID + "?_embed").then(e => e.json()).then(showEvents);

function showEvents(data) {
    console.log(data);
    document.querySelector("h1.eventName").textContent = data.title.rendered;
    document.querySelector("h2.eventDate").textContent = data.event_date;
    document.querySelector(".genre").textContent = "Genre: " + data.event_genre;
    document.querySelector(".eventContent").innerHTML = data.content.rendered;

    if (data.support !== "") {
        document.querySelector(".support").textContent = "Support: " + data.support;
    };

     document.querySelector(".eventLocation").textContent = data.event_location;

      if (data.country !== "") {
        document.querySelector(".country").textContent = "Country: " + data.country;
    };

     if (data.ticket_price !== "0") {
        document.querySelector(".eventPrice").textContent = data.ticket_price + " dkk";
    }
    else {
        document.querySelector(".eventPrice").textContent = "free";
    };

    document.querySelector(".eventLocation").textContent = data.event_location;

    document.querySelector("img").src = data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

};
