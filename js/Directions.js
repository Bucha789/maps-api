//este es el objeto donde tienes que metar las rutas, metelas como las ves
const Directions = {
  trenLigero: [ //ahora a cada ruta que agregues le tienes que dar este formato
    {
      positionA: new google.maps.LatLng(
        20.609974234129677,
        -103.40105250067488
      ),
      positionB: new google.maps.LatLng(
        20.737668431742726,
        -103.35010920343107
      ),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#ff0000" },
      }), //objeto que renderizará la ruta
    },
    {
      positionA: new google.maps.LatLng(
        20.662299715444192,
        -103.27632718718255
      ),
      positionB: new google.maps.LatLng(20.67649594407118, -103.35474055309733),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#ff0000" },
      }), //objeto que renderizará la ruta
    },
    {
      positionA: new google.maps.LatLng(
        20.617436840351203, 
        -103.27936086956518
      ),
      positionB: new google.maps.LatLng(
        20.745130875744206, 
        -103.40753969162017
        ),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#ff0000" },
      }), //objeto que renderizará la ruta
    },
  ], //supongamos que tienes más rutas, simplemente las agregas como un objeto y ya, el código lo hace por ti todo
  macroBus: [ 
    {
      //este nombre es importante, tiene que ser igual aqui como en el html. En la etiqueta input el name debe de ser igual a este
      positionA: new google.maps.LatLng(
        20.608865500868287,
        -103.34429025900974
      ),
      positionB: new google.maps.LatLng(
        20.741044297937492,
        -103.31201792021619
      ),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        hideRouteList: true,
        suppressMarkers: true,
      }), //a cada ruta hay que agregarle uno para que se renderize indenpendientemente y ademas recuerde quien renderiza para así eliminar también
    },
  ], //este solo tiene una ruta pero como te digo le puedes agregar más y va a funcionar
  ciclovia: [ //ahora a cada ruta que agregues le tienes que dar este formato
    {
      positionA: new google.maps.LatLng(
        20.733907094331027, 
        -103.36107084364636
      ),
      positionB: new google.maps.LatLng(
        20.74439593558257, 
        -103.3580272089126
      ),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#0de04d" },
      }), //objeto que renderizará la ruta
    },
    {
      positionA: new google.maps.LatLng(
        20.715530764708667, 
        -103.35471984464333
      ),
      positionB: new google.maps.LatLng(
        20.710352514382752, 
        -103.4069907329377
        ),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#0de04d" },
      }), //objeto que renderizará la ruta
    },
  ],
};

export default Directions; // exportarmos las rutas para mandarlas a llamar

//el llenar todo esto a mano te lo puedes evitar con una función constructora XD
