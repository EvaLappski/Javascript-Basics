console.log("HELLO")

//[1,2,3].forEach(function(a,b,c){console.log(a,b,c)})

const array = ['a','b','c','d','e'];

console.log(array)


function myFunc(zzz,ccc,ttt) {
    console.log(zzz,ccc,ttt);
}

array.forEach(myFunc);
//forEach Syntax (currentvalue, index, array)

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



function myCallBackFunction (arr, func){
	console.log("I have arrived in call myCallBackFunction")
	console.log("   --->", arr);
 	console.log("   --->", func);
 	for(let i = 0; i < arr.length; i ++) {
        //console.log('==>', arr[i]);
        func(arr[i]);
	}
}

myCallBackFunction(data.staff, myWorkerFunction);

function myWorkerFunction (b){
	console.log("inside myWorkerFunction ", b)
}

