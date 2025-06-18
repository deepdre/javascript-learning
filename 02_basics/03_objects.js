// objects literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "deep",
    "full name": "deep sagar",
    [mySym]: "mykey1", // symbol need to be declare like that 
    age: 25,
    location: "delhi",
    email: "deepre223@",
    isLoggedIn: false
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "hekjhkjeh";
//Object.freeze(Jsuser) // you cant change any valuye now
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
}
Jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this["full name"]} is a good boty he lives in ${this.location}`);
}
console.log(Jsuser.greetingtwo());




