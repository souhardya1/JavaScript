/*                             Datatypes
                ___________________|________________
                |                                   |
        Premetive-> Stack                      Reference -> Heap
(string,numbers,bool,null,undefined)       (Array,object,functions,dates) 

*/   


let name='Souhardya';
console.log('My name is '+name+ ' type is '+ (typeof name));

let age=22;
console.log("Datatype is "+(typeof age));

let bool=true;
console.log("Datatype is "+(typeof bool));

let nullvar=null;
console.log("Datatype is "+(typeof nullvar));

let undef=undefined;
console.log("Datatype is "+(typeof undef));

arr=[1,2,3,4]
console.log("Datatype is "+(typeof arr));


let obj={a: 70,b: 59,}
console.log("Datatype is "+(typeof obj));

function func() 
{
    
}
console.log("Datatype is "+(typeof func));
