var navBtn = document.getElementById('nav-btn')
var logo = document.getElementById('logo')
const toggleSwitch = () => {
  var element = document.body;
  element.classList.toggle('dark-mode')
}

const toggleCards = () => {
  var card1 = document.getElementById('card1')
  var card2 = document.getElementById('card2')
  var card3 = document.getElementById('card3')
  var card4 = document.getElementById('card4')
  var card5 = document.getElementById('card5')
  var card6 = document.getElementById('card6')
  card1.classList.add('card-dark')
  card2.classList.add('card-dark')
  card3.classList.add('card-dark')
  card4.classList.add('card-dark')
  card5.classList.add('card-dark')
  card6.classList.add('card-dark')
  logo.classList.add('card-dark')
}
 
navBtn.addEventListener('click', toggleSwitch)
navBtn.addEventListener('click', toggleCards)

// Countdown
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const dateToday = new Date();
const dateAtNewYear = new Date('August 31 2020 00:00:00')


function dynamicDateChange () {
    const currentTime = new Date();
    const timeLeft = dateAtNewYear - currentTime
    console.log(timeLeft);
    const daysLeft = Math.floor(timeLeft / 1000 /60 /60/ 24); 
    const hoursLeft = Math.floor((timeLeft / 1000 / 60/ 60) % 24);  
    const minutesLeft = Math.floor((timeLeft / 1000/ 60) % 60)
    const secondsLeft = Math.floor((timeLeft / 1000) % 60)
    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft < 10 ?  '0' + hoursLeft : hoursLeft;
    minutes.innerHTML = minutesLeft < 10 ? '0'+ minutesLeft : minutesLeft;
    seconds.innerHTML = secondsLeft < 10 ? '0' + secondsLeft: secondsLeft;

}
setInterval(dynamicDateChange, 1000);