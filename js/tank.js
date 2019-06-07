$(document).ready(function(){

	//init state water tank's
	var waterLts = 1;
	var capMax = 10;
	var capMin = 0; 
	//set functions
	setValue();
	setWaterFill();
	inhabiSetup();

	//Manual Control Water
	$('#moreWater').click(function(){
		if (parseFloat(waterLts) < capMax){
			waterLts++;
			setValue();
			setWaterFill();
		}
	});
	$('#lessWater').click(function(){
		if (parseFloat(waterLts) > capMin){
			waterLts--;
			setValue();
			setWaterFill();
		}
	});
	function setValue(){
		$("#waterLts").val(waterLts);	
	}

	//SetAuto Control Water
	$('#setWater').click(function(){
		if (parseFloat($('#setNumber').val()) >= capMin && parseFloat($('#setNumber').val()) <= capMax){
			waterLts = parseFloat($('#setNumber').val());
			setValue();
			setWaterFill();
		}else if ($('#setNumber').val() == ""){
			alert("Ingresa un valor primero!");
		} else {
			alert("Capacidad fuera de rango!");
		}
	});

	//states of water tank's
	function setWaterFill(){
		switch(waterLts){
			case 0:
				$("#water").css("height", "0%");
				break;
			case 1:
				$("#water").css("height", "10%");
				break;
			case 2:
				$("#water").css("height", "20%");
				break;
			case 3:
				$("#water").css("height", "30%");
				break;
			case 4:
				$("#water").css("height", "40%");
				break;
			case 5:
				$("#water").css("height", "50%");
				break;
			case 6:
				$("#water").css("height", "60%");
				break;
			case 7:
				$("#water").css("height", "70%");
				break;
			case 8:
				$("#water").css("height", "80%");
				break;
			case 9:
				$("#water").css("height", "90%");
				break;
			case 10:
				$("#water").css("height", "100%");
				break;
		}
	}

	//Block default inputs setup 
	function inhabiSetup(){
		$(".setup").attr("disabled", true);
	}


});