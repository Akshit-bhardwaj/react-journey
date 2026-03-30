const Localstorage = ()=>{

    // To clear local storage.

    // localStorage.clear()
    
    localStorage.setItem("userName" , "Akshit") // Set Item in local storage.

    // get item from local storage.

    const getUser = localStorage.getItem("userName")
    console.log(getUser);

    // remove item from local storage.

    // const removeUser = localStorage.removeItem("user")
    // console.log(removeUser);

    // Store array / object in local storage.

    const userData = {
        name : "Akshit",
        age : 21,
        city : "Ghaziabad",
        Role : "Software Engineer"
    }
    
    localStorage.setItem("user" , JSON.stringify(userData))
    


    // const getOriginalData = JSON.parse(localStorage.getItem("user"))
    // console.log(getOriginalData);
    
    
    
    
    return(
        <div className="p-20 text-white text-2xl font-bold bg-blue-900 w-screen h-screen">Understand Local Storage</div>
    )
    
}

export default Localstorage