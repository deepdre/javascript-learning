const myNums = [1,2,3]
const i = 0;
// const newNums = myNums.reduce(
//     (a , c )=> { 
//         console.log(`accumulator: ${a} and current value: ${c}`)
//         return a + c

// }, i)

const newNums = myNums.reduce((a,c)=> (a+c),i)

//console.log(newNums);

const shoppingCart = [
    {
        itemName: 'py course',
        price: 2999
    },
    {
        itemName: 'dev course',
        price: 5999
    },
    {
        itemName: 'data science',
        price: 12999
    }
]

const totalPrice = shoppingCart.reduce((acc , item)=> acc + item.price, 0);

console.log(totalPrice);
