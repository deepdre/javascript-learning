const coding = ["js", "ruby" , "java" , "phython" , "cpp"]


// coding.forEach( function (val){
// console.log(val);

// })

// coding.forEach((val)=> {
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item , index , arr) => {
//   console.log(item, index, arr);
  
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]


myCoding.forEach((item)=>{
  console.log(item.languageName);
  
})