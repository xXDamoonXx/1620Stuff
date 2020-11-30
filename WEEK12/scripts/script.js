// let p = document.querySelector("p");
// console.log(p.innerHTML);
// console.log(p.innerText);
// console.log(p.textContent);

let button = document.querySelector("#click");
function greetUser(event) {

    alert("Hello There!");
    console.log(event)
    button.removeEventListener("click", greetUser);
}

button.addEventListener("click", greetUser)




function changeBackgroundColor() {

    document.body.style.backgroundColor = 'pink';
}

button.addEventListener("click", changeBackgroundColor)




function changeButtonText () {
    if (button.innerText === "Click Me!") {

        button.innerText = "Clicked!";
    }
    else {

        button.innerText = "Click Me!";
    }
}

button.addEventListener("click", changeButtonText)




function findImage() {

    let image = document.querySelector('#shoppingCart');
    image.src = "images/shoppingCart.png";
    image.alt = "Shopping Cart"
    image.width = 30
    image.height = 30

}

button.addEventListener("click", findImage)

function changeParacolor() {

    let p = document.querySelector('#myPara');
    p.style.color = e.target.innerText;
}




function changeBGGreen(eve) {
    if (eve.target.nodeName === "BUTTON" || eve.target.nodeName === "P")
    eve.target.style.backgroundColor = "green";
}




function addDivAndButton() {

    let div = document.createElement("div");
    let colors = ["purple", "Red", "blue", "pink"];
    for (let col of colors) {

        let btn = document.createElement("button");
        purple.innerText = col;
        div.appendChild(btn);
    }
    document.body.appendChild("div")
    div.addEventListener("mouseover", changeBGGreen);
    div.addEventListener("click", changeParaColor)
}



function addPara() {

    let paragraph = document.createElement("p");
    paragraph.innerText = "Some Text";
    document.body.appendChild(paragraph);
    paragraph.id = "myPara"
    paragraph.addEventListener("mouseover", changeBGGreen);
}

button.addEventListener("click", addPara)