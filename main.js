//Javascript
//function definition for onLoad
function onload() {
    //referrence to nav button
    const btn = document.querySelector(".nav-button")
    const nav = document.querySelector(".main-navigation")
    //add a listener to btn for click
    btn.addEventListener("click",function() {
        if(nav.classList.contains("open")){
            nav.classList.remove("open")
        }
        else{
            nav.classList.add("open")
        }

    })
}
//waiting for "load" event to open execute onLoad
window.addEventListener("load",onload)