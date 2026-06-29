// =============================
// LIVE CLOCK
// =============================

function updateClock() {

    const clock = document.getElementById("clock");

    const now = new Date();

    clock.innerHTML =
        now.toLocaleDateString() +
        "<br>" +
        now.toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();


// =====================================
// DARK MODE
// =====================================

function themeButton() {

    const themeBtn = document.querySelector(".dark-btn");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }

}

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    themeButton();

}

window.onload = function () {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeButton();

};



// =============================
// SCROLL TO TOP BUTTON
// =============================

// Create Button

const btn=document.createElement("button");

btn.innerHTML="⬆";

btn.id="topBtn";

document.body.appendChild(btn);


// Button Style

btn.style.position="fixed";

btn.style.bottom="20px";

btn.style.right="20px";

btn.style.padding="12px 15px";

btn.style.borderRadius="50%";

btn.style.border="none";

btn.style.background="#1f3c88";

btn.style.color="white";

btn.style.cursor="pointer";

btn.style.display="none";


// Show Button

window.onscroll=function(){

    if(document.documentElement.scrollTop>200){

        btn.style.display="block";

    }else{

        btn.style.display="none";

    }

};


// Scroll to Top

btn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};