var value = "";


function addToValue(string){
	value = value.concat(string);
	showExpression(value);
}

function calculate(){
	try{
		response = eval(value);
		showExpression(response);
		value = String(response);
	}catch(err){
		value = "";
		showExpression(expression);
	}

}

function showExpression(string){

	document.getElementById('expression').innerHTML = String(string);
	
}