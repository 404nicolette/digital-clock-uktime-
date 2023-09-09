function displayClock(){
    const current= new Date(); /* js object for */

    const clockFormat = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(current) /* formats the time using Intl.DateTimeFormat*/

    const clock = document.getElementById('clock');
    clock.textContent = clockFormat;
}

setInterval(displayClock, 1000); /* 1000milli = 1 seconds*/
displayClock(); /* initial call to set the clock on the loading page*/