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

console.log("DETECTING ODD NUMBER IN AN ARRAY")

let a = [10,29,38,47,53,65,70,82,93,100]
for (i = 0; i<a.length; i++){
    if(a[i]%2===1){
        console.log(a[i])
    }
}