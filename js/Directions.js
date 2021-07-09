//routes object
const Directions = {
  trenLigero: [
    // Ruta 1
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
      }),
      type: "TRANSIT",
    },
    // Ruta 2
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
      }), 
      type: "TRANSIT",
    },
    //Ruta 3
    {
      positionA: new google.maps.LatLng(20.74148564294538, -103.40734348076282),
      positionB: new google.maps.LatLng(
        20.623367032744085,
        -103.28528535339396
      ),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#ff0000" },
      }),
      type: "TRANSIT",
    },
  ],
  macroBus: [
    {
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
      }),
      type: "TRANSIT",
    },
  ], 
  ciclovia: [
    //Ruta 1
    {
      positionA: new google.maps.LatLng(
        20.733907094331027,
        -103.36107084364636
      ),
      positionB: new google.maps.LatLng(20.74439593558257, -103.3580272089126),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#0de04d" },
      }),
      type: "BICYCLING",
    },
    // Ruta 2
    {
      positionA: new google.maps.LatLng(
        20.715530764708667,
        -103.35471984464333
      ),
      positionB: new google.maps.LatLng(20.710352514382752, -103.4069907329377),
      render: new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#0de04d" },
      }), 
      type: "BICYCLING",
    },
  ],
};

export default Directions;
