//Exercises: Level 1

//1. Declare a function fullName and it print out your full name.

function fullName(){
    console.log('Dogukan Koc');
}

console.log(fullName());

//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullNameWithParams(firstName, lastName){
    let space = ' '
    return firstName + space + lastName;
}

console.log(fullName('Dogukan','Koc'));

//3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(number1, number2){
    let sum = number1 + number2;
    return sum;
}

console.log(addNumbers(99,282));

//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length,width){
    let area = length * width
    return area;
}

console.log(areaOfRectangle(10,15));