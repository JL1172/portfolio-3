import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <button onClick={()=>setCount(count=>count += 1)}>Current Count {count}</button>
    </>
  )
}

export default App
