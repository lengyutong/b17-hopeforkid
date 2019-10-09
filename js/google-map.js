var hospitals = [];
var childcares = [];
var map;
var marker, i;
var pointMarker = [];//store marker in array
var childcareMarker = [];
var lat;
var lon;
var btnLocation = document.getElementById("btn-location");

var myLocation = {

    lat: -37.876823,

    lng: 145.045837

};

//process
navigator.geolocation.getCurrentPosition(initialize);
$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(onPositionUpdate);
});

//functions
//地图初始化
function initialize(position){
    console.log(position);
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: position.coords.latitude, lng: position.coords.longitude},
        zoom: 14
    });
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    myLocation.lat = lat;
    myLocation.lng =lon;
    let maker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        map: map,
    });
    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
        return function() {
            infowindow.setContent('current location');
            infowindow.open(map, marker);
        }
    })(marker, i));
    google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
        return function() {
            infowindow.close();
        }
    })(marker, i));


}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {

    console.log(browserHasGeolocation ?

        'Error: The Geolocation service failed.' :

        'Error: Your browser doesn\'t support geolocation.');

}





btnLocation.addEventListener('click', function() {

    goToMyLocation();

});



function goToMyLocation() {
    map.zoom=14;
    map.setCenter(myLocation);

}


//得到数据，画出标记和列表
function onPositionUpdate(position) {
    $.getJSON('http://54.79.11.144:3000/hospital', function (data) {
        let hospital;
        for (i = 0; i < data[0].length; i++) {
            hospital = data[0][i];
            hospital.distance = Math.sqrt(Math.pow(lat - data[0][i].Latitude, 2) + Math.pow(lon - data[0][i].Longitude, 2));
            hospital.type = 'Hospital';
            if(hospital.distance < 0.1){
                hospitals.push(hospital);
            }
        };

        function compare(property) {
            return function (obj1, obj2) {
                var value1 = obj1[property];
                var value2 = obj2[property];
                return value1 - value2;
            }
        }
        hospitals = hospitals.sort(compare("distance"));
        for (i = 0; i < hospitals.length; i++) {
            hospital = hospitals[i];
            hospital.currentnumber = i.toString();
        };

        //转换child center数据格式
        let childcare;
        for (i = 0; i < data[1].length; i++) {
            childcare = data[1][i];
            childcare.distance = Math.sqrt(Math.pow(lat - data[1][i].Latitude, 2) + Math.pow(lon - data[1][i].Longitude, 2));
            childcare.type = 'childcare';
            if(childcare.distance < 0.1) {
                childcares.push(childcare);
            }
        };

        childcares = childcares.sort(compare("distance"));
        for (i = 0; i < childcares.length; i++) {
            childcare = childcares[i];
            childcare.currentnumber = i.toString();
        };

        //谷歌地图其他功能初始化
        var infowindow = new google.maps.InfoWindow();
        var directionsRenderer = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        directionsRenderer.setMap(map);

        //给地图加医院的marker，当鼠标移动到对应marker显示消息窗口功能
        for(i=0; i<hospitals.length; i++){
            coordinate = new google.maps.LatLng(hospitals[i].Latitude, hospitals[i].Longitude);
            marker = new google.maps.Marker({
                position: coordinate,
                map: map,
                icon: 'images/hospital.png'
            });
            pointMarker.push(marker);
            google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
                return function() {
                    infowindow.setContent("<div>Name: "+ hospitals[i].Name + "</div>" +
                                        "<div>Phone: " + hospitals[i].Phone + "</div>" +
                                        "<div>Address: " + hospitals[i].Address + "," + hospitals[i].Suburb + "," + hospitals[i].Postcode + "</div>" +
                                        "<div>Website: " + hospitals[i].Website + "</div>" +
                                        "<div>Sector: " + hospitals[i].Sector + " Hospital</div>" +
                                        "<div>Description: "+ hospitals[i].Description +"</div>");
                    infowindow.open(map, marker);
                }
            })(marker, i));
            google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
                return function() {

                }
            })(marker, i));
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {

                }
            })(marker, i));
        };

        //给地图加childcares的marker
        for(i=0; i<childcares.length; i++){
            coordinate = new google.maps.LatLng(childcares[i].Latitude, childcares[i].Longitude);
            marker = new google.maps.Marker({
                position: coordinate,
                map: map,
                icon: 'images/childcare.png'
            });
            marker.setVisible(false);
            childcareMarker.push(marker);
            google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
                return function() {
                    infowindow.setContent("<div>Name: "+ childcares[i].Name + "</div>" +
                    "<div>Phone: " + childcares[i].Phone + "</div>" +
                    "<div>Address: " + childcares[i].Address + "," + childcares[i].Suburb + "," + childcares[i].Postcode + "</div>" +
                    "<div>Website: " + childcares[i].Website + "</div>");
                    infowindow.open(map, marker);
                }
            })(marker, i));
            google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
                return function() {
                    infowindow.close();
                }
            })(marker, i));
        };

        //列表栏功能
        let cardContainer;

        //医院
        let createHospitalCard = (hospital) => {

            //举例：创建card，并将card与marker联动
            let card = document.createElement('div');
            card.className = 'card ' + hospital.type;
            card.onmouseover = function () {
                google.maps.event.trigger(pointMarker[hospital.currentnumber], 'mouseover');
            }
            card.onmouseout = function () {
                google.maps.event.trigger(pointMarker[hospital.currentnumber], 'mouseout');
            }

            let cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            let title = document.createElement('h5');
            title.innerText = hospital.Name;
            title.className = 'card-title';

            //显示地址，当地址为空，隐藏
            let address = document.createElement('p');
            address.innerText = 'Address: ' + hospital.Address;
            address.className = 'card-block';
            if (hospital.Address == "") {
                address.style = 'display:none';
            }

            let phone = document.createElement('div');
            phone.innerText = 'Phone: ' + hospital.Phone;
            phone.className = 'card-block';
            if (hospital.Phone == "") {
                phone.style = 'display:none';
            }

            let website = document.createElement('a');
            website.href = hospital.Website;
            website.innerText = 'Website: ' + hospital.Website;
            website.className = 'card-block';
            website.target = '_blank';
            if (hospital.Website == "") {
                website.style = 'display:none';
            }

            let description = document.createElement('div');
            description.innerText = 'Description: ' + hospital.Description;
            description.className = 'card-block';
            if (hospital.Description == "") {
                description.style = 'display:none';
            }

            let sector = document.createElement('div');
            sector.innerText = 'Sector: ' + hospital.Sector;
            sector.className = 'card-block';
            if (hospital.Sector == "") {
                sector.style = 'display:none';
            }

            //按钮，地图显示路线
            let button = document.createElement('button');
            button.innerText = 'Direction';
            button.className = 'btn btn-primary';
            button.style = 'width: 140px';
            button.onclick = function () {

                calculateAndDisplayRoute(directionsService, directionsRenderer);

                function calculateAndDisplayRoute(directionsService, directionsRenderer) {
                    directionsService.route({
                        origin:  new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
                        destination: new google.maps.LatLng(hospital.Latitude, hospital.Longitude),
                        travelMode: 'DRIVING'
                    }, function(response, status) {
                        if (status == 'OK') {

                            directionsRenderer.setDirections(response);
                        } else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    });
                }
            };

            //超链接，target跳转到新的窗口，显示导航
            let navigationbutton = document.createElement('a');
            navigationbutton.innerText = 'Navigate To';
            navigationbutton.className = 'btn btn-primary';
            navigationbutton.style = 'width: 140px';
            let splited_name = hospital.Name.split(" ").join('+');
            navigationbutton.href = 'https://www.google.com/maps/dir/?api=1&origin=' + position.coords.latitude +','+ position.coords.longitude+ '&destination=' + splited_name + '&travelmode=driving';
            navigationbutton.target = '_blank';

            //card的结构，按顺序组合，从内到外
            //color.appendChild(coordinate);
            cardBody.appendChild(title);
            cardBody.appendChild(address);
            cardBody.appendChild(phone);
            cardBody.appendChild(website);
            cardBody.appendChild(description);
            cardBody.appendChild(sector);
            cardBody.appendChild(button);
            cardBody.appendChild(navigationbutton);
            card.appendChild(cardBody);
            cardContainer.appendChild(card);

        }

        //childcare
        let createChildCenterCard = (childcare) => {

            //举例：创建card，并将card与marker联动
            let card = document.createElement('div');
            card.className = 'card ' + childcare.type;
            card.style = 'display:none';
            card.onmouseover = function () {
                google.maps.event.trigger(childcareMarker[childcare.currentnumber], 'mouseover');
            }
            card.onmouseout = function () {
                google.maps.event.trigger(childcareMarker[childcare.currentnumber], 'mouseout');
            }

            let cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            let title = document.createElement('h5');
            title.innerText = childcare.Name;
            title.className = 'card-title';

            //显示地址，当地址为空，隐藏
            let address = document.createElement('p');
            address.innerText = 'Address: ' + childcare.Address;
            address.className = 'card-block';
            if (childcare.Address == "") {
                address.style = 'display:none';
            }

            let phone = document.createElement('div');
            phone.innerText = 'Phone: ' + childcare.Phone;
            phone.className = 'card-block';
            if (hospital.Phone == "") {
                phone.style = 'display:none';
            }

            let email = document.createElement('div');
            email.innerText = 'Email: ' + childcare.Email;
            email.className = 'card-block';
            if (childcare.Email == "") {
                email.style = 'display:none';
            }

            let services = document.createElement('div');
            services.innerText = 'Service: ' + childcare.Services;
            services.className = 'card-block';
            if (childcare.Services == "") {
                services.style = 'display:none';
            }

            let places = document.createElement('div');
            places.innerText = 'Places: ' + childcare.Places;
            places.className = 'card-block';
            if (childcare.Places == "") {
                places.style = 'display:none';
            }

            //按钮，地图显示路线
            let button = document.createElement('button');
            button.innerText = 'Direction';
            button.className = 'btn btn-primary';
            button.style = 'width: 140px';
            button.onclick = function () {

                calculateAndDisplayRoute(directionsService, directionsRenderer);

                function calculateAndDisplayRoute(directionsService, directionsRenderer) {
                    directionsService.route({
                        origin:  new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
                        destination: new google.maps.LatLng(childcare.Latitude, childcare.Longitude),
                        travelMode: 'DRIVING'
                    }, function(response, status) {
                        if (status == 'OK') {

                            directionsRenderer.setDirections(response);
                        } else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    });
                }
            };

            //超链接，target跳转到新的窗口，显示导航
            let navigationbutton = document.createElement('a');
            navigationbutton.innerText = 'Navigate to';
            navigationbutton.className = 'btn btn-primary';
            navigationbutton.style = 'width: 140px';
            let splited_name = childcare.Name.split(" ").join('+');
            navigationbutton.href = 'https://www.google.com/maps/dir/?api=1&origin=' + position.coords.latitude +','+ position.coords.longitude+ '&destination=' + splited_name + '&travelmode=driving';
            navigationbutton.target = '_blank';





            //card的结构，按顺序组合，从内到外
            //color.appendChild(coordinate);
            cardBody.appendChild(title);
            cardBody.appendChild(address);
            cardBody.appendChild(phone);
            cardBody.appendChild(email);
            cardBody.appendChild(services);
            cardBody.appendChild(places);
            cardBody.appendChild(button);
            cardBody.appendChild(navigationbutton);
            card.appendChild(cardBody);
            cardContainer.appendChild(card);

        }

        //显示列表
        let initListOfTasks = () => {
            if (cardContainer) {
                document.getElementById('card-container').replaceWith(cardContainer);
                return;
            }

            cardContainer = document.getElementById('card-container');
            hospitals.forEach((task) => {
                createHospitalCard(task);
            });
            childcares.forEach((task) => {
                createChildCenterCard(task);
            });

        };




        initListOfTasks();

    });
}

