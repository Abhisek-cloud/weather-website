
const searchbtn = document.querySelector('#search-btn');
const searchBox = document.querySelector('.input-box');
const bgimg = document.querySelector('.card-content');
const temp = document.querySelector('#temp');
const Fcity = document.querySelector('#city');
const feelsLike = document.querySelector('#f');
const humidity = document.querySelector('#humadity');
const wind = document.querySelector('#wind');



async function checkData(city) {
	const apikey = 'b1b616a43753f76a7982f96c86ba7ab5';
	const url = `https://api.openweathermap.org/data/2.5/weather?q=`
	const data = await fetch(url + city + `&appid=${apikey}&units=metric`)
		.then(response => response.json());
	temp.innerHTML = Math.round(data.main.temp) + "&#176C";
	Fcity.innerHTML = data.name;
	feelsLike.innerHTML = Math.round(data.main.feels_like) + "&#176C";
	humidity.innerHTML = data.main.humidity + "%";
	wind.innerHTML = data.wind.speed;
	document.querySelector('.sky').innerHTML=`<i class="fa-solid fa-cloud"></i>&nbsp`+data.weather[0].description;
	
	if(data.cod=='404'){
		document.querySelector('.detail').style.display='none';
		document.querySelector('.not-found').style.display='block';
	}



		if (data.weather[0].main=="Clouds"){
			bgimg.style.backgroundImage="url(./assets/cloud.jpg)";
		}
		else if(data.weather[0].main=="Haze"){
			bgimg.style.backgroundImage="url(./assets/clear.jpg)";
		}
		else if(data.weather[0].main=="Mist"){
			bgimg.style.backgroundImage="url(./assets/mist.jpg)";
		}
		else if(data.weather[0].main=="Rain"){
			bgimg.style.backgroundImage="url(./assets/rain.jpg)";
		}
		else if(data.weather[0].main=="Snow"){
			bgimg.style.backgroundImage="url(./assets/snow.jpg)";
		}
		else if(data.weather[0].main=="Drizzle"){
			bgimg.style.backgroundImage="url(./assets/drizzle.jpg)";
		}

		document.querySelector('.detail').style.display='flex';
		document.querySelector('.not-found').style.display='none';

		console.log(data);
}


searchbtn.addEventListener('click', () => {
	checkData(searchBox.value);
})




