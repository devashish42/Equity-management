import React, { useState } from 'react';
import './App.css';
import Equity from "./Equity";
function App() {
  const[flag,setflag]=useState(0);
  const[count,setCount]=useState([]);
  const[portfolio,setPorfolio]=useState(0);
  const[equity,setEquity]=useState([]);
 const handleAdd=()=>{
    setCount([...count ,1]);

  }
  const handleSubmit=(e)=>{
    console.log("Submit");
    console.log(equity);

  }
  return (
    <div className="app">

      <h1>Equity Management</h1>

      <div className="transactions">
        <label for="portfolio">Choose a Portfolio:</label>
        <select id="portfolio" className="portfolio" name="portfolio" onChange={(e)=>{setPorfolio(e.target.value); setCount([])}}>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
          <option value="P4">P4</option>
        </select>
        {count.map((obj)=>{
          console.log("h1")
          return (<Equity setEquity={setEquity} equity={equity}/>);
        }

        )}
        
        <button onClick={handleAdd} style={{width:"200px"}} >Add an Equity</button>
        <button onClick={handleSubmit} style={{width:"200px"}} >Submit</button>
      </div>
    
      

    </div>

  );
}

export default App;
