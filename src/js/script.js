"use strict";
// Переменные — это хранилище информации
// Let (коробочка) number(имя) =(присваивание) 5;
// Или
// const (коробочка) leftBorderWidth(имя) =(присваивание) 1;

// способы задания переменных –
// let- изменяема
// const – не изменяемая
// var – не применять!


// Директива 
// “use strict”;
// Мы говорим скрипту- мы  работаем в современном режиме( НЕ ПОЗВОЛЯЕТ РАБОТАТЬ БЕЗ ПЕРЕМЕННЫХ) 
// !НУЖНО ВСЕГДА ПРОПИСЫВАТЬ В НАЧАЛЕ СКРИПТА!


// ЧТО МОЖНО ПОМЕЩАТЬ В ПЕРЕМЕННЫЕ
// 8 ТИПОВ ДАННЫХ
// ПРОСТЫЕ ТИПЫ:
// -ЧИСЛА 1 ,2, 3
// -СТРОКИ ‘NAME’
// -ЛОГИЧЕСКИЕ (BOOLEAN)
// true 
// false

// null –когда чего-то нет
// undefined – нет значение
// Symbol – на практике почти не используется
// BigInt – очень большие числа больше чем 2 в 53 степени



// Объекты:
// Специальные:
// -Массивы[] - это хранение данных по порядку
// -Функции Function
// -Объект Дата
// -Регулярные выражения 
// -Ошибки


// let number = 4.6;

// console.log(-4/0);
// console.log('string' * 9);

// const persone = 'Alex';

// const bool = true;

// // console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);
// // console.log(obj['name']);


// let arr =['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "");
// // console.log(typeof(answer)); мы всегда получаем строчное значение 
// от пользователя, но мы можем поставить "+" перед Promt или другом названии то получим "number"

// const answer = +prompt("Вам есть 18?", "");
// console.log(typeof(answer + 5)); здесь получим математическое сложение 

// const answers = []; /* - используем массивы */

// // answers[0] = prompt('как ваше имя?', "");
// // answers[1] = prompt('как ваше фамилия?', "");
// // answers[2] = prompt('возраст?', "");

// // -одна из первых команд которая появилась в js для вывода информации 
// // от пользователя в реальных проектаъ не используют(document)
// console.log(typeof(answers));

// -confirm,prompt,alert - работают только ввнутри браузера




/* ИНТЕРПОЛЯЦИЯ */
// const category = "toys";

// // console.log("https://someurl.com/" + category); старый прием до применения интерполяции 

// console.log(`https://someurl.com/${category}`); /* ``- бэктики используются для интерполяции */

// const user = "MAX";

// alert(`Привет, ${user}`);






/*    // ОПЕРАТОРЫ JS */
// + конкотинация
// console.log('arr' + ' - object');
// console.log( 4 + '5');


// /* ИНКРЕМЕНТ И ДЕКРЕМЕНТ */
// существуют для укорочения кода и соответственно уменьшают или увеличивают значение на 1
// let incr = 10,
//     decr = 10;

// // incr++; /* оператор инкремента, то есть увеличение на 1 ЭТО ПОСТФИКСНАЯ */ 
// // /* так же можно написать ++incr; ЭТО ПРЕФИКСНАЯ */
// // decr--; /* оператор дикремента , то есть уменьшение на 1 ЭТО ПОСТФИКСНАЯ */ 
// // /* так же можно написать --decr; ЭТО ПРЕФИКСНАЯ */

// // console.log(incr); /* 11 */
// // console.log(decr); /* 9 */

// console.log(incr++); /* ПОСТФИКСНАЯ форма возвращает старое значение и ответ 
// // такой же какой мы задали переменной "10"  */ 
// console.log(decr--); /* ПОСТФИКСНАЯ форма возвращает старое значение и ответ 
// // такой же какой мы задали переменной "10"  */

// console.log(++incr); /* ПРЕФИКСНАЯ форма работает с прибавлением 1 и результат "11" */
// console.log(--decr); /* ПРЕФИКСНАЯ форма работает с вычитанием 1 и результат "9" */


// console.log(5%2); /* % применяется для получения остатка ,то есть при делении данных чисел остаток будет "1" */

/* "=" - знак присваивания

"==" - знак сравнения */
// console.log(2*4 == 8); - true , console.log(2*4 == "8"); - true

