//1 pavyzdys

// let skaicius = 1;

// while (skaicius < 5) {
//     console.log(skaicius);
//     skaicius++;
// }

//2 pavyzdys

// let tekstas = 'sita teksta isvedame';
// let kiek_liko = 4;

// while (kiek_liko > 0) {
//     console.log(tekstas);
//     kiek_liko--; 
// }

//3 pavyzdys

// let prekiu_kiekis = 24;

// while (prekiu_kiekis > 0) {
//     console.log('turimas priekiu kiekis:', prekiu_kiekis);
//     let kiek_nupirko = Math.floor(Math.random() * 5) +1;
//     console.log('nupirko', kiek_nupirko, '/n');
//     prekiu_kiekis -= kiek_nupirko;
// }


//4 pavyzdys

// let prekiu_kiekis = 24; 

// while (prekiu_kiekis > 0) {
//     console.log('turimas prekiu kiekis:', prekiu_kiekis);
//     let kiek_nupirko = Math.floor(Math.random() * 5) +1; 
//     if (kiek_nupirko > prekiu_kiekis) {
//         kiek_nupirko = prekiu_kiekis;
//     }
//     console.log('nupirko:', kiek_nupirko, '\n');
//     prekiu_kiekis -= kiek_nupirko;
// }



//5 pavyzdys

// while (true) {
//     let skaicius = Math.floor(Math.random() * 100) +1; 
//     console.log(skaicius);

//     if (skaicius % 7 == 0 && skaicius % 2 == 0) {
//         console.log('skaicius', skaicius, 'dalinasi is 7 ir 2');
//         break;
//     }
// }


//6 pavyzdys

// let skaicius = 1; 

// while (skaicius % 7 != 0 || skaicius % 2 != 0) {
//     skaicius = Math.floor(Math.random() * 100) +1; 
//     console.log(skaicius);
// }

//7 pavyzdys

// let bloko_aukstis = 100;
// let turinio_aukstis = 128;

//     console.log('pradiniai duomenys');
//     console.log('bloko aukstis', bloko_aukstis);
//     console.log('turinio aukstis', turinio_aukstis);
//     console.log();

// while (turinio_aukstis > bloko_aukstis) {
//     bloko_aukstis += 10;
// }
//     console.log('atnaujinti duomenys');
//     console.log('bloko aukstis', bloko_aukstis);
//     console.log('turinio aukstis', turinio_aukstis);


//8 pavyzdys

// let duomenu_kiekis = 130;
// let apdorota = 60;

// while (apdorota < duomenu_kiekis) {
//     console.log('kazkas darom... jau apdorota', apdorota, 'is', duomenu_kiekis);
//     apdorota += 10;
// }
//     console.log('baigta, apdorota', apdorota, 'is', duomenu_kiekis);




//9 pavyzdys

// let suma = 0;
// let skaicius = 0;

// while (suma < 500) {
//     skaicius = Math.floor(Math.random() * 100) +1;
//     suma += skaicius;
//     console.log(skaicius);
// }

// console.log('\nSiu skaiciu suma', suma);


// 1 uzduotis

let skaiciai = 1;

while (skaiciai <= 20) {
    console.log('skaicius :', skaiciai);
    skaiciai ++
}


// 2 uzduotis

let skaiciukai = 1;

while (skaiciukai <= 50) {
    skaiciukai ++ 
   if (skaiciukai % 2 === 0) {
    console.log(skaiciukai + ' lyginis');
   }
   else {
    console.log(skaiciukai + ' nelyginis');
   }
}


// 3 uzduotis

let pradzia = 25;

while (pradzia <= 50) {
    console.log(pradzia);
    pradzia ++;
    if (pradzia % 3 === 0){
        console.log(pradzia, 'skaicius dalinasi is 3');
    }
}

// 4 uzduotis

  let pradinis = 1; 

while (true) {
    console.log(pradinis);
    if (pradinis % 3 === 0 && pradinis % 5 === 0) {
        break;
    }
    pradinis++;
}


// 5 uzduotis

let suma = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        suma += i;
    }
}
console.log('Lyginiu suma', suma);



// 6 uzduotis 
let skaicius = 1;

while (skaicius < 5) {
    console.log(skaicius + ' ' + (skaicius * skaicius));
    skaicius++;
}





