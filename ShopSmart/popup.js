window.addEventListener('DOMContentLoaded', function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {from: 'popup', subject: 'DOMInfo'}, function(response) {
	  	// var node = document.createElement('p');
	  	// node.innerHTML = response.farewell.length;
	    // document.body.appendChild(node);
	    // document.body.innerHTML += "<a href = '"+response+"'>Result</a>";
	   	// $.get(response, function(data) {
	   	// 	var kaamka = data.substring(data.lastIndexOf('div id="a1d1container">')-1,data.lastIndexOf('<div class="newsnbbxnoclr snbbox white_box "  >'));
	   	// 	var parser = new DOMParser();
	   	// 	quikrDOM = parser.parseFromString(kaamka,"text/xml");
	   	// 	// alert(kaamka);
	   	// 	console.log(quikrDOM);
	   	// });
	    // document.body.innerHTML = "MotherFucker!";
	    // console.log(response.farewell);
	    // alert(response);
	    var link1 = response.shift().link;

	    for (var idx in response){
		    var node = document.createElement('div');
		    var attr = document.createAttribute('class');
		    attr.value = 'contentbox';
		    node.setAttributeNode(attr);

		    var link = document.createElement('a');
		    attr = document.createAttribute('href');
		    attr.value = response[idx].url+'';
		    link.setAttributeNode(attr);

		    var titleNode = document.createElement('p');
		    attr = document.createAttribute('class');
		    attr.value = 'left';
		    titleNode.setAttributeNode(attr);
		    titleNode.innerHTML = (response[idx].title + '').slice(0,50);
		    
		    var priceNode = document.createElement('p');
		    attr = document.createAttribute('class');
		    attr.value = 'right';
		    titleNode.setAttributeNode(attr);
		    priceNode.innerHTML = response[idx].attribute_Price + '';

			link.appendChild(titleNode);
			link.appendChild(priceNode);		    
		    node.appendChild(link);
		    document.body.appendChild(node);
		}

		var node1 = document.createElement('div');
		var attr = document.createAttribute('class');
	    attr.value = 'contentbox';
		node1.setAttributeNode(attr);
		var node = document.createElement('a');
		attr = document.createAttribute('href');
		attr.value = link1;
		node.setAttributeNode(attr);
		node.innerHTML = "Click here to see more.";
		node1.appendChild(node);
		document.body.appendChild(node1);
	  });
	});
});

$(document).ready(function(){
   $('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
   });
});
// $.get("http://www.google.com", function(response) { alert(response) });