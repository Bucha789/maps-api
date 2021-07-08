import Markers from "./Markers.js"; //este manda a llamar el archivo donde tienes los marcadores, si quieres modificarlos tienes que ir al archivo de markers
import Directions from "./Directions.js"; //este manda a llamar el archivo donde tienes las rutas, si quieres modificarlo ve a el

let map; // la variable que declara el mapa
let directionsService = new google.maps.DirectionsService(); //manda a llamar el objeto que te permite buscar la ruta

//funcion que inicializa el mapa
function initMap() {
  const options = {
    // objeto que va dentro de los parametros que crean el mapa
    zoom: 12,
    center: new google.maps.LatLng(20.62975803818514, -103.34718294688588),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapId: "9da2dff3f618f30f",
    clickableIcons: true,
    disableDoubleClickZoom: false,
  };
  map = new google.maps.Map(document.getElementById("map"), options); //aqui se genera el mapa, ya sabes: donde y cuales son las opciones

  //aqui hacemos los marcadores
  Markers.forEach((item) => {
    // hacemos un ciclo en ves de estar poniendo uno por uno
    const marker = new google.maps.Marker({
      title: "marcador",
      icon: "../images/punto.png",
      position: item.position,
      map: map,
      zIndex: 1,
    });
    const popup = new google.maps.InfoWindow({
      //aqui a cada marcador le ponemos su infowindow
      content: item.info,
      zIndex: 10,
      maxWidth: 250,
    });
    marker.addListener("mouseover", () => {
      //en esta sección ponemos lo del mouseOver y lo de mouse Out, a modo que se vea como si fuera un hover jaja
      popup.open({
        //una cosa es declarar el infowindow y otra renderizarlo. Aqui lo renderizamos
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
    marker.addListener("mouseout", () => {
      setTimeout(() => {
        //es para hacer que el hover se mantenga un cierto tiempo
        popup.close(); // aqui lo cerramos
      }, 10000); // aqui es donde le decimos cuanto quiero que tarde
    });
  });
}
//funcion que muestra las rutas
function calcRoute({ positionA, positionB, render }) {
  //recibe como parametros el origen y el destino y el render
  render.setMap(map); //le decimos a quien renderiza, las rutas en donde lo debe de hacer
  var request = {
    //objeto que se va a mandar a llamar
    origin: positionA, //aqui se meten los parametros
    destination: positionB,
    travelMode: "TRANSIT", //esto es importante jaja... aqui le dices como es que quieres llegar le puse transito para que mostrara las rutas como las queríamos
  };
  directionsService.route(request, function (result, status) {
    //marcamos la ruta, donde y que hacer después con ella
    if (status == "OK") {
      render.setDirections(result); // si todo salió bien la renderizamos
    }
  });
}

const checkboxs = document.querySelectorAll("input[type=checkbox]"); // es una manera de traer elementos del DOM mas fácil, trae todos los checkbox

checkboxs.forEach((item) => {
  // como es una nodelist le hacemos un ciclo para a cada uno agregarle un evento, el de cambio
  item.addEventListener("change", (e) => {
    if (e.target.checked) {
      // evalua si esta marcado
      Directions[e.target.name].forEach((item) => { //ahora como es un array de posiciones lo que va a hacer es recorrerlo para cada elemento del array se mande a llamar
        calcRoute(item); // ya después de todo el desmadre, mandas a llamar la funcion que renderiza la ruta con la tenga coincidencia el nombre
      });
    } else {
      Directions[e.target.name].forEach(item => { //lo mismo, un ciclo para que se desrendericen las rutas 
        item.render.setDirections({routes: []})
      }) // si no el checkbox esta desmarcado no renderices nada, le digo que de las direciones busque el objeto con el nombre y a render le quite la renderización
    }
  });
});

window.onload = initMap(); // cuando cargue la página manda a llamar la funcion que crea el mapa
