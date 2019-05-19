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
        let formData = new FormData(form);

        function postData(data) {
            return new Request(function(resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                request.addEventListener('readystatechange', function() {
                    if (request.readyState < 4) {
                        resolve()
                    } else if(request.readyState === 4 && request.status == 200) {
                        resolve()
                    } else {
                        reject()
                    }
                });
                request.send(data);
            });
        }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=> statusMessage.innerHTML = message.success)
            .catch(()=> statusMessage.innerHTML = message.failure)
            .then(clearInput)
    });

    // contact form
    let contactForm = document.getElementById('form'),
        inputForm = contactForm.querySelectorAll('input'),
        statusMes = document.createElement('div');

        statusMes.classList.add('status');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        this.appendChild(statusMes);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(contactForm);
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);

        request.addEventListener('readystatechange', function() {
            if(request.readyState < 4) {
                statusMes.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMes.innerHTML = message.success;
            } else {
                statusMes.innerHTML = message.failure;
            }
        });
        for (let i = 0; i < inputForm.length; i++) {
            inputForm[i].value = '';
        }
    });

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrapper = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('dot-active'));
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });
    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrapper.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    })
});