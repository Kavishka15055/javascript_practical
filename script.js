let employee = {
    firstname: "John",
    lastname: "Smith",
    'first name': "Doe",
    age: 20,
    iscitizen: true,
    getmsg: function(){
        alert(p1 + " " + this.lastname + " " +  this.age + "Years old.");
    }
}

// console.log(employee["first name"]);

for(let key in employee){
    console.log(key);
    
}


//Nullish Coalescing operator 

const sometext = "";

const a = sometext ?? "Hi how are you";
console.log(a);


function calculateTotal(){
    let txtprice = document.getElementById("textprice").value;
    let txtqty = document.getElementById("textqty").value;

    let total = Number(txtprice) * Number (txtqty);
    document.getElementById("texttotal").value = total;
}

let btncal = document.getElementById("btncal");
btncal.addEventListener("click", calculateTotal);

function firstFunction(a, b){
    return a + b;
}
let result = firstFunction(10, 20);
console.log(result);


//for in loop
const person = {
    name: "Nimal",
    age:"30",
    category:"Manager"
}

for(const key in person){
    console.log(key + ": " + person[key]);
}

//forEach loop
const numbers = [15, 25, 35, 45, 55];
let sum = 0;
numbers.forEach((number) => {
    sum += number;
})

console.log("Sum: " + sum);


//for of loop
const fruits = ["Apple", "Banana", "Mango", "Orange"];
for(const fruit of fruits){
    console.log(fruit);
}
