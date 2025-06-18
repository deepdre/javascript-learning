// immediately invoked function expression (IIFE)
// it is used to not let global scope variables not pollute a function
// function chai(){
//     console.log(`db connected`);
    
// }

// chai()

(function chai(){
    // named iife
    console.log(`db connected`);
    
})();

((name)=>{
    // unnamed iife
    console.log(`db connected ${name}`);
    
})('deep')



