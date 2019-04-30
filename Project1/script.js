let money, time, cost, articleExpense, moneyPerDay;

money = +prompt('Ваш бюджет на месяц?');
time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expens: {},
    optionalExpens: {},
    income: [],
    savings: false
};

for(let i = 0; i < 2; i++) {

    articleExpense = prompt('Введите обязательную статью расходов');
    cost = prompt('Во сколько обойдется эта статья расходов?');

    if ((typeof(articleExpense)) === 'string' && (typeof(articleExpense)) !== null && (typeof(cost)) !== null &&
    articleExpense != '' && cost != '' && articleExpense.length < 50) {
        appData.expens.articleExpense = cost;
    } else {
        i--;
    }
}

/*let j = 0;
while (j < 2) {
    articleExpense = prompt('Введите обязательную статью расходов');
    cost = prompt('Во сколько обойдется эта статья расходов?');

    if ((typeof(articleExpense)) === 'string' && (typeof(articleExpense)) !== null && (typeof(cost)) !== null &&
    articleExpense != '' && cost != '' && articleExpense.length < 50) {
        appData.expens.articleExpense = cost;
    } else {
        j--;
    }
    j++;
}*/

/*do {
    articleExpense = prompt('Введите обязательную статью расходов');
    cost = prompt('Во сколько обойдется эта статья расходов?');

    if ((typeof(articleExpense)) === 'string' && (typeof(articleExpense)) !== null && (typeof(cost)) !== null &&
    articleExpense != '' && cost != '' && articleExpense.length < 50) {
        appData.expens.articleExpense = cost;
    } else {
        j--;
    }
    j++;
} while (j < 2);*/

moneyPerDay = appData.budget;
alert('Бюджет на один день: ' + moneyPerDay / 30);

if (moneyPerDay <= 100) {
    console.log('Похоже ты студент)');
} else if (moneyPerDay > 100 && moneyPerDay <= 1500) {
    console.log('У тебя средний достаток');
} else if (moneyPerDay > 1500) {
    console.log('Ты хорошо зарабатывешь, можешь найти себе сосалочку ;)');
} else {
    console.log('Произошла ошибка');
}