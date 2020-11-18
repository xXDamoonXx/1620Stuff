var course1 = {

    code: 'ACIT 1620',
    name: 'Fundemental Web Technologies',
};

var course2 = {

    code: 'ACIT 1515',
    name: 'Scripting for IT',
};

var course3 = {

    code: 'ACIT 1420',
    name: 'Intro to Systems Administration'
};


let courseList = ['course1', 'course2', 'course3']
courseList;


do {
    number = prompt("Please Enter a course Number (type 'exit' to exit the prompt):")

    if (number === '1620') {

    alert(`Yes, I take the course: ${course1.code} - ${course1.name} `)
    }

    else if (number === '1515') {

    alert(`Yes, I take the course: ${course2.code} - ${course2.name} `)
    }

    else if (number === '1420') {

    alert(`Yes, I take the course: ${course3.code} - ${course3.name} `)
    }

    else if (number === 'exit') {

        break;
    }

    else {

        alert(`Please Enter a Valid Course number`)
    }
} 

while(number != course1.code || number != course2.code || number != course3.code )