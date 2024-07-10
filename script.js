// задание 1

let ageYears = prompt ('Сколько Вам лет?');
let days = ageYears * 365.25;
alert(`Вам ${days} дней`);

// задание 2

let num_1 = prompt('Введите первое число');

let num_1_ = +num_1;

let num_2 = prompt ('Введите второе число');

let num_2_ = +num_2;

sum_ = num_1_ + num_2_;

alert(`Сумма чисел равна ${sum_}`);


// задание 3

let value_ = prompt('Введите какое-нибудь значение');

if (value_ == +value_) {
    alert(`Вы ввели "${value_}". Это значение можно преобразовать в число.`)
} else {
    alert(`Вы ввели "${value_}". Это значение преобразовать в число не получится. Получится "NaN".`)
}