import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const Products = [
    {name: "photoshop", price:"$90.99"},
    {name: "alelastor", price:"$80.99"},
    {name: "adobe", price:"$70.99"}
  ]
  return (
    <div >
        <header>
          <Product Product= {Products[0]}></Product>
          <Product Product= {Products[1]}></Product>
          <Product Product= {Products[2]}></Product>
          <Counter></Counter>
          <Users></Users>
        </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(9);
  const handleIncrease = () => {
    // const newCount = count + 1;
    setCount(count + 1);
  };
  const Decrease = () => {
    // const newCount = count - 1;
    setCount(count - 1);
  };
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={Decrease}>Decrease</button>
      <button onMouseMove={handleIncrease}>handleIncrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  
  return(
    <div>
      <h3>Dynamic users : {users.length}</h3>
        <ul>
            {
              users.map(user => <li>{user.name}</li>)
            }
        </ul>
    </div>
  )
}


function Product(props){
  const productStyle={
    border: "1px solid gray",
    borderRadius:"5px",
    backgroundColor: "lightgray",
    height:"200px",
    width:"200px",
    float:"left",
    textAlign: "center",
    padding: "50px"
  }
  return(
    <div style={productStyle}>
        <h3>{props.Product.name}</h3>
        <h1>{props.Product.price}</h1>
        <button>Buy Now</button>
    </div>
  )
}



export default App;
