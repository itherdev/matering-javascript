// //var, let, const

// var name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);

// //init Var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letter, number, _, $
// var variable;
// var variable;
// var var_iable;
// var variable;
// var vari$able;
// var variable123;
// var var123iable123;

// // Multi Words
// var firstname;
// var firstNama;
// var FirstName;


/* Let */
// let name; 
// name ='John Doe';
// console.log(name);

// name = 'sara';
// console.log(name);



/** Const
* const tidak dapat diubah jenisnya/secara global
* tapi untuk masing-maisng property saat kita menggunakan data objek/array maka nilai dari array/objek tersebut masih bisa kita ubah
*/

// const name;
// name ='John Doe';
// console.log(name);

// name = 'sara';
// console.log(name);

const person = {
    name: 'John',
    age: 30
}
person.name= 'Sara';
person.age= 28;
console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

numbers= {
    a:1,
    b:2,
    c:3
}
console.log(numbers);

