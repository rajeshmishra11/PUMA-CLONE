let toggle = document.getElementById("toggle")
console.log(toggle);

toggle.onclick = function()
{
    let New1 = document.getElementsByTagName("ol")
    console.log("New1[0]");

    let display = New1[0].classList.toggle("true")
    if(display){
        New1[0].style.transform = "translatey(-600px)";
        New1[0].style.transition = "ease all"
        // New1[0].style.visibility="hidden"
    }else{
        New1[0].style.transform = "translatey(0px)"; 
    }

}

let toggle2 = document.getElementById("toggle2")
console.log(toggle2);

toggle2.onmouseover = function(){
    let New2 = document.getElementById("New2")
    console.log(New2);
    New2.style.visibility="visible"
    // New2.style.display="flex"
    New2.style.height="460px"
    New2.style.transition="ease all"
    New2.style.background="white"
    New2.style.zIndex="11111111111111"
}

// let img1 = document.getElementsByClassName("section1")
// console.log(img1);
// img1.onmouseover = function(){
//     let New2 = document.getElementById("New2")
//     console.log(New2);
//     New2.style.visibility="hidden"
//     New2.style.height="0%"
//     New2.style.display="none"
// }

toggle2.onmouseleave = function(){
    let New2 = document.getElementById("New2")
    console.log(New2);
    New2.style.visibility="hidden"
    // New2.style.display="flex"
    New2.style.height="0px"
    New2.style.transition="ease all"
    // New2.style.background="white"
    // New2.style.zIndex="11111111111111"
}
