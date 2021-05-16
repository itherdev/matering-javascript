const number = [54, 23, 60, 1 ,68];
const number2 = new Array(90,7,43,100, 300);
const fruit = ['apple','Banana','Cherry','Orange','Pear'];
const mix = [30, 'Hello', true, undefined, null,{a:1, b:2}, new Date()];

let val;

//get Length
val = number.length;

//Check is array
val = Array.isArray(number2);

//get single value
val = fruit[4];

//insert into array
fruit[2]= 'Grape';

//find index of values
val = mix.indexOf(undefined);

//mutating


//add on to end
number.push(200); // menambahkan 200 diakhir

//add on to  front
number.unshift(7); //menambahkan 7 diawal

//take off from end
number.pop(); //menghapus 1 angka terakhir

//take off from front
number.shift(); //menghapus 1 angka paling depan

//splice value
number.splice(1,1);

//Reverse
fruit.reverse(number); //mebalik urutan dari belakang ke depan



console.log(number);
console.log(fruit);
console.log(val);