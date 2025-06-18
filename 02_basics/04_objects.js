//singelton

//const tinderUser = new Object() //singelton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail",
    fullName:{
        userFullame: {
        firstName: "deep",
        lasstName: "sagar"
    }
}

}
//console.log(regularUser.fullName);

const obj1 = {1:"a" , 2: "b"};
const obj2 = {3: "a" , 4: "b"};

//const obj3 = Object.assign ( { }, obj1 , obj2 )
const obj3 = {...obj1 , ...obj2}
console.log(obj3);

const users =[
    {
        id: 1,
        email: "d@gmail"
    },
    {
        id: 2,
        email: 'e@gmail'
    }
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coourseName: "js",
    price: "999",
    courseInstriuctor: "hirtesh"

    
}

//course.courseInstriuctor

// const {courseInstriuctor} = course

// console.log(courseInstriuctor)

const {courseInstriuctor: instructor} = course

console.log(instructor)

// API
//json

// {
//     "name": "deep",
//     "coursename": "js",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]