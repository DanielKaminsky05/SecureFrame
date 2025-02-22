import { useState } from "react"
import Navbar from "../components/Navbar/Navbar.jsx"

export function Home() {
    const [count, setCount] = useState(0)

    return (
      <>
        <div className='bod'>
          <Navbar></Navbar>
          hello
        </div>      
      </>
    )
}