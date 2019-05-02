let money, time, cost, articleExpense, moneyPerDay, optExpens;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    if (isNaN(money) || money == '' || money ==  null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expens: {},
    optionalExpens: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed(2);
        alert('Бюджет на один день: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay <= 100) {
            console.log('Похоже ты студент)');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 1500) {
            console.log('У тебя средний достаток');
        } else if (appData.moneyPerDay > 1500) {
            console.log('Ты хорошо зарабатывешь, можешь найти себе сосалочку ;)');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpense: function() {
        for(let i = 1; i <= 3; i++) {
            optExpens = prompt('Статья необязательных расходов?');
            if ((typeof(optExpens)) === 'string' && optExpens != '' && optExpens != null) {
                appData.optionalExpens[i] = optExpens;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function() {
        for(let i = 0; i < 1; i++) {
            let items = prompt('Введите способы дополнительного заработка, через запятую: ', '');
            if ((typeof(items)) === 'string' && items != '' && items !== null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
            } else {
                i--;
            }
        }
        appData.income.forEach(function(item, index) {
            alert('Способ дополнительного заработка ' + (index + 1) + ': ' + item);
        })
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
}