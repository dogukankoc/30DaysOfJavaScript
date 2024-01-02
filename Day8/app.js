//Exercises: Level 1

//1. Create an empty object called dog
const dog = {}

//2. Print the the dog object on the console
console.log(dog);

//3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Bulut';
dog.legs = 4;
dog.color = 'White';
dog.age = 2;
dog.bark = function() {
    return 'woof woof'
}

//4. Get name, legs, color, age and bark value from the dog object
console.log(dog);

//5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'Kangal Shepherd Dog'
dog.getDogInfo = function() {
    console.log(Object.values(this));
}

