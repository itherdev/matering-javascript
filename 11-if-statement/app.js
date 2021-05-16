// if (true) {
//     do something();
// }else {
//     do something();
// }

// const id =100;

// //Equal to 
// if (id==100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// //Not Equel to 
// if (id!= 100){ //yang dicari nilai id selain dari 100
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

//equel to value & type
// if (id=== '100'){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// if(typeof id != 'undefined') {
//     console.log(`ID Value is : ${id}`);
// } else {
//     console.log('ID Value is NULL');
// }

// if(id == 200){
//     console.log('CORRECT');
// }


//Greator or less than
// if (id <= 100){
//        console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }


// const color = 'blue';

// if (color == 'red'){
//     console.log('color is red');
// } else if (color == 'blue'){
//     console.log('color is blue');
// } else {
//     console.log('color is not blue');
// }


//logical Operator

const name = 'Alpha';
const age = 21;

if (age > 0 && age < 12){
    console.log(`${name} is a child `);
} else if (age >=12 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}