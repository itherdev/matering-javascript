let val;

const today = new Date();
let birthday = new Date('8-16-1994 23:30:25');
birthday = new Date('Augustus 16 1994');
birthday = new Date('8/16/1994');


val =today.toString();

val = today.getFullYear();
val = today.getMonth();
val = today.getDate();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

birthday.setDate(20);
birthday.setMonth(1);//output februari karnamulai dri 0
birthday.setFullYear(1995);
birthday.setHours(12);
birthday.setMinutes(45); 
birthday.setSeconds(50);

console.log(birthday);  