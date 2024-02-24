// function showGreetings(greetings, name){
//     alert(`${greetings} ${name}`)
// }

// showGreetings("Привет", "Мир");
// showGreetings("Привет", "Адилет");

// function calcNumber(calc1, calc2){
//     result = calc1 + calc2
//     console.log(result);
// }

// calcNumber(23, 32);
// calcNumber(232, 323);

// function calculateCvadrat(num){
//     num = Math.pow(num,2)
//     console.log(num);
// }

// calculateCvadrat(4);
// calculateCvadrat(9);

// function namePeople(namePeople) {
//     alert(`Ассаламу алайкум ${namePeople}`)
// }

// namePeople('Adilet')

// function string(firstString, secondString){
//     result = firstString + ' ' + secondString
//     console.log(result);
// }

// string('This is first line string.', 'This is second line string.');

// function calcExamination(numbers){
// if (numbers % 2 === 0) {
//     console.log(numbers + ' Число четное');
// }    else {
//     console.log(numbers + ' Число нечетное');
// }
// }

// calcExamination(21);
// calcExamination(18);

// function calculate(num1, num2){
//     if (num1 > num2) {
//         console.log(num1 + ' ' + 'This is num1');
//     }else {
//         console.log(num2 + ' ' + 'This is num2');
//     }
// }

// calculate(73, 43);

// function stringLength(lengths){
//     let proverka = lengths
//     console.log(`Слово ${proverka} занимает ${proverka.length} длину`);
// }

// stringLength('This is string Length');

// function getInfo(name, age){
//     console.log(`Привет ${name} Тебе ${age} лет`);
// }

// getInfo('Adilet', 24);
// getInfo('Aidin', 16);

// function calculateNum(num1, num2) {
//     if (num1 > 10 && num2 > 10){
//        result = num1 + num2
//        console.log(result);
//     }else {
//         console.log(num1, num2);
//     }
// }

// calculateNum(232, 435)
// calculateNum(3, 3)

// function appartment(first, second, third){
//     if (first <= 20){
//         console.log(first + ' этаж' + ' Вы в первом подезде');
//     }if (second >= 21 && second <= 48){
//         console.log(second + ' этаж' + " Вы в втором подезде");
//     }if (third >= 49 && second <= 90){
//         console.log(third + ' этаж' + " Вы в третем подезде");
//     }else {
//         console.log( " Введите номер квартиры до 90");
//     }
// }

// appartment(12, 32 , 89)

// ------------------------------------function-expression-------------------------------------------------------------------

// const showGreetings = function(name){
//     console.log('Helloo ' + name);
// }

// showGreetings("Adilet");
// showGreetings("Kairat");

// const summary = function(num1, num2){
//     console.log(num1 + num2);
// }

// summary(323, 234)
// summary(34,34)

// const calculateCvadrat = function(num){
//     num = Math.pow(num,2)
//     console.log(num);
// }

// calculateCvadrat(2);
// calculateCvadrat(12)

// const nameUser = function(name){
// alert(`Helloo ${name}`)
// }

// nameUser('Adilet');
// nameUser('Aizirek');

// const lengthtwo = function(string1, string2){
//     console.log(string1 + ' ' + string2);
// }

// lengthtwo("hello i am first string", "helloo i am second string")

// const number = function(num){
//     if (num % 2 === 0){
//         console.log(`${num} Цифра четное`);
//     }else {
//         console.log(`${num} Цифра нечетное`);
//     }
// }

// number(21);
// number(20)

// const checkNumber = function(num1,num2){
//     if (num1 > num2){
//         console.log(num1);
//     }else{
//         console.log(num2);
//     }
// }

// checkNumber(232,323);

// const stringLength = function(length){
//     lengthstrok = length
//     console.log(lengthstrok.length);
// }

// stringLength("helloo world")
// stringLength("adilet")

// const nameAndAge = function(name, age){
//     console.log(`Привет ${name} тебе ${age} лет`);
// }

// nameAndAge("Adilet", 24)
// nameAndAge("kairat", 23)

// const summary = function(num1, num2){
//     if (num1 > 10 && num2 > 10){
//         console.log(num1 + num2);
//     }else {
//         console.log(num1);
//         console.log(num2);
//     }
// }

// summary(2, 4);
// summary(2323, 234);

