console.log("working")



function makeDiv(message){
	const newDiv = document.createElement("div");
	newDiv.textContent = message;
	newDiv.className = "clPanel";
	console.log("Hi I'm a new Div", newDiv);
	//return makeDiv;
	return newDiv;

}
//makeDiv("hello I'm awesome");


counter = 1;

function onBodyClick(event){
	//console.log("on Body Click running");
	//console.log("e", event);
	//console.log("run target", event.target);
	event.target.textContent = "BANG" + counter++;
	event.target.appendChild(makeDiv("WOW SO COOL"))
}

document.body.addEventListener('click', onBodyClick);