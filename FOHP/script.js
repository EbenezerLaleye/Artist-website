const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const mins = document.querySelector("#mins")
const secs = document.querySelector("#secs")
const hamburger = document.querySelector("#hamburger")
const mobileMenu = document.querySelector("#mobile-menu")


const endDate = new Date("October 21, 2023 00:00:00").getTime();
console.log(endDate)

setInterval(() => {
    const currentDate = new Date().getTime()
    const remainingTime = endDate - currentDate;
    let day = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    let hour = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let min = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    let sec = Math.floor((remainingTime % (1000 * 60)) / 1000)

    days.innerHTML = `${day}d`;
    hours.innerHTML = `${hour}h`;
    mins.innerHTML = `${min}m`;
    secs.innerHTML = `${sec}s`;

}, 1000)

hamburger.addEventListener('click', () => {
    if (hamburger.innerHTML === "menu") {
        mobileMenu.classList.toggle("is-open")
        hamburger.innerHTML = "close"
    } else {
        mobileMenu.classList.toggle("is-open")
        hamburger.innerHTML = "menu"
    }


})