//Exercises: Level 1 💻 
//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different  data types.
let firstName = 'Dogukan';
let lastName = 'Koc';
let country = 'Türkiye';
let city = 'Ankara';
let age = 26;
let isMarried = false;
const year = new Date();

console.log('firstName = '+typeof(firstName)+'\nlastName = '+typeof(lastName)+'\ncountry = '+typeof(country)+'\ncity = '+typeof(city)+'\nage = '+typeof(age)+'\nisMarried = '+typeof(isMarried)+'\nyear = '+typeof(year));

//2. Check if type of '10' is equal to 10
let isEqual = '10' == 10;
console.log(isEqual); //true

//3. Check if parseInt('9.8') is equal to 10
let isEqual1 = parseInt('9.8') == 10;
console.log(isEqual1); //false

//4. Boolean value is either true or false.
//1. Write three JavaScript statement which provide truthy value
let trueComparison1 = 3 == '3'; //true
let trueComparison2 = 3 !== '3'; //true 
let trueComparison3 = 0 == false; //true

//2. Write three JavaScript statement which provide falsy value.
let falseComparison1 = NaN == NaN; //false
let falseComparison2 = 0 === ''; //false
let falseComparison3 = 777 === '777'; //false

//5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4>3); //true
console.log(4>=3); //true
console.log(4<3); //false
console.log(4<=3); //false
console.log(4==4); //true
console.log(4===4); //true
console.log(4!=4); //false
console.log(4!==4); //false
console.log(4!='4'); //false
console.log(4=='4'); //true
console.log(4==='4'); //false

//6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true
console.log(!('dragon'.includes('on')&&'python'.includes('on'))); //false

//7. Use the Date object to do the following activities
//1. What is the year today?
const now = new Date();
console.log(now.getFullYear()); //2023

//2. What is the month today as a number?
console.log(now.getMonth()+1); //7

//3. What is the date today? 
console.log(now); //Sun Jul 23 2023 10:04:23 GMT+0300 (GMT+03:00)

//4. What is the day today as a number?
console.log(now.getDay()); //0

//5. What is the hours now?
console.log(now.getHours()); //10

//6. What is the minutes now?
console.log(now.getMinutes()); //4

//7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime()/1000); //1690095863.596


//Exercises: Level 2
//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('Enter base');
let height = prompt('Enter height');
console.log(`The area of the triangle is: ${0.5*base*height}`);

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = prompt('Enter side a');
let sideB = prompt('Enter side b');
let sideC = prompt('Enter side c');
let perimeterOfTriangle = parseInt(sideA)+parseInt(sideB)+parseInt(sideC); //if don't use parseInt compiler will return 'sideA'+'sideB'+'sideC'
console.log(`The perimeter of the triangle is: ${perimeterOfTriangle}`);

//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let longSide = prompt('Enter long side of rectangle');
let shortSide = prompt('Enter short side of rectangle');

let areaOfRectangle = parseInt(longSide)*parseInt(shortSide);
let perimeterOfRectangle = (parseInt(longSide)+parseInt(shortSide))*2;
console.log(`The area of the rectangle is: ${areaOfRectangle}`);
console.log(`The perimeter of the rectangle is: ${perimeterOfRectangle}`);

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt('Enter radius of circle');
let areaOfCircle = Math.PI*parseFloat(radius)*parseFloat(radius);
let circumferenceOfCircle = 2*Math.PI*parseFloat(radius);
console.log(`The area of circle is: ${areaOfCircle}`);
console.log(`The circumference of circle is: ${circumferenceOfCircle}`);

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
//6. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
//7. Compare the slope of above two questions.
//8. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.


//9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let weeklyWorkingHour = prompt('Enter weekly working hour');
let ratePerHour = prompt('Enter rate per hour');
let weeklyEarn = parseFloat(weeklyWorkingHour)*parseFloat(ratePerHour);

console.log(`Your weekly earning is: ${weeklyEarn}`);

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt('Please enter your first name');
name.length <= 7 ? console.log('Your name is short') : console.log('Your name is greater than 7');

//11. Compare your first name length and your family name length and you should get this output.
let fName = 'Dogukan';
let lName = 'Koc';

fName.length>lName.length ? console.log(`Your first name, ${fName} is longer than your family name, ${lName}`) : console.log(`Your first name, ${fName} is smaller than your family name, ${lName}`);

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 80;
let yourAge = 65;
console.log(`I am ${myAge-yourAge} years older than you.`);

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = prompt('Enter birth year');
const date = new Date();
let userAge = date.getFullYear() - parseInt(birthYear);
userAge >= 18 ? console.log(`You are ${userAge}. You are old enough to drive`) : console.log(`You are ${userAge}. You will be allowed to drive after ${18-userAge} years.`);

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let uAge = prompt(`Enter number of years you live`);
let ageOfSeconds = 100*365*24*60*60;
console.log(`You lived ${ageOfSeconds} seconds`);

//15. Create a human readable time format using the Date time object
let yearOfDate = date.getFullYear();
let monthOfDate = date.getMonth()+1;
let dayOfDate = date.getDate();
let hourOfdate = date.getHours();
let minuteOfDate = date.getMinutes();

//1. YYYY-MM-DD HH:mm
console.log(`${yearOfDate}-${monthOfDate}-${dayOfDate} ${hourOfdate}:${minuteOfDate}`); //2023-7-23 13:31

//2. DD-MM-YYYY HH:mm
console.log(`${dayOfDate}-${monthOfDate}-${yearOfDate} ${hourOfdate}:${minuteOfDate}`); //23-7-2023 13:31

//3. DD/MM/YYYY HH:mm
console.log(`${yearOfDate}/${monthOfDate}/${dayOfDate} ${hourOfdate}:${minuteOfDate}`); //2023/7/23 13:31
 

//Exercises: Level 3
//1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
console.log(minuteOfDate);
if (minuteOfDate.length<2 && hourOfdate.length<2) {
    console.log(`${yearOfDate}-${monthOfDate}-${dayOfDate} 0${hourOfdate}:0${minuteOfDate}`);
} 

else if(minuteOfDate.length<2) {
    console.log(`${yearOfDate}-${monthOfDate}-${dayOfDate} ${hourOfdate}:0${minuteOfDate}`);
}

else if(hourOfdate.length<2) {
    console.log(`${yearOfDate}-${monthOfDate}-${dayOfDate} 0${hourOfdate}:${minuteOfDate}`);
}

else {
    console.log(`${yearOfDate}-${monthOfDate}-${dayOfDate} ${hourOfdate}:${minuteOfDate}`);
}

