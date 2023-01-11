let squares=document.querySelectorAll('.square')
let mole=document.querySelector(".mole")
let score=document.getElementById("score")
let time=document.querySelector("#time")
let currentTime 
let hitPosition
let res=0
let countDownTimer=null
let timerId= null
function startGame(){
    time.textContent=60
    score.textContent=0
    currentTime=60
    moveMole()
    timeUp()
}
function randomSquare(){
    squares.forEach(function(square){
        square.classList.remove("mole")
    })
    let randomSquare=squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add("mole")
    hitPosition=randomSquare.id
}


squares.forEach(function(square){
    square.addEventListener("click",function(){
        if(square.id==hitPosition)
        {
            res++
            score.textContent=res
            hitPosition=null
        }
    })
})



function moveMole(){
    
    timerId=setInterval(randomSquare,600)
}




function timeUp(){
    
    countDownTimer=setInterval(countDown,1000)
}

function countDown(){
    currentTime--
    time.textContent=currentTime
    if(currentTime<=0)
    {
        clearInterval(countDownTimer)
        clearInterval(timerId)
        alert("GAME OVER! Score: "+res)  
    }
}

function stopGame(){
    currentTime=0
    countDown()
}