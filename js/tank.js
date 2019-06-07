$(document).ready(function(){

	//init state water tank's
	var waterLts = 1;
	var capMax = 10;
	var capMin = 0;
	var maxWater = capMax - capMin;
	var highWater = 9;
	var lowWater = 1;

	//set functions
	setValue();
	setValuesTank();
	setValuesAlarms();
	setWaterFillByTank();
	inhabiSetup();
	calculeMaxWater();
	calculeWater(waterLts);
	setAlarms(highWater, lowWater);

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
		
		var capMax = parseFloat($('#max').val());
		var capMin = parseFloat($('#min').val());
		

		var highLevel = parseFloat($('#high').val());
		var lowLevel = parseFloat($('#low').val());

		if(highLevel < capMax && lowLevel > capMin){
			$('#high').val(highLevel);
			$('#low').val(lowLevel);
			$('#max').val(capMax);
			$('#min').val(capMin);
			$("#moreWater").attr("disabled", false);
			$("#lessWater").attr("disabled", false);
			$("#setWater").attr("disabled", false);
			$("#setNumber").attr("disabled", false);
			$("#drain").attr("disabled", false);
			$(".setup").attr("disabled", true);
			waterLts = parseFloat($('#min').val());
			setValue();
		} else {
			alert("Alarma fuera de rango de la capacidad del tanque");
		}
		
	});

	//Manual Control Water
	$('#moreWater').click(function(){
		if (parseFloat(waterLts) < parseFloat($('#max').val())){
			waterLts++;
			setValue();
			setWaterFillByTank();
			setAlarms(highWater, lowWater);
		}
	});
	$('#lessWater').click(function(){
		if (parseFloat(waterLts) > parseFloat($('#min').val())){
			waterLts--;
			setValue();
			setWaterFillByTank();
			setAlarms(highWater, lowWater);
		}
	});
	

	//SetAuto Control Water
	$('#setWater').click(function(){
		if (parseFloat($('#setNumber').val()) >= parseFloat($('#min').val()) && parseFloat($('#setNumber').val()) <= parseFloat($('#max').val())){
			waterLts = parseFloat($('#setNumber').val());
			setValue();
			setWaterFillByTank();
			setAlarms(highWater, lowWater);
		}else if ($('#setNumber').val() == ""){
			alert("Ingresa un valor primero!");
		} else {
			alert("Capacidad fuera de rango!");
		}
	});

	//Drain water function
	$('#drain').click(function(){
		if(confirm('Are u sure u want drain tank?')){
  			waterLts = parseFloat($('#min').val());
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

	//Set values alarms
	function setValuesAlarms(){
		$('#high').val(highWater);
		$('#low').val(lowWater);
	}

	//Calculate the max water
	function calculeMaxWater(){
		maxWater = parseFloat($('#max').val()) - parseFloat($('#min').val());
		return maxWater;
	}

	//Calculate the average water
	function calculeWater(waterLts){
		water = waterLts - parseFloat($('#min').val());
		return water;
	}

	//set Alarms
	function setAlarms(highWater, lowWater){
		var highWater = parseFloat($('#high').val());
		var lowWater = parseFloat($('#low').val());
		if(waterLts >= highWater){
			$('#highLevel').css("visibility", "visible");
			$('#lowLevel').css("visibility", "hidden");
			$('#midLevel').css("visibility", "hidden");
			$('#water').css('background-color', '#721c24');
		} else if (waterLts <= lowWater){
			$('#highLevel').css("visibility", "hidden");
			$('#lowLevel').css("visibility", "visible");
			$('#midLevel').css("visibility", "hidden");
			$('#water').css("background-color", '#856404');
		} else {
			$('#highLevel').css("visibility", "hidden");
			$('#lowLevel').css("visibility", "hidden");
			$('#midLevel').css("visibility", "visible");
			$('#water').css("background-color", '#004085');
		}
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