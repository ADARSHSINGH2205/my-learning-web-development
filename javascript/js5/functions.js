function code(name){
    console.log(""+name+" is a good boy")
    console.log(""+name+" is a and decent boy")
    console.log(""+name+" is a good footballer")
    console.log(""+name+" is a good cricketer")
    console.log(""+name+" is a good readername",)

}

code("rohan")

function sum(a,b,c=1){
    console.log(a+b);
    return a+b-c;
}
sum(3,4)
sum(3,4,0)
sum(3,4,1)
sum(3,4,5)

result= sum(3,4,5)
console.log("the sum is :",result)

const funct1=(x)=>{
    return x*1000
}
console.log("the function value is:"+funct1(3)+"")