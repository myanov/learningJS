const startBtn = document.getElementById('start'),
      expensesBtn = document.querySelector('.expenses-item-btn'),
      optExpensesBtn = document.querySelector('.optionalexpenses-btn'),
      countBudgetBtn = document.querySelector('.count-budget-btn'),
      budgetValue = document.querySelector('.budget-value'),
      dayBudget = document.querySelector('.daybudget-value'),
      level = document.querySelector('.level-value'),
      expenses = document.querySelector('.expenses-value'),
      optExpenses = document.querySelector('.optionalexpenses-value'),
      incomeItem = document.querySelector('.choose-income'),
      incomeValue = document.querySelector('.income-value'),
      monthSavings = document.querySelector('.monthsavings-value'),
      yearSavings = document.querySelector('.yearsavings-value'),
      expensesItem = document.getElementsByClassName('expenses-item'),
      confirmExp = document.getElementsByTagName('button')[0],
      confirmOpt = document.getElementsByTagName('button')[1],
      calculate = document.getElementsByTagName('button')[2],
      inputOpt = document.querySelectorAll('.optionalexpenses-item'),
      savings = document.querySelector('#savings'),
      sumValue = document.querySelector('.choose-sum'),
      percentValue = document.querySelector('.choose-percent'),
      year = document.querySelector('.year-value'),
      month = document.querySelector('.month-value'),
      day = document.querySelector('.day-value'),
      buttons = document.getElementsByTagName('button');
      
let money, time, cost, articleExpense, moneyPerDay, optExpens;

document.addEventListener('DOMContentLoaded', function() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        if (buttons[i].id = 'start') {
            buttons[i].disabled = false;
        }
    }
});

startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD'); 
    money = +prompt('Ваш бюджет на месяц?');

    if (isNaN(money) || money == '' || money ==  null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1 ;
    day.value = new Date(Date.parse(time)).getDate(); 
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for(let i = 0; i < expensesItem.length; i++) {

        articleExpense = expensesItem[i].value;
        cost = expensesItem[++i].value;
    
        if ((typeof(articleExpense)) === 'string' && (typeof(articleExpense)) !== null && (typeof(cost)) !== null &&
        articleExpense != '' && cost != '' && articleExpense.length < 50) {
            appData.expens[articleExpense] = cost;
            sum += +cost;
        } else {
            i--;
        }
    }
    expenses.textContent = sum;
});

optExpensesBtn.addEventListener('click', () => {
    for(let i = 0; i <= inputOpt.length; i++) {
        let optExpens = inputOpt[i].value;
        if ((typeof(optExpens)) === 'string' && optExpens != '' && optExpens != null) {
            appData.optionalExpens[i] = optExpens;
            optExpenses.textContent += appData.optionalExpens[i] + ' ';
        } else {
            i--;
        }
    }
});

countBudgetBtn.addEventListener('click', () => {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expenses.textContent)/30).toFixed(2);
        dayBudget.textContent = appData.moneyPerDay;
        
        if (appData.moneyPerDay <= 100) {
            level.textContent = 'Похоже ты студент)';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 1500) {
            level.textContent = 'У тебя средний достаток';
        } else if (appData.moneyPerDay > 1500) {
            level.textContent = 'Ты хорошо зарабатывешь, можешь найти себе сосалочку ;)';
        } else {
            level.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudget.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', () => {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', () => {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = sumValue.value,
        percent = percentValue.value;

        appData.monthIncome = sum/100/12 * percent;
        appData.yearIncome = sum/100 * percent;
        
        monthSavings.textContent = appData.monthIncome;
        yearSavings.textContent = appData.yearIncome;
    }
});

percentValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = sumValue.value,
        percent = percentValue.value;

        appData.monthIncome = sum/100/12 * percent;
        appData.yearIncome = sum/100 * percent;

        monthSavings.textContent = appData.monthIncome;
        yearSavings.textContent = appData.yearIncome;
    }
});

let appData = {
    budget: money,
    timeData: time,
    expens: {},
    optionalExpens: {},
    income: [],
    savings: false,
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
}