// "===" - строгое сравнение при его использовании будет работать только сравнения одинаковых по типу данных
// console.log(2*4 === "8"); - false, console.log(2*4 === 8); - true


// && - оператор "и" работает только тогда, когда у нас 2 или больше подопытных являются true
// || - оператор "или"" работает только когда один из них true

// const isChecked = true,
//         isClose = true; 

// console.log(isChecked && isClose); - true


// const isChecked = true,
//         isClose = false;

// console.log(isChecked || isClose); -true


// "!" - оператор отрицания применяется перед именем чтобы придать обратное значение пример:

// const isChecked = false,
//         isClose = false;

// console.log(isChecked || isClose); -false но если мы поставим "!" то,

// const isChecked = false,
//         isClose = false;

// console.log(isChecked || !isClose); -true


/* ПОРЯДОК ВЫПОЛНЕНИЯ ЭТИХ ОПЕРАТОРОВ */ /* ТАБЛИЦА В ИНТЕРНЕТЕ */

// console.log(2 + 2 * 2 != "6"); - false
// console.log(2 + 2 * 2 !== "6"); - true



// новый урок

// if (4 == 9 ) {
//     console.log("ok");
// } else{
//     console.log("error");
// }

// const num = 50;

// if(num < 49){
//     console.log("error");
// } else if (num > 100){
//     console.log("more");
// } else{
//     console.log("ok");
// }

// /* ТЕРНАРНЫЙ ОПЕРАТОР - когда три аргумента */
// (num === 50) ? console.log("ok") : console.log("error");
// /* БИНАРНЫЙ ОПЕРАТОР - когда два аргумента */
// 4 + 4
// /* УНАРНЫЙ ОПЕРАТОР - когда один аргумента */
// +"4"

/* конструкция свич */

// const num = "50";

// switch (num) {
//     case "49": 
//         console.log("not");
//         break;
//     case "100":
//         console.log("not");
//         break;
//     case "51":
//         console.log("true");
//         break;
//     default:
//         console.log("not use");
//         break;
// } используется для прямого сравнения


/* ЦИКЛЫ */

// let num = 50;

/* есть три способа задать циклы */

// while (num <= 55){   /* пока что это условие выполняется 1 цикл */ 
//     console.log(num);
//     num++;
// }

// do { /* 2 цикл */
//     console.log(num);
//     num++;
// }
// while(num < 55);

/* САМЫЙ ЧАСТО ИСПОЛЬЗУЕМЫЙ ЦИКЛ ТРЕТИЙ ЭТО FOR */

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }

// /* ФУНКЦИИ */ ЭТО НАШИ ДЕЙСТВИЯ В СКРИПТЕ


/* Выбор имени функции */
// Функция – это действие. 
// // Поэтому имя функции обычно является глаголом. Оно должно быть простым, 
// точным и описывать действие функции, чтобы программист,
// который будет читать код, получил верное представление о том, что делает функция.

// // Как правило, используются глагольные префиксы, обозначающие 
// общий характер действия, после которых следует уточнение. Обычно в командах разработчиков действуют соглашения, 
// касающиеся значений этих префиксов.

// Например, функции, начинающиеся с "show" обычно что-то показывают.

// Функции, начинающиеся с…

// "get…" – возвращают значение,
// "calc…" – что-то вычисляют,
// "create…" – что-то создают,
// "check…" – что-то проверяют и возвращают логическое значение, и т.д.
// Примеры таких имён:

// showMessage(..)     // показывает сообщение
// getAge(..)          // возвращает возраст (в каком либо значении)
// calcSum(..)         // вычисляет сумму и возвращает результат
// createForm(..)      // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false


// let num = 20;

// function showFirstMassege(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMassege("hello world");
// console.log(num);

// // function calc (a, b) {
// //     return (a + b);
// // }

// // console.log(calc(4, 3));
// // console.log(calc(5, 6));
// // console.log(calc(10, 6));

// function ret () {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// /* Классификация функций */

// const logger = function() {
//     console.log('hello world');
// };

// logger();

// /* Современный стандарт ES6 */

// // const calc = (a, b) => a + b; /* сокращенный вариант */
// // const calc = (a, b) => { return a + b };
// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };


/* МЕТОДЫ И СВОЙСТВА У СТРОК И ЧИСЕЛ */
// Методы - это вспомогательные функции;
// Свойства - это вспомогательные значения;

