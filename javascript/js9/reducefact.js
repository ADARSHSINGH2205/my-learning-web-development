let a=6;

const fact=(number)=>{
    let arr= Array.from(Array(number+1).keys())
    let c=arr.slice(1,).reduce((a,b)=>a*b,1)
     return c
}
let d= fact(a)

console.log(d)