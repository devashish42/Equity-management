import { set } from 'mongoose';
import React, { useState } from 'react';
import './Equity.css';

function Equity({setEquity,equity}){
    var json={};
    let val,f=1;
    return (
        <div className="equity">
        <select id="equity-select" className="equity-select" name="Equity" onChange={(e)=>{
            json =equity;
            val=e.target.value;
            if(!(val in json))
            json[val]=0;
        }} >
          <option value="E1">E1</option>
          <option value="E2">E2</option>
          <option value="E3">E3</option>
          <option value="E4">E4</option>
        </select>
        <select id="equity-select-action" className="equity-select-action" name="Equity" onChange={(e)=>{
            let action=(e.target.value).toString();
            if(action==="buy")
            f=1;
            else
            f=-1;
        }}>
          <option value="-">Buy</option>
          <option value="+">Sell</option>
        </select>
        <input type={Number} className="equity-select-input" onChange={(e)=>{
            json[val]+=(f*e.target.value);
        }}/>
        
        <button onClick={()=>{
            setEquity(json);
        }}>Commit</button>
        </div>
    )
}
export default Equity;