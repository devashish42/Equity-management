import { set } from 'mongoose';
import React, { useState } from 'react';
import './Equity.css';

function Equity({setEquity,equity}){
    var json={};
    let val=0,f=1;
    return (
        <div className="equity">
            <label id="equity-select"> Equity: </label>
        <input label="equity-select" className="equity-select" type={Text} onChange={(e)=>{
            json =equity;
            val=e.target.value;
            if(!(val in json))
            json[val]=0;
            else
            console.log(val," = ",json[val]);
        }} />
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
            json[val]=parseInt(json[val])+(f*e.target.value);
        }}/>
        
        <button onClick={()=>{
            setEquity(json);
        }}>Commit</button>
        </div>
    )
}
export default Equity;