$(document).ready(function(){
	var waterLts = 1;
	setValue();
	setWaterFill();

	$('#moreWater').click(function(){
		waterLts++;
		setValue();
		setWaterFill();
		if (parseFloat(waterLts) > 10) {
      		$('#moreWater').attr("disabled", true);
   		} 
   		
	});

	$('#lessWater').click(function(){
		waterLts--;
		setValue();
		setWaterFill();
		if (parseFloat(waterLts) < 0) {
      		$('#lessWater').attr("disabled", true);
   		} 

	});

	function setValue(){
		$("#waterLts").val(waterLts);	
	}

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


});