// pavyzdys 1

// let skersmuo = 1;
// let x = 1;
// let y = 1;

// let apskritimas = {
//     skersmuo: 1,
//     lokacija: {
//         x: 1,
//         y: 1,
//     },
//     matomas: true
// };

// console.log(apskritimas);

// pavyzdys 2

// let studentas1 = {
//     Vardas: 'Tomas',
//     mokykla: 'KTU'
// };


// let studentas2 = {
//     vardas: 'Gintare',
//     mokykla: 'VDU'
// };

// console.log(studentas1);
// console.log(studentas2);


// pavyzdys 3

// let automobilis = {
//     marke: 'Audi',
//     modelis: 'A4',
//     rida: 148765,
//     darbinis_turis: 2.0,
//     gamybos_metai: 2012
// };


// console.log(automobilis);

// pavyzdys 4

// let studiju_programa = {
// pavadinimas: 'Programu sistemu inzinerija',
// mokykla: 'KTU',
// laipsnis: 'Magistras',
// trukme_metais: 2,
// studentai: {
//     kursas1: 14,
//     kursas2: 12
// }
// };

// console.log(studiju_programa);

// Pavyzdys 5

// let studentas = {
//     vardas: 'Petras',
//     pavarde: 'Petrauskas',
//     amzius: 22,
//     kur_mokosi: {
//         mokykla: 'KTU',
//         studiju_programa: 'Multimedijos techonologijos',
//         kursas: 3
//     },
//     pazymiai: [7, 8, 9, 6, 8, 5, 4]
// };

// console.log(studentas);


// Pavyzdys 6

// let studentas = {
//     vardas: 'Petras',
//     pavarde: 'Petrauskas',
//     amzius: 22,
//     kur_mokosi: {
//         mokykla: 'KTU',
//         studiju_programa: 'Multimedijos techonologijos',
//         kursas: 3
//     },
//     pazymiai: [7, 8, 9, 6, 8, 5, 4]
// };

// console.log('studento vardas:', studentas.vardas);
// console.log('studento amzius:', studentas.amzius);
// console.log('studento pazymiai:', studentas.pazymiai);



// Pavyzdys 7

// let knyga = {
//     autorius: 'Jey k rauling',
//     pavadinimas: 'toks ir anoks pasaulis',
//     puslapiai: 245,
//     kaina: 14.99,
//     ar_prekyboje: true,
// };

// console.log(knyga.autorius);
// console.log(knyga['autorius']);

// console.log(knyga.puslapiai);
// console.log(knyga['puslapiai']);


// Pavyzdys 8 SUSIDUBLIOJA

// let darbuotojas = {
//     vardas: 'Petras',
//     pavarde: 'Petrauskas',
//     etatas: 1,
//     pareigos: 'keliu patrulis',
//     atlyginimas: 1000,
// };

// console.log(darbuotojas);

// darbuotojas.pareigos = 'skyriaus vadovas';
// darbuotojas.atlyginimas = 1200;

// console.log(darbuotojas);

// Pavyzdys 9

// let preke1 = {
//     pavadinimas: 'piestukas',
//     kaina: 0.99,
//     kiekis: 142
// };

// let preke2 = {
//     pavadinimas: 'sasiuvinys',
//     kaina: 1.49,
//     kiekis: 241
// };

// console.log('pirma preke', preke1);
// console.log('antra preke', preke2);

// if (preke1.kiekis > preke2.kiekis) {
//     console.log('pirmos prekes daugiau vienetu');
// } else if (preke2.kiekis > preke1.kiekis) {
//     console.log('antros prekes daugiau vienetu');
// } else {
//     console.log('abieju prekiu vienodai');
// }


// pavyzdys 10

// let tuscias = {};
// console.log(tuscias);

// tuscias.nauja = 14;
// tuscias.dar_viena = 'abc';

// console.log(tuscias);


// 1 Uzduotis

let studentas = {
    vardas: 'Antanas',
    pavarde: 'Berulis',
    amzius: 23,
    studiju_programa: 'Inzinerija',
    kreditu_skaicius: 0,
    pazymiai: [5, 9, 10, 6, 7, 8, 9],
    ugis: 1.89,
    kursas: 'Antras kursas',
    mokykla: 'VGTU'
}

console.log(studentas);
console.log('vardas', studentas.vardas);
console.log('pavarde', studentas.pavarde);
console.log('ugis', studentas.ugis);


// 2 Uzduotis

let filmas = {
    pavadinimias: 'John Wick',
    rezisierius: 'Chad Stahelski',
    biudzetas: 2000000 + ' mln USD',
    uzdirbo_pinigu: 8600000 + ' mln USD',
    zanras: 'Action',
    trukme: '101 minute',
    isleidimo_metai: 2014,
    aktoriu_sarasas: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen', 'Adrianne Palicki']
};

console.log('Filmas', filmas);

let pelnas = 8600000 - 2000000;
console.log("Filmo Pelnas:", pelnas, "USD");

let aktoriu_sarasas = filmas.aktoriu_sarasas.length;
console.log('Aktoriu kiekis:', aktoriu_sarasas);

let dabartiniaiMetai = new Date(Date.now()).getFullYear();
let filmoAmžius = dabartiniaiMetai - filmas.isleidimo_metai;
console.log("Filmui yra metų:", filmoAmžius);


// 3 Uzduotis

let knyga1 = {
    pavadinimas: 'Lord of the Rings',
    autorius: 'John Tolkien',
    zanras: 'Fantasy',
    kaina: 29.99 + 'Eur',
    puslapiu_kiekis: 312,
    skyriu_sarasas: ['The fellowship of the Ring', 'The Two Towers', 'The Return of the King'],
    isleidimo_metai: 1968, 
    rasti_knygynuose: false
}

console.log(knyga1);

let knyga2 = {
    pavadinimas: 'Twilight',
    autorius: '	Stephenie Meyer',
    zanras: 'Fantasy romance',
    kaina: 9.99 + 'Eur',
    puslapiu_kiekis: 218,
    skyriu_sarasas: ['eclipse', 'midnight sun', 'breaking dawn'],
    isleidimo_metai: 2005, 
    rasti_knygynuose: true
}

console.log(knyga2);

let x2knyga2 = knyga2.kaina *2;
let brangesne_knyga = knyga1.kaina;


if (knyga1.puslapiu_kiekis > knyga2.puslapiu_kiekis){ 
    console.log('Twilight storesne');
} else if (knyga2.puslapiu_kiekis > knyga1.puslapiu_kiekis ) {
    console.log('Lord of the Rings storesne');
} else {
    (knyga1.puslapiu_kiekis = knyga2.puslapiu_kiekis)
    console.log('Puslapiu kiekis lygus');
}

if (x2knyga2 > brangesne_knyga) {
    console.log('Jeigu pirmos knygos kaina padvigubint, ji bus brangesne');
} else {
    console.log('Nebus brangesne');
}




















