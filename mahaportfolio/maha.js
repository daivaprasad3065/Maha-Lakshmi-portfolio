var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, evt) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
    evt.currentTarget.classList.add("active-link");
}

function validateForm() {
    const name = form.elements["Name"].value.trim();
    const email = form.elements["Email"].value.trim();
    const message = form.elements["Message"].value.trim();
    if (!name || !email || !message) {
        alert("Please fill out all the fields!");
        return false;
    }
    return true;
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby1bpWhm-a0NGjbJd6_WMNPRS2txyPFHNjRDUhfIKJgSQjbT8zryhvIaV6hAKmvJdjm/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateForm()) return;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            msg.style.color = "lightgreen";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => {
            msg.innerHTML = "Failed to send message";
            msg.style.color = "red";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            console.error('Error!', error.message);
        });        
});
