const marvel_heroes = ["thor", "ironman","spiderman"]
const dc_heroes = ["superman", "batman","flash"]

//marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heroes[3][1]);


//const heroes = marvel_heroes.concat(dc_heroes);
//console.log(heroes)

//another method

const heroes = [...marvel_heroes, ...dc_heroes];
//console.log(heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const another_arr = another_array.flat(Infinity); // you can use flat(1) to solve it to deapth 1 , we have 2 level in our array but we can also use infinity
console.log(another_arr);


console.log(Array.isArray('hitesh'))
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"})); // empty 

let score1 = 100
let score2= 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

