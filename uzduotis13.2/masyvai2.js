// 1 uzduotis

let studijos = ['VDU', 'MRU', 'KTU', 'VTDK']

for (let i = 0; i < studijos.length; i++) {
    console.log(studijos[i]);
}
// 2 uzduotis

let salis = ['Vokietija', 'Italija', 'Austrija', 'Belgija', 'Lenkija']

for (let i = 0; i < salis.length; i++) {
    console.log('salis - ', salis[i]);
}

// 3 uzduotis

let projektas = ['studija', 'apartamentai', 'namas', 'kotedzas', 'villa']

    for (let i = 0; i < projektas.length; i++) {
      console.log((i + 1) + '-as projektas ' + projektas[i]);

}


// 4 uzduotis  

let skaicia = [3, 19, 26, 90, 2, 67];
for (let i = 0; i < skaicia.length; i++) {
    if (skaicia[i] > 5) {  
        console.log('daugiau negu 5:', skaicia[i]);
    }
}


// 5 uzduotis

let figures = [4, 6, 19, 67, 40, 80];
let keturiu_suma = 0;

for (let i = 0; i < figures.length; i++) {
    if (figures[i] % 4 === 0) {
        keturiu_suma += figures[i];
    }
}
console.log('dalynamuju is 4 suma', keturiu_suma);


//6 uzduotis

let pazymiai = [8, 10, 2, 4, 7]
let sum = pazymiai.reduce((a, b) => a + b, 0);
let vidurkis = sum / pazymiai.length;

console.log('Pazymiai', pazymiai);
console.log('Vidurkis', vidurkis);


// 8 uzduotis
let skaiciai = [2, 8, 10, 14, 20];

skaiciai.forEach((skaicius) => {
    console.log(skaicius);
    if (skaicius % 2 === 0) {
        console.log('kvadratas', skaicius * skaicius);
    }
});











////PAVYZDIS 1

// let automobiliai = ['audi', 'bmw', 'volvo', 'mercedes']

// // console.log(automobiliai[0]);
// // console.log(automobiliai[1]);
// // console.log(automobiliai[2]);
// // console.log(automobiliai[3]);
// // console.log();

// // tas pats su ciklu

// for (let i = 0; i < automobiliai.length; i++) {
//     console.log(automobiliai[i]);
// }

//PAVYZDIS 2

// let miestai = ['Kaunas', 'Vilnius', 'Klaipeda', 'Siauliai',]

// for (let i = 0; i < miestai.length; i++) {
//     console.log('miestas', miestai[i]);
// }


//PAVYZDIS 3

// let miestai = ['Kaunas', 'Vilnius', 'Klaipeda', 'Siauliai',]

// for (let i = 0; i < miestai.length; i++) {
// console.log((i + 1) + '-as miestas yra ' + miestai[i]);
// }

//PAVYZDIS 4

// let skaiciai = [];

// for (let i = 0; i < 10; i++) {
//     let atsitiktinis = Math.floor( Math.random() * 10) + 1;
//     skaiciai.push(atsitiktinis);
// }

// console.log(skaiciai);

//PAVYZDIS 5

// let skaiciai = [7, 4, 7, 8, 5, 4, 2, 3, 6, 9];
// for (let i = 0; i < skaiciai.length; i++) {
//     console.log('indeksas', i);
//     console.log('skaicius', skaiciai[i]);
//     console.log();
// }

//PAVYZDIS 6

// let medziai = ['obelis', 'Kriause', 'berzas', 'egle']

// for (let i = 0; i < medziai.length; i++) {
// console.log('medis', medziai[i]);
// }

//PAVYZDIS 7

// let medziai = ['obelis', 'Kriause', 'berzas', 'egle'];

// for (let i = 0; i < medziai.length; i++) {
//     console.log('zodzio', medziai[i], 'raidziu kiekis: ', medziai[i].length);
// }

//PAVYZDIS 8

// let skaiciai = [78, 47, 24, 36];

// for (let i = 0; i < skaiciai.length; i++) {
//     if (skaiciai[i] % 2 == 0)
//         console.log('skaicius', skaiciai[i], 'yra lyginis');

//     else {
//         console.log('skaicius', skaiciai[i], 'yra nelyginis');
//     }
// }

// PAVYZDIS 9
// let skaiciai = [78, 47, 24, 36]; 

// for (let i = 0; i < skaiciai.length; i++) {
//     let isvedimas = 'skaicius ' + skaiciai[i] + ' yra ';
//     if (skaiciai[i] % 2 == 0){
//         isvedimas += 'lyginis';
//     }
//     else {
//         isvedimas += 'nelyginis';
//     }
//     console.log(isvedimas);
// }


//PAVYZDIS 10 parodo suma lyginiu ir nelyginiu skaiciu masyve
// let skaiciai = [8, 7, 5, 6, 3, 2];

// let lyginiu_suma = 0;
// let nelyginiu_suma = 0;

// for (let i = 0; i < skaiciai.length; i++) {
//     if (skaiciai[i] % 2 == 0)
//         lyginiu_suma += skaiciai[i]
//     else{
//         nelyginiu_suma += skaiciai[i];
//     }
// }

// console.log('skaiciai:', skaiciai);
// console.log('lyginiu suma:', lyginiu_suma);
// console.log('nelyginiu suma:', nelyginiu_suma);


//PAVYZDIS 11

// let skaiciai = [8, 7, 5, 6, 3, 2];

// let lyginiu_suma = 0;
// let lyginiu_kiekis = 0;


// for (let i = 0; i < skaiciai.length; i++) {
//     if (skaiciai[i] % 2 == 0){
//         lyginiu_suma += skaiciai[i]
//         lyginiu_kiekis++;
//     }
// }

// console.log('skaiciai', skaiciai);
// console.log('lyginiu_suma:', lyginiu_suma);
// console.log('lyginiu kiekis:', lyginiu_kiekis);
// console.log('lyginiu vidurkis:', lyginiu_suma / lyginiu_kiekis);