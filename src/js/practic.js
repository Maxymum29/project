// let result,
//     a = 1,
//     b = 5;

// result = (a + b < 4) ? "Мало" : "Много";

// alert(result);

// let login = prompt("youre login?");

// let massege = (login == 'Сотрудник' ) ? 'hi' : 
//     (login == "Директор") ? "Hello" : 
//     (login == "") ? "Нет логина" :
//     "";
//     alert(massege);

// let age;

// if (age >= 14 && age <= 100){
//     alert(age);
// }


// let age;

// if (!(age <= 14 && age <= 100)){
//     alert(age);
// }


// let age;

// if (age >= 14 && age <= 100){
//     alert(age);
// }

// let age;

// if (age < 14 || age > 90) {

// }

// let login = prompt("Ваш логин?");

// if(login == "Админ"){
//     let pass = prompt("Пароль?");
    
//     if(pass == "Я главный"){
//         alert("Здравствуйте");
//     }else if(pass == "" || pass == null){
//         alert("Отмена");
//     }else{
//         alert("неверный пароль");
//     }

// }else if( login == "" || login == null){
//     alert("Отмена");
// }else{
//     alert("Я вас не знаю");
// }



// let userName = prompt("Кто там?", '');

// if (userName == 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass == 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass == '' || pass == null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName == '' || userName == null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }


// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// for (let i = 0; i < 10; i++) {

//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 == 0) continue;
  
//     alert(i); // 1, затем 3, 5, 7, 9
//   }

// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Значение на координатах (${i},${j})`, '');
  

//     if (!input) continue outer;
  
//     }
//   }
  
//   alert('Готово!');

// let i = 0;
// while (i++ < 5) {
//     alert( i );
// }
// let i = 2;

// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// let num;

// do {
//     num = +prompt("Введите число больше 100", "");
// } while (num <= 100 && num);

// let i = 0;

// while (i < 3) {
//     console.log( `number ${i}!` );
//     i++;
// }

// let num;

// do{
//    num = +prompt("Введите число больше 100?", 0);
// }while(num <= 100 && num);

// let num = [1, 2, 3, 4, 5];

// for( let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }


// let a = +prompt("сколько буде 2 + 2 ?", "");

// switch (a) {
//     case 4 :
//         alert("мало");
//         break;
//     case 8 :
//         alert("Good");
//         break;
//     default:
//         alert("wrong");
// }

// let browser = prompt("введите название браузера?");

// if(browser == "Edge") {
//     alert( "You've got the Edge!" );
// }else if(browser == 'Chrome' ||     
//     browser == 'Firefox' ||
//     browser == 'Safari'||
//     browser == 'Opera') {
//     alert('Okay we support these browsers too');
// }else{
//     alert( 'We hope that this page looks ok!' );
// }

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// const number = +prompt('Введите число между 0 и 3', '');

// // if (number === 0) {
// //   alert('Вы ввели число 0');
// // }

// // if (number === 1) {
// //   alert('Вы ввели число 1');
// // }

// // if (number === 2 || number === 3) {
// //   alert('Вы ввели число 2, а может и 3');
// // }

// switch(number){
//     case 0 :
//         alert('Вы ввели число 0');
//         break;
    
//     case 1 :
//         alert('Вы ввели число 1');
//         break;

//     case 2 :
//     case 3 :
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('А родители разрешили?');
//     }
//   }
  
//   let age = prompt('Сколько вам лет?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
//   } else {
//     alert( 'Доступ закрыт' );
//   }

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       alert( i ); // простое
//     }
//   }

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

//   function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
//   }

//   function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
//   }
// let a = 2,
//     b = 3;

// function min(a, b){
//     if (a < b){
//         return a;
//     }else{
//         return b;
//     }

// }

// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
//     alert( pow(x, n) );
//   }

