import { set } from 'mongoose';
import React, { useState } from 'react';
import './Equity.css';

function Equity({setEquity,equity}){
    var json=equity;
    let key,val,f=1;
    return (
        <div className="equity">
            <label id="equity-select"> Equity: </label>
        <input label="equity-select" className="equity-select" type={Text} onChange={(e)=>{
            
            key=e.target.value;
            
            console.log("Equity select  ",key);
            console.log("XXXX json = ",json);
        }} />
        <select id="equity-select-action" className="equity-select-action" name="Equity" onChange={(e)=>{
            let action=(e.target.value).toString();
            if(action==="Buy")
            f=1;
            else
            f=-1;
        }}>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
        <input type={Number} className="equity-select-input" onChange={(e)=>{
            val=f*e.target.value;
            console.log("Value of Equity is ",val);
        }}/>
        <button onClick={()=>{
            console.log("val is ",val," f is ",f,"key is ",key);
            if(!(key in json) || (typeof(json[key])!=Number))
            json[key]=parseInt(val);
            else
            json[key]=parseInt(json[key])+parseInt(val);
            json[key]=Number(json[key]);
            console.log("in Json value of ",key," is ",json[val]);
            setEquity(json);
        }}>Commit</button>
        </div>
    )
}
export default Equity;