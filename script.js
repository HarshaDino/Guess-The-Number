let tries = 0;
function showResult(score){
    const result=document.getElementById('result');
    switch(score){
        case 1:
            result.innerText=`Correct !`
            tries++;
            break;
        case 2:
            result.innerText=`Too High!`
            tries++;
            break;
        case 3:
            result.innerText=`Too Low!`
            tries++;
            break
    } 
    console.log(tries);
    document.getElementById('tries').innerHTML = `Your tries ${tries}`;
}

function getResult(playerNum, comNum){
    if(playerNum == comNum)
    {
        return 1;
    }
    else if(playerNum > comNum)
    {
        return 2;
    }
    else
    {
        return 3;
    }
}

function getComputerChoice(){
    let comNum = (Math.floor(Math.random() * 20))+1;
    console.log(comNum);
    return comNum;
}
   
function getrecheck(comNum){
    const number = document.getElementById('number');
    const playerNum = Number(number.value);
    console.log(playerNum);

    if (isNaN(playerNum)) 
    {
        alert("Please enter a number first!");
        return;
    }
    
    const score = getResult(playerNum, comNum);
    showResult(score, playerNum, comNum, tries);
}

function playgame() {
    let comNum;
    const startGame = document.getElementById('startGame');
    startGame.onclick=()=>{
    comNum = getComputerChoice();   }

    const reCheckbtn=document.getElementById('recheck');
    reCheckbtn.onclick=()=>getrecheck(comNum);

    const endGameButton = document.getElementById('endGame');
    endGameButton.onclick = () => endGame();
}

function endGame(){
    document.getElementById('result').innerText='';
    document.getElementById('tries').innerText='';
}

playgame();