var center = new google.maps.LatLng(52.2333, 21.0167);
function initMap() {
    var mapDiv = {
    center= new google.maps.LatLng(52.2333, 21.0167),
            zoom: 7,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        };
    var map = new google.maps.Map(document.getElementById("map"), mapDiv);
    var marker= new google.maps.Marker( {
        position: center ;
    } );

    marker.setMap(map);
        }
function loadScript() {
    var script = document.creatElement("script") ;
    script.type= "text/javasript";
    script.src= "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initMap";
    document.body.appendChild(script);
}
google.maps.event.addDomListener(window, 'load', initialize) ;
/*DOM listener to load the map on page on demand.
