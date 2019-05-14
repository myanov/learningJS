window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const tab = document.querySelectorAll('.info-header-tab'),
          info = document.querySelector('.info-header'),
          tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });

    tabContent.forEach(function(content) {
        content.addEventListener('click', (event) => {
            let target = event.target;
            if (target && target.classList.contains('description-btn')) {
                modalWindow.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    let deadLine = '2019-05-11';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());

        if (t > 0) {
            return calcTime(t);
        } else {
            t = 0;
            return calcTime(t);
        }

        function calcTime (t) {
            let second = Math.floor(t/1000) % 60,
                    minutes = Math.floor(t/1000/60) % 60,
                    hours = Math.floor(t/1000/60/60);

                return {
                    'total': t,
                    'sec': second,
                    'min': minutes,
                    'hour': hours
                };
        } 
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateTime, 1000);
        
        function updateTime() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hour;
            minutes.textContent = t.min;
            seconds.textContent = t.sec;

            if(hours.textContent.length == 1) {
                hours.textContent = '0' + t.hour;
            }
            if(minutes.textContent.length == 1) {
                minutes.textContent = '0' + t.min;
            }
            if(seconds.textContent.length == 1) {
                seconds.textContent = '0' + t.sec;
            }

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);

    // Modal window
    const moreBtn = document.querySelector('.more'),
          modalWindow = document.querySelector('.overlay'),
          closeModal = document.querySelector('.popup-close');
    
    moreBtn.addEventListener('click', function() {
        modalWindow.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', () => {
        modalWindow.style.display = 'none';
        moreBtn.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

     // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
});