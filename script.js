function buttonClicked(){
	//Start with an empty string
	var resultString = "";
	
	//Get user input for number
	var numberEntered = document.getElementById("numberInput").value;
	
	//Add Mustang to the string if number is divisble by 3
	if((numberEntered % 3) === 0){
		resultString += "Mustang";
	}
	//Add Bronco to the string if number is divisble by 5
	if((numberEntered % 5) === 0){
		resultString += "Bronco";
	}
	//If neither Mustang nor Bronco are added, output the number itself
	if(resultString === ""){
		resultString = numberEntered;
	}
	//Print result in resultFromScript paragraph
	document.getElementById("resultFromScript").innerHTML = "<strong>Result is: </strong>" + resultString;
}