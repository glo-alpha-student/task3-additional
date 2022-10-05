'use strict';

let lang = 'ru';


if (lang == 'ru') {
    var arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
} else if (lang == 'en') {
    arr = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
}
console.log(arr);


switch (lang) {
    case 'ru':
        arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        console.log(arr);
        break;
    case 'en':
        arr = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
        console.log(arr);
        break;
}


arr = {
    'ru': ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    'en': ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
};
console.log(arr[lang]);





let namPerson = 'Артем';

let res = namPerson === 'Артем' ? console.log('директор') :
    namPerson === 'Александр' ? console.log('преподаватель') :
        console.log('студент');
