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

    document.querySelector(".eventLocation").textContent = data.event_location;

      if (data.country !== "") {
        document.querySelector(".country").textContent = "Country: " + data.country;
    };


      if (data.director !== "") {
        document.querySelector(".director").textContent = "Director: " + data.director;
    };


      if (data.language !== "") {
        document.querySelector(".language").textContent = "Language: " + data.language;
    };


      if (data.subtitles !== "") {
        document.querySelector(".subtitles").textContent = "Subtitles: " + data.subtitles;
    };

      if (data.duration !== "") {
        document.querySelector(".duration").textContent = data.duration;
    };

       if (data.year !== "") {
        document.querySelector(".year").textContent = "Year: " + data.year;
    };

     if (data.ticket_price !== "0") {
        document.querySelector(".eventPrice").textContent = data.ticket_price + " dkk";
    }
    else {
        document.querySelector(".eventPrice").textContent = "free";
    };


    document.querySelector("img").src = data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;


};