// const str = "test";
// const arr = [1, 2, 4];

// console.log(str.length);
// console.log(str[2]);


// Методы

// const str = "test";


// // console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "some fruit";

// console.log(fruit.indexOf("i")); /* ПОИСК ПОД СТРОКИ */

// /* Основные 3 метода которые пименяются на практике SLICE(), SUBSTRING(), SUBSTR(),   
// выполняют поиск и показ по элементам которые мы указали в цифрах порядка */

// const logg = "Hello world";

// // console.log(logg.slice(6, 11)); /* поддерживает и отрицательное значение */

// // console.log(logg.substring(6, 11)); /* не поддерживает отрицательные значения */

// console.log(logg.substr(6, 5));/* отличие : вместо второго аргумента конца мы указываем длинну,
//  то есть колличество символов которые нам нужно показать */


//  /* Теперь переходим к числам библиотека Math */

//  const num = 12.5;

//  console.log(Math.round(num));/*  чаще всего применяется на практике */

//  const test = "12.2px";

//  console.log(parseInt(test)); /* Переводит число в другую систему исчисления */
//  console.log(parseFloat(test)); /* Служит для того чобы взять число , строку и вернуть 
//  в десятичный вариант(дробные значения) */  


// let a = "" + 1 + 0,
//     b = "" - 1 + 0,
//     c = true + false,
//     d = 6 / "3",
//     e = "2" * "3",
//     f = 4 + 5 + "px",
//     g = "$" + 4 + 5,
//     h = "4" - 2,
//     i = "4px" - 2,
//     j = 7 / 0,
//     k = " - 9 " + 5,
//     l = " -9 " - 5,
//     m = null + 1,
//     n = undefined + 1,
//     o = "/t /n" - 2;

// console.log( a ,b, c, d, e, f, g, h, i, j, k, l, m, n, o );


// let useName = prompt("какое официальное название JS?", "");

// if (useName == "ECMAScript") {
//     alert("Верно!");
// } else {
//     alert("ECMAScript");
// }

// let num = +prompt("numbers", "");

// if(num > 0) {
//     alert(1);
// }else if (num < 0) {
//     alert(-1);
// }else{
//     alert(0);
// }

// let result,
//     a = 2,
//     b = 2;


// result = (a + b < 4) ? 'Мало' : 'Много';
// console.log(result);



/* Callback */ // функция которая должна быть выполнена после того как другая функция завершила свое выполнение
// очень важная функция

// function first () {
//     //do someting
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second () {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(` I'm learn: ${lang}`);
//     callback();
// }

// function done () {
//     console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', done);



/* Объекты */

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// /* Деструктуризация объекта */
// const {border, bg} = options.colors;
// console.log(border);


/* МЕТОД КОТОРЫЙ ПРИМЕНЯЕТСЯ ДЛЯ ОБЪЕКТОВ  */
// console.log(Object.keys(options).length);


// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);
// прием счетчика с объектом -

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for(let i in options[key]) {
//             console.log(`Свойство ${i} иимеет значение ${options[key] [i]}` );
//             counter++;
//         }
//     }else{
//         console.log(`Свойство ${key} иимеет значение ${options[key]}` );
//         counter++;
//     }
// }
// console.log(counter);



/* МАссивы и псевдомасивы */

const arr = [2, 12, 23, 8, 10];
arr.sort();
console.log(arr);
// arr[99] = 0; /* ТАк делать нельзя нарушается логика */
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) { //это CALLBACK функция
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// }); /* Самый часто тспользуемый метод, позволяет гибео перебрать все элементы в массиве */
/* Гибко настраивается , можем применить ТРИ агргумента :
1) это тот элемент который мы сейчыс перебираем (назвать можем как угодно)
2) это номер по порядку
3) это ссылка на тот массив который мы перебираем */
// так же нельзя использовать break и continue


// arr.pop(); /* Удаляет послeдний элемент из массива */
// arr.push(10); /* Добавляет какой-то элемент в конец массива  */
// arr.shift();  /* работает с началом массива редко используется из-за изменения индекса */
// arr.unshift(); /* работает с началом массива редко используется из-за изменения индекса */

// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }


// const str = prompt("","");
// const production = str.split(", ");
// production.sort();
// console.log(production.join('; '));
