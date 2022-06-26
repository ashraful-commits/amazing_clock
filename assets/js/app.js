const hour = document.getElementById('hour')
const hour_c = document.getElementById('hour_c')
const munite_c = document.getElementById('munite_c')
const munite = document.getElementById('munite')
const second_c = document.getElementById('second_c')
const second = document.getElementById('second')
const am_pm = document.getElementById('ampm')
const am_pm_c = document.getElementById('ampm_c')
const hour_circle = document.getElementById('hour_circle')
const munite_circle = document.getElementById('munite_circle')
const second_circle = document.getElementById('second_circle')
const doted_hour = document.querySelector('.doted_hour');
const doted_munite = document.querySelector('.doted_munite');
const doted_second = document.querySelector('.doted_second');



const time=()=>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if(h>12){
        h= h-12
    }
    let ampm = (h>12)?'pm':'am';

    h =(h<10)? "0"+h:h;
    m =(m<10)? "0"+m:m;
    s =(s<10)? "0"+s:s;

    hour.innerHTML = h;
    hour_c.innerHTML = h;
    munite.innerHTML = m;
    munite_c.innerHTML = m;
    second.innerHTML = s;
    second_c.innerHTML = s;
    am_pm.innerHTML = ampm;
    am_pm_c.innerHTML = ampm;

    hour_circle.style.strokeDashoffset = 377-(377*h)/12;
    munite_circle.style.strokeDashoffset = 377-(377*m)/60;
    second_circle.style.strokeDashoffset = 377-(377*s)/60;
    doted_hour.style.transform = `rotateZ(${h*30}deg) translateZ(10px)`
    doted_munite.style.transform = `rotateZ(${m*6}deg) translateZ(10px)`
    doted_second.style.transform = `rotateZ(${s*6}deg) translateZ(10px)`

}

setInterval(time,1000);
