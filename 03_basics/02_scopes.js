
//var c = 300;
let a = 3000
{}//scope
if(true){
let a = 10
const b = 10
//var c = 30 //var = 30 , c =30 same
}

//console.log(a);//undefined
//console.log(b);//undefined
//console.log(c);//works
//console.log(a);

///nested

function one(){
    const username = "deep"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website);
    two()
    
}
one()

// same with if else child fncn can take value from parent but not vice versa


// ********************** intresting ************//
console.log(addone(5)) // will work
function addone(num){
  return num +1
}


//console.log(addTwo(5)) // will not work
const addTwo = function(num){
    return num +2
}
console.log(addTwo(8));


