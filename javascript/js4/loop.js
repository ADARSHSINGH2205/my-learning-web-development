let a=1;

for(let i=0;i<1000;i++){
    console.log(a+i);
}

const item={
    name:"adarsh",
    job:"developer",
    salary:"10000000"
}
for (const key in item) {
  
    
    const element = item[key];
    console.log(element,key)
    
    
}

for (const c of "adarsh") {
    console.log(c)

    
}
const c=4
 
while(c>4){
    console.log(c-1);
    c++;
}