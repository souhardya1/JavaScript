// Variables

// var                          can do overwrite or can declare null variable
var name="Souhardya";
var age;
age=22;
console.log(name,age);
age= 50;
console.log(age);

//const                          cannot do overwrite or cannot declare null variable
const city=' Kolkata';
console.log(city);
/* city='Delhi';                  Not possible to overwrite
   const a;                       Not possible to decalre null */

// let                            Local Variable only inside the brackets
{
    let city="Hindmotor";
    console.log(city);
}
console.log(city);


// array
const arr=[10,20,30,40,50];
arr.push(60)
console.log(arr)




