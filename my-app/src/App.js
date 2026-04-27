import './App.css';

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
    </div>
  );
}

export default App;