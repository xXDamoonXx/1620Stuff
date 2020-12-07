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

function changeBtnText() {

    if (button.innerText === "Dark Theme") {
        button.innerText = "Light Theme";
    }
    else { 
        button.innerText = "Dark Theme";
    }
}
button.addEventListener("click", changeBtnText)

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

let saveButton = document.querySelector("save_btn");


 // let savebutton = document.querySelector(".save_btn");
// function saveText () {

//     var addtext = document.getElementById("textbox").value;
//     notesArray.push('savetext');
// }
// savebutton.addEventListener("click, savetext")