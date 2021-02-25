const inputs = document.querySelectorAll(".input");
const submit = document.querySelector("#submit");
const info = document.querySelector("#info");


function focusFunc()
{
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() 
{
    let parent= this.parentNode;
    if(this.value == "")
    {
        parent.classList.remove("focus");
    } 
}

inputs.forEach((input) =>
{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

// --------- stak ---------
submit.addEventListener("click",function () {

    if (inputs[0].value == "")
    {
        console.log("hello");
    }
    else
    {
        console.log(inputs[0].value);
    }
    info.classList.add("info");
    // var name4 = document.createElement("p");
    // var email = document.createElement("p");
    // var img = document.createElement("img");
    // img.src = "matplotlib-grid-02.png";

    // name4.innerHTML = "Name et Prénom : " + inputs[0].value;
    // email.innerHTML = "Email : " + inputs[0].value;
        
    // info.appendChild(name4);

    info.style.display = "block"
    document.querySelector("#dispname").textContent = "Name et Prénom : "+ inputs[0].value
    document.querySelector("#dispEmail").textContent = "Email : " + inputs[1].value
    document.querySelector("#dispsujet").textContent = "Sujet : " + inputs[2].value
    document.querySelector("#dispmessage").textContent = "Message : " + inputs[3].value

})
