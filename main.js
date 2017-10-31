// var outsideVariable = 5;
//
// function doSomething() {
//   console.log(outsideVariable);
// }
//
// doSomething();

// function firstFunction() {
//   console.log("I am the first function.")
// }
//
// function secFunction(){
//   firstFunction();
//   console.log("I am the second function.");
//   function insidesecFunction(){
//     console.log("I'm inside the second function.");
//   }
// }
//
// secFunction();

// function joinStringsAndPrint(string1, string2){
//   var newString = string1 + string2;
//
//   function printString(string){
//     console.log(string);
//   }
//
//   printString(newString);
//
//   return newString;
// }
//
// var hello = "hello, ";
// var world = "world";
//
// joinStringsAndPrint(hello, world);

function joinStringsAndPrint( string1 , string2 ) {

	var newString =  string1 + string2;

	function printString( string ) {

		console.log(string);

		// Q3
		// console.log(newString);
    //yes

		// Q4
		// console.log(string1 + string2);
    //yes

	}

	printString( newString );

	return newString;


}
var string1 = "hello, ";
var string2 = "world";
joinStringsAndPrint( string1 , string2 );

// Q1
// printString( "run from outside joinStrings" );
//no

// Q2
// console.log(newString)
//no
