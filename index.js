//***************************** variable *******************************

let name = "shakil";
console.log(name); 


//***************************** constant ********************************


let number = 30;
number = 20;
console.log(number);

const num = 40;
console.log(num);


//***************************** Primtive Type ********************************


let name1 = 'Shakil'; //string
let age = 24; //numeric
let isright = true; //boolean
let firstname = undefined;
let color = null;

console.log(typeof name1);
console.log(typeof age);
console.log(typeof isright);


//***************************** object ********************************


let person = {
    firstname: 'Shahriar',
    lastname: 'Shakil',
    age: 30
};

console.log(person);
console.log(person.firstname);


//***************************** Dot notation ********************************

person.firstname = 'Md';
console.log(person.firstname);


//***************************** Square Bracket notation ********************************

person['lastname'] = 'Khan';
console.log(person.lastname);

let my_age = 'age';
person[my_age]= 20;
console.log(person.age);



//***************************** Array ********************************


let my_color = ['red','green'];
console.log(my_color);
console.log(my_color[0]);
my_color[3]= 10;
console.log(my_color.length);
my_color[2]= 'blue';
console.log(my_color);



//***************************** Function ********************************


function greet(){
    console.log("Hi There!");
}

greet();

function greet1(firstname,lastname){
    console.log("Hi " + firstname + ' ' + lastname);
}

greet1('Shahriar', 'Shakil');


//***************************** Calculate ********************************


function add(num){
    return num+num;
}

console.log(add(5)); 