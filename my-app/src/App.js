import './App.css';
import { useState,useEffect, useEffectEvent } from "react";

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
    <div style={{
      border: "2px solid blue",
      padding: "10px",
      margin: "20px",
      backgroundColor: "red"
    }}>
      {children}
    </div>
  );
}

function App(){

  function handleClick(msg){
    alert(msg);   
  }

  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  const [show, setShow] = useState(true);
  const [user, setUser] = useState({
    name: "",
    age: 0
  });
  const [color, setColor] = useState(false);
  const [count2,setCount2]=useState(0);
  useEffect(()=>{
    console.log("hello world")
  },[])
  useEffect(()=>{
    document.title= `count :${count2}`
  },[count2]);



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
        <p>he is a student at lloyd institute of engineering technology</p>
      </Card2>

      <Card2>
        <button onClick={() => handleClick("done")}>okay</button>
      </Card2>

     
      <div>
        <h1>Count: {count}</h1>
        <h2>Age: {age}</h2>

        <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
        <button onClick={() => setCount(prev => prev > 0 ? prev - 1 : 0)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>

        <br /><br />

        <button onClick={() => setAge(prev => prev + 1)}>Increase Age</button>
        <button onClick={() => setAge(prev => prev > 0 ? prev - 1 : 0)}>Decrease Age</button>
        <button onClick={() => setAge(0)}>Reset Age</button>

        <br /><br />

        <button onClick={() => setShow(!show)}>Toggle</button>

        {show && <h1>I am Adarsh Singh</h1>}
      </div>

      <div>
        <input 
          type='text' 
          placeholder='name' 
          value={user.name}
          onChange={(e)=>setUser({...user, name: e.target.value})} 
        />

        <input 
          type='number' 
          placeholder='age' 
          value={user.age}
          onChange={(e)=>setUser({...user, age: Number(e.target.value)})} 
        />

        <h1>{user.name}</h1>
        <h1>{user.age}</h1>

        <button onClick={()=>setUser({name:"", age:0})}>Reset User</button>
      </div>

      
      <div style={{
        backgroundColor: color ? "yellow" : "white",
        color: color ? "white" : "black",
        height: "100vh",
        marginTop: "20px",
        textAlign:'center'
      }}>
        <button onClick={() => setColor(!color)}>Change Color</button>
        <p>yeah im finally here</p>
        <h1>{count2}</h1>
        <button onClick={()=>setCount2(count2+1)}>updatetitle</button>
      </div>

    </div>
  );
}

export default App;