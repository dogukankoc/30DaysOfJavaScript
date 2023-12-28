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

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){

    let perimeter = 2 * (length + width);
    return perimeter;
}

console.log(perimeterOfRectangle(10,15));

//6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, heigth){
    let volume = length * width * heigth;
    return volume;
}

console.log(volumeOfRectPrism(10,12,15));

//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    let area = Math.PI * r * r;
    return area;
}

console.log(areaOfCircle(2));

//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
    let circumference = 2 * Math.PI * r;
    return circumference;
}

console.log(circumOfCircle(7));

//9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume){
    let density = mass / volume;
    return density;
}

console.log(density(7,2));

//10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speedOfMovingObject(distance, totalAmountOfTime){
    let speed = distance / totalAmountOfTime //distance(m), time(s)
    return speed;
}

console.log(speedOfMovingObject(1200,10));

//11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity){
    let weight = mass * gravity;
    return weight;
}

console.log(weight(70, 9.807));

//12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelciusToFahrenheit(celcius){
    let fahrenheit = (celcius * 9/5) + 32
    return fahrenheit;
}
console.log(convertCelciusToFahrenheit(30));

/*
13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight_ or _obese_ based the information given below.

    - The same groups apply to both men and women.
    - _Underweight_: BMI is less than 18.5
    - _Normal weight_: BMI is 18.5 to 24.9
    - _Overweight_: BMI is 25 to 29.9
    - _Obese_: BMI is 30 or more
*/
function calculateOfBmi(weight, height){
    let bmi = weight / (height * height)
    if(bmi < 18.5 && bmi > 0)
    {
        return `Your BMI is = ${bmi}. You are underweight.`;
    }
    else if(bmi >= 18.5 && bmi <= 24.9)
    {
        return `Your BMI is = ${bmi}. You are normal weight.`;
    }
    else if(bmi >= 25 && bmi <= 29.9 )
    {
        return `Your BMI is = ${bmi}. You are overweight.`;
    }
    else if(bmi > 30)
    {
        return `Your BMI is = ${bmi}. You are obese.`;
    }
    else
    {
        return `Incorrect value`;
    }
}

console.log(calculateOfBmi(97, 1.90));

//14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
    switch(month) {
        case 'december':
        case 'january':
        case 'february':
            console.log('Winter');
        break;

        case 'march':
        case 'april':
        case 'may':
            console.log('Spring');
        break;
            
        case 'june':
        case 'july':
        case 'august':
            console.log('Summer');
        break;

        case 'september':
        case 'october':
        case 'november':
            console.log('Autumn');
        break;
        default:
            console.log("Incorrect Value")
    }
}

console.log(checkSeason('november'));

//15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(num1, num2, num3){
    
    return Math.max(num1,num2,num3)
}

console.log(findMax(1004.75,999.7,3))

//Exercises: Level 2
