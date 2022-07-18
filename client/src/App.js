import { useEffect, useState } from "react";
import React  from 'react';

function App() {
  const [count, setCount] = useState(0);
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
    <p>{count}</p>
    <button onClick={() => setCount(count+1)}>Press me to increase count</button>
    <button onClick={() => setCount(count-1)}>Press me to decrease count</button>
    </div>
  )
}

export default App
