function displayLocation(latitude,longitude){
	var request = new XMLHttpRequest();

	var method = 'GET';
	var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true';
	var async = true;

	request.open(method, url, async);
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			var data = JSON.parse(request.responseText);
	        // alert(request.responseText); // check under which type your city is stored, later comment this line
	        var addressComponents = data.results[0].address_components;
	        for(i=0;i<addressComponents.length;i++){
	        	var types = addressComponents[i].types
	           //alert(types);
	           if(types=="locality,political"){
	              alert(addressComponents[i].long_name); // this should be your city, depending on where you are
	          }
	      }
	   }
	};
	request.send();
};

var successCallback = function(position){
	var x = position.coords.latitude;
	var y = position.coords.longitude;
	displayLocation(x,y);
};

navigator.geolocation.getCurrentPosition(successCallback);