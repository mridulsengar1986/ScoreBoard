let num1=0
document.getElementById("home-el").textContent=num1
let num2=0
document.getElementById("guest-el").textContent=num2
let add_num1 =document.getElementById("home-el")
let add_num2 =document.getElementById("guest-el")
function addOne()
{
num1 += 1
add_num1.textContent = num1
}
function addTwo()
{
 num1 += 2
add_num1.textContent = num1
}

function addThree()
{
num1 += 3
add_num1.textContent = num1
}
function add_1()
{
num2 += 1
add_num2.textContent = num2
}
function add_2()
{
 num2 += 2
add_num2.textContent = num2
}

function add_3()
{
num2 += 3
add_num2.textContent = num2
}
function newGame()
{
    num1=0
    num2=0
    add_num1.textContent = num1
    add_num2.textContent = num2
}


