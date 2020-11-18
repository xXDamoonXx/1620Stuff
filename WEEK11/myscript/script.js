// function greet(name) {

//     console.log(`Hello ${name}!`);
// }

// let user = prompt(`What's your name?`);
// greet(user);



// let greet = (name) => {
    
//     console.log(`Hello ${name}!`);
// }

// let user = prompt(`What's your name?`);
// greet(user);



// function greet(name, time) {

//     console.log(`Hello ${name}! It is currently ${time} O'clock.`);
// }

// let user = prompt(`What's your name?`);
// let userTime = prompt(`Please enter the current time.`)
// greet(user, userTime);



// function greet(name, time="day") {

//     console.log(`Hello, good ${time} ${name}!`);
// }

// let user = prompt(`What's your name?`);
// let time = "afternoon"
// greet(user, time);



// function calcArea(r) {

//     let num = (Number(r));
//     if (isNaN(num)) {
        
//         return;
//     }
//     else {
//         let area = r * r * Math.PI;
//         return area;
//     }
// }

// let radius = prompt(`Please enter a radius:`);
// let result = calcArea(radius);

// function updateHTML(radius, result) {

// let para1 = document.querySelector("#radius");
// let para2 = document.querySelector("#result");
// let text = document.createTextNode(radius);

// para1.appendChild(text);
//     if (result === undefined) {

//         para2.innerHTML = "You were supposed to enter a number!"
//     }
//     else {

//         para2.innerHTML = result;
//     }

// }
// updateHTML(radius, result)



function updateList(arr) {

    let ulelem = document.querySelector('.shopping');
    for (let item of arr) {

        let listItem = document.createElement("li");
        let text = document.createTextNode(item);
        listItem.appendChild(text);
        ulelem.appendChild(listItem);
    }
}

let shoppingList = ["hummus", "bread", "green pepper"];
updateList(shoppingList);


function updateListStyle() {

    let listItems = document.querySelectorAll("li");
    for (let item of listItems) {

        if(!item.hasAttribute("class")) {

            item.classList.add("squareList");
        }
    }
}

updateListStyle();


function makeItemGreen() {

    let listItems = document.querySelectorAll("li");
    for (let item of listItems) {
        if(item.textContent.includes("green")) {

           item.style.color = "green" 
        }
    }
}

makeItemGreen();