// primitive 
//7 types = bstrings , number , boolean , symbol , null, undefined, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let usermail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // flase



// non primitive
 // array , objects , functions


 const heros = ["deep ", "nageraj" , "dogga"];
 let myObj = {
    name: "deep",
    age: 22,
 }



 //************** ************/
 
 // stacxk(primitive) , heap (non-primitive)

 let myYoutube = "techymechy";

 let anothername = myYoutube
 anothername = "deeop sagar";
console.log(anothername);
console.log(myYoutube);

let user1 = {
   email: "userrrr",
   upi: "user@okaxis"
}
let user2 = user1

user2.email = "lalalalal";
console.log(user1.email);