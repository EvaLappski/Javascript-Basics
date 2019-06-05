/*

	--- functions and braces nightmare 

*/
console.log("Hello from exercises");

const array1 = [3,1];


// write the function that will make this work


function orderArray (xyz){
	if (xyz[0] < xyz[1]) {
		return xyz;
	} else {
		return [xyz[1], xyz[0]];
	}
}



console.log("Should Be: 1, 3:", 
	orderArray(array1));

console.log("Should Be: 1, 5:", 
	orderArray([1, 5]));


console.log("Should Be: 10, 20:", 
	orderArray([20, 10]));


// UDEMY EXERCISE ABOUT ARRAYS//


const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];


function grouping (donkey){
	let array2 = []; //unique numbers
	let array3 = []; //grouped version of array, without sub arrays
	let arrayAnswer = []; // sorted and subdivided 
	for (let i=0; i < donkey.length; i++){
		console.log(!array2.includes(donkey[i]))
		if (!array2.includes(donkey[i])){
			array2.push(donkey[i]);
		}
	}
	console.log(array2);
	array2.sort(function(a,b){return a-b});
	for (let i=0; i < array2.length; i++){
		for (let y=0; y < donkey.length; y++){
			if (array2[i] === donkey[y]){
				array3.push(array2[i])
			}	
			
		}
		arrayAnswer.push(array3);
		array3= [];

		
	}
	console.log(array3);
	console.log("answer is", arrayAnswer);
}
grouping(array);

////$practice March 8//


/*
	--- make me an email
	Write the function that will make this code work.
*/
// console.log("Make me an Email");

// // ---- put function here ----
// function makeEmail (a,b){
// 	return `${a}.${b}@evolveu.ca`;
// }

// const larryEmail = makeEmail('larry', 'shumlich');
// const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';

// if (larryEmail != shouldBeLarryEmail) {
// 	console.log("***** We have an error here *****",
// 		larryEmail,
// 		" is not = ",
// 		shouldBeLarryEmail,
// 		" and it should be."
// 	)
// }

// console.log("Larry:", larryEmail);

// console.log("Jane:", makeEmail("jane", "lee"));
// console.log("Bill:", makeEmail("jane", "lee"));
// console.log("Sam:", makeEmail("jane", "lee"));


/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---

function assertEquals (p1,p2) {
	if (p1===p2) {
		console.log("ok", p1);
		return true
	} else {
		console.log (`*** the two values are not the same 
		p1--> ${p1} 
		p2--> ${p2}`);
		return false;
	}
}

// // and before this comment ---

// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value");

/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---

function makeEmailArr (array){
	return `${array[0]}.${array[1]}@evolveu.ca`;
}



// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));

/*	
	Write the function to format an email based on an object / map
*/

// Write the function after this comment ---

function makeEmailObj (obj){
	return (`${obj.fname}.${obj.lname}@evolveu.ca`);

}
// and before this comment ---

objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

// Write the function after this comment ---

function loopStaff (person){
	let emptyArray = []
	for (person of data.staff) {
		emptyArray.push(makeEmailObj(person))
		
	}
	return emptyArray;
}

// and before this comment ---


console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
//console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);

// March 19 //

function loopWithForOf (person){
	let emptyArray2 = [];
	for (person of data.staff) {
		emptyArray2.push(makeEmailObj(person));
	}
	return emptyArray2;
}

console.log('-----emailForOf')
const emailForOf = loopWithForOf(data.staff);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

function loopWithForIn (person){
	let emptyArray3 = [];
	for (person in data.staff ){
		emptyArray3.push(makeEmailObj(data.staff[person]));
	}
	return emptyArray3;
}

console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);
// console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);

 // MARCH 20 //

 function loopWithEach(person){
 	let emptyArray4 = [];
 	person.forEach(p => { 
  emptyArray4.push(makeEmailObj(p))
  });
	return emptyArray4
  	}

console.log('-----emailWithEach')
const emailWithEach = loopWithEach(data.staff);
//console.log(emailWithEach);
assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);

function loopWithMap(person){
	return person.map(makeEmailObj);
}

console.log('-----emailWithMap');
const emailWithMap = loopWithMap(data.staff);
//console.log(emailWithMap);
assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);

// write a function to receive the same array and return the total of balances
// create a table of objects of people having name and age
// write a function to receive the above array and return total of the ages
// write a function to receive the above array and average the ages

function reduceBalance (person){
let initialValue = 0;
let sum = person.reduce(
    (accumulator, currentValue) => accumulator + currentValue.balance
    ,initialValue)
console.log("help", sum);
}
reduceBalance(data.staff);

const peeps = [
		{fname:"Jane", lname:"Smith", age: 39},
		{fname:"Liam", lname:"Henry", age: 25},
		{fname:"Emma", lname:"Jones", age: 20},
		{fname:"Olivia", lname:"Notly", age: 55},
		{fname:"Noah", lname:"Ho", age:53},
		{fname:"William", lname:"Lee", age:52},
		{fname:"Benjamin", lname:"Amis", age:17},
	]
	

function reduceAge (person){
	let initialValue = 0;
	let sum = person.reduce(
    	(accumulator, currentValue) => accumulator + currentValue.age, initialValue);
    console.log("total age",sum)
	return sum;
}

reduceAge(peeps);


function averageAge (person){
	let sum = reduceAge(person);
	let average = sum / person.length;
	console.log("the average age is", average);
	return average;
}

averageAge(peeps);


let largeBalances = data.staff.filter(x => x.balance >= 1000)
console.log("largeBalances", largeBalances);
assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");



let tot = data.staff.reduce((accumulator, currentValue) => accumulator + currentValue.balance, 0);
console.log(tot);
assertEquals(tot, 3823);

// APRIL 5th//


let people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

let processPeople = function(data, callback) {
	for (let i=0; i<data.length; i++) {
		if (data[i].province === 'AB' || data[i].province === 'BC'){
			if(typeof callback === "function"){
				callback(data[i]);
			}
		} 

	}
}
//
// Here is invoking the processPeople function.  Write the callback
// function as an anonymous function
//
processPeople(people, function(item) {
	if (item.age > 25) {
		console.log(item.fname, item.lname,  'is over 25');
	}
});

// April 30 //

let determineTotal = function() {
	let total = 0;
	let count = 0;
	let avergae = 0
	processPeople (people, function(item){
		total = total + item.age;
		count++;
		average = total / count;

	})
	console.log('total age', total)
	console.log('total count', count)
	console.log('average age', average)
}




determineTotal();
