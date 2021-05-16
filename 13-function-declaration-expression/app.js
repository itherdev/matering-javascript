// function greet(name) {
//     console.log(`Hello, ${name}`);
// }
// greet('John');

function greet(firstname = 'John', lastname = 'Doe') {
    // if(typeof firstname === 'undefined'){ firstname = 'John'}
    // if(typeof lastname === 'undefined'){ lastname = 'Doe'}
    
    return `Hello, ${firstname} ${lastname}`;
}
console.log(greet('Steve', 'Smith')); //akan mengahsilkan argumen ini //klo kosong baru bakal nampilin nilai default



const square = function (x = 8) { //x =8 adalah default, akan ditampilkan klo sebelumnya tidak ada inputan 
    return x*x;
}
console.log(square()); // harus di tempatin di akhir 


//IIFEs
(function (name) {
    console.log(`Hello ${name}`)
})(`IDStack`);
