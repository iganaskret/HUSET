// FETCHING 
let myLink = "https://andreamakarova.dk/kea/wp-huset/wp-json/wp/v2/";
const template = document.querySelector("template").content;
const parent = document.querySelector("main");
const catID = urlParms.get("cat");


function loadData(){
fetch(myLink + "events/categories=music&_embed").then(e => e.json()).then(show);

}

function show(data){
data.forEach(post => {
    console.log(post);
    //clone
    const clone = template.cloneNode(true);
    //populate
    const h1 = clone.querySelector("h1");
    const h2 = clone.querySelector("h2");
    const img = clone.querySelector("img");
    const location = clone.querySelector(".location");
    const price = clone.querySelector(".price");
    h1.textContent = post.title.rendered;
    h2.innerHTML =  post.event_date;
    location.innerHTML = post.location;
    price.innerHTML = post.ticket_price + " dkk";
    img.src = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    //append
    parent.appendChild(clone);
}
);
}

loadData(myLink);
