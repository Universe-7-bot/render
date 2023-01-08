var a = "sohan";
// console.log(a);
a = process.argv; //array
console.log(a);

// program to add two numbers passed by command line
var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[3]);

console.log(num1 + num2);
