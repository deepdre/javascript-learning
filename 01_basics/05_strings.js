const name = "deep";
const repoCount = 50;
//console.log(name + repoCount + " Value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//const gameName = new String('deephhc'); // it gives length and give many methods 
const gameName = "deephhc"

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));

const newgame = gameName.substring(0,4);
console.log(newgame);


const anothergame = gameName.slice(-7 , 3);
console.log(anothergame);



const newString1 =  "    hitesh    ";
console.log(newString1);
console.log(newString1.trim()); // trim the spaces


const url = "www.deep.com/deep%20sagar";

console.log(url.replace('%20' , '-'));

console.log(url.includes('deep')) // true

const name1 = "deep-hc"

console.log(name1.split('-')); //cobcert to array

