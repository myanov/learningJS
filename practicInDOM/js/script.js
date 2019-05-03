const listItems = document.querySelector('.menu'),
      li = document.querySelectorAll('.menu-item'),
      title = document.querySelector('#title'),
      adv = document.querySelector('.adv');

      listItems.insertBefore(li[2], li[1]);
      newLi = document.createElement('li');
      newLi.classList.add('menu-item');
      newLi.textContent = 'Пятый пункт';
      listItems.appendChild(newLi);

    //   Replace background img
document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';
adv.remove();

let relation = prompt('Как вы относитесь к технике Apple?', '');

document.getElementById('prompt').textContent = relation;