// const appartment = function(a, b, c){
//     if (a <= 20){
//         console.log(`${a} Этаж. Вы находитесь в первом подезде`);
//     }if (b >=21 && b <= 48){
//         console.log(`${b} Этаж. вы находитесь на втором подезде`);
//     }if (c >= 49 && c <= 90){
//         console.log(`${c} Этаж. Вы находитесь в третем подезде`);
//     }else {
//         console.log('Введите номер квартиры до 90');
//     }
// }
// appartment(123)
// appartment(12, 33, 55)

// -----------------------------------------function-arrow------------------------------------------------------------

// const showGreetings = (greetings) => {
//     return greetings;
// }

// console.log(showGreetings('Привет'));

// const summary = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(summary(12, 32));

// const number = (num) => {
//    return num = Math.pow(num, 2);
// }

// console.log(number(3));
// console.log(number(5));

// const nameUser = (name) => {
//     return name = `Ассаламу алайкум ${name} `
// }

// alert(nameUser("Adilet"))

// const string = (string1, string2) => {
//     return string1 + ' ' + string2;
// }

// console.log(string("Helloo", "Adilet"));

// const number = (num) => {
//      if (num % 2 === 0){
//         num = `${num} Число четное`
//     }else{
//         num = `${num} Число нечетное`
//     }
//     return num;
// }

// console.log(number(12));
// console.log(number(11));

// const biggestNumber = (num1, num2) => {
//     if (num1 > num2){
//         num1
//     }else{
//         num2
//     }
//     return num1, num2;
// }

// console.log(biggestNumber(21, 22));
// console.log(biggestNumber(22,21));

// const string = (string) => {
//      string = string.length;
//      return string;
// }

// console.log(string("helloo world"));

// const nameAndAge = (name, age) => {
//   result =  `Привет ${name} тебе ${age} лет`
//     return result;
// }

// console.log(nameAndAge('Adilet', 24));

// const summary = (num1, num2) => {
//     if (num1 > 10 && num1 > 10){
//         result = num1 + num2
//     }else {
//         result = `${num1} ${num2}`;
//     }
//     return result
// }

// console.log(summary(12,34));
// console.log(summary(3, 5));

// const appartment = (a, b, c) => {
//   if (a <= 20) {
//     result = `${a} Этаж. Первый подезд`;
//   }
//  else if (b >= 21 && b <= 48) {
//     result = `${b} Этаж. Второй подезд`;
//   }
//   else if (c >= 49 && c <= 90) {
//     result = `${c} Этаж. Третий подезд`;
//   } else {
//     result = `Напишите квартиру до 90`;
//   }
//   return result;
// };

// console.log(appartment(13, 34, 89));
// console.log(appartment(23, 34, 12));
// console.log(appartment(77, 12, 81));
// console.log(appartment(131, 341, 891));

// ----------------------------------------calculator-----------------------------------------------------------

// const calculator = (a, b, c) => {
//   if (b === `+`) {
//  result = a + c;
//   }
//   if (b === `-`) {
//     result = a - c;
//   }
//   if (b === `/`) {
//     result = a / c;
//   }
//   if (b === `*`) {
//     result =  a * c;
//   }
// return result;
// };

// console.log(calculator(12, `+`, 12));
// console.log(calculator(12, `-`, 12));
// console.log(calculator(12, `/`, 12));
// console.log(calculator(12, `*`, 12));

// const calculate = function(a, b, c){
//     if (b === `+`) {
//         result = a + c;
//          }
//          if (b === `-`) {
//            result = a - c;
//          }
//          if (b === `/`) {
//            result = a / c;
//          }
//          if (b === `*`) {
//            result =  a * c;
//          }
//        return result;
// }

// console.log(calculator(12, `+`, 12));
// console.log(calculator(12, `-`, 12));
// console.log(calculator(12, `/`, 12));
// console.log(calculator(12, `*`, 12));

// function calc(a, b, c){
//     if (b === `+`) {
//         result = a + c;
//          }
//          if (b === `-`) {
//            result = a - c;
//          }
//          if (b === `/`) {
//            result = a / c;
//          }
//          if (b === `*`) {
//            result =  a * c;
//          }
//        return result;
// }

// console.log(calculator(12, `+`, 12));
// console.log(calculator(12, `-`, 12));
// console.log(calculator(12, `/`, 12));
// console.log(calculator(12, `*`, 12));