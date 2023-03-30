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

//kaart 1 basemap Leaflet

var map1 = L.map('map1').setView([24.9920849, 20.0231886], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map1);

L.tileLayer.wms('http://localhost:8001/geoserver/sim/wfs' , {
    'layers': 'sim:duiklocaties',
    'styles': 'point',
    'srs': 'EPSG:28992',
    'format': 'image/png',
    opacity: 0.5
   }).addTo(map1);




// //kaart1 poging


// let mijngeojsonlaag = L.geoJSON().addTo(map1);

// let woonplaatsen = ['Amersfoort','Soesterberg', 'Almere']

// fetch(`https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?q=${woonplaatsNaam}&rows=10`)
// .then(response => response.json())
// then(data => {
// //code komt hier
// console.log(data.response.docs[0].id)
// let id = data.response.docs[0].id
// })

// const mijnEersteAPIRequest = "https://api.pdok.nl/bzk/locatieserver/search/v3_1/lookup?id=gem-0b2a8b92856b27f86fbd67ab35808ebf&wt=json&fl=*"

// fetch(mijnEersteAPIRequest, {})
//     .then (response => response.json())
//     .then(data => {
//         console.log(data)
//         console.log(data.response.docs[0].geometrie_ll);
//     let geojsonFeature = Terraformer.wktToGeoJSON(data.response.docs[0].geometrie_ll);
//     mijngeojsonlaag.addData(geojsonFeature);
//     })

// var mijnButton = document.createElement("button")
// mijnButton.appendChild('<p>Amsterdam</p>')

//arcgic kaart

require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Legend"
  ], function(esriConfig, WebMap, MapView, ScaleBar, Legend) {

  esriConfig.apiKey = "AAPK0314c65da0f84abb8ef028a130389a79cVjT-pYsoeWYCjFyxgYxjXh1ruuMsA2wydN90s7T65_FsnLSx6GZG9ipAGjuBygh";

  const arcgistest = new WebMap({
    portalItem: {
      id: "e0a537cf834248698c24296fa7131fb9"
    }
  });

    const view = new MapView({
      container: "arcgistest",
      map: arcgistest,
      zoom: 1
    });

  // Maak een nieuwe instantie van de legenda-widget
  const legend = new Legend({
    view: view
  });

  // Voeg de legenda-widget toe aan de kaartweergave
  view.ui.add(legend, "bottom-left");
});   
// eind acrgis kaart

