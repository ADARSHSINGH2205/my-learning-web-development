import './App.css';
import {useState} from "react";

function Header(){
  return <h1>This is the heading of the project</h1>;
}

function Button(){
  function handleClick(){
    alert("Button is clicked");
  }

  return <button onClick={handleClick}>Click me</button>;
}

function User({name, age}){
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}

function Card({title, des}){
  return(
    <div>
      <h1>{title}</h1>
      <p>{des}</p>
    </div>
  );
}

function Button3({name, onClick}){  
  return (
    <button onClick={onClick}>{name}</button>   
  );
}
function Card2({children}){
  return(
  <div style={{border: "2px solid blue" ,padding:"10px",margin:"20px",backgroundColor:"red"}}>{children}</div>
  )

}

function App(){

  function handleClick(msg){
    alert(msg);   
  }
  const [count,setCount]=useState(0);
  const [age,setAge]=useState(0);
  const [show,setShow]=useState(true);
  const [user,setUser]=useState({
    name:"",
    age:0
  })
  return (
    <div className='box'>
      <Header /> 
      <Button />
      <User name='Adarsh' age={21} />
      <Card title='adarsh' des='he is a student at a lloyd clg' />
      <Card title='react' des='it is easily reusable language' />

      <Button3 
        name='forgot password' 
        onClick={() => handleClick("forgot password")}
      />

      <Button3 
        name='login' 
        onClick={() => handleClick("you logged into your account")}
      />
      <Card2>
        <h1>adarsh singh</h1>
        <p> he is a a student at lloyd institue of engineering technology and he is brilliant student</p>
      </Card2>
      <Card2>
        <button onClick={()=>handleClick("done")}>okay</button>
      </Card2>
      <div>
        <h1>{count}</h1>
        <h2>{age}</h2>

        <button onClick={()=>setCount(count+1)}>increase</button>
        <button onClick={()=>setCount(count-1)}>descrease</button>
        <button onClick={()=>setCount(0)}>reset</button>
         <button onClick={()=>setAge(age+1)}>increase</button>
        <button onClick={()=>setAge(age-1)}>descrease</button>
        <button onClick={()=>setAge(0)}>reset</button>
        <button onClick={()=>setShow(!show)}>toggle</button>
        {show&&<h1>i am adarsh singh</h1>}
        <div>
          <input type='text'placeholder='name' onChange={(e)=>setUser({...user, name: e.target.value})}> 
          </input>
           <input type='number'placeholder='age' onChange={(e)=>setUser({...user, age: e.target.value})}> 
          </input>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <button onClick={()=>setUser({name:"",age:0})}>reset</button>
        
        </div>
      </div>
    </div>
  

  );
}

export default App;