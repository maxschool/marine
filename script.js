var item = 0;
document.getElementById("up").onclick = function(){
	if(item == 0){
		item = organisms.length-1;
	}
	else {
		item--;
	}
	update(item, organisms);
}
document.getElementById("down").onclick = function(){
	if(item == organisms.length-1){
		item = 0;
	}
	else {
		item++;
	}
	document.getElementById("pic").className = "close";
	document.getElementById("right").className = "close";
	window.setTimeout(update, 500);
	window.setTimeout(reappear, 500);
}

var update = function(){
	document.getElementById("kingdom").innerHTML = organisms[item].kingdom;
	document.getElementById("species").innerHTML = organisms[item].species;
	document.getElementById("classification").childNodes[0].innerHTML = organisms[item].classification;
	document.getElementById("theme").childNodes[0].innerHTML = organisms[item].theme;
	document.getElementById("bibliography").childNodes[0].innerHTML = organisms[item].citation;
	document.getElementById("bibliography").childNodes[2].innerHTML = organisms[item].link;
	document.getElementById("bibliography").childNodes[2].href = organisms[item].link;
	document.getElementById("imgcreds").childNodes[0].innerHTML = organisms[item].image;
	document.getElementById("imgcreds").childNodes[0].href = organisms[item].image;
	document.getElementById("pic").style.backgroundImage = "url('" + organisms[item].image + "')";
}

var reappear = function(){
	document.getElementById("pic").className = "open";
	document.getElementById("right").className = "open";
}

update(item, organisms);