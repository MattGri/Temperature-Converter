const container = document.createElement('div');
const title = document.createElement('h1');
const temperatureInput = document.createElement('input');
const selectsContainer = document.createElement('div');
const inputTemperatureSelect = document.createElement('select');
const outputTemperatureSelect = document.createElement('select');
const resultDiv = document.createElement('div');

container.classList.add('container');

title.innerText = 'Temperature Converter'
title.classList.add('title');

temperatureInput.placeholder = 'enter temperature';
temperatureInput.classList.add('temperatureInput');

selectsContainer.classList.add('selectsContainer');

resultDiv.classList.add('resultDiv');

document.body.appendChild(container);
container.append(title);
container.append(temperatureInput);
container.append(selectsContainer);
selectsContainer.append(inputTemperatureSelect);
selectsContainer.append(outputTemperatureSelect);
container.append(resultDiv);


const units = ['Celsius' , 'Farenheit' , 'Kelvin'];
const selects = [inputTemperatureSelect, outputTemperatureSelect];

selects.forEach(select => {
    units.forEach(unit => {
        const option = document.createElement('option');
        option.innerText = unit;
        select.append(option);
    })
})


const showTemperature = e => {
    const temperature = parseFloat(temperatureInput.value);
    if(isNaN(temperature)){
        return;
    }
    const inputUnit = document.querySelectorAll('select')[0].value;
    const outputUnit = document.querySelectorAll('select')[1].value;
   if(inputUnit === outputUnit){
       resultDiv.innerText = temperature;
   }
   else if(inputUnit === 'Celsius'){
       resultDiv.innerText = (outputUnit === 'Fahrenheit' ? (temperature * 1.8) + 32 : temperature + 273.15).toFixed(2);
   }
   else if(inputUnit === 'Fahrenheit'){
       resultDiv.innerText = (outputUnit === 'Celsius' ? (temperature - 32) / 1.8 : (temperature + 459.67) * 5 / 9).toFixed(2);
   }
   else if(inputUnit === 'Kelvin'){
       resultDiv.innerText = (outputUnit === 'Celsius' ? temperature - 273.15 : (temperature * 1.8) - 459.67).toFixed(2);
   }

   resultDiv.innerText += ' ' + outputUnit[0];
}

temperatureInput.addEventListener('keyup', showTemperature);
inputTemperatureSelect.addEventListener('change', showTemperature);
outputTemperatureSelect.addEventListener('change', showTemperature);