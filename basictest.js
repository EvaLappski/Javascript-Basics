console.log("Hello World from basic.js");


function onButtonClicked(){
	var text = document.getElementById("input").value;
	console.log(Number(text)+1);
	console.log("I am in the button click event");
}

document.getElementById("button").addEventListener('click', onButtonClicked)

	var a = Number(document.getElementById("num1"));
	var b = Number(document.getElementById("num2"));
	//console.log(typeof a); returns number

function addTwoNumbers(){
	var ans = a.value+b.value;
	console.log(typeof ans);//returns number
	console.log(ans, a, b); //returns NaN
	document.getElementById("result").textContent=ans;
	
}
document.getElementById("add").addEventListener('click', addTwoNumbers);

function subTwoNumbers(){

	//console.log(a-b);
	document.getElementById("result").value=a-b;
}

document.getElementById("sub").addEventListener('click', subTwoNumbers);

function multiplyTwoNumbers(){
	
	//console.log(a*b);
	document.getElementById("result").value=a*b;
}

document.getElementById("multiply").addEventListener('click', multiplyTwoNumbers);

function divideTwoNumbers(){

	//console.log(a/b);
	document.getElementById("result").value=a/b;
}

document.getElementById("divide").addEventListener('click', divideTwoNumbers);



