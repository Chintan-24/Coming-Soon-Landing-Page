const countdown = document.querySelector('.countdown');

//set launch date (ms)
const launchDate = new Date('Dec 31,2022 00:00:00').getTime();

//update every sec
const intvl = setInterval(()=>{

    //get todays date and time (ms)
    const now = new Date().getTime();

    //distance frorm now to launch date
    const distance = launchDate - now;

    //time calculation
    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const mins = Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds = Math.floor((distance % (1000*60))/(1000));

    //display result
    countdown.innerHTML=`
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    //if launchDate date passed
    if(distance<0){

        //stop counter
        clearInterval(intvl);

        //style output text
        countdown.style.color = '#fff';
        countdown.innerHTML='Launched!'
    }


}, 1000)
