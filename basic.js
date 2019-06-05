console.log("Hello World from basic.js");


function onButtonClicked(){
	var text = document.getElementById("input").value;
	console.log(Number(text)+1);
	console.log("I am in the button click event");
}

document.getElementById("button").addEventListener('click', onButtonClicked)

//this is where the basic calculator starts//

var a,b;
function defineVar(){
	 a = Number(document.getElementById("num1").value);
	 b = Number(document.getElementById("num2").value);
}

function addTwoNumbers(){
	//var a = Number(document.getElementById("num1").value);
	//var b = Number(document.getElementById("num2").value);
	//console.log(a+b);
	defineVar();
	document.getElementById("result").value=a+b;
}
document.getElementById("add").addEventListener('click', addTwoNumbers);

function subTwoNumbers(){
	defineVar();
	document.getElementById("result").value=a-b;
}

document.getElementById("sub").addEventListener('click', subTwoNumbers);

function multiplyTwoNumbers(){
	defineVar();
	document.getElementById("result").value=a*b;
}

document.getElementById("multiply").addEventListener('click', multiplyTwoNumbers);

function divideTwoNumbers(){
	defineVar();
	document.getElementById("result").value=a/b;
}

document.getElementById("divide").addEventListener('click', divideTwoNumbers);

//this is where the tax calculator starts//

var inputIncome = document.getElementById("income");
var taxesOwing;
var takeMyMoney = document.getElementById("taxesOwing");
var netIncome = document.getElementById("netIncome");

//maxBrackets is the maximum $$ paid at top end of each bracket, use array to reduce number of calcs in the functions.
var maxAmount = [0, 7145, 9764,13626,18184];
var taxRate = [0, .15, .205, .26, .29, .33]
var maxBracket = [0,11809, 47630, 95259, 147667, 210371];



function defineBracket(income){
	
	if (income <= maxBracket[1]) {	
	 	taxesOwing= (income * taxRate[0]);
	 	//works for $11,000, returns 0
	} else if (income > maxBracket[1] && income <= maxBracket[2]){
		taxesOwing = (income * taxRate[1]);
		//works for $47,000, returns $7050
	} else if (income > maxBracket[2] && income <= maxBracket[3]){
		taxesOwing = ((income-maxBracket[2])*taxRate[2] + maxAmount[1]);
		//works for 50,000 returns $7630.35
	} else if (income > maxBracket[3] && income <= maxBracket[4]){
		taxesOwing = (((income-maxBracket[3])*taxRate[3] )+ maxAmount[1] + maxAmount[2]);
		//test for $100,000 returns $18,141.11
	} else if (income > maxBracket[4] && income <= maxBracket[5]){
		taxesOwing= (((income-maxBracket[4])*taxRate[4] )+ maxAmount[1] + maxAmount[2] + maxAmount[3]);
		//test for $150,000 returns $31,211.10
	} else {
		taxesOwing= (((income-maxBracket[5])*taxRate[5] )+ maxAmount[1] + maxAmount[2] + maxAmount[3]+maxAmount[4]);
	}
		//test for $250.,000 returns $61, 796.26
	}


//console.log(`my tax is ${taxesOwing}!!!!`);
// $11,000 should return 0
// $50,000	⇒	$7,630.35
// $100,000	⇒	$18,141.11
// $150,000	⇒	$31,211.10
// $250,000	⇒	$61,796.26


function printTaxesOwing () {
	defineBracket(inputIncome.value);
	takeMyMoney.value=`$${taxesOwing}`;
	netIncome.value=`$${inputIncome.value-taxesOwing}`;
	
};

document.getElementById("calculate").addEventListener('click', printTaxesOwing);

// This is where the Array game begins

var myArray = [10, 20, 30 , 40];

var myNumber = document.getElementById("idArrayInput");
var pleaseAdd = document.getElementById("idAdd");
var idMessageArea = document.getElementById("idMessageArea");
var idArrayInput = document.getElementById("idShow");


//console.log(myNumber, pleaseAdd, idMessageArea);

function addNumber (){
	var officialNumber = (myNumber.value);
	if (isNaN(officialNumber)){
		idMessageArea.textContent = "This is not a number, please try again"
		console.log(officialNumber);
	}
	else	{
	myArray.push(Number(officialNumber));
	console.log(myArray);
	idMessageArea.textContent = "Your number was successfully added"
}
}

function showArray (){
idMessageArea.textContent =  myArray
}

var total = 0
function showTotal (){
	for (var i=0; i<myArray.length; i++){
		total +=  myArray[i];
		console.log("my total is", total)
		idMessageArea.textContent = total
	}
	}

function clearAll (){
	myArray.length = [];
	console.log(myArray);//returns[]
	idMessageArea.textContent = " your array has been cleared";

}

document.getElementById("idAdd").addEventListener('click', addNumber);
document.getElementById("idShow").addEventListener('click', showArray);
document.getElementById("idTotal").addEventListener('click', showTotal);
document.getElementById("idClear").addEventListener('click', clearAll);

//This is where the dictionary begins

const province = {
	ab: "Alberta",
	bc: "British Columbia",
	sk: "Saskatchewan",
	mb: "Manitoba",
	nb: "New Brunswick",
	nl: "Newfoundland and Labrador",
	nt: "Northwest Territories",
	ns: "Nova Scotia",
	nu: "Nunavut",
	on: "Ontario",
	pe: "Prince Edward Island",
	qc: "Quebec",
	yt: "Yukon",
}

let provinceAbrv = document.getElementById("idLookUp").addEventListener('click', lookup);


function lookup (){
var input = document.getElementById("idDictionaryInput").value;
idMessageArea2.textContent = province[input];
}
