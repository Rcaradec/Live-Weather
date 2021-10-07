// initialisation de variable que l on va appeler plus tard

let icon;
let temp;
let location;

// je déclare ma clef API fournie par OpenWeather
const appId = dff451d14a40b0c97acbfe60a93ca25a;

// exemple de call API en utilisant ma clef API :

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={appId}

//creation d une fonction pour mettre à jour les divs concernées
function update(weather) {
  temp.innerHTML = weather.temp;
  loc.innerHTML = weather.location;
  icon.src = "https://openweathermap.org/img/w/" + weather.icon + ".png";
}
