// let skaiciai = [78,65,95,21,23,14,74,147];
// console.log(skaiciai[0]);
// console.log(skaiciai[2]);
// console.log(skaiciai[4]);
// console.log(skaiciai[5]);




// let skaiciai = [47,54,25,36,87];
// console.log('masyvas:', skaiciai);
// console.log('pirmas skaicius is masyvo:', skaiciai[0]);
// console.log('nariu masyve kiekis:', skaiciai.length);
// console.log('paskutinis skaicius is masyvo:', skaiciai[skaiciai.length - 1]);


// let skaiciai = [];
// console.log(skaiciai);

// skaiciai.push(87);
// skaiciai.push(95);
// console.log(skaiciai);

// skaiciai.push(147, 258, 399);
// console.log(skaiciai);


// let skaiciai = [54,76];
// console.log('skaiciai', skaiciai);
// console.log('kiekis', skaiciai.length);

// skaiciai[2] = 888;
// console.log('skaiciai', skaiciai);
// console.log('kiekis', skaiciai.length);

// skaiciai[skaiciai.length] = 999;
// console.log('skaiciai', skaiciai);
// console.log('kiekis', skaiciai.length);


// let pazymiai = [8,7,9,9,8];
// console.log('studento pazymiai:', pazymiai);

// let suma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4];
// let vidurkis = suma / pazymiai.length;

// console.log('gauta suma', suma);
// console.log('pazymiu vidurkis', vidurkis);


// let vardai = ['Agne', 'Tomas', 'Gintare', 'Petras']

// console.log(vardai);

// vardai[0] = 'Paulina';
// vardai[3] = 'Justas';

// console.log(vardai);


// let failai = [
//     'naujienos/pirma.txt',
//     'naujienos/antra.txt',
//     'naujienos/trecia.txt',
//     'naujienos/ketvirta.txt',
//     'naujienos/penkta.txt',
// ];


// console.log('naujienu failai:', failai);
// console.log('naujienu kiekis:', failai.length);
// console.log();

// let dar_viena = 'naujienos/sesta.txt';
// failai.push(dar_viena);

// console.log('papildomai prideta naujiena:', dar_viena);
// console.log('naujienu failai:', failai);
// console.log('naujienu kiekis:', failai.length);


//1 uzduotis
let masinos = ['bmw', 'porsche', 'ferrari', 'fiat', 'seat']

console.log('pirmas:', masinos[0]);
console.log('paskutinis:', masinos[4]);
console.log('parinkta1:', masinos[1]);
console.log('parkinta2:', masinos[2]);
console.log(masinos.length);


//2 uzduotis
let zaidimai = ['csgo', 'fortnite', 'pubg', 'doom', 'packman', 'sonic']
console.log(zaidimai);
console.log('kiekis', zaidimai.length);

zaidimai[2] = 'league of legends';
zaidimai[5] = 'wolfenstein';

console.log('naujas sarasas', zaidimai);

//3 uzduotis
let brendai = [];
console.log(brendai);

brendai.push('Starbucks', 'Hublot', 'Casio');
brendai.push('Zara', 'Oracle', 'Amazon');
console.log(brendai);

//4 uzduotis
let skaiciai = [];

skaiciai[0] = 90;
skaiciai[1] = 36;
skaiciai[2] = 84;
skaiciai[3] = 12;
skaiciai[4] = 9;
console.log(skaiciai);
console.log(skaiciai.length);


//5 uzduotis

let Deimante = [4,9,6,8];
let Justas = [10,3,7,8];

console.log('Deimanes pazymiai', Deimante);
console.log('Justo pazymiai', Justas);

let sumaD = Deimante[0] + Deimante[1] + Deimante[2] + Deimante[3];
let vidurkis = sumaD / Deimante.length;
console.log('Justo vidurkis', vidurkis);

let sumaJ = Justas[0] + Justas[1] + Justas[2] + Justas[3];
let vidurkis2 = sumaJ / Justas.length;
console.log('Justo vidurkis', vidurkis2);

if (vidurkis > vidurkis2) {
    console.log('Deimantes vidurkis yra didesnis', vidurkis);
}

else if (vidurkis2 > vidurkis) {
    console.log('Justo vidurkis yra didesnis');
}

else {
    console.log('Abu vidurkiai yra lygus', vidurkis);
}



// let suma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4];
// let vidurkis = suma / pazymiai.length;

// console.log('gauta suma', suma);
// console.log('pazymiu vidurkis', vidurkis);