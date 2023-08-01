//Exercises: Level 1 
//1. Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName','Dogukan')
localStorage.setItem('lastName','Koc')
localStorage.setItem('age',26)
localStorage.setItem('country','Türkiye')
localStorage.setItem('city','Ankara')
 

//Exercises: Level 2 
//1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
    firstName: 'Sila',
    lastName: 'Cetin',
    age: 17,
    skills :[{skill1: 'art'}, {skill2:'music'}],
    country: 'Türkiye'
}
let studentJSON = JSON.stringify(student)
localStorage.setItem('student', studentJSON)

