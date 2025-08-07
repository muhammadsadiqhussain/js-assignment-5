
// let a = 5;
// let b = 5;
// let result = a + b;
// console.log(result)

// let a = 5;
// let b = 5;
// let result = a - b;
// console.log(result)

// let a = 5;
// let b = 5;
// let result = a * b;
// console.log(result)

// let a = 5;
// let b = 5;
// let result = a / b;
// console.log(result)

// let a;
// document.write(`value after variable declaration is: ${a} <br>`)

// a = 5;
// document.write(`value is: ${a} <br>`)

// a++;
// document.write(`after increment: ${a} <br>`)

// a += 7;
// document.write(`value after add: ${a} <br>`)

// a--;
// document.write(`after decrement: ${a} <br>`)

// // a /= 3;
// document.write(`reminder: ${a % 3} <br>`)


// let movieTicket = 600;

// let costumerBuyTicket = 5;

// let result = movieTicket * costumerBuyTicket;

// document.write(`total cost to buy 5 tickets to a movie is: ${result}`)

// let num = 5;
// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let num4 = 4;
// let num5 = 5;
// let num6 = 6;
// let num7 = 7;
// let num8 = 8;
// let num9 = 9;
// let num10 = 10;

// let result = num * num1;
// let result2 = num * num2;
// let result3 = num * num3;
// let result4 = num * num4;
// let result5 = num * num5;
// let result6 = num * num6;
// let result7 = num * num7;
// let result8 = num * num8;
// let result9 = num * num9;
// let result10 = num * num10;

// document.write(`<h1>Table of  ${num} </h1>`)
// document.write(num + " X " + num1 + " = " + result, '<br>') 
// document.write(num + " X " + num2 + " = " + result2, '<br>' )
// document.write(num + " X " + num3 + " = " + result3, '<br>' )
// document.write(num + " X " + num4 + " = " + result4, '<br>' )
// document.write(num + " X " + num5 + " = " + result5, '<br>' )
// document.write(num + " X " + num6 + " = " + result6, '<br>' )
// document.write(num + " X " + num7 + " = " + result7, '<br>' )
// document.write(num + " X " + num8 + " = " + result8, '<br>' )
// document.write(num + " X " + num9 + " = " + result9, '<br>' )
// document.write(num + " X " + num10 + " = " + result10, '<br>' )

// let celciusTemp = 25

// Ftemp = (celciusTemp * 9 / 5) + 32

// document.write(celciusTemp + "C  is  F " + Ftemp, "<br>")

// fahrenheitTemp = 77 

// Ctemp = (fahrenheitTemp - 32) * 5 / 9

// document.write(fahrenheitTemp + "F  is  C " + Ctemp)

// let product1Price = 650
// let product2Price = 100
// let shipCharge = 100

// let orderQuantity1 = 3
// let orderQuantity2 = 7

// let grossPurchase1 = orderQuantity1 * product1Price
// let grossPurchase2 = orderQuantity2 * product2Price

// document.write("Total  ",grossPurchase1 + grossPurchase2 + shipCharge)

// let totalMarks = 980
// let obtainMarks = 804

// percentage = obtainMarks / totalMarks * 100

// document.write(percentage)

// let usDollar = 10
// let saudiRiyal = 25 

// let usDollarRate = 104.80
// let saudiRiyalRate = 28

// let UStoPKR = usDollar * usDollarRate
// let saudiRiyaltoPKR = saudiRiyal * saudiRiyalRate

// document.write(UStoPKR + saudiRiyaltoPKR)

// let number = 100

// let result = ((number + 5) * 10 ) / 2

// document.write(result)

// let currentYear = 2025
// let birthYear = 2000
// let age = currentYear - birthYear
// document.write(age)

// chapter 12

// Q NO 1

// let userValue = prompt("Enter a character:");

// if (userValue.length === 1) {
//   let ascii = userValue.charCodeAt(0);

//   if (ascii >= 48 && ascii <= 57) {
//     console.log("It's a number.");
//   } else if (ascii >= 65 && ascii <= 90) {
//     console.log("It's an uppercase letter.");
//   } else if (ascii >= 97 && ascii <= 122) {
//     console.log("It's a lowercase letter.");
//   } else {
//     console.log("It's a special character or not valid.");
//   }
// } else {
//   console.log("Please enter only one character.");
// }

// Q NO 2

// var userNum1 = parseInt(prompt("enter 1st number?"))
// var userNum2 = parseInt(prompt("enter 2nd number?"))

// if (userNum1 > userNum2) {
//     console.log(userNum1 + " is larger then " + userNum2);

// } else if (userNum2 > userNum1) {
//     console.log(userNum2 + " is larger then " + userNum1);

// } else {
//     console.log("Both Equal");

// }

// Q NO 3

// var userNumber = prompt("enter a any number")

// if (userNumber >= 0) {
//     console.log("positive");
// } else if (userNumber < 0) {
//     console.log("nagative");
// } else {
//     console.log("not a number");

// }

// Q NO 4

// var userInput = prompt("enter only vowels one letter?").toLowerCase();

// if (userInput.length === 1) {
//   if (
//     userInput == "a" ||
//     userInput == "e" ||
//     userInput == "i" ||
//     userInput == "o" ||
//     userInput == "u"
//   ) { console.log("correct input");
  
//   } else {
//     console.log("false input");
    
//   }}

// Q NO 5

// var userPassword = prompt("enter your password")

// var orignalPassword = "123456"

// if (userPassword == orignalPassword) {
//     alert("Welcome")
    
// } else { alert("wrong password")

// }
