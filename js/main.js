// markers y rutas a mostrar en el mapa
import Markers from "./Markers.js";
import Directions from "./Directions.js";
//funciones
import { calcRoute, createMarkers, getCurrentLocation } from "./funtions.js";
//variable de mapa
let map;
//inicializar el mapa
let currentValue = 1;
function initMap() {
  const options = {
    zoom: 12,
    center: new google.maps.LatLng(20.62975803818514, -103.34718294688588),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapId: "9da2dff3f618f30f",
    clickableIcons: true,
    disableDoubleClickZoom: false,
  };
  map = new google.maps.Map(document.getElementById("map"), options);
  //aqui hacemos los marcadores
  Markers.forEach((item) => {
      createMarkers(item, map)
      if (item.type === 'principal') {
        item.marker.setVisible(true);
      }
  });
  currentValue++;
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
getCurrentLocation(map);

//puntos por zoom
map.addListener("zoom_changed", (e) => {
  if (map.getZoom() >= 14) {
    Markers.forEach(item => {
        if (item.type === 'secundario') {
          item.marker.setVisible(true)
        }
    }) 
  } else {
    Markers.forEach(item => {
      if (item.type === 'secundario') {
        item.marker.setVisible(false)
      }
    })
  }
});
Markers