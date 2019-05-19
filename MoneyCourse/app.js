// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();

//     // request.open(method, url, async, login, pass)
//     request.open('GET', 'current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     // status
//     // tatusText
//     // responseText / response
//     // readyState 

//     request.addEventListener('readystatechange', function() {
//         if(request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);
//             inputUsd.value = inputRub.value / data.course;
//         } else {
//             inputUsd.value = "Что-то пошло не так";
//         }
//     });
// });

let inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', ()=> {
    function catchMoney() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function() {
                if(request.readyState === 4 && request.status == 200) {
                    resolve(this.response);
                } else {
                    reject();
                }
            }
        });
    }

    catchMoney()
        .then(response => {
            console.log(response);
            let data = JSON.parse(response);
            inputUsd.value = inputRub.value / data.course;
        })
        .then(() => console.log(5555))
        .catch(()=> inputUsd.value = 'Что-то пошло не так')
});