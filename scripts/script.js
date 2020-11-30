// var  ACIT1620 = {

//     code: 'ACIT 1620',
//     name: 'Fundemental Web Technologies',
// };

// var ACIT1515 = {

//     code: 'ACIT 1515',
//     name: 'Scripting for IT',
// };

// var ACIT1420 = {

//     code: 'ACIT 1420',
//     name: 'Intro to Systems Administration'
// };


// let courseList = ['ACIT1620', 'ACIT1515', 'ACIT1420']
// courseList;




// function callCourse1() {
//     alert(`Yes, I take the course: ${ACIT1620.code} - ${ACIT1620.name} `)
// }

// function callCourse2() {
//     alert(`Yes, I take the course: ${ACIT1515.code} - ${ACIT1515.name} `)
// }

// function callCourse3() {
//     alert(`Yes, I take the course: ${ACIT1420.code} - ${ACIT1420.name} `)
// }


// do {
//     let number = prompt("Please Enter a course Number (type 'exit' to exit the prompt):")
    
//     for (let course in courseList) { 
//         if (course.code.includes(number)) {
//             alert(`Yes, I take the course: ${course.code} - ${course.name} `)
//         }
//     }

// if (number === 1620) {
//     alert(`Yes, I take the course: ${course1.code} - ${course1.name} `)
//     }

//     else if (number === '1515') {

//     alert(`Yes, I take the course: ${course2.code} - ${course2.name} `)
//     }

//     else if (number === '1420') {

//     alert(`Yes, I take the course: ${course3.code} - ${course3.name} `)
//     }

//     else if (number === 'exit') {

//         break;
//     }

//     else {

//         alert(`Please Enter a Valid Course number`)
//     }
// } 


let courseList = [{

    code: 'ACIT 1620',
    name: 'Fundemental Web Technologies',
}, {

    code: 'ACIT 1515',
    name: 'Scripting for IT',
}, {

    code: 'ACIT 1420',
    name: 'Intro to Systems Administration'
}];


var number = prompt("Please Enter a course Number (type 'exit' to exit the prompt):")

while (number.length !== 4) {

    var number = prompt("Please enter a 4 digit number");
}


var newList = []

for (var i = 0; i < courseList.length; i++) {

    var courseNumList = courseList[i].code.substring(5, 9)
    console.log(courseNumList)
    newList.push(courseNumList)
}


for (var i = 0; i < newList.length; i++){

    // console.log(newList[i])

    if (number == newList[0]) {
        // console.log('hello')
        console.log(number)
        console.log(`Yes, i take the course: ${courseNumList[i]} - ${courseList[i].name}`)
    }
}

