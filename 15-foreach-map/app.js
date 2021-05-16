//FOR
const cars = ['honda', 'Toyota','Daihatsu','ford'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }


//FOREACH
// cars.forEach(function (car, index, array) {
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });


//MAP
// const users = [
//     {id:1, name: 'Alex'},
//     {id:2, name: 'Bella'},
//     {id:3, name: 'Carl'},
//     {id:4, name: 'Daniel'},  
// ];
// const ids = users.map(function (user) {
//     return user.id
// });
// console.log(ids);


const user = {
    firstName : 'Alex',
    lastName: 'Gordan',
    age: 49
}
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}