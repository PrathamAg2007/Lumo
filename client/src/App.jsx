import { useState, useEffect } from "react";

export default function App(){
  const [status, setStatus] = useState('Loading')
  useEffect(()=>{
    fetch("http://localhost:3000/api/health")
      .then(res => res.json())
      .then(data => setStatus(data.msg))
      .catch(()=>setStatus("server unreachable"))
  }, [])
  return(
    <h1 className="text-3xl font-bold">{status}</h1>
  )
}