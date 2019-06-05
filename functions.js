
console.log("Hello from functions.js v2");

	const value1 = myFunction("Rocks","SOCKS");
	const value2 = myFunction("Coding","FUN");
	
	function myFunction(xx, yy) {
		console.log("Hello from myFunction v2", xx, yy);
		const value_to_return = xx + "-" + yy;
		console.log("value returned is", value_to_return);
		return value_to_return;
	
	} 
		console.log("v1:", value1);
		console.log("v2:", value2);

		const func = myFunction;
	
		myFunction("Hello","World");
		console.log(myFunction("eva", "lapp"));
//======================================================//

function my_add(a,b,c){
	return a+b+c
};

const ans12 = my_add(1,2,3);
const ans2 = my_add(4,7,8)

console.log('my_add answer 1:', ans12);

console.log('my_add answer 2:',my_add(2,22,222));

//======================================================//

function my_email(a,b){
	return a + "." +b + "@evolveU.com"
}
const ans14 = my_email('jane','smith');

console.log('my_email answer 1:', ans14);

console.log('my_email answer 1:',my_email('bill','jones'));

//========================================================//

let array1 = [2,4,5,70];
let sum = 0

function runSum (){
	for (var i = 0; i < array1.length ; i++){
		sum += array1[i];
		;
};
console.log("my array total is", sum)
}

runSum();


//========================================================//

const string_array = [
	'this is a string',
	'that is also a string',
	'what about this',
	'what about that',
];

const search1 = "this";
const search2 = "is";

function look_for_string (string_array, search1){
	let count = 0
	for (let i =0; i < string_array.length; i++) {
		if(string_array[i].search(search1) >= 0){
			count += 1

	}
	}
	return(count);
}

const ans1 = look_for_string(string_array, search1);
const ans2 = lsook_for_string(tring_array, search2);

console.log("We found '", search1, "' in", ans1, "lines");
console.log("We found '", search2, "' in", ans2, "lines");

