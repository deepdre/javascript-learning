// for of 

const arr = [1,2,3,4,5]

for (const val of arr) {
   // console.log(val);
    
}

const greetings = "hello world"
for (const greet of greetings) {
   // console.log(`each char is ${greet}`);
    
}


// map

const map = new Map()
map.set('IN' , "india")
map.set('USA', "united states")
map.set('FR' , "france")

//console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }
for (const [key, value] of map) {
    //console.log(key ,':-' , value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-' , value);
    
// } // not works in object