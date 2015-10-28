$(document).ready(function() {
  $('select').material_select();


});

function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "pes"){
		var optionArray = ["|","44|44","78|78","167|167"];
	} else if(s1.value == "pa"){
		var optionArray = ["|","pa44|pa44","pa78|pa78","pa167|pa167"];
	} else if(s1.value == "poy"){
		var optionArray = ["|","poy44|poy44"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}
