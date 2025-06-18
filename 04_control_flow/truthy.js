const userEmail = [] //"deep@.ai" 

if (userEmail){
    console.log("giot usr email");
    
} else{
    console.log("don't have email");
}


// falsy values
//false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values
// "0" , 'false' , " " , [] , {} , function(){}

// if (userEmail.length === 0){
//     console.log("array is empty");
    
// }

const emoptyObj = {}

if (Object.keys(emoptyObj).length === 0){ // obvject.keys will return array 
    console.log("obvject is empty");
    
}



// nullish coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10 // print 5
//val1 = null ?? 10 // print 10 
//val1 = undefined ?? 15 // print 15
val1 = null ?? 10 ?? 20


console.log(val1);

// ternitary operator

//condition ? true : false

const icePrice = 100
icePrice <=80 ? console.log("less than 80 ") : console.log("more than 80");
;