var ClickEventHandler = function(map, origin) {
    this.origin = origin;
    this.map = map;
    this.directionsService = new google.maps.DirectionsService;
    this.directionsRenderer = new google.maps.DirectionsRenderer;
    this.directionsRenderer.setMap(map);
    this.placesService = new google.maps.places.PlacesService(map);
    this.infowindow = new google.maps.InfoWindow;
    this.infowindowContent = document.getElementById('infowindow-content');
    this.infowindow.setContent(this.infowindowContent);

    // Listen for clicks on the map.
    this.map.addListener('click', this.handleClick.bind(this));
};

ClickEventHandler.prototype.handleClick = function(event) {
    console.log('You clicked on: ' + event.latLng);
    // If the event has a placeId, use it.
    if (event.placeId) {
        console.log('You clicked on place:' + event.placeId);

        // Calling e.stop() on the event prevents the default info window from
        // showing.
        // If you call stop here when there is no placeId you will prevent some
        // other map click event handlers from receiving the event.
        event.stop();
        this.calculateAndDisplayRoute(event.placeId);
        this.getPlaceInformation(event.placeId);
    }
};

ClickEventHandler.prototype.calculateAndDisplayRoute = function(placeId) {
    var me = this;
    this.directionsService.route({
        origin: this.origin,
        destination: {placeId: placeId},
        travelMode: 'WALKING'
    }, function(response, status) {
        if (status === 'OK') {
            me.directionsRenderer.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
};

ClickEventHandler.prototype.getPlaceInformation = function(placeId) {
    var me = this;
    this.placesService.getDetails({placeId: placeId}, function (place, status) {
        if (status === 'OK') {
            me.infowindow.close();
            me.infowindow.setPosition(place.geometry.location);
            me.infowindowContent.children['place-icon'].src = place.icon;
            me.infowindowContent.children['place-name'].textContent = place.name;
            me.infowindowContent.children['place-id'].textContent = place.place_id;
            me.infowindowContent.children['place-address'].textContent = place.formatted_address;
            me.infowindow.open(me.map);
        }
    });
};

//按钮选项
//显示child cares
function displayCs() {
    var childcares = document.getElementsByClassName("childcare");
    var i;
    var checkBox = document.getElementById("child_Care_Check");
    if (checkBox.checked == true){
        for (i = 0; i < childcares.length; i++) {
            childcares[i].style.display = 'block';
            childcareMarker[i].setVisible(true);
        }
    } else {
        for (i = 0; i < childcares.length; i++) {
            childcares[i].style.display = 'none';
            childcareMarker[i].setVisible(false);
        }
    }
}


//显示医院
function displayHs() {
    var hospitals = document.getElementsByClassName("Hospital");
    var i;
    var checkBox = document.getElementById("Hospitals_Check");
    if (checkBox.checked == true){
        for (i = 0; i < hospitals.length; i++) {
            hospitals[i].style.display = 'block';
            pointMarker[i].setVisible(true);
        }
    } else {
        for (i = 0; i < hospitals.length; i++) {
            hospitals[i].style.display = 'none';
            pointMarker[i].setVisible(false);
        }
    }
}