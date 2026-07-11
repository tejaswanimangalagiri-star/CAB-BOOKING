function bookCar(){

let name=document.getElementById("name").value;
let car=document.getElementById("car").value;
let date=document.getElementById("date").value;
let days=document.getElementById("days").value;

if(name=="" || date=="" || days==""){
alert("Please fill all details");
return;
}

document.getElementById("result").innerHTML=
"Booking Successful!<br><br>"+
"Customer: "+name+
"<br>Car: "+car+
"<br>Pickup: "+date+
"<br>Days: "+days;

}
