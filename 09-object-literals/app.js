const person = {
    firstName: 'Stave',
    lastName: 'Job',
    age: 39,
    email: 'steve@job.com',
    hobbies: ['music','sports'],
    address: {
        city: 'Arizone',
        zipcode: '86029'
    },
    getBirthYear: function() {
        return 2018 - this.age;
    }
}

let val;

val = person;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.address.zipcode;
val = person.address['city'];
val = person.getBirthYear();


console.log(val);