let array=[1,2,3,4,5]
let newarray=[]

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    newarray.push(element**2)
    
}
let result = newarray
console.log(result)

let a=[1,2,3,4,5]

let result2 = a.map((e,index,a)=>{
      console.log(index)
      console.log(a)
    return e**2;
  
})
console.log(result2)

let arr2=[2,3,4,5,6]


console.log(arr2.filter((e)=>{(e>7)? true: false;}))