// Toggle Between light and dark themes
let button = document.querySelector(".dark_btn");
function changeBG() {

    var maindrk = document.getElementById("main");
    maindrk.classList.toggle("main_dark");

    var newdrk = document.getElementById("newbtn");
    newdrk.classList.toggle("new_btn_dark");

    var txtdrk = document.getElementById("textbox");
    txtdrk.classList.toggle("text_box_dark");

    var savedrk = document.getElementById("savebtn");
    savedrk.classList.toggle("save_btn_dark");

    var cancdrk = document.getElementById("cancelbtn");
    cancdrk.classList.toggle("cancel_btn_dark");

    var darkdrk = document.getElementById("darkbtn");
    darkdrk.classList.toggle("dark_btn_dark");

    var headerdrk = document.getElementById("header");
    headerdrk.classList.toggle("header_dark");

    var navdrk = document.getElementById("nav");
    navdrk.classList.toggle("nav_dark");

    var footerdrk = document.getElementById("footer");
    footerdrk.classList.toggle("footer_dark");

    var bodydrk = document.body;
    bodydrk.classList.toggle("body_dark");
}
button.addEventListener("click", changeBG)

// Change theme button from dark to light, and back
function changeBtnText() {

    if (button.innerText === "Dark Theme") {
        button.innerText = "Light Theme";
    }
    else { 
        button.innerText = "Dark Theme";
    }
}
button.addEventListener("click", changeBtnText)

//Cancel the note taking area
let cancelButton = document.querySelector(".cancel_btn");
function cancelPage() {

    let saveButton = document.getElementById("savebtn");
    let textBoxArea = document.getElementById("textbox");
    let cancelbtn = document.getElementById("cancelbtn");

    saveButton.style.visibility = 'hidden'
    textBoxArea.style.visibility = 'hidden'
    cancelbtn.style.visibility = 'hidden'
}
cancelButton.addEventListener("click", cancelPage)

//Bring back note taking area
let noteButton = document.querySelector(".new_note_btn");
function makeVisible() {

    let returnsaveButton = document.getElementById("savebtn");
    let returntextBoxArea = document.getElementById("textbox");
    let returncancelbtn = document.getElementById("cancelbtn");

    returnsaveButton.style.visibility = 'visible'
    returntextBoxArea.style.visibility = 'visible'
    returncancelbtn.style.visibility = 'visible'
}
noteButton.addEventListener("click", makeVisible)


//attempt at making the aide list
let notesArray = [{

    title: "note one",
    body: 'some text 1',
}, {

    title: "note two",
    body: 'some text 2',
}];

function makeArray () {
    let text_area = document.getElementById("textbox")

    let all_text = text_area.value().split('\n')
    let title_text = all_text[0]

    all_text.splice(0, 1);

    let body_text = all_text.join('\n')

    notesArray.push({title: title_text, body: body_text})
}

// let saveButton = document.querySelector("save_btn");
// let sideList = document.querySelector("#newList");

// function saveText(notes) {

//     let ul = document.querySelector(`${notes.title}`)
//     let li = document.createElement("li")
//     li.innerHTML = `${notesArray.title} ${notesArray.body}`;
//     URL.appendChild(li);
// }
// saveButton.addEventListener("click", )