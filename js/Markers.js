//aqui estarn todos los marcadores es mejor separarlos para mejor visibilidad de código
let n = 1; // esta n la veo innecesaria, cuando andes llenando la información de los markers ve quitando las n para después eliminar esta variable
const Markers = [
  //01//
  {
    'position': new google.maps.LatLng(20.674580304610494, -103.36868103177848), //si haces un ciclo for al array no tiene mucho sentido que pongas las posiciones enumeradas
    'info': `<div id="contentInfoWindow" class="contentMap">
                <div class="contentTxt">
                  <h2>Av. Chapultepec</h2>
                  <div class="contentImg">
                    <img src="../images/11.jpg" title="Chapultepec" />
                    <a href="http://localhost/ulterior/about"target="_blank">Av. Chapultepec</a>
                </div>
                <div class="contentTxt">
                    <p>
                      En esta zona, a toda hora circula un aire que desacelera el paso,
                      invita a la contemplación, abre apetitos gastronómicos, culturales y literarios.
                      Está llena de posibilidades para el día y la noche. Vale la pena tomarse un tiempo,
                      caminar Av. Vallarta desde la Minerva hacia Chapultepec,
                      admirar sus casonas diseñadas por reconocidos arquitectos y descubrir entre sus calles aledañas,
                      tiendas de diseñadores mexicanos que van desde ropa hasta tapetes,
                      diferentes curiosidades, restaurantes, bares y cafés.
                    </p>
                </div>
                <div class="clear"></div>
            </div>` //a puedes utilizar los las comillas francesas para evitar poner muchos slash
            // te recomiendo lo hagas mejor asi para que ya no uses slash ni la n
},
//02//
{
    'position':new google.maps.LatLng(20.674867659470515, -103.35584348882288)
    , 'info':'<div id="contentInfoWindow" class="contentMap">\
                <div class="contentTxt">\
                <h2>Juarez</h2>\
                <div class="contentImg">\
                    <img src=" " title="Juarez"/>\
                    <a href="http://localhost/ulterior/about">Juarez</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//03//
{
    'position':new google.maps.LatLng(20.675224685701135, -103.34700340497662)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Centro Historico</h2>\
                <div class="contentImg">\
                    <img src=" " title="Centro Historico"/>\
                    <a href="http://localhost/ulterior1/about">Centro Historico</a>\
                </div>\
                <div class="contentTxt">\
                <h2>Juarez</h2>\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//04  //
{
    'position':new google.maps.LatLng(20.67541200579239, -103.34133573665966)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>San Juan de Dios</h2>\
                <div class="contentImg">\
                    <img src=" " title="San Juan de Dios"/>\
                    <a href="http://localhost/ulterior1/about">San Juan de Dios</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//05//
{
    'position':new google.maps.LatLng(20.6845797,-103.367393)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Sta. Tere</h2>\
                <div class="contentImg">\
                    <img src=" " title="Sta. Tere"/>\
                    <a href="http://localhost/ulterior1/about">Sta. Tere</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//06//
{
    'position':new google.maps.LatLng(20.7016359,-103.3821756)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Providencia</h2>\
                <div class="contentImg">\
                    <img src=" " title="Providencia"/>\
                    <a href="http://localhost/ulterior1/about">Providencia</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//07//
{
    'position':new google.maps.LatLng(20.701495727072516, -103.3669274534735)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Country</h2>\
                <div class="contentImg">\
                    <img src=" " title="Country"/>\
                    <a href="http://localhost/ulterior1/about">Country</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//08//
{
    'position':new google.maps.LatLng(20.6948808,-103.3520922)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Normal</h2>\
                <div class="contentImg">\
                    <img src=" " title="Normal"/>\
                    <a href="http://localhost/ulterior1/about">Normal</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//09//
{
    'position':new google.maps.LatLng(20.7049997,-103.3303656)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Estadio Jalisco</h2>\
                <div class="contentImg">\
                    <img src=" " title="Estadio Jalisco"/>\
                    <a href="http://localhost/ulterior1/about">Estadio Jalisco</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//10//
{
    'position':new google.maps.LatLng(20.69343786202929, -103.32142442496277)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Centro Medico</h2>\
                <div class="contentImg">\
                    <img src=" " title="Centro Medico"/>\
                    <a href="http://localhost/ulterior1/about">Centro Medico</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//11//
{
    'position':new google.maps.LatLng(20.659507442858764, -103.34896023604607)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Agua Azul</h2>\
                <div class="contentImg">\
                    <img src=" " title="Agua Azul"/>\
                    <a href="http://localhost/ulterior1/about">Agua Azul</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//12//
{
    'position':new google.maps.LatLng(20.674564930729016, -103.38742353143284)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>La Minerva</h2>\
                <div class="contentImg">\
                    <img src=" " title="La Minerva"/>\
                    <a href="http://localhost/ulterior1/about">La Minerva</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//13//
{
    'position':new google.maps.LatLng(20.653341693903705, -103.39162555841908)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Expo Guadalajara</h2>\
                <div class="contentImg">\
                    <img src=" " title="Expo Guadalajara"/>\
                    <a href="http://localhost/ulterior1/about">Expo Guadalajara</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//14//
{
    'position':new google.maps.LatLng(20.650625094651684, -103.40166797376182)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Plaza del Sol</h2>\
                <div class="contentImg">\
                    <img src=" " title="Plaza del Sol"/>\
                    <a href="http://localhost/ulterior1/about">Plaza del Sol</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//15//
{
    'position':new google.maps.LatLng(20.664917692244103, -103.39517470994917)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Chapalita</h2>\
                <div class="contentImg">\
                    <img src=" " title="Chapalita"/>\
                    <a href="http://localhost/ulterior1/about">Chapalita</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//16//
{
    'position':new google.maps.LatLng(20.660253185681935, -103.41869936026865)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>UNIVA</h2>\
                <div class="contentImg">\
                    <img src=" " title="UNIVA"/>\
                    <a href="http://localhost/ulterior1/about">UNIVA</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//17//
{
    'position':new google.maps.LatLng(20.67766941581649, -103.4164524025971)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Los Cubos</h2>\
                <div class="contentImg">\
                    <img src=" " title="Los Cubos"/>\
                    <a href="http://localhost/ulterior1/about">Los Cubos</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//18//
{
    'position':new google.maps.LatLng(20.670554927455814, -103.43902160527274)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Parque Metropolitano</h2>\
                <div class="contentImg">\
                    <img src=" " title="Parque Metropolitano"/>\
                    <a href="http://localhost/ulterior1/about">Parque Metropilitano</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//19//
{
    'position':new google.maps.LatLng(20.677945526927534, -103.37996717376147)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>UAG</h2>\
                <div class="contentImg">\
                    <img src=" " title="UAG"/>\
                    <a href="http://localhost/ulterior/ulterior1/about">UAG</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//20//
{
    'position':new google.maps.LatLng(20.71561253699452, -103.41990216967471)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Puerta de Hieroo</h2>\
                <div class="contentImg">\
                    <img src=" " title="Puerta de Hierro"/>\
                    <a href="http://localhost/ulterior1/about">Puerta de Hierro</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//21//
{
    'position':new google.maps.LatLng(20.709038343843467, -103.39360534193608)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Colomos</h2>\
                <div class="contentImg">\
                    <img src=" " title="Colomos"/>\
                    <a href="http://localhost/ulterior1/about">Colomos</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//22//
{
    'position':new google.maps.LatLng(20.72429667933054, -103.38842205131213)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Zapopan Centro</h2>\
                <div class="contentImg">\
                    <img src=" " title="Zapopan Centro"/>\
                    <a href="http://localhost/ulterior1/about">Zapopan Centro</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//23//
{
    'position':new google.maps.LatLng(20.750874010505058, -103.37336513143188)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Belenes</h2>\
                <div class="contentImg">\
                    <img src=" " title="Belenes"/>\
                    <a href="http://localhost/ulterior1/about">Belenes</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//24//
{
    'position':new google.maps.LatLng(20.745944875803477, -103.31003038251566)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Mirador</h2>\
                <div class="contentImg">\
                    <img src=" " title="Mirador"/>\
                    <a href="http://localhost/ulterior1/about">Mirador</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//25//
{
    'position':new google.maps.LatLng(20.677499400186154, -103.32577716105082)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Oblatos</h2>\
                <div class="contentImg">\
                    <img src=" " title="Oblatos"/>\
                    <a href="http://localhost/ulterior1/about">Oblatos</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//26//
{
    'position':new google.maps.LatLng(20.671342050564995, -103.2841659520524)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Hermosa Provincia</h2>\
                <div class="contentImg">\
                    <img src=" " title="Hermosa Provincia"/>\
                    <a href="http://localhost/ulterior1/about">Hermosa Provincia</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//27//
{
    'position':new google.maps.LatLng(20.663451888611846, -103.29789007376158)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>San Jacinto</h2>\
                <div class="contentImg">\
                    <img src=" " title="San Jacinto"/>\
                    <a href="http://localhost/ulterior1/about">San Jacinto</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//28//
{
    'position':new google.maps.LatLng(20.661832437485266, -103.26866430074763)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Parque Solidaridad</h2>\
                <div class="contentImg">\
                    <img src=" " title="Parque Solidaridad"/>\
                    <a href="http://localhost/ulterior1/about">Parque Solidaridad</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//29//
{
    'position':new google.maps.LatLng(20.652934885690613, -103.29792469352977)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>San Rafael</h2>\
                <div class="contentImg">\
                    <img src=" " title="San Rafael"/>\
                    <a href="http://localhost/ulterior1/about">San Rafael</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//30//
{
    'position':new google.maps.LatLng(20.639495590841122, -103.31206211609059)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Tlaquepaque Centro</h2>\
                <div class="contentImg">\
                    <img src=" " title="Tlaquepaque Centro"/>\
                    <a href="http://localhost/ulterior1/about">Tlaquepaque Centro</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//31//
{
    'position':new google.maps.LatLng(20.655338576412205, -103.3266354718778)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Olimpica</h2>\
                <div class="contentImg">\
                    <img src=" " title="Olimpica"/>\
                    <a href="http://localhost/ulterior1/about">Olimpica</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//32//
{
    'position':new google.maps.LatLng(20.637466267946536, -103.34756652133389)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>El Dean</h2>\
                <div class="contentImg">\
                    <img src=" " title="El Dean"/>\
                    <a href="http://localhost/ulterior1/about">El Dean</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//33//
{
    'position':new google.maps.LatLng(20.6019721929324, -103.34467922226733)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Cerro del 4</h2>\
                <div class="contentImg">\
                    <img src=" " title="Cerro del 4"/>\
                    <a href="http://localhost/ulterior1/about">Cerro del 4</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//34//
{
    'position':new google.maps.LatLng(20.646766461966735, -103.36846981609051)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Polideportivo Lopez Mateos</h2>\
                <div class="contentImg">\
                    <img src=" " title="Polideportivo Lopez Mateos"/>\
                    <a href="http://localhost/ulterior1/about">Polideportivo Lopez Mateos</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//35//
{
    'position':new google.maps.LatLng(20.608849736064734, -103.41471552366421)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>ITESO</h2>\
                <div class="contentImg">\
                    <img src=" " title="ITESO"/>\
                    <a href="http://localhost/ulterior1/about">ITESO</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//36//
{
    'position':new google.maps.LatLng(20.710536718526136, -103.46220511860668)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Bajio</h2>\
                <div class="contentImg">\
                    <img src=" " title="Bajio"/>\
                    <a href="http://localhost/ulterior1/about">Bajio</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//37//
{
    'position':new google.maps.LatLng(20.70283235137847, -103.46100755670784)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Aviación</h2>\
                <div class="contentImg">\
                    <img src=" " title="Aviación"/>\
                    <a href="http://localhost/ulterior1/about">Aviación</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//38//
{
    'position':new google.maps.LatLng(20.63267366184759, -103.26572919446733)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Loma Dorada</h2>\
                <div class="contentImg">\
                    <img src=" " title="Loma Dorada"/>\
                    <a href="http://localhost/ulterior1/about">Loma Dorada</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//39//
{
    'position':new google.maps.LatLng(20.624802134476493, -103.24397190544005)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Tonalá Centro</h2>\
                <div class="contentImg">\
                    <img src=" " title="Tonalá Centro"/>\
                    <a href="http://localhost/ulterior1/about">Tonalá Centro</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//40//
{
    'position':new google.maps.LatLng(20.474976513278826, -103.4475697081208)
    , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
                <div class="contentTxt">\
                <h2>Tlajomulco</h2>\
                <div class="contentImg">\
                    <img src=" " title="Tlajomulco"/>\
                    <a href="http://localhost/ulterior1/about">Tlajomulco</a>\
                </div>\
                <div class="contentTxt">\
                    <p>\
                       .\
                    </p>\
                </div>\
                <div class="clear"></div>\
            </div>'
},
//         //41//
// {
//             'position41':new google.maps.LatLng()
//             , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
//                         <div class="contentTxt">\
//                         <h2> Nombre </h2>\
//                         <div class="contentImg">\
//                             <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
//                             <a href="http://localhost/ulterior1/about"> Nombre</a>\
//                         </div>\
//                         <div class="contentTxt">\
//                             <p>\
//                                .\
//                             </p>\
//                         </div>\
//                         <div class="clear"></div>\
//                     </div>'
//         },
//         //42//
//         {
//             'position42':new google.maps.LatLng()
//             , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
//                         <div class="contentTxt">\
//                         <h2> Nombre </h2>\
//                         <div class="contentImg">\
//                             <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
//                             <a href="http://localhost/ulterior1/about"> Nombre</a>\
//                         </div>\
//                         <div class="contentTxt">\
//                             <p>\
//                                .\
//                             </p>\
//                         </div>\
//                         <div class="clear"></div>\
//                     </div>'
//         },
//         //43//
//         {
//             'position43':new google.maps.LatLng()
//             , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
//                         <div class="contentTxt">\
//                         <h2> Nombre </h2>\
//                         <div class="contentImg">\
//                             <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
//                             <a href="http://localhost/ulterior1/about"> Nombre</a>\
//                         </div>\
//                         <div class="contentTxt">\
//                             <p>\
//                                .\
//                             </p>\
//                         </div>\
//                         <div class="clear"></div>\
//                     </div>'
//         },
//         //44//
//         {
//             'position44':new google.maps.LatLng()
//             , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
//                         <div class="contentTxt">\
//                         <h2> Nombre </h2>\
//                         <div class="contentImg">\
//                             <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
//                             <a href="http://localhost/ulterior1/about"> Nombre</a>\
//                         </div>\
//                         <div class="contentTxt">\
//                             <p>\
//                                .\
//                             </p>\
//                         </div>\
//                         <div class="clear"></div>\
//                     </div>'
//         },
//         //45//
//         {
//             'position45':new google.maps.LatLng()
//             , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
//                         <div class="contentTxt">\
//                         <h2> Nombre </h2>\
//                         <div class="contentImg">\
//                             <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
//                             <a href="http://localhost/ulterior1/about"> Nombre</a>\
//                         </div>\
//                         <div class="contentTxt">\
//                             <p>\
//                                .\
//                             </p>\
//                         </div>\
//                         <div class="clear"></div>\
//                     </div>'
//         },
//         //46//
//         {
//             'position46':new google.maps.LatLng()
//             , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
//                         <div class="contentTxt">\
//                         <h2> Nombre </h2>\
//                         <div class="contentImg">\
//                             <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
//                             <a href="http://localhost/ulterior1/about"> Nombre</a>\
//                         </div>\
//                         <div class="contentTxt">\
//                             <p>\
//                                .\
//                             </p>\
//                         </div>\
//                         <div class="clear"></div>\
//                     </div>'
//         },
//         //47//
//         {
//             'position47':new google.maps.LatLng()
//             , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
//                         <div class="contentTxt">\
//                         <h2> Nombre </h2>\
//                         <div class="contentImg">\
//                             <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
//                             <a href="http://localhost/ulterior1/about"> Nombre</a>\
//                         </div>\
//                         <div class="contentTxt">\
//                             <p>\
//                                .\
//                             </p>\
//                         </div>\
//                         <div class="clear"></div>\
//                     </div>'
//         },
//         //48//
//         {
//             'position48':new google.maps.LatLng()
//             , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
//                         <div class="contentTxt">\
//                         <h2> Nombre </h2>\
//                         <div class="contentImg">\
//                             <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
//                             <a href="http://localhost/ulterior1/about"> Nombre</a>\
//                         </div>\
//                         <div class="contentTxt">\
//                             <p>\
//                                .\
//                             </p>\
//                         </div>\
//                         <div class="clear"></div>\
//                     </div>'
//         },
//         //49//
//         {
//             'position49':new google.maps.LatLng()
//             , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
//                         <div class="contentTxt">\
//                         <h2> Nombre </h2>\
//                         <div class="contentImg">\
//                             <img src=" Agregar Imagen Aqui " title=" Nombre "/>\
//                             <a href="http://localhost/ulterior1/about"> Nombre</a>\
//                         </div>\
//                         <div class="contentTxt">\
//                             <p>\
//                                .\
//                             </p>\
//                         </div>\
//                         <div class="clear"></div>\
//                     </div>'
//         },
//         //50//
//         {
//             'position50':new google.maps.LatLng()
//             , 'info':'<div id="contentInfoWindow' + n++ + '" class="contentMap">\
//                         <div class="contentTxt">\
//                         <h2> Nombre </h2>\
//                         <div class="contentImg">\
//                             <img src=" " title="Nombre"/>\
//                             <a href="http://localhost/ulterior1/about">Nombre</a>\
//                         </div>\
//                         <div class="contentTxt">\
//                             <p>\
//                                .\
//                             </p>\
//                         </div>\
//                         <div class="clear"></div>\
//                     </div>'
//         },
]
export default Markers; //la exportarmos para mandarla a llamar