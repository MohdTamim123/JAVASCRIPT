console.log("JS file connected to HTML file!!!")
//Assigning values to marks and names variables.
// for multiple line comments we us /* */
/*Assigning
values to 
marks and names 
variales.
let name = "tamim"
let marks = 100
console.log(name)
console.log(marks)

console.log("problem to calculate actual price.")
let listprice=100
let discountpercentage=25
actualprice=listprice-listprice*discountpercentage/100
console.log(actualprice)

console.log("problem to calculate area of circle.")
let r=50
let pi=Math.PI
let area=pi*(r**2)
area=Math.round(area)
console.log(area)
console.log(`Area of the circle with radius ${r} is ${area}sq metre.`)

let age = 15

if (age > 18){
    console.log("U are eligible for driver license")
}
else{
    console.log("chl nikl")
}


let username = "Admin"
if (username === "Admin"){
    console.log("Admin access allowed")
}
else{
    console.log("Access Denied")
}


let loggedin=true
if(loggedin){
    console.log("Welcome to our website")
}
else{
    console.log("Log in to continue")
}


//age > 18:Can apply for driver's license.
//age > 16:Can apply for learner's license.
//else :Not eligible for license.

let age = 19
if (age >= 18){
    console.log("Apply for driver license")
}
else if(age>=16){
    console.log("Apply for learner license")
}
else{
    console.log("Not eligible for license")
}
*/


console.log("A PROGRAM TO CHECK CHECK AGE AND PERCETAGE")
//AGE > 18
//PERCENTAGE > 70
/*
let age = 19
let percentage = 50
if(age > 18 , percentage > 70){
    console.log("YOU ARE ELIGIBLE FOR EXAMS")
}
else{
    console.log("NOT ELIGIBLE FOR EXAMS")
}
*/
/*
let age = 19
let percentage = 50
if(age > 18 ){
    if(percentage>70){
        console.log("YOU ARE ELIGIBLE FOR EXAMS")
    }
    else{
        console.log("YOUR ARE ABOVE 18 BUT IS YOUR PERCENTAGE IS BELOW 70")
    }
}
else{
    console.log("YOUR AGE IS BELOW 18.")
}
*/

let day = 1

switch(day){
    case 1:console.log("Monday")
            break
    case 2:console.log("Tuesday")
            break
    case 3:console.log("Wednesday")
            break
    case 4:console.log("Thursday")
            break
    case 5:console.log("Friday")
            break
    case 6:console.log("Saturday")
            break
    case 7:console.log("Sunday")
            break
}
/*

let age = 19
let percentage = 50
if(age > 18 && percentage>70 ){
        console.log("YOU ARE ELIGIBLE FOR EXAMS")
}
else{
    console.log("YOU ARE NOT ELIGIBLE FOR EXAMS")
}
*/
//RETURN TRUE WHEN ALL CONDITIONS ARE TRUE.
/*
let age = 19
let percentage = 50
if(age > 18 || percentage>70 ){
    console.log("YOU ARE ELIGIBLE FOR EXAMS")
}
else{
    console.log("YOU ARE NOT ELIGIBLE FOR EXAMS")
}
*/

//WHILE LOOP
/*
let a=1
while(a<20){
    console.log("HELLO WORLD")
    a++
}
*/

/*
let a=0
do {
    console.log("hello world")
    a++
}
while(a<5)

//for loop

for (let i = 0; i<5 ; i++){
    console.log("hello world" +" "+i )
}*/
/*
let height=180
if (height>=175){
    console.log("YOU ARE ELIGIBLE")
}
else{
    console.log("YOU ARE NOT ELIGIBLE")
}*/

//PROBLEM NESTED IF
/*
let age=16
let hsc=60
let aem=80

if(hsc>50){
    if(aem>70){
        if(age>=18){
            console.log("you are eligible for commercial pilot license")
        }
        else if(age>=17){
            console.log("you are eligible for private pilot license")
        }
        else if(age>=16){
            console.log("you are eligible for student pilot license")
        }
        else{
            console.log("todha bade hojao fir koshish krna")
        }
    }
    else{
        console.log(`your marks in aviation exam is ${aem} which is below 70.`)
    }
}
else{
    console.log(`your marks in high school exam is ${hsc} which is below 50.`)
}
*/


