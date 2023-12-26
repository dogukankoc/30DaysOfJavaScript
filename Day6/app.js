//1. Iterate 0 to 10 using for loop, do the same using while and do while loop

let number = 0;
while(number < 10)
{
    number++;
    console.log(number);

}

let number1 = 0;
do {
    number1++;
    console.log(number1);
}   
while(number1 < 10)

//2. Iterate 10 to 0 using for loop, do the same using while and do while loop 

let number2 = 10;
while(number2 > 0)
{
    number2--;
    console.log(number2)
}

let number3 = 10;
do {
    console.log(number3)
    number3--;
}
while(number3 >= 0)

//3. Iterate 0 to n using for loop

let n = 20;
for(let i=0; i <= n; i++)
{

console.log(i)
}

/* 
4. Write a loop that makes the following pattern using console.log():
       #
       ##
       ###
       ####
       #####
       ######
       #######
*/

let stringValue = "";
for(let i = 0; i<=6; i++)
{
    stringValue += "#"
    console.log(stringValue);
}


/*
5. Use loop to print the following pattern:
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
*/

for(let i = 0; i<=10 ; i++)
{
    console.log(`${i} x ${i} = ${i*i}`);
}

/*
6. Using loop print the following pattern
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
*/

console.log("i   i^2   i^3");
for (let i=0; i<=10; i++)
{
    console.log(`${i}    ${i*i}    ${i*i*i}`);
}

//7. Use for loop to iterate from 0 to 100 and print only even numbers

for(let i = 0; i<=100; i+=2)
{
    console.log(i);
}

//8. Use for loop to iterate from 0 to 100 and print only odd numbers

for(let i=1; i<=99; i+=2)
{
    console.log(i);
}

//9. Use for loop to iterate from 0 to 100 and print only prime numbers

let count = 0;
for(let i=2;i<=100;i++)
{
for(y=1; y<=i; y++)
{
  if(i % y == 0)
  count++;
}
if(count==2)
console.log(i)
count=0
}

//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum=0;
for (let i=0; i<=100; i++)
{
    sum += i;
}
console.log(`Summary = ${sum}`);

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let oddSum = 0;
let evenSum = 0;

for (i=0; i<=100; i++)
{
    if(i%2 == 0)
    {
        evenSum += i;
    }
    else
    {
        oddSum += i;
    }
}

console.log(`Sum of all evens from 0 to 100 = ${evenSum}`);
console.log(`Sum of all odds from 0 to 100 = ${oddSum}`);

//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

const sumArr = [evenSum,oddSum];

console.log(sumArr);

//13. Develop a small script which generate array of 5 random numbers

const randomArr = [];
for(let i = 1; i<=5; i++)
{
    randomArr.push(Math.floor(Math.random() * 100));
}
console.log(randomArr);

//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

let randomUniqueArr = [];
for (let i = 0; i < 5; i++) {
    let random = Math.floor(Math.random() * 100);
    if (randomUniqueArr.indexOf(random) === -1) {
        randomUniqueArr.push(random);
    }
}

console.log(randomUniqueArr);

//15. Develop a small script which generate a six characters random id

let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let r = Math.floor(Math.random() * chars.length);
let randChars = "";
for (let i = 0; i < r; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randChars += chars[random];
}
console.log(randChars);