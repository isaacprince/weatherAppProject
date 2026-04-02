 const weatherForm = document.querySelector(".weatherForm");
 const cityInput = document.querySelector(".cityInput");
 const card = document.querySelector(".card");
 const apikey = "ab862786b24840ad27e43a998d42902e"

 weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
         try{
            const weatherData = await getWeatherData(city);
            displayWeatherInf0(weatherData);

         }
         catch(error){
            console.error(error);
            displayError(error);
         }
    }
    else{
        displayError("Please enter a city");
    }

 });

 async function getWeatherData(city){

 }

 function displayWeatherInfo(data){

 }


 function getWeatherEmoji(weatherId){

 }
 function displayError(message){
    
     const errorDisplay = document.createElement("p");
     errorDisplay.textContent = message;
     errorDisplay.classList.add("errorDisplay");

     card.textContent = "";
     card.style.display = "flex";
     card.appendChild(errorDisplay);

 }
