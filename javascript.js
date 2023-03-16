// sidebar menu
var menubtn = document.getElementById("menubtn")
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")

sidenav.style.right = "-250px";

menubtn.onclick = function(){
    if(sidenav.style.right == "-250px"){
        sidenav.style.right = "0";
        menu.src = "images/close.png";
    }
    else{
        sidenav.style.right = "-250px";
        menu.src = "images/menu.png";
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
speed: 1000,
speedAsDuration: true
});


var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//sidebar menu


//kaart 1

let mijngeojsonlaag = L.geoJSON().addTo(map);

let woonplaatsen = ['Amersfoort','Soesterberg', 'Almere']

fetch(`https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?q=${woonplaatsNaam}&rows=10`)
.then(response => response.json())
then(data => {
//code komt hier
console.log(data.response.docs[0].id)
let id = data.response.docs[0].id
})

const mijnEersteAPIRequest = "https://api.pdok.nl/bzk/locatieserver/search/v3_1/lookup?id=gem-0b2a8b92856b27f86fbd67ab35808ebf&wt=json&fl=*"

fetch(mijnEersteAPIRequest, {})
    .then (response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.response.docs[0].geometrie_ll);
    let geojsonFeature = Terraformer.wktToGeoJSON(data.response.docs[0].geometrie_ll);
    mijngeojsonlaag.addData(geojsonFeature);
    })

    
