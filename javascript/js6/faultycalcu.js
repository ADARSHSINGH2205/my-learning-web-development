let random=Math.random();

let a= Number(prompt("enter the first number"));
let b= prompt("enter the operation");
let c= Number(prompt("enter the second number"));

const obj={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*"
}
const calculate=(a,b,c)=>{
    if (b === "+") return a + c;
    if (b === "-") return a - c;
    if (b === "*") return a * c;
    if (b === "/") return a / c;
}

if(random<0.1){
     b=obj[b];
     console.log("this is the answer:"+calculate(a,b,c)+"");

}
else{
    console.log("this is the answer:"+calculate(a,b,c)+"");
    
}
