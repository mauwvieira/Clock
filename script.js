const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const week = document.getElementById('semana')
const day = document.getElementById('data')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let diaSemana = dateToday.getDay();
     
    hour.textContent = hr;
    min.textContent = mn;
    sec.textContent = s;

    if(hr < 10) hr = '0' + hr;
    if(mn < 10) mn = '0' + mn;
    if(s < 10) s = '0' + s;

    switch(diaSemana){
        case 0:
            diaSemana = 'Domingo'
            break;
        case 1:
            diaSemana = 'Segunda'
            break;
        case 2:
            diaSemana = 'Terça'
            break;
        case 3:
            diaSemana = 'Quarta'
            break;
        case 4:
            diaSemana = 'Quinta'
            break;
        case 5:
            diaSemana = 'Sexta'
            break;
        case 6:
            diaSemana = 'Sabado'
            break;
    }
    week.innerText = `Hoje é ${diaSemana}!`

    if (hr > 0 && hr <12) {
        document.body.style.background = '#FDFF84';
    } else if (hr >= 12 && hr <= 18) {
        document.body.style.background = '#FFDE31';
    } else {
        document.body.style.background = '#CB9038';
    }

    

    


    
})
