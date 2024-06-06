// let suma = 0;

// for (let i = 0; i < 10; i++) {
//      suma += i;
// }

// console.log('gauta suma', suma);


// let suma = 0;

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 ==0) {
//         suma += i;
//     }
//     console.log('lyginiu suma', suma);
// }



// 1 uzduotis
let suma = 0;

for (let i = 0; i < 100; i++) {
     suma += i;
}

console.log('atsakymas', suma);

// 2 uzduotis
let count = 0;
for (let j = 20; j <= 50; j+= 2) {
    if (j % 2 === 0) {
        count += j;
    }
    
}
console.log('lyginiu suma nuo 20 iki 50', count);

//3 uzduotis
let amount = 0;
for (let x = 30; x <= 60; x += 3) {
    if (x % 3 === 0) {
        amount += x;
    }
}

console.log('nelyginiu suma nuo 30 iki 60', amount);

//4 uzduotis
   let sum = 0;
   for (let i = 1; i < 1000; i++) {
     if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
     }
   }
console.log('uzduoties atsakymas =', sum);


let ciklas = 0;
for (let i = 1; i <= 100; i++) {
     if (i % 3 === 0 && i % 5 === 0){
       console.log('FizzBuzz');

     } else if (i % 3 === 0) {
     console.log('Fuzz');
     } else if (i % 5 === 0) {
     console.log('Buzz');
     } else {
     console.log(i);
     }
    
   
}








