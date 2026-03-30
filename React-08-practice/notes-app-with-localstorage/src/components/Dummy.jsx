import { useState } from "react"

const Dummy = ()=>{
    const [input , setInput] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()

        setInput("")
    }

    return(
        <form className="m-10" onSubmit={(elem)=>{
            submitHandler(elem)
        }}>
            <input className="p-10 rounded border-2" type="text" placeholder="Enter your details" value={input}
            onChange={(elem)=>{
                // console.log(elem.target.value);
                setInput(elem.target.value)
            }}
             />
<br />
             <button className="my-10 cursor-pointer active:scale-95 bg-red-600 rounded p-4">Submit</button>
        </form>
    )
}


export default Dummy