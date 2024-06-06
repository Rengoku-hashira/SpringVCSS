// 1 uzduotis

// let zodziai = ['audi', 'bmw', 'mercedes', 'honda', 'toyota']

// for (const zod in zodziai) {
//     console.log(zod, '- ' + zodziai);
// }


// 2 uzduotis 

// const pirkiniai = ['pomidoras', 'vistiena', 'paprika', 'druska', 'desra']
// let pirkiniu_kiekis = 0;
// for (let pirk of pirkiniai) {
//     console.log('--', pirk);
//     pirkiniu_kiekis += pirk;
// }
// console.log('pirkiniu kiekis', pirkiniai.length);


// 3 uzduotis
// let pazymiai = [7, 4, 8, 2, 6];
// let suma = pazymiai.reduce((a, b) => a + b, 0);
// let vidurkis = suma / pazymiai.length;

// console.log('Pazymiai', pazymiai);
// console.log('Vidurkis', vidurkis);
// for (let paz of pazymiai) {

// }






















// 1 pavyzdys


// const spalvos = ['raudona', 'zalia', 'melynas', 'geltona', 'oranzine', ]

// for (let spalva of spalvos) {
//     console.log(spalva);
// }



// 2 pavyzdys 

// let pazymiai = [7, 4, 8, 7, 9, 6, 2, 5];

// console.log('teigiami pazymiai');

// for (const paz of pazymiai) {
//     if (paz >= 5) {
//         console.log(paz);
//     }
// }


// 3 pavyzdys

// let pazymiai = [7, 4, 8, 7, 9, 6, 2, 5];

// for (const paz of pazymiai) {
//     if (paz >= 5) {
//         console.log(paz, 'yra teigiamas');
//     } else {
//         console.log(paz, 'yra neigiamas');
//     }
// }



// 4 pavyzdys

// let pazymiai = [7, 4, 8, 7, 9, 6, 2, 5];

// let kiek_neigiamu = 0;

// for (const paz of pazymiai) {
//     if (paz < 5) {
//         kiek_neigiamu++;
//     }
// }

// console.log('neigiamu pazymiu kiekis:', kiek_neigiamu);


// 5 pavyzdys

// let komanda = [
//     'javascrypt (juniot)',
//     'javascrypt (senior)',
//     'architect',
//     'designer',
//     'pm'
// ];

// for (const narys of komanda) {
//     console.log(narys);
// }


// 6 pavyzdys 

// let komanda = [
//     'javascrypt (juniot)',
//     'javascrypt (senior)',
//     'architect',
//     'designer',
//     'pm'
// ];

// for (const indeksas in komanda) {
//     console.log(indeksas);
// }

// 7 pavyzdys 

// let komanda = [
//     'javascrypt (juniot)',
//     'javascrypt (senior)',
//     'architect',
//     'designer',
//     'pm'
// ];

// for (const indeksas in komanda) {
//     console.log('indeksas', indeksas, '; narys', komanda[indeksas]);
// }


// 8 pavyzdys 

// let skaiciai = [7, 4, 5, 2, 9];
 
// let suma = 0;

// for (const sk of skaiciai) {
//     suma += sk;
// }

// console.log('skaiciai', skaiciai);
// console.log('suma', suma);
// console.log('kiekis', skaiciai.length);
// console.log('vidurkis', suma / skaiciai.length);



// 9 pavyzdys 

// let skaiciai = [];

// let generuojamu_kiekis = Math.floor(Math.random() * 10) +3;

// for (let i = 0; i < generuojamu_kiekis; i++) {
//     skaiciai.push(Math.floor(Math.random() * 10) +1);

// }

// console.log('sugeneruoti skaiciai', skaiciai);

// let suma = 0;

// for (const skaicius of skaiciai) {
//     suma += skaicius; 
// }

// console.log('siu skaiciu suma', suma);



// 10 pavyzdys 

// let pradiniai_skaiciai = [7, 8, -5, -1, 3, -5, 4];

// let teigiami_skaiciai = [];
// let neigiami_skaiciai = [];

// for (const skaicius of pradiniai_skaiciai) {
//     if (skaicius > 0) {
//         teigiami_skaiciai.push(skaicius);
//     } else {
//         neigiami_skaiciai.push(skaicius);
//     }
// }

// console.log('pradiniai duomenys:', pradiniai_skaiciai);
// console.log('atrinkti teigiami:', teigiami_skaiciai);
// console.log('atrinkti neigiami:', neigiami_skaiciai);

// 11 pavyzdys

// let pirmas_studentas = [7, 8, 7, 5, 8];
// let antras_stundetas = [6, 9, 8, 7];

// console.log('pirmo studento pazymiai:');

// for (const paz of pirmas_studentas) {
//     console.log(paz);
// }

// console.log('antro studento pazymiai:');

// for (const paz of antras_stundetas) {
//     console.log(paz);
// }








