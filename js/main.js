// markers y rutas a mostrar en el mapa
import Markers from "./Markers.js";
import Directions from "./Directions.js";
//funciones 
import {calcRoute, getCurrentLocation} from './funtions.js';
//variable de mapa
let map;
//inicializar el mapa
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
    const marker = new google.maps.Marker({
      title: "marcador",
      icon: "../images/punto.png",
      position: item.position,
      map: map,
      zIndex: 1,
    });
    // mostrar infowindows
    const popup = new google.maps.InfoWindow({
      content: item.info,
      zIndex: 10,
      maxWidth: 250,
    });
    //desktop events
    marker.addListener("mouseover", () => {
      popup.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
    marker.addListener("mouseout", () => {
      // no eliminar inmediatamente
      setTimeout(() => {
        popup.close();
      }, 10000); 
    });
    //mobile events
    marker.addListener("click", () => {
      popup.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
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
      Directions[e.target.name].forEach(item => {
        item.render.setDirections({routes: []})
      })
    }
  });
});

//cargar mapa cuando la pagina termine de renderizar
window.onload = initMap();

//obtener ruta actual 
getCurrentLocation(map)