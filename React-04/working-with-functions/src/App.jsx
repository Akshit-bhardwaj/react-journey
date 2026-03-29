// Working with functions

// const App = ()=>{
//     function inputChanging(params) {
//         console.log("User is typing");
//     }
//     return(
//         <div>
//             <input type="text"
//             onChange={function(elem) {
//                 console.log(elem.target.value);
//             }} />
//         </div>
//     )
// }



const App = ()=>{
    function clickEvent(val) {
        console.log(val);
    }
    return(
        <div>
            <button type="button"
            onClick={function(elem){
                clickEvent(elem.target)
                
            }}
            >Click me</button>
        </div>
    )
}

export default App
