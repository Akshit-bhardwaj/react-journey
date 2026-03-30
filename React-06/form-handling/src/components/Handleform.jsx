const Handleform = ()=>{
    const formHandler = (elem)=>{
        elem.preventDefault()
        console.log("Form submitted")
    }
    return(
        <>
        <div>
      <form onSubmit={(elem)=>{
        formHandler(elem)
        
      }}>
        <input type="text" placeholder="Enter your name"/>
        <button>Submit</button>
      </form>

    </div>
        </>
    )
}


export default Handleform
