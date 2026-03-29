import axios from "axios";
import { useState } from "react";


const Apicall = ()=>{

    const[data , setData] = useState([])

    const getData = async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        // Ab mere pas console pe data agyaa ab mujhe isko UI pe update karna hai . 
        // console.log(response.data);
        setData(response.data)

    }




    return(
        <div>
            <button onClick={getData}>Get Data</button>
            <div>
                {data.map((elem , idx)=>{
                    return <h1 key={idx}>{elem["id"]} , {idx}</h1>
                })}
            </div>
        </div>
    )
}

export default Apicall