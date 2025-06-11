let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
//console.log(myDate.toLocaleTimeString());

/// date is object

//let myCreateDate = new Date(2024 , 0 , 23);
//let myCreateDate = new Date(2024 , 0 , 23 , 5 ,3);
//let myCreateDate = new Date("2024-01-14");
let myCreateDate = new Date("2024-01-14");
console.log(myCreateDate.toLocaleString());


let myTimestamp = Date.now();

// console.log(myTimestamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newdate = new Date();
console.log(newdate.getMonth()+ 1);
console.log(newdate.getDay());


newdate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})



