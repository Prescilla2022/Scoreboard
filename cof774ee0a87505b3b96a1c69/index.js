let result1=0;
let result2=0;
let homeScore=document.getElementById("home-Score");
let guestScore=document.getElementById("guest-Score");


function addHomeScoreByOne(){
    result1+=1;
    homeScore.innerText=result1;
    console.log(result1);
    }

function addHomeScoreByTwo(){
    result1+=2;
    homeScore.innerText=result1;
    console.log(result1);
    }
    
function addHomeScoreByThree(){
    result1+=3;
    homeScore.innerText=result1;
    console.log(result1);
    }
    
function addGuestScoreByOne(){
    result2+=1;
    guestScore.innerText=result2;
    console.log(result2);
    }

function addGuestScoreByTwo(){
    result2+=2;
    guestScore.innerText=result2;
    console.log(result2);
    }
    
function addGuestScoreByThree(){
    result2+=3;
    guestScore.innerText=result2;
    console.log(result2);
    }

function newGame(){
    result1=0;
    result2=0;
    homeScore.innerText=result1;
    guestScore.innerText=result2;
    
    
}