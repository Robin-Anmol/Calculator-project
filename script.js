const history =document.querySelector("#history-value");
const output = document.querySelector("#output-value");
const number = document.getElementsByClassName("number");
const operator = document.getElementsByClassName("operator");

function getHistory(){

	return history.innerText;
}
function printHistory(num){
	history.innerText=num;
}
function getOutput(){
	return output.innerText;
}
function printOutput(num){
	if(num==""){
		output.innerText=num;
	}
	else{
	output.innerText=getFormattedNumber(num);
	}	
}
////getFormated Number
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	let n = Number(num);
	let value = n.toLocaleString("en");        /// this will make the 5675859 number =5,675,859 format the number in readable formatted
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

for(let i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}

		else if(this.id=="backspace"){
			let output=reverseNumberFormat(getOutput()).toString();
			if(output){
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}

		else{
			let output=getOutput();
			let history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					let result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}

for(let i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		let output=reverseNumberFormat(getOutput());
		if(output!=NaN){ 
			output=output+this.id;
			printOutput(output);
		}
	});
}

