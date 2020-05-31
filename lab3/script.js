const form = document.getElementById("form")
const tip = document.getElementById("tip")
const list = document.getElementById("result-list")
const date = document.getElementById("date")

const entryPoint = "https://api.openweathermap.org/data/2.5/weather";

form.addEventListener("submit", function(event) {
    fd = new FormData(event.target);
    event.preventDefault()
    getForecast(fd.get("city"))
});

function createElement(string){
  var div = document.createElement('div');
  div.innerHTML = string.trim();
  return div.firstChild; 
}

function getForecast(city){
    const q = "?q=" + city + "&appid=e7248654fb34e78239f774c9f84bad89";

    if( !city ){
        tip.innerText = "Название не введено";
        tip.style.visibility = "visible";
    }
    else{
        tip.style.visibility = "hidden";

        const data = fetch(entryPoint + q)
        .then((response) => {
            return response.json();
            })
        .then((data) => {
            if(data.cod == "404"){
                tip.innerText = "Город не найден"
                tip.style.visibility = "visible";
            }
            else{
                newEl = templater(
                    data.name, data.main.temp - 273, 
                    data.main.humidity, data.weather[0].icon
                )
                console.log(newEl);
                list.prepend(newEl);
            }
        })
        .catch(error => {
            alert(error);
        });
    }
}

function templater(name, temp, hum, icon){
    console.log(icon)
    newEl = createElement("<li class='list-element'>" + 
        '<img class="el-icon" src="http://openweathermap.org/img/wn/' + icon + 
        '.png" alt="icon">' +
        name +
        "<br>Температура: " + Math.round(temp) + "°, влажность: " + 
        hum + "%</li>")
    return newEl;
}

function setDate(){
    var dateObj = new Date();

    var options = {
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
    };

    dateString = dateObj.toLocaleString("ru", options)
    date.innerText = dateString
}

setDate()