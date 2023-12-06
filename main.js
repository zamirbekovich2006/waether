let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let wind = document.querySelector(".wind_speed");
let img = document.querySelector(".img");
let temp_i = document.querySelector(".temp_i");
let clouds = document.querySelector(".clouds");
let wind_s = document.querySelector(".wind_s");
let inp = document.querySelector(".inp");
temp_i.style.display = "none";
clouds.style.display = "none";
wind_s.style.display = "none";

const btnClick = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=6621546e1a94625a215c063e4320d66d`
  )
    .then((res) => res.json())
    .then((json) => {
      inp.value = "";
      temp_i.style.display = "block";
      clouds.style.display = "block";
      wind_s.style.display = "block";
      city.innerHTML=json.name
      temp.innerHTML=`${json.main.temp} °C`
      wind.innerHTML=json.clouds.all
      img.src=`https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
    }).catch(err=>alert("wrong city name"));
};

document.body.addEventListener("keypress",(e)=>{
  if(e.key==="Enter"){
    btnClick
  }
})