// markers y rutas a mostrar en el mapa
import Markers from "./Markers.js";
import Directions from "./Directions.js";
//funciones
import { calcRoute, createMarkers, getCurrentLocation } from "./funtions.js";
//variable de mapa
let map;
//inicializar el mapa

function initMap() {
  const options = {
    zoom: 13,
    center: new google.maps.LatLng(20.674457, -103.357756),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapId: "9da2dff3f618f30f",
    clickableIcons: true,
    disableDoubleClickZoom: false,
  };
  map = new google.maps.Map(document.getElementById("map"), options);
  //aqui hacemos los marcadores
  Markers.forEach((item) => {
    createMarkers(item, map);
    if (item.type === "principal") {
      item.marker.setVisible(true);
    }
  });

}
const checkboxs = document.querySelectorAll("input[type=checkbox]");

//enlazar rutas con los checkboxs
checkboxs.forEach((item) => {
  item.addEventListener("change", (e) => {
    if (e.target.checked) {
      Directions[e.target.name].forEach((item) => {
        calcRoute(item, map);
      });
    } else {
      Directions[e.target.name].forEach((item) => {
        item.render.setDirections({ routes: [] });
      });
    }
  });
});

//cargar mapa cuando la pagina termine de renderizar
window.onload = initMap();

//obtener ruta actual
setInterval(() => {
  getCurrentLocation(map);
},10000)

//poligino en los puntos principales
let value = [
  { lat: 20.679619057168072, lng: -103.33874617889997},
  { lat: 20.678294091641014, lng: -103.33801661807401},
  { lat: 20.675403217622815, lng: -103.3378449567032},
  { lat: 20.67419867053551, lng: -103.33900367095622},
  { lat: 20.674038063535193, lng: -103.37114726264176},
  { lat: 20.67543245822409, lng: -103.37223502019283},
  { lat: 20.677274353655744, lng: -103.37217909179707},
  { lat: 20.678735748101698, lng: -103.37088977058553},
];
let poligon = new google.maps.Polygon({
  paths: value,
  strokeColor: "#000f",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#000f",
  fillOpacity: 0,
});
poligon.setMap(map);
//puntos por zoom
map.addListener("zoom_changed", () => {
  if (map.getZoom() >= 14) {
    Markers.forEach((item) => {
      if (item.type === "secundario") {
        item.marker.setVisible(true);
      }
    });
  } else {
    Markers.forEach((item) => {
      if (item.type === "secundario") {
        item.marker.setVisible(false);
      }
    });
  }
  //condiciones del zoom
  if (map.getZoom() >= 13) {
    poligon.setMap(map)
  } else {
    poligon.setMap(null)
  }
});