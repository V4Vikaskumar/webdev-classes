// aisi binding jo apane aap ho jaa rahi hai use hum implicit binding kahte hai

// agar hum this ko kisi function ke ander likhenge toh vo function jis bhi function ke ander hai agar vo globle hai to this globle verible ko implement karega warna us function ke ander jo bhi kuchh likha hai {this} usko globle manega aur use print karega.

let person={
    age:24,
    name:'Jack',
    city:'Mumbai',

    printPersonDetails:function (){
        console.log(this);
    }
}

// person.printPersonDetails();
function printGlobal(){
   console.log(this) 
}

printGlobal()