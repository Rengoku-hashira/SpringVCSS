// console.log('labas');
// console.log('labas');
// console.log('labas');

//lengvesnis budas apacioj

// for (let i = 0; i <3; i++) {
//     console.log('labas');
// }



// console.log('eilute nr 1');
// console.log('eilute nr 2');
// console.log('eilute nr 3');
// console.log('eilute nr 4');

// lengvesnis budas apacioj

// for (let i = 1; i <= 4; i++) {
//     console.log('eilute nr', i);
// }


// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }



// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


// for (let i = 1; i < 6; i++) {
//     console.log(i);
// }


// for (let i = 5; i <= 10; i++) {
//     console.log('skaicius', i);
// }


// +5 prie kintamojo
// for (let i = 5; i <= 30; i += 5) {
//     console.log('skaicius i = ' + i);
// }

//patikra ar lyginis
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 ==0) {
//         console.log('skaicius', i, 'yra lyginis');
//     }
// }

// irgi lyginio patikra bet vietoj i(kintamojo)++ dedam skaicius '2'
// for (let i = 2; i <=10; i += 2) {
//     console.log('skaicius', i, 'yra lyginis');
// }


//patikra dalinimu su salyga '|| arba'
// for (let i = 1; i <= 12; i++) {
//     if (i % 2  == 0 || i % 5 == 0) {
//         console.log('skaicius', i, 'dalinasi is 2 arba 5');
//     }
// }


// let kiek = 5;

// for (let i = 0; i < kiek; i++) {
//     console.log(i);
// }


// let pradzia = 7;
// let pabaiga = 10;

// for (let i = pradzia; i <= pabaiga; i++) {
//     console.log('skaicius', i);
// }


// for (let i = 1; i <= 3; i++) {

// console.log('pirmo ciklo pradzia, i =', i);

// for(let j = 1; j <= 5; j++) {
//     console.log('antras ciklas, j =', j);
// }

// console.log('pirmo ciklo interacijos pabaiga'); 

// }

// for (let i = 1; true; i++) {
//     console.log(i); 
//     if (i >= 3) {
//         console.log('pasiekem if');
//         console.log('nutraukiam cikla');
//         break; // nutraukia artimiausia cikla
//     }
// }


for (let i = 1; i < 5; i++) {
    if (i == 2) {
        console.log('praleidziam nr 2');
        continue; // nebevykdo kas zemiau / baigia iteracija // grizta i pradzia 
    }
    console.log(i);
}






















