const num1 = 100;
const num2 = 50;
let val;

//simple math operator
val = num1+num2;
val = num1*num2;
val = num1-num2;
val = num1/num2;
val = num1%num2;

//math object
val = Math.PI; 
val = Math.E;
val = Math.round(3.5); //round jika 3.7 karna diatas 5 maka dibulatkan jadi 4
val = Math.ceil(2.4); //output 3 karna jika ada nilai desimal maka dibulatkan keatas
val = Math.floor(4.7); //jika ada nilai desimal maka dibulatkan kebawah
val = Math.sqrt(64);  //sqrt untuk mencari akar kuadrat
val = Math.abs(-5); //abs untuk mengabsolutkan nilai
val = Math.pow(8, 2); //pow memangkatkan 8 pangkat 2 = 64
val = Math.min(2, 33, 5, 4, 100, 90);
val = Math.max(2, 33, 5, 4, 100, 90);
val = Math.random(); //untuk kode generate secara random
val = Math.floor(Math.random() * 50 + 1);


console.log(val);