let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function() {
//console.log('clicked');
let employeesCount = parseInt(document.getElementById('employees-count').value);
let employeeMakesPerDay = parseInt(document.getElementById('employee-makes-per-day').value);
let dayReservations = parseInt(document.getElementById('day-reservations').value);


let bakeryTotal = employeesCount * employeeMakesPerDay;
let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;

// let logInfo = {
//     bakeryTotal,
//     isBakeryGonnaMakeIt
// }
// console.log(logInfo);

let resultsDiv = document.getElementById('results');
console.log(resultsDiv);
resultsDiv.innerHTML = `<p><strong>Kepykla per diena spes pagaminti:</strong>${bakeryTotal} kepalu</p>`;
resultsDiv.innerHTML += `<p><strong>Jai reikia speti pagaminti:</strong>${dayReservations} kepalu</p>`;
resultsDiv.innerHTML += `<p><strong>Ar spes pagaminti?</strong> ${isBakeryGonnaMakeIt ? 'taip' : 'ne'}</p>`;
});


document.getElementById('employees-count').addEventListener('keyup', function(event){
    //console.log('reiksmes pasikeite');
    let inputValue =  event.target.valueAsNumber;

    if (inputValue < 0) {
        console.log(event.target);
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
});


document.getElementById('reset').addEventListener('click', function(){
//console.log('clicked');
document.getElementById('employees-count').value = 0;
document.getElementById('employeeMakesPerDay').value = 0;
document.getElementById('dayReservations').value = 0;
document.getElementById('results').innerHTML = '<p>kol kas nieko nera</p>';
});








//Antras variantas
// console.log('employees count', employeesCount);
// console.log('employee makes per day', employeeMakesPerDay);
// console.log('dayReservations', dayReservations);




























































// document.getElementById('box');

// document.querySelectorAll('box');


//Elemento pasiemimas
// let container = document.querySelector('container');

//Veliau... Kito ieskojimas jame
// container.querySelector('box');


//Elemento pasiemimas
// let box = document.querySelector('box');

// //Sekantis elementas
// box.nextElementSibling;

// //Ankstesnis elementas
// box.previousElementSibling;

// //Tevinis elementas
// box.parentElement;

// document.querySelector('.box')


// document.querySelector('.box').innerHTML = "<p>Text</p>";

//Teksto irasymas i elementa

// document.getElementById('box') .innerText = 'Text';
// document.querySelector('.box').textContent = 'Text';


//Atnaujinti elemento teksta
// document.querySelector('.button') .textContent = 'New text';


//Gauti dabartini elemento teksta
// document.querySelector('.button') .textContent; // gausim 'new text


//Nauju elementu sukurimas
// document.createElement('div');
// document.createElement('span');



//Elemento sukurimas ir teksto keitimas
// let element = document.createElement('div');
// element.textContent = 'Text';


//Elemento kurimas ir pridejimas i kita elementa
//Sukurti elementa
// let element = document.createElement('div');

// //Prideti sukurta elementa i .container

// document.querySelector('.container').appendChild(element); 

//Reagavimas i veiksmus(paspaudimai ir pan.)
// document.querySelector('.button').addEventListener('click', (e) => {
//     /*...*/
// })


// document.querySelector('.button') .addEventListener('mouseenter', (e)=> {
//     /*...*/
// })

// document.addEventListener('keyup', (e) => {/*...*/});

//Funkcijos pritaikymas and visu elementu

// document.querySelectorAll('.box').forEach(function(box){
//     box.style.display = 'none';
// })

//Funkcijos pritaikymas and visu elementu
// document.querySelectorAll('.box').foreach(box => {
//     box.style.display = 'none'
// })


//Elemento kurimas ir reagavimas i veiksmus su juo

//Elemento sukurimas ir pridejimas i DOM
// let searchElement = document.createElement('div');
// document.querySelector('.search-container').appendChild(searchElement);

// //Prie sio elemento prideti reagavima i paspaudima pele
// searchElement.addEventListener('click', handleClick);


//JavaScrypt vykdymas tik viskam uzsikrovus(1)

// window.addEventListener('load', function(){
//     //Daryti dalykus, kai viskas bus pilnai uzkrauta
// })


//JavaScrypt vykdymas tik viskam uzsikrovus(2)

//susikuriam patogia funkcija ir naudojam ja
// let ready = (callback) => {
//     if (document.readyState != 'loading') callback();
//     else document.addEventListener('DOMContentLoaded', callback);
// }

// ready(() => {
// //Daryti dalykus, kai viskas bus pilnai uzkrauta
// })

