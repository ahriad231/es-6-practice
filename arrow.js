// function doubleIt(num) {
//     return num *2;
// }
// const doubleIt = Function myFun(num){
//     return num *2;
// }
const doubleIt = num =>num *2;
// const result = doubleIt(88);

const add = (x,y) => x+y;
const result = add(50,60);
const doMath = (x,y) =>{
    const sum = x+y;
    const diff = x-y;
    const result = sum *diff;
    return result ;
}
const result3 = doMath(7,5);
console.log(result3);