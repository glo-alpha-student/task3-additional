'use strict';


let lang = 'en';
let arr1 = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
let arr2 = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

if (lang == 'ru') {
    arr1;
    console.log(arr1);
} else if (lang == 'en') {
    arr2;
    console.log(arr2);
}

switch (lang) {
    case 'ru':
        arr1;
        console.log(arr1);
        break;
    case 'en':
        arr2;
        console.log(arr2);
        break;
}

let arr = {
    'ru': arr1,
    'en': arr2,
};
console.log(arr[lang]);


let namPerson = 'Артем';

let res = namPerson === 'Артем' ? console.log('директор') :
    namPerson === 'Александр' ? console.log('преподаватель') :
        console.log('студент');
