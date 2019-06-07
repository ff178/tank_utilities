$(document).ready(function(){

	//init state water tank's
	var waterLts = 1;
	var capMax = 10;
	var capMin = 0;
	var maxWater = capMax - capMin;

	//set functions
	setValue();
	setValuesTank();
	setWaterFillByTank();
	inhabiSetup();
	calculeMaxWater();
	calculeWater(waterLts);

	//Setup tank
	$('#edit').click(function(){
		$("#moreWater").attr("disabled", true);
		$("#lessWater").attr("disabled", true);
		$("#setWater").attr("disabled", true);
		$("#setNumber").attr("disabled", true);
		$("#drain").attr("disabled", true);
		$(".setup").attr("disabled", false);
	});

	$('#cancel').click(function(){
		$("#moreWater").attr("disabled", false);
		$("#lessWater").attr("disabled", false);
		$("#setWater").attr("disabled", false);
		$("#setNumber").attr("disabled", false);
		$("#drain").attr("disabled", false);
		$(".setup").attr("disabled", true);
		setValuesTank();
	});

	$('#confirm').click(function(){
		$("#moreWater").attr("disabled", false);
		$("#lessWater").attr("disabled", false);
		$("#setWater").attr("disabled", false);
		$("#setNumber").attr("disabled", false);
		$("#drain").attr("disabled", false);
		$(".setup").attr("disabled", true);
		var capMax = parseFloat($('#max').val());
		var capMin = parseFloat($('#min').val());
		$('#max').val(capMax);
		$('#min').val(capMin);
		calculeMaxWater();
	});

	//Manual Control Water
	$('#moreWater').click(function(){
		if (parseFloat(waterLts) < parseFloat($('#max').val())){
			waterLts++;
			setValue();
			setWaterFillByTank();
		}
	});
	$('#lessWater').click(function(){
		if (parseFloat(waterLts) > parseFloat($('#min').val())){
			waterLts--;
			setValue();
			setWaterFillByTank();
		}
	});
	

	//SetAuto Control Water
	$('#setWater').click(function(){
		if (parseFloat($('#setNumber').val()) >= parseFloat($('#min').val()) && parseFloat($('#setNumber').val()) <= parseFloat($('#max').val())){
			waterLts = parseFloat($('#setNumber').val());
			setValue();
			setWaterFillByTank();
		}else if ($('#setNumber').val() == ""){
			alert("Ingresa un valor primero!");
		} else {
			alert("Capacidad fuera de rango!");
		}
	});

	//Drain water function
	$('#drain').click(function(){
		if(confirm('Are u sure u want drain tank?')){
  			waterLts = 0;
			setValue();
			setWaterFillByTank();
 		}
	});

	//Set value water
	function setValue(){
		$("#waterLts").val(waterLts);
	}

	//Set values tank
	function setValuesTank(){
		$('#max').val(capMax);
		$('#min').val(capMin);
	}

	//Calculate the max water
	function calculeMaxWater(){
		maxWater = parseFloat($('#max').val()) - parseFloat($('#min').val());
		return maxWater;
	}

	function calculeWater(waterLts){
		water = waterLts - parseFloat($('#min').val());
		return water;
	}

	//states of water tank's
	//capacity of water change by tank 
	function setWaterFillByTank(){
		tankMax = calculeMaxWater();
		waterMax = calculeWater(waterLts);
		fillPorcentWater = `${waterMax*100/tankMax}%`;
		//console.log(fillPorcentWater);
		$("#water").css("height", fillPorcentWater);

	}

	//capacity water default function
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