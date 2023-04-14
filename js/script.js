'use strict';


// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year == 2015) {
//     alert( "Правильно!" );
//     alert( "Вы такой умный!" );
//     }
 

// let num = 8;
// if (num > 4) {
//   num += 5;
// }
// alert(num); // 13;

// const num = 5;

// if (num % 2) {
//     alert('Число нечётное!');
//     } else {
//     alert('Число чётное!');
//     }

// const lang = 'ru';
//     if (lang === 'ru') {
//         alert('Это русский текст');
//         } else if (lang === 'en') {
//         alert('Это английский текст');
//         } else if (lang !== 'ru' || lang !== 'en') {
//         alert('Это не русский и не английский текст');
//     }



// function greeting(time) {
//     if (time > 18) {
//         return 'Добрый вечер!';
//         } else if (time > 11) {
//             return 'Добрый день!';
//         } else if (time > 4) {
//             return 'Доброе утро!';
//         }
//         return 'Доброй ночи!';
//         }

//     let grn=greeting(10); // "Доброе утро!"
//     alert(grn);

// const value = 10;
// const result = value > 10 ? 'Число больше 10!' : 'Число равно или меньше 10!';
// alert(result); // "Число равно или меньше 10!"
  

// const dayNumber = new Date().getDay();
//     let day = 
//         (dayNumber === 0) ? 'Воскресенье' :
//             (dayNumber === 1) ? 'Понедельник' :
//                 (dayNumber === 2) ? 'Вторник' :
//                     (dayNumber === 3) ? 'Среда' :
//                         (dayNumber === 4) ? 'Четверг' :
//                             (dayNumber === 5) ? 'Пятница' :
//                                 (dayNumber === 6) ? 'Суббота' : 'Неизвестный день недели';

// alert(`Сегодня ${day.toLowerCase()}.`);

const countCandyBoys = 1;
const countCandyGirls = 2;
let message;
switch (countCandyBoys + countCandyGirls) {
        case 1:
            message = 'Одна конфета';
            break;
        case 2:
        case 3:
            message = 'Две или три конфеты';
            break;
        case 4:
            message = 'Четыре конфеты';
            break;
        default:
            message = 'Не одна, не две, не три и не четыре конфеты';
        }
     // выведем сообщение в браузер
alert(message);

// let day = '';

// switch (new Date().getDay()) {
//   case 0:
//     day = 'Воскресенье';
//     break;
//   case 1:
//     day = 'Понедельник';
//     break;
//   case 2:
//     day = 'Вторник';
//     break;
//   case 3:
//     day = 'Среда';
//     break;
//   case 4:
//     day = 'Четверг';
//     break;
//   case 5:
//     day = 'Пятница';
//     break;
//   case 6:
//     day = 'Суббота';
//     break;
//   default:
//     day = 'Неизвестный день недели';
// }

// alert(`Сегодня ${day.toLowerCase()}.`);

// const result = 'success';

// switch (result) {
//   case 'success':
//     alert('Успех!');
//   case 'invalidCaptcha':
//     alert('Неверная капча!');
//   default:
//     alert('Ошибка!');
// }

// const result = 'success';

// switch (result) {
//   case 'success':
//     alert('Успех!');
//     break;
//   case 'invalidCaptcha':
//     alert('Неверная капча!');
//     break;
//   default:
//     alert('Ошибка!');
// }

//Домашнее задание или закрепление пройденного варианта
// Задание :
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

// let jsk = prompt('Какое «официальное» название JavaScript?', '');

//  if (jsk =='ECMAScript'){
//     alert('Верно!');
//  }else{
//     alert('Не знаете? ECMAScript!');
//  }
    
 // Следующее задание
 // Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

//  let num = prompt('Введите любое число', '');

//  if(num>0){
//      alert(1);
//  }else if(num<0){
//     alert(-1);
//  } else {
//     alert(0);
//  }



// let login=prompt('Login', "");

//  let massage=(login=='Сотрудник')? 'Привет':
//           (login=='Директор')? 'Здравствуйте':
//           (login=='') ? 'Нет логина': '';
          
//     alert(massage);
    
    
let j = prompt('Введите число', '');
switch(j){
    case  '49':
        alert('мало');
    break;
    case  '51':
        alert('много');
    break;
    case  '50':
        alert('Верно');
    break;
    default:
        alert('Что-то пошло не так');
        // break;
}