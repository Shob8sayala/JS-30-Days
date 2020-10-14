
const secondHand = document.querySelector('.secHand');
const minuteHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');
const elem = document.querySelectorAll(".hand");

function setDate() {

        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        const degreeSeconds = (seconds * 6) + 90;
        const degreeMinutes = (minutes * 6) + 90;
        const degreeHours = (hours * 6) + 90;
        if (seconds == 0) {
                var i;
                for (i = 0; i < elem.length; i++) {
                        elem[i].style.transition = "all 0s";
                }
        }
        if (seconds == 1) {
                var i;
                for (i = 0; i < elem.length; i++) {
                        elem[i].style.transition = "all 0.1s";
                }
        }
        secondHand.style.transform = `rotate(${degreeSeconds}deg)`;
        minuteHand.style.transform = `rotate(${degreeMinutes}deg)`;
        hourHand.style.transform = `rotate(${degreeHours}deg)`;
}
setInterval(setDate, 1000);