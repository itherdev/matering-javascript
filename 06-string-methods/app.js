const firstName = 'Stewart';
const lastName = 'Hodges';
const age = 35;
const phar = 'Hello, My name is ' + firstName + ' and I am ' + age;
const tags = 'html, css, javascript, php';

let val;

val = firstName + lastName;

//Concatenation
val =firstName+ ' ' + lastName; //agar ada spasi
val ='Hello, My name is ' + firstName + ' and I am ' + age;

//append
val = 'Marhsall ';
val += 'Mathers';

//Escaping
val = 'That\'s awesome, I can\'t wait it'; // untuk tanda ' \
val = "That's awesome, I can't wait it"; 

//length
val = firstName.length; //output = 7 klo ada spasi bakal keitung 

//concat
val = firstName.concat(' ', lastName); //concat untuk menggabungkan seperti Concatenation

//change case
val = firstName.toUpperCase(); //mengubah ke hurup Kapital
val = firstName.toLowerCase(); // mengubah ke hurup kecil

val = firstName[0]; //akan muncul huruf pertama

//indexof()
val =firstName.indexOf('a');

//charAt()
val = firstName.charAt('2');
val =firstName.charAt(firstName.length - 1);

//substring();
val =firstName.substring(0,4 ); //sebelum index 4

//slice
val =firstName.slice(0,4 ); 
val =firstName.slice(-3); //menampilkan karakter terakhir
  
// split
val = phar.split(' ');
val = tags.split(',');

//replace
val =phar.replace('Hello', 'Hi');

//includes
val = phar.includes('Hello'); //bisa digunakan untuk melakukan validasi apakah terdapat suatu nilai tertentu 
 

console.log(val);