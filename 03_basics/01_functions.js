
function sayMyName(){
    console.log("d");
console.log("e");
console.log("e");
console.log("p");

}
sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3,5)
// console.log("result:", result ); //result will be undefined
function addTwoNumbers(number1, number2){
let result = number1 + number2;
return result;
}

result = addTwoNumbers(3,5)
//console.log("result:", result );

function loginUserMessage(username = "sam"){
    if(username === undefined){      // !username
//        console.log("please enter a username");
        
        return 
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("deep"));


function calculatePrice(...num1){
return num1
}

//console.log(calculatePrice(200,400,500,600));

const user = {
    userName: "deep",
    price: 199
}

function handleObjects(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
    
}

//console.log(handleObjects(user));
// console.log(handleObjects({
//     userName: "gandu",
//     price: 200
// }));

const myNewArray = [200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));