let h1 = document.querySelector("h1")
let btn = document.querySelector("button")

btn.addEventListener("click" , function(){
    h1.innerText = "I'm clicked"
    console.log(h1.innerText);
    
    if (h1.innerText == "I'm clicked") {
        h1.innerText = "Hello2"
    }
})