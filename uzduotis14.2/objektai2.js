// 1 Pavyzdys

// let zmogus = {
//     vardas_pavarde: 'Jonas Jonaitis',
//     amzius: 45,
//     profesija: 'furistas',
//     ugis: 1.8,
//     ar_turi_teises: true,
// };

// for (const raktas in zmogus) {
//     console.log(raktas, ':', zmogus[raktas]);
// }

// console.log();

// let raktas = 'amzius';
// console.log(raktas, zmogus[raktas]);


// 2 Pavyzdys

// let studentas = {
//     vardas: 'Tomas',
//     pavarde: 'Tomauskas',
//     amzius: 23,
//     ugis: 1.7,
//     pazymiai: [7, 7, 8, 7, 9, 8, 10, 9],
//     grupe: 'IFM-3/4'
// };

// for (const indeksas in studentas) {
//     console.log(studentas[indeksas]);
// }

// 3 Pavyzdys

// let studentas = {
//     vardas: 'Tomas',
//     pavarde: 'Tomauskas',
//     amzius: 23,
//     ugis: 1.7,
//     pazymiai: [7, 7, 8, 7, 9, 8, 10, 9],
//     grupe: 'IFM-3/4'
// };

// for (const raktas in studentas) {
//     if (raktas == 'vardas' || raktas == 'pazymiai') {
//         console.log(raktas, studentas[raktas]);
//     }
// }

// console.log('------------------');

// for (const raktas in studentas) {
//     if (typeof studentas[raktas] == 'number') {
//         console.log(raktas, studentas[raktas]);
//     }
// }


// 4 Pavyzdys 

// let studentas = {
//     vardas: 'Tomas',
//     pavarde: 'Tomauskas',
//     amzius: 23,
//     ugis: 1.7,
//     pazymiai: [7, 7, 8, 7, 9, 8, 10, 9],
//     grupe: 'IFM-3/4'
// };


// console.log('pazymiai:');

// for (const pazymys of studentas.pazymiai) {
//     console.log(pazymys);
// }


// 5 Pavyzdys 

// let studentas = {
//     vardas: 'Tomas',
//     pavarde: 'Tomauskas',
//     amzius: 23,
//     ugis: 1.7,
//     pazymiai: [7, 7, 8, 7, 9, 8, 10, 9],
//     grupe: 'IFM-3/4'
// };

// let paz_suma = 0;

// for (const pazymys of studentas.pazymiai) {
//     paz_suma += pazymys;
// }

// console.log('pazymiai', studentas.pazymiai);
// console.log('pazymiu vidurkis',
// paz_suma / studentas.pazymiai.length);



// 1 Uzduotis

let knygynas = {
    pavadinimas: 'Pegasas',
    adresas: 'Pylimo g. 53/2 ',
    plotas: 312 + 'kv.m',
    knygu_kiekis: 12765,
    darbo_valandos: 'Nuo 8:00 iki 17:00',
    ar_Atidarytas: true
}


console.log("\nSavybes");
for (let savybe in knygynas) {
    if (typeof knygynas[savybe] !== 'string') {
        console.log(savybe + ": " + knygynas[savybe]);
    }
}

console.log(knygynas);



// 2 uzduotys

let studentas1 = {
    vardas: 'Domas',
    pavarde: 'Jakstas',
    studiju_pavadinimas: 'Automatinis testavimas',
    pazymiai: [7, 6, 9, 10, 9, 7]
};

let studentas2 = {
    vardas: 'Viktorija',
    pavarde: 'Drutyte',
    studiju_pavadinimas: 'Kibernetine sauga',
    pazymiai: [10, 9, 8, 9, 7, 8]
};


let paz_suma = 0;

for (const pazymiai of studentas1.pazymiai) {
    paz_suma += pazymiai;
}

console.log('pazymiai', studentas1.pazymiai);
console.log('pazymiu vidurkis', paz_suma / studentas1.pazymiai.length);


let pazym_suma = 0;

for (const pazymiai of studentas2.pazymiai) {
    pazym_suma += pazymiai;
}

console.log('pazymiai', studentas2.pazymiai);
console.log('pazymiu vidurkis', pazym_suma / studentas1.pazymiai.length);

if (paz_suma > pazym_suma) {
    console.log('Domo vidurkis dydesnis');
} else if (pazym_suma > paz_suma)  {
    console.log('Viktorijos vidurkis dydesnis');
} else {
    console.log('Vidurkis dydesnis');
}








