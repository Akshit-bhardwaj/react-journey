import { useState } from "react"

const DataBinding = ()=>{
    const[name , setName] = useState("")
  return(
    <>
    <form>
      <input value = {name} type="text" placeholder="Enter your name" onChange={function(elem){
        setName(elem.target.value)
        console.log("Form submitted by" , name);
        
      }} />
      <button>Submit</button>
      <h1>{name}</h1>
    </form>
    </>
  )
}

export default DataBinding