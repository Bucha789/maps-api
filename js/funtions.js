//servicio que muestra las rutas
let directionsService = new google.maps.DirectionsService();
//funcion para mostrar las rutas
export function calcRoute({ positionA, positionB, render, type }, map) {
  render.setMap(map);
  var request = {
    origin: positionA,
    destination: positionB,
    travelMode: type,
  };
  directionsService.route(request, function (result, status) {
    if (status == "OK") {
      render.setDirections(result);
    }
  });
}
//funcion para encontrar la current location
let currentLocation;
export function getCurrentLocation(map) {
  console.log('funcion cargada');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      //se manda llamar aquí por el asyncronismo jaja
      currentLocation = new google.maps.Marker({
        title: "current location",
        icon: "./images/pin.png",
        position: location,
        map: map,
        zIndex: 1,
      });
    });
  } else {
    return {};
  }
}
//crear markers
export function createMarkers(item, map) {
  item.marker = new google.maps.Marker({
    title: "marcador",
    icon: "./images/punto.png",
    position: item.position,
    map: map,
    zIndex: 1,
  });
  //no aparezceran a menos que cumplan la condicion
  item.marker.setVisible(false)
  // mostrar infowindows
  item.popup = new google.maps.InfoWindow({
    content: item.info,
    zIndex: 10,
    maxWidth: 300,
  });
  //desktop events
  item.marker.addListener("mouseover", () => {
    item.popup.open({
      anchor: item.marker,
      map,
      shouldFocus: true,
    });
    // console.log(e)
  });
    //eliminar infowindow con el mismo infowindow
  item.popup.addListener("domready", (e) => {
    // no eliminar inmediatamente
    //elementos que son los ultimos que salen con el mouseout
    var contentMapElement = document.querySelector('.gm-style-iw.gm-style-iw-c');
    var titleElement = document.querySelector('.contentTxt > h2')
    var infoWindowElement = document.querySelector(".gm-style-iw-d");
    setTimeout(() => {
      contentMapElement.addEventListener('mouseout', (e) => {
        console.log(e.target)
        if (e.target === infoWindowElement || e.target === contentMapElement || e.target === titleElement) {
          item.popup.close()
        }
      })
    },1000)
  })
  //mobile events
  item.marker.addListener("click", () => {
    item.popup.open({
      anchor: item.marker,
      map,
      shouldFocus: false,
    });
  });
}