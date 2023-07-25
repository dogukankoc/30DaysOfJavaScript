//Exercises: Level 1 
//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.
let userAge = Number(prompt('Enter your age'));
if (userAge >= 18) {
    console.log('You are old enough to drive');
}
else {
    console.log(`You are left with ${18-userAge} years to drive.`);
}

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 26;
let yourAge = Number(prompt(`My age is ${myAge}. Enter your age`));

if (yourAge > myAge) {
    console.log(`Your age ${yourAge-myAge} years older than me`);
}
else if (yourAge==myAge) {
    console.log('We\'re the same age')
}
else if (myAge > yourAge) {
    console.log(`My age ${myAge-yourAge} years older than you`);
}
else {
    console.log('You entered an incorrect value');
}

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//using if else
let a = 4;
let b = 3;

if (a>b) {
    console.log(`${a} is greater than ${b}`);
}
else if (a<b) {
    console.log(`${a} is less than ${b}`);
}
else {
    console.log(`${a} is equal to ${b}`);
}

//using ternary operator
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = Number(prompt('Enter a number'));
number % 2 == 0 ? console.log(`${number} is an even number`) : console.log(`${number} is is an odd number.`);


//Exercises: Level 2
//1. Write a code which  can give grades to students according to theirs scores
let score = Number(prompt('Enter your score'));
switch (true) {
    case score >= 80:
        console.log('Your note is A');
        break;
    case score >= 70:
        console.log('Your note is B');
        break;
    case score >= 60:
        console.log('Your note is C');
        break;
    case score >= 50:
        console.log('Your note is D');
        break;
    case score >= 0:
        console.log('Your note is F');
        break;
    default:
        console.log('You entered an incorrect value');
}

//2. Check if the season is Autumn, Winter, Spring or Summer.
let season = prompt('Please enter a month').toLowerCase().trim();
switch(season){
    case 'september' || 'october' || 'november':
        console.log('Season is Autumn');
        break;

    case 'december' || 'january' || 'february':
        console.log('Season is Winter');
        break;

    case 'march' || 'april' || 'may':
        console.log('Season is Spring');
        break;

    case 'june' || 'july' || 'august':
        console.log('Season is Summer');
        break;    
    
    default:
        console.log('You entered an incorrect value');
}

//3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('Please enter a day').toLowerCase().trim();
switch(day){
    case 'monday' || 'tuesday' || 'wednesday' || 'thursday' || 'friday':
        console.log(`${day} is a working day.`);
        break;

    case 'saturday' || 'sunday':
        console.log(`${day} is a weekend.`);
        break;

    default:
        console.log('You entered an incorrect value');
}


//Exercises: Level 3 
//1. Write a program which tells the number of days in a month.
let month = prompt('Please enter a month').toLowerCase().trim();
switch(month){
    case 'april' || 'june' || 'september' || 'november':
        console.log(`${month} has 30 days`);
        break;

      case 'january' || 'march' || 'may' || 'july' || 'august' || 'october' || 'december':
        console.log(`${month} has 31 days`);
        break;  

    case 'february':
        let year = Number(prompt('Please enter year'));
        year %4 == 0 ? console.log(`${month} has 29 days in ${year}`) : console.log(`${month} has 28 days in ${year}`);
        break;
    default:
        console.log('You entered an incorrect value');
}

//2. Write a program which tells the number of days in a month, now consider leap year.
let year = Number(prompt('Please enter a year'));
year % 4 == 0 ? console.log(`The year ${year} has 366 days`) : console.log(`The year ${year} has 365 days`);