function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 15,
        center: {lat:47.782757, lng:35.221395}
    };

    var myMap = new google.maps.Map(element, options);
    var markers = [
        {
            coordinates: {lat: 47.782757, lng: 35.221395},
            image: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            info: '<p class="marker_map">Наш офис</p>'
        },

        {
            coordinates: {lat: 47.783642, lng: 35.229710},
            info: '<p class="marker_map marker_map_filial">Наш филиал</p>'
        }
    ];

    for (var i = 0, len = markers.length; i < len; i++) {
        addMarker(markers[i]);
    }

    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: myMap
        });

        if (properties.image) {
            marker.setIcon(properties.image);
        }

        if (properties.info) {
            var infoWindow = new google.maps.InfoWindow({
                content: properties.info
            });

            marker.addListener('click', function () {
                infoWindow.open(myMap, marker);
            })
        }
    }
}