//MULTIPLICATION TABLE OF 5
/*
console.log("USING WHILE LOOP")

let a = 5
let i = 1
while(i<=10){
    console.log(` ${a} x ${i} = ${a*i} `)
    i++
}
*/
/*
console.log("USING DO WHILE LOOP")

let a = 3
let i = 1
do{
    console.log(` ${a} x ${i} = ${a*i} `)
    i++
}while(i<=10)
*/
/*
console.log("USING FOR LOOP")

let a = 9
for(let i = 1; i <= 10; i++){
    console.log(` ${a} x ${i} = ${a*i} `)
}
*/
/*
console.log("DETECTING ODD NUMBER IN AN ARRAY")

let a = [10,29,38,47,53,65,70,82,93,100]
for (i = 0; i<a.length; i++){
    if(a[i]%2===1){
        console.log(a[i])
    }
}
*/


//ARRAY ......
/*
let fruits = ["apple","orange","mango"]
fruits[0] = "grapes"
console.log(fruits)

*/
/*
let a = [1,"apple",-1,0.5,true]
console.log(a)
*/
/*
let fruits = ["apple","orange","mango"]
let allfruits = ["apple",...fruits,"watermelon"]
allfruits[1] = "strawberry"
console.log(allfruits)
*/
/*
let fruits = ["apple","orange","mango"]
for (let fruit of fruits){
    console.log(fruit)
}


console.log("DETECTING ODD NUMBERS")

let a = [12,45,32,56,78,65,47,95,75,17]
for(i=0;i<a.length;i++){
    if(a[i]%2==1){
        console.log(a[i])
    }
}

console.log("DETECTING EVEN NUMBERS")

let a = [12,45,32,56,78,65,47,95,75,17]
for(i=0;i<a.length;i++){
    if(a[i]%2==0){
        console.log(a[i])
    }
}
*/

/*

let fruits = ["apple","orange","mango"]
fruits.push("grapes")
let shiftedfruit = fruits.shift()
let poppedfruits = fruits.pop()

fruits.unshift("Apple")

console.log(fruits)
console.log(poppedfruits)
*/
/*
let fruits = ["apple","orange","mango"]

let a = fruits.splice(fruits.indexOf("orange"),2)

console.log(a)
console.log(fruits)

*/
/*
let a =[1,2,3,4,5,6]
let b =[7,8,9,10,11,12]
let fruits = ["apple","orange","mango"]
let c = fruits.concat(a).concat(b)
console.log(c)
*/
/*
let b =[7,8,9,10,11,12]
b.reverse()
console.log(b)
*/

/*
let fruits = ["apple","orange","mango"]
fruit = fruits.join("")
console.log(fruit)
*/

/*
let a = "tamim"
a = a.split("")
a.reverse()
a = a.join("")
console.log(a)

*/


/*
let studentdetails ={
    class : 12,
    contact_no : "9369966943",
    email : "mohdtamim5035323@gmail.com",
}

let student = {
    name : "Tamim",
    score : 94,
    roll_no : "23603171",
    details : studentdetails
}


console.log(student)
*/
/*

let student = {
    name : "Tamim",
    score : 94,
    roll_no : "23603171",
}

student.score = 99
console.log(student)
student.score = 94
console.log(student)

*/

/*
let student = {
    name : "Tamim",
    score : 94,
    roll_no : "23603171",
}

console.log(delete student.tamim)

if (student.score){
    console.log(student.score)
}
else{
    console.log("Property does not exist")
}*/

/*
let student = {
    name : "Tamim",
    score : 94,
    roll_no : "23603171",
}

let studentstring = JSON.stringify(student)
console.log(student)
console.log(studentstring)

console.log(typeof(student))
console.log(typeof(studentstring))

//to convert string back to object 

let a = JSON.parse(studentstring)
console.log(a)
*/

//FUNCTION
/*

function welcomeUser(name,number){
    console.log(`Hello ${name}, welcome to our website`)
    console.log(`you are visitor number ${number}`)
}

welcomeUser("Tamim",1)
*/

/*
function areaofcircle(r){
    let pi = Math.PI
    let Area = pi*(r**2)
    console.log(`Area of circle is ${Area}`)
    return Area
}

let circle = areaofcircle(2)
console.log(circle)
*/
/*

function totalmarks(phy,chem,maths){
    let total = phy + chem + maths
    return total
}


function percentage(total){
    let percent = total / 400 * 100
    return percent
}
let marks = totalmarks(100,100,100)
console.log(marks)
let percentile = percentage(marks)
console.log(percentile)

*/
//OR
/*
function totalmarks(phy,chem,maths){
    let total = phy + chem + maths
    return total
}

let marks = totalmarks(100,200,250)
console.log(marks)

function percentage(){
    let percent = marks / 600 * 100
    return percent
}

let percentile = percentage()
console.log(percentile)
*/


console.log("FUNCTION EXPRESSION")

let sum = function(a,b){
    return a + b
}
console.log(sum(1,2))