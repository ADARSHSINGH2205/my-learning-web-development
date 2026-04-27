let arr=[1,2,3,4,5,6]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
    
}
arr.forEach((Value,index,arr) => {
    console.log(Value,index,arr)
    
});

const obj={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(key,element);
    
}
let names="adarsh"

for (const element of names) {
    console.log(element)
}
let fruits = ["apple", "banana", "mango"];

for (let value of fruits) {
    console.log(value);
}