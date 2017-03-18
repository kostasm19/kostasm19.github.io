

	function initMap() {
		var myLatLng = {lat: 37.0503981, lng: 22.0083728};
		var geocoder;
		var address = '1131 Washington Avenue, Miami Beach, Florida 33139-4611, United States';//document.getElementsByClassName("map-address")[0].innerHTML;//'28is Oktovriou 12, Messini';//document.getElementById("address").value;
		var location_pin = 'http://poseidonmiami.com/sites/all/themes/poseidon/images/map-location-pin.png';
		geocoder = new google.maps.Geocoder();


		// Create an array of styles.
		var styles = [
			{
				stylers: [
					{ hue: "#0096fb" },
					{ saturation: -20 },
					{ gamma: 0 }
				]
			},{
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{ lightness: 50 },
					{ visibility: "simplified" }
				]
			},{
				featureType: "road",
				elementType: "labels",
				stylers: [
					//{ visibility: "off" }
				]
			}
		];

		// Create a new StyledMapType object, passing it the array of styles,
		// as well as the name to be displayed on the map type control.
		var styledMap = new google.maps.StyledMapType(styles,
			{name: "Styled Map"});

		// Create a map object, and include the MapTypeId to add
		// to the map type control.
		var mapOptions = {
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
		    navigationControl: false,
		    mapTypeControl: false,
			draggable: false,
		};

		var map = new google.maps.Map(document.getElementById('section_gmap'), mapOptions);

		var infowindow = new google.maps.InfoWindow(
		{ content: '<p><IMG BORDER="0" ALIGN="Center" SRC="http://poseidonmiami.com/sites/all/themes/poseidon/images/logo-blue.png" width="100"><br><strong>Poseidon Miami | Greek Seafood Restaurant</strong><br><em>'+address+'</em><br>Tel: <a href="tel:+13055344434" data-event="phone.profile">+1 305-534-4434</a><br>Email: <a href="mailto:poseidonmiami@gmail.com" target="_blank">poseidonmiami@gmail.com</a></p>',
			size: new google.maps.Size(150,50)
		});



		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');




		geocoder.geocode( { 'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				map.setCenter(results[0].geometry.location);
				var image = location_pin;
				var marker = new google.maps.Marker({
					position: results[0].geometry.location,
					map: map,
					icon: image,
					title: '28is Oktovriou 12'
				});

				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map,marker);
				});
			} else {
				var latLng = new google.maps.LatLng(myLatLng);
				map.setCenter(latLng);
				var image = location_pin;
				var marker = new google.maps.Marker({
					position: latLng,
					map: map,
					icon: image,
					title: '28is Oktovriou 12'
				});

				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map,marker);
				});
			}
		});
	}

	function initBigMap() {
		var myLatLng = {lat: 37.0503981, lng: 22.0083728};
		var geocoder;
		var dynAddress = document.getElementsByClassName("gmap-address")[0].innerHTML;
		//console.log("address is: "+dynAddress);
		var address = dynAddress; //'Mainemenis 1, Athens, Greece';//document.getElementsByClassName("map-address")[0].innerHTML;//'28is Oktovriou 12, Messini';//document.getElementById("address").value;
		var location_pin = 'sites/all/themes/poseidon/images/map-location-pin.png';
		geocoder = new google.maps.Geocoder();


		// Create an array of styles.
		var styles = [
			{
				stylers: [
					{ hue: "#749d01" },
					{ saturation: -20 },
					{ gamma: 0 }
				]
			},{
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{ lightness: 50 },
					{ visibility: "simplified" }
				]
			},{
				featureType: "road",
				elementType: "labels",
				stylers: [
					//{ visibility: "off" }
				]
			}
		];

		// Create a new StyledMapType object, passing it the array of styles,
		// as well as the name to be displayed on the map type control.
		var styledMap = new google.maps.StyledMapType(styles,
			{name: "Styled Map"});

		// Create a map object, and include the MapTypeId to add
		// to the map type control.
		var mapOptions = {
			zoom: 17,
			//center: new google.maps.LatLng(myLatLng),
			//mapTypeControl: true,
			//mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
			//navigationControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
		    //navigationControl: false,
		    mapTypeControl: false,
		    //scaleControl: false,
		};

		var map = new google.maps.Map(document.getElementById('map-full'), mapOptions);

		var infowindow = new google.maps.InfoWindow(
		{ content: '<p><IMG BORDER="0" ALIGN="Center" SRC="sites/all/themes/poseidon/logo.png" width="100"><br><strong>La Krepa | Delivery Club</strong><br><em>'+address+'</em><br>Tel: <a href="tel:+302106435255" data-event="phone.profile">210 6435 255</a><br>Email: <a href="mailto:info@lakrepa.gr" target="_blank">info@lakrepa.gr</a></p>',
			size: new google.maps.Size(150,50)
		});



		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');




		geocoder.geocode( { 'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				map.setCenter(results[0].geometry.location);
				var image = location_pin;
				var marker = new google.maps.Marker({
					position: results[0].geometry.location,
					map: map,
					icon: image,
					title: 'Μαινεμένης 1, Αθήνα'
				});

				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map,marker);
				});
			} else {
				var latLng = new google.maps.LatLng(myLatLng);
				map.setCenter(latLng);
				var image = location_pin;
				var marker = new google.maps.Marker({
					position: latLng,
					map: map,
					icon: image,
					title: '28is Oktovriou 12'
				});

				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map,marker);
				});
			}
		});//  */
	}
