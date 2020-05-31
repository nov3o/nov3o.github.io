const form = document.getElementById("form")
const notification = document.getElementById("notification")

const nameEl = document.getElementById("name")
const emailEl = document.getElementById("email")
const phoneEl = document.getElementById("phone")
const puncEl = document.getElementById("punc")

const good = "#23a223"
const bad = "#b01c1c"
const regular = "#44403d"

const namePattern = /^[a-zA-Zа-яА-Я ]+$/
const phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
const emailPattern = /^\S+@\S+\.\S+$/
const puncPattern = /^\W+$/


form.addEventListener("submit", function(event) {
    event.preventDefault()
    fd = new FormData(event.target);
    if( validate(fd) ){
        send(fd);
        notifyValid();
        restore();
    }else{
        notifyInvalid();
    }
});

function validate(fd){
    var inv = 0;
    console.log(fd);

    if( namePattern.exec(fd.get('name')) == null ){
        inv = 1;
        nameEl.style.color = bad;
        nameEl.title = "Неверный формат"
    }

    if( phonePattern.exec(fd.get('phone')) == null ){
        inv = 1;
        phoneEl.style.color = bad;
        phoneEl.title = "Неверный формат"
    }

    if( emailPattern.exec(fd.get('email')) == null ){
        inv = 1;
        emailEl.style.color = bad;
        emailEl.title = "Неверный формат"
    }

    if( puncPattern.exec(fd.get('punc')) == null ){
        inv = 1;
        puncEl.style.color = bad;
        puncEl.title = "Неверный формат"
    }

    console.log(inv);
    return !inv;
}

function restore(){
    form.reset();
    
    nameEl.style.color = regular;
    emailEl.style.color = regular;
    phoneEl.style.color = regular;
    puncEl.style.color = regular;
}

function notifyInvalid(){
    notification.style.color = bad;
    notification.innerText = "Неверный формат введённых данных"
    notification.style.visibility = "visible";
}

function notifyValid(){
    notification.style.color = good;
    notification.innerText = "Данные успешно отправлены"
    notification.style.visibility = "visible";
}

function send(){
    const db = firebase.database().ref().child(fd.get('name'));
    db.set({
        name: fd.get('name'),
        phone: fd.get('phone'),
        punc: fd.get('punc')
    });
}