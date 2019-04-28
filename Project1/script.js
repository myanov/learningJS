let money, time, cost, articleExpense;

money = prompt('Ваш бюджет на месяц?');
time = prompt('Введите дату в формате YYYY-MM-DD');
articleExpense = prompt('Введите обязательную статью расходов');
cost = prompt('Во сколько обойдется?');


let appData = {
    budget: money,
    timeData: time,
    expens: {},
    optionalExpens: {},
    income: [],
    savings: false
};

appData.expens.articleExpense = cost;
alert('Бюджет на один день: ' + appData.budget / 30);