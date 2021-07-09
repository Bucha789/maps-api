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
export function getCurrentLocation(map) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      //se manda llamar aquí por el asyncronismo jaja
      let currentLocationMarker = new google.maps.Marker({
        title: "current location",
        icon: "./images/pin.png",
        position: location,
        map: map,
        zIndex: 1,
       });
    })
  } else {
    return {}
  }
}