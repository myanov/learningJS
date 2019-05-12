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

    info.addEventListener('click', function(event) {
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
        content.addEventListener('click', function(event) {
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

    closeModal.addEventListener('click', function() {
        modalWindow.style.display = 'none';
        moreBtn.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
});