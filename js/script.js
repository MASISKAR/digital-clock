window.onload = function () {
    const hours = document.querySelector('.clock-hours');
    const minutes = document.querySelector('.clock-minutes');
    const seconds = document.querySelector('.clock-seconds');
    
    let currentTime = {
        hours: '00',
        minutes: '00',
        seconds: '00'
    };
    let timer=null;
    initTime();
    
function initTime(){
    hours.innerText = currentTime.hours;
    minutes.innerText = currentTime.minutes;
    seconds.innerText = currentTime.seconds;
}
    
    const controls = document.querySelectorAll('.control');
    controls.forEach(control => {
        control.addEventListener('click', handleControlClick);
    });
    
    startTimer();
    
    function changeHours() {
        hours.innerText = currentTime.hours < 10 ? '0' + currentTime.hours : currentTime.hours;
    }
    
    function changeMinutes() {
        minutes.innerText = currentTime.minutes < 10 ? '0' + currentTime.minutes : currentTime.minutes;
    }
    
    function changeSeconds() {
        seconds.innerText = currentTime.seconds < 10 ? '0' + currentTime.seconds : currentTime.seconds;
    }
    
    
    function startTimer() {
        if(timer) return ;
        
        controls.forEach(control =>{
        control.classList.add('hidden');
        });
      
        timer = setInterval(() => {
            if (currentTime.seconds === 59) {
                currentTime.seconds = 0;
                
                if (currentTime.minutes === 59) {
                    currentTime.minutes = 0;
                    
                    if (currentTime.hours === 23) {
                        currentTime.hours = 0;
                    }
                    else {
                        currentTime.hours++;
                    }
                    changeHours();
                }
                else {
                    currentTime.minutes++;
                }
                changeMinutes();
            }
            
            else {
                currentTime.seconds++;
            }
            changeSeconds();
        }, 1000);
    }
    
    function stopTimer(){
        clearInterval(timer);
        timer = null;
        controls.forEach(control =>{
            control.classList.remove('hidden');
        });
    }
    const stopButton = document.querySelector('.stop-button');
    const startButton = document.querySelector('.start-button');
    const autoButton = document.querySelector('.auto-button');
    
    autoButton.onclick = function(){
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        
         currentTime = {
            hours: hours < 10 ? '0'+hours : hours,
            minutes: minutes < 10 ? '0'+minutes : minutes,
            seconds: seconds < 10 ? '0'+seconds : seconds
        };
        initTime();
    };
    
    stopButton.onclick = stopTimer;
    
    startButton.onclick = startTimer;
    
    /*    setTimeout(()=>{
            stopButton.onclick = null;
        }, 3000);*/
    // const clickHandler = ()=>console.log('clicked 1');
    // stopButton.addEventListener('click', clickHandler);
    // stopButton.addEventListener('click', ()=>console.log('clicked 2'));
    
    
    /*    setTimeout(()=>{
            stopButton.removeEventListener('click', clickHandler);
        }, 3000);*/
    
    
    function handleControlClick(event) {
        const id = event.target.getAttribute('data-id');
        switch (id) {
            case 'inc-seconds': {
                if (currentTime.seconds === 59) {
                    currentTime.seconds = 0;
                }
                else {
                    currentTime.seconds++
                }
                changeSeconds();
                break;
            }
            case 'dec-seconds': {
                if (currentTime.seconds === 0) {
                    currentTime.seconds = 59;
                }
                else {
                    currentTime.seconds--;
                }
                changeSeconds();
                break;
            }
            case 'inc-minutes': {
                if (currentTime.minutes === 59) {
                    currentTime.minutes = 0;
                }
                else {
                    currentTime.minutes++;
                }
                changeMinutes();
                break;
            }
            case 'dec-minutes': {
                if (currentTime.minutes === 0) {
                    currentTime.minutes = 59;
                }
                else {
                    currentTime.minutes--;
                }
                changeMinutes();
                break;
            }
            case 'inc-hours': {
                if (currentTime.hours === 23) {
                    currentTime.hours = 0;
                }
                else {
                    currentTime.hours++;
                }
                changeHours();
                break;
            }
            case 'dec-hours': {
                if (currentTime.hours === 0) {
                    currentTime.hours = 23;
                }
                else {
                    currentTime.hours--;
                }
                changeHours();
                break;
            }
            
        }
        
    }
    
};








