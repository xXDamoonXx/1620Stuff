let result = 1;
for (let i = 2; i <= 1024; i*=2) {

   console.log(i)
}
    
let i = 1;
while(i<1024) {

    i*=2;
    console.log(i)
}

do {

    name = prompt('Please enter your name: ');
    
}
while (Number(name))
 alert(`Welcome ${name}`);

// (name != 0 || name != 1 || name != 2 || name != 3 || name != 4 || name != 5 || name != 6 || name != 7 || name != 8 || name != 9);


let sequence = [1, 2, 3, 5, 8, 13];
let odd_numbers = [];
for(num of sequence) {

    if(num%2 !== 0)
    {
        console.log(num);
    }
}

const person = {

    name: ['Bob', 'Smith'];
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing']

};
console.log(`my name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.interests[1]}`);

let person = {

    name: 'Celeste',
    age: 31,
    height: '170cm',

};
for(let x in person) {
    console.log(`person's ${x} is ${person.x}`);
}




let student1 = {
    ID: "A00022",
    GPA: 2.0,
    program: "CIT"
};
let student2 = {
    ID: "A01000",
    GPA: 3.5,
    program: "CST"
};
let student3 = {
    ID: "A00114",
    GPA: 3.1,
    program: "CIT"
};
  
let students = [student1, student2, student3];
let count = 0;

  for(stu of students){

    if(stu.program === "CIT && stu.GPA >3"){

        count ++;
    }
}

  
    for(gpa in student);
        if(gpa > 3)
        console.log(gpa)
  