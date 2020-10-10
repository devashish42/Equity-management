import React, { useEffect, useState } from 'react';
import './App.css';
import Equity from "./Equity";
import axios from "axios";
function App() {
  const [flag, setflag] = useState(0);
  const [count, setCount] = useState([]);
  const [portfolio, setPorfolio] = useState(0);
  const [equity, setEquity] = useState({});
  const [toggle, setToggle] = useState(0);
  const [orders, setOrders] = useState();

  const handleAdd = () => {
    setCount([...count, 1]);
  }
  const handleSubmit = (e) => {
    console.log("Submit");
    console.log(equity);

    const res = axios.post('http://localhost:5000/orders', { portfolio: portfolio, details: equity }).then((res) => {
      console.log("Response is ", res);
    }).catch((err) => {
      console.log("error ", err);
    });
  }
  const getOrderDetails = (Obj) => {
    console.log(" getorderdetails ");
    
    var json={};
    for(let key in Obj)
    {
      json[key]=Obj[key];
    }
    console.log("X json is ",json);
  }
  const handleseeResult = (e) => {
    console.log("See Results");
    setToggle(1);
    axios.get('http://localhost:5000/orders').then((res) => {

      var objects = res.data.resp;
      setOrders(objects.map((object) => {
        return <div>
          
          <p><label>Portfolio :{object.portfolio}</label>
      {",  Order ID :"}{object.order_id }</p>
          
          
        </div>

      }))
      console.log("Res is ", res);
    })

  }
  const handleReset=()=>{
    axios.get('http://localhost:5000/reset').then((res)=>{
      console.log("ALL previous orders reseted");
      window.alert("Succes");
    }).catch((err)=>{
      console.log("Error :",err);
      window.alert("Error");
    })
  }
  const handlehideResult = (e) => {
    console.log("See Results ");
    setToggle(0);
  }
  return (
    <div className="app">
      <h1>Equity Management</h1>
      <button onClick={handleReset} style={{ width: "300px" }} >Reset all Previous Orders</button>
      <div className="transactions">
        <label for="portfolio">Choose a Portfolio:</label>
        <input type={Text} className="portfolio" name="portfolio" onChange={(e) => { setPorfolio(e.target.value); setCount([]) }} />
        {count.map((obj) => {
          console.log("h1")
          return (<Equity setEquity={setEquity} equity={equity} />);
        }
        )}
        <button onClick={handleAdd} style={{ width: "200px" }} >Add an Equity</button>
        <button onClick={handleSubmit} style={{ width: "200px" }} >Submit</button>

        <button onClick={handleseeResult} style={{ width: "100px" }} >See Results</button>
        <button onClick={handlehideResult} style={{ width: "100px" }} >hide Results</button>
        <br/>
        
      </div>

      {
        toggle ? <div className="orders">
          {orders}
        </div> : <p></p>
      }


    </div>

  );
}

export default App;
