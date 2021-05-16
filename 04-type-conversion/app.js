let val;


// number to String
val = String(123);
val = String(5+5);

//bool to string
val = String(true);

//date to string
val = String(new Date());

//array to string
val = String([1,2,3,4,5]);

// toString()
val = (5).toString();
val = (true).toString();

//Sring to Number
val =Number('51.30');

//bool to number
val = Number(true);
val = Number(false);

val = Number('hello');
val = Number(['1,2,3']);

val = parseInt('100.31');
val = parseFloat('100.30')

// console.log(val);
// console.log(typeof val);
// console.log(val.length); //untuk mengetahui panjang sting val //output : 3
// console.log(val.toFixed(2)); //akan menghilangkan desimal 

const val1 =5;
const val2 =6;
const sum= val1 + val2;

console.log(sum);
console.log(typeof sum);