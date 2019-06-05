const idH1 = document.getElementById("idH1");
const idH2 = document.getElementById("idH2");
const idH3 = document.getElementById("idH3");
const idH4 = document.getElementById("idH4");
const btnAdvice = document.getElementById("btnadvice");
const bodyClick = document.getElementsByTagName("body")[0];

//console.log("btnAdvice is", btnAdvice);

function onHeaderButton(){
// console.log("you pushed a button");
	if (idH1.textContent === "Hello Universe"){
	idH1.textContent = "Hello World";
}
	else {
	idH1.textContent = "Hello Universe"
}
}

function onAlbertaHover(){
	idH3.textContent = "Hello Saskatchewan";
}

function onCalgaryHover(){
	idH4.textContent = "Hello Saskatoon";
}

function onCanadaHover (){
	idH2.textContent = "Our Home and Native Land";
}

var counter = 0
function onAdviceClick (){
	//console.log("advice is working");
	//document.body.h1advice;
	var newHeading = document.createElement("h3");
	var contentHeading = document.createTextNode("Don't forget to drink water"+ counter++);
	newHeading.appendChild(contentHeading);
	document.body.appendChild(newHeading);
}

function onBodyClick(e){
	console.log("on Body Click running");
	console.log("e", e);
	console.log("run target", e.target);
	let y1 = document.getElementsByTagName("h2")[0].getAttribute("place");
	console.log("attribute of place is", y1);
}

idH1.addEventListener('click', onHeaderButton);
idH3.addEventListener('mouseover', onAlbertaHover);
idH4.addEventListener('mouseout', onCalgaryHover);
idH2.addEventListener('mouseout' ,onCanadaHover);
btnAdvice.addEventListener('click', onAdviceClick);
bodyClick.addEventListener('click', onBodyClick);

//This is where the grocery list code goes//

const addItemButton = document.getElementById("idButton");
const userInputField = document.getElementById("idInputItem");
const ol = document.getElementById("orderList");
const addAbove = document.getElementById("idButtonPosition");

function createListElement(){
	const li = document.createElement("li");
		li.appendChild(document.createTextNode(userInputField.value));
		ol.appendChild(li);
		userInputField.value = "";
}

function onClickButton(event){
	if (userInputField.value.length > 0){
		createListElement()
};	
	}
	

function onEnterPress(event){
	if (userInputField.value.length > 0 && event.keyCode === 13){
		createListElement();

	}
};

function onAddBefore(){
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(userInputField.value));
	ol.insertBefore(li, ol.childNodes[0]); 
};

//list.insertBefore(newItem, list.childNodes[0]);

idButton.addEventListener('click', onClickButton);
idInputItem.addEventListener('keypress', onEnterPress);
idButtonPosition.addEventListener('click', onAddBefore);


