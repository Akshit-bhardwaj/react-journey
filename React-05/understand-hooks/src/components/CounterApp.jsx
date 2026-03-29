import { useState } from "react";

const CounterApp = ()=>{
  const[count , setCount] = useState(0)

  const increementCounter = ()=>{
    setCount(count+1)
  }
  
  const decreementCounter = ()=>{
    if (count > 0) {
      setCount(count - 1 )
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-pink-900">
      <div className=" bg-gray-900 m-30 p-30 rounded-2xl shadow-lg text-center h-100 w-100">
        <h1 className="text-white font-bold text-2xl mb-6">
          Count is : {count}{" "}
        </h1>
        <div className="flex gap-6 justify-center">
          <button
            onClick={increementCounter}
            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white font-bold text-xl"
          >
            +
          </button>
          <button
            onClick={decreementCounter}
            className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded text-white font-bold text-xl"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
