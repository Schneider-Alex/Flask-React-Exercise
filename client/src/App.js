import { useEffect, useState } from "react";
import React  from 'react';

function App() {
  const [string, setString] = useState("Hello World");
  const [data, setData] = useState([{}]);

  useEffect(()=>{
    fetch("/members").then(
      res  => res.json()
      ).then(
        data=>{
          setData(data)
          console.log(data)
        }
      )
  },[]);
  return (
    <div>
    {(typeof data.members === 'undefined') ? (
      <p>Loading...</p>
    ):(data.members.map((member,i)=>(
      <p key={i}>{member}</p>
    ))
    )}
    <p>{string}</p>
    <button onClick={()=> setString('Goodbye World') }>Press me for goodbye</button>
    </div>
    
  )
}

export default App
