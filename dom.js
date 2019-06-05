const showButton = document.getElementById("idShowButton");
const addButton = document.getElementById("idAddButton");
const li = document.querySelector("li");
const ol = document.querySelector("ol");


function onShowButtonClick (){
	console.log("show button works")
	console.log(ol.textContent);

}

function onAddButtonClick (){
	const listItem = document.createElement("li");
	const listItemText = document.createTextNode("TEST");
	console.log("add button works");
	ol.appendChild(listItem);
	listItem.appendChild(listItemText);

}

showButton.addEventListener('click', onShowButtonClick);
addButton.addEventListener('click', onAddButtonClick);



//==============================CARDS===============================//

const idAddCard = document.getElementById("idAddCard");//the button
const idCardsGoHere = document.getElementById("idCardsGoHere"); // cards container

let counter = 1
let count = 1

// creates a new card 
function createNewDivElement(){
	console.log("a card has been added");
	
	// create a new div element 

	const createCard = document.createElement("div");
	createCard.className = "classNewCard";
	createCard.id = ("idNewCard" + counter++);

	// and give it some content 

	const cardContent = document.createTextNode("Hi there, I'm card #"+ count++);

	const aboveBtn = document.createElement("button");
	const aboveBtnText = document.createTextNode("Above");
	aboveBtn.id = "idAboveBtn";

	const belowBtn = document.createElement("button");
	const belowBtnText = document.createTextNode("Below");
	belowBtn.id= "idBelowBtn";

	const clearBtn = document.createElement("button");
	const clearBtnText = document.createTextNode("Clear");
	clearBtn.id = "idClearBtn";

	// // then add the content to the newly created div
	createCard.appendChild(cardContent);

	aboveBtn.appendChild(aboveBtnText);
	createCard.appendChild(aboveBtn);
	
	belowBtn.appendChild(belowBtnText);
	createCard.appendChild(belowBtn);

	clearBtn.appendChild(clearBtnText);
	createCard.appendChild(clearBtn);

	
	return createCard;	
};


	// finally add the newly created element and its content into the DOM 
	
function onAddCardBtnClick(){
	idCardsGoHere.appendChild(createNewDivElement());
}

idAddCard.addEventListener('click', onAddCardBtnClick);


//code for functionality of buttons within card


document.addEventListener('click', ()=>{console.log(event.target)});


function onClearBtnClick (event){	
	let currentCard = event.target.parentNode;
	
	if (event.target.id === "idClearBtn"){
		currentCard.parentNode.removeChild(currentCard);	
	} else if (event.target.id === "idAboveBtn"){
		let newCard = createNewDivElement();
		currentCard.parentNode.insertBefore(newCard, currentCard);
	} else if (event.target.id === "idBelowBtn"){
		let newCard = createNewDivElement();
		currentCard.parentNode.insertBefore(newCard, currentCard.nextSibling);
	}

}


idCardsGoHere.addEventListener('click', onClearBtnClick);

// var newItem = document.createElement("LI");       // Create a <li> node
// var textnode = document.createTextNode("Water");  // Create a text node
// newItem.appendChild(textnode);                    // Append the text to <li>

// var list = document.getElementById("myList");    // Get the <ul> element to insert a new node
// list.insertBefore(newItem, list.childNodes[0]);  // Insert <li> before the first child of <ul>

