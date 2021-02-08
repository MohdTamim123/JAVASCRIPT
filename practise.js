/*
let button1 = document.querySelectorAll("button")[0]
let button2 = document.querySelectorAll("button")[1]
//or
//let button1 = document.querySelectorAll(".button1")
//let button2 = document.querySelectorAll("button2")

button1.innerHTML= "+"
button2.innerHTML= "-"

button2.style.backgroundColor = "red"

let countHolder = document.createElement("h1")
document.body.appendChild(countHolder)

let count = 0
button1.addEventListener("click",function(){
    count += 1
    countHolder.innerText = count
    console.log(count)
})

button2.addEventListener("click",function(){
    count -= 1
    countHolder.innerText = count
    console.log(count)
})


countHolder.innerText = count
*/
/*
let calculateInterest = document.querySelector(".btn-primary")


function calculate(){
    let principalAmount = parseFloat(document.querySelector("#principalAmount").value)
    let years = parseFloat(document.querySelector("#timePeriod").value)
    let rate = parseFloat(document.querySelector("#interestRate").value)
    let SI = principalAmount * years * rate/100
    document.querySelector(".interest").innerHTML += SI
}

calculateInterest.addEventListener("click",calculate)
*/


let todo = document.querySelector(".todo-list")
let input = document.querySelector(".taskinput")
let button = document.querySelector(".btn")

function addButtonClicked(){
    let i = input.value
    console.log(i)
    let data = document.createElement("li")
    data.innerHTML = i
    data.className = "list-group-item d-flex justify-content-between align-items-center"
    input.value = ""
    let deleteButton = document.createElement("Button")
    deleteButton.className = "btn btn-danger"
    deleteButton.innerHTML = "Done"
    deleteButton.addEventListener("click",()=>{
        data.remove()
    })
    data.append(deleteButton)
    todo.append(data)
}



button.addEventListener("click",addButtonClicked)


