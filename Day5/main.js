//Exercises: Level 1
//1. Declare an empty array
const arr = [];
const array1 = Array();

//2. Declare an array with more than 5 number of elements
const array = [1,2,3,4,5];

//3. Find the length of your array
console.log(array.length);

//4. Get the first item, the middle item and the last item of the array
console.log(array[0],array[2],array[4]);

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should  be greater than 5
const mixedDataTypes = [1,'two',{three:3,four:4},5.65,true,false,{Name:['dogukan','koc']}];
console.log(mixedDataTypes.length); //7

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

//7. Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
console.log(itCompanies.length);

//9. Print the first company, middle and last company
console.log(itCompanies[0],itCompanies[3],itCompanies[6]);

//10. Print out each company
console.log(itCompanies.toString());

//11. Change each company name  to uppercase one by one and print them out
for (let i = 0; i<itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString()+' are big IT companies');

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.includes('Microsoft') ? console.log(itCompanies[2]) : console.log('Compnay is not found');

//14. Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i< itCompanies.length; i++) {
    if (itCompanies[i].indexOf('o') != itCompanies[i].lastIndexOf('o')) {
        console.log(itCompanies[i])
    }
}

//15. Sort the array using sort() method
console.log(itCompanies.sort());

//16.Reverse the array using reverse() method
console.log(itCompanies.reverse());

//17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

//18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,7));

//19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4));

//20. Remove the first IT company from the array
console.log(itCompanies.shift());

//21. Remove the middle IT company or companies from the arra
//Before from splice my array ['Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon']
console.log(itCompanies.splice(2,2));

//20. Remove the last IT company from the array
console.log(itCompanies.pop());

//21. Remove all IT companies
console.log(itCompanies.splice());


//Exercise: Level 2
//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
//2. First remove all the punctuations and change the string to array and count the number of words in the array
let  text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let wordOfText = text.split(' ');
let newWords;

for (let i = 0; i < wordOfText.length; i++) {
    if(wordOfText[i].includes('.') || wordOfText[i].includes(',')) {
        let letters = wordOfText[i].split('');
        letters.pop();
        wordOfText[i] = letters.join('');
    }
}
console.log(wordOfText);
console.log(wordOfText.length);

//3. In the following shopping cart add, remove, edit items
//['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');

//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');

//remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1);

//modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.includes('Ethiopia') ? console.log(`${countries[countries.indexOf('Ethiopia')].toUpperCase()}`) : countries.push('Ethiopia');

//5. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess.') : webTechs.unshift('Sass') && console.log(`${webTechs}`);

//6. Concatenate the following two variables and store it in a fullStack variable.
const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const  backEnd = ['Node','Express', 'MongoDB'];
const fullStack = backEnd.concat(frontEnd);


//Exercise: Level 3
//1.The following is an array of 10 students ages:
//Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
console.log(`Min age: ${Math.min(...ages)}`);
console.log(`Max age: ${Math.max(...ages)}`);   //... = Spread/Rest Operator

//Find the median age(one middle item or two middle items divided by two)
let medianAge = ages.length % 2 == 0 ? (ages[(ages.length/2)-1] + ages[(ages.length/2)]) / 2 : ages[Math.floor(ages.length/2)]
console.log(meadianAge);


//Find the average age(all items divided by number of items)
let sumOfAges = 0;
for (let i = 0; i< ages.length; i++) {
   sumOfAges += ages[i];
}
let averageAge = sumOfAges/ages.length
console.log(`Average: ${averageAge}`);

//Find the range of the ages(max minus min)
let range = Math.max(...ages) - Math.min(...ages);
console.log(range);

//Compare the value of (min - average) and (max - average), use abs() method
let abs1 = Math.abs(Math.max(...ages)-averageAge);
let abs2 = Math.abs(Math.min(...ages)-averageAge);
console.log(`abs1: ${abs1} abs2: ${abs2}`);

//1. Slice the first ten countries from the countries array
countries.slice(0,10);

//2. Find the middle country(ies) in the countries array
let middle = Math.round(countries.length/2);
console.log(countries[middle]);

//3. Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.
let firstArray;
let secondArray;
countries.length % 2 == 0 ?  firstArray = countries.slice(1,countries.length/2+1) : secondArray = countries.slice(1,countries.length/2+2);
