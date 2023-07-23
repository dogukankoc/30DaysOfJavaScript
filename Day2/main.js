//Exercises: Level 1

//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

//2. Print the string on the browser console using console.log()
console.log(challenge);

//3. Print the length of the string on the browser console using console.log()
console.log(challenge.length); //21

//4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase()); //30 DAYS OF JAVASCRIPT

//5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase()); //30 days of javascript

//6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(2,19)); //Days Of JavaScript
console.log(challenge.substring(2,21)); //Days Of JavaScript

//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(0,2)); //30
console.log(challenge.substr(0,2)); //30

//8. Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script')); //true

//9. Split the string into an array using split() method
console.log(challenge.split()); // ['30 Days Of JavaScript']

//10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' ')); // ['30', 'Days', 'Of', 'JavaScript']

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(',')); // ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

//12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript','Pyhton')); //30 Days Of Pyhton

//13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let string = '30 Days Of JavaScript';
console.log(string.charAt(15)); //S

//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(string.charCodeAt(11)); //74

//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(string.indexOf('a')); //4

//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(string.lastIndexOf('a'));//14

//17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let exampleSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(exampleSentence.indexOf('because')); //31

//18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(exampleSentence.lastIndexOf('because')); //47

//19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(exampleSentence.search(/BecausE/gi)); //31
console.log(exampleSentence.search('because')); //31

//20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '
let isToBeTrim = '  30 Days Of JavaScript  ';
console.log(isToBeTrim.trim()); //30 Days Of JavaScript

//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(string.startsWith('30')); //true

//22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(string.endsWith('vaScript')); //true

//23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(string.match(/a/gi)); // ['a', 'a', 'a'] 0: "a" 1: "a" 2: "a" length: 3

//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let fullString = '30 ';
let firstString = 'Days of ';
let secondString = 'JavaScript';
fullString.concat(firstString, secondString);

//25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(string.repeat(2)); //30 Days Of JavaScript30 Days Of JavaScript


//Exercises: Level 2

//1. Using console.log() print out the following statement:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');

//2. Using console.log() print out the following quote by Mother Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');

//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let numberTen = 10;
let stringTen = '10';

console.log(numberTen == stringTen); //true

//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat(9.8)==10); //false

//5. Check if 'on' is found in both python and jargon
let python = 'python';
let jargon = 'jargon';
console.log(python.includes('on')); //true
console.log(jargon.includes('on')); //true

//6. I hope this course is not full of jargon. Check if _jargon_ is in the sentence.
let jargonSentence =  'I hope this course is not full of jargon.';
console.log(jargonSentence.includes('jargon')); //true

//7. Generate a random number between 0 and 100 inclusively.
let randomNumber = Math.random();
let numberBetweenZeroAndAHundred = randomNumber *101;
console.log(numberBetweenZeroAndAHundred);

//8. Generate a random number between 50 and 100 inclusively.
let numberBetweenFiftyAndAHundred = (randomNumber * 50.5) + 50;
console.log(numberBetweenFiftyAndAHundred);

//9. Generate a random number between 0 and 255 inclusively.
let numberBetweenZeroAndTwoHundredsFiftyFive = randomNumber * 255;
console.log(numberBetweenZeroAndTwoHundredsFiftyFive);

//10. Access the 'JavaScript' string characters using a random number.
let stringJS = 'JavaScript';
console.log(stringJS[0]);

//11. Use console.log() and escape characters to print the following pattern.
//1 1 1 1 1
//2 1 2 4 8
//3 1 3 9 27
//4 1 4 16 64
//5 1 5 25 125
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

//12.  Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(exampleSentence.substr(30,25));


//Exercises: Level 3
//1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let stringLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let pattern = /love/gi
console.log(stringLove.match(pattern)); //(3) ['Love', 'love', 'love']
//console.log(stringLove.match(/love/gi));

//2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(exampleSentence.match(/because/gi));

//3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching';
console.log(sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));

//4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let  salaries = txt.match(/\d+/g);
let annualEarn = 0;
salaries.forEach(element => {
    annualEarn += Number(element);
})
console.log(annualEarn);
