import { useEffect, useState } from 'react'
import './App.css'

function App() {
   const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div>
      <h1>Vercel Serverless Function Demo</h1>
      <p>{data ? data : "Loading..."}</p>
    </div>
    </div>
  )
}

export default App
