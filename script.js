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
