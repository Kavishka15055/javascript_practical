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
