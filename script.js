function pick(number){
    let randomNumber = Math.random();
   
    //generates a pick for the computer
if( randomNumber >= 0 && randomNumber <= 1/3 ){
    computerNumber = 'Ice';
} else if( randomNumber >1/3 && randomNumber <=2/3 ){
    computerNumber = 'Fire'
}else if( randomNumber >2/3 && randomNumber <1 ){
    computerNumber = 'Water'
}

//decides if its a win or a tie or a loss
if (number === 'ice'){
    if (computerNumber === 'Ice'){
    result = 'TIE'
    }else if(computerNumber === 'Fire'){
        result = 'YOU LOST'
    }else if(computerNumber === 'Water'){
        result = 'YOU WIN'
    }

} else if (number === 'fire'){
    if (computerNumber === 'Ice'){
        result = 'YOU WIN'
    }else if(computerNumber === 'Fire'){
        result = 'TIE'
    }else if(computerNumber === 'Water'){
        result = 'YOU LOST'
    }

}else if(number === 'water'){
    if (computerNumber === 'Ice'){
        result = 'YOU LOST'
    }else if(computerNumber === 'Fire'){
        result = 'YOU WIN'
    }else if(computerNumber === 'Water'){
        result = 'TIE'
    }
}
    // adds new results to the previous results
if(result === 'YOU WIN'){
    scores.playerscore +=3;
    play.wins += 1;
}else if (result === 'YOU LOST'){
    scores.computerScore += 3;
    play.losses += 1; 
}else if(result ==='TIE'){
    scores.computerScore += 1;
    scores.playerscore += 1;
    play.ties += 1;
};

    //saves the result and scores so data doesn't get lost after reload
    localStorage.setItem('gamePlays', JSON.stringify(play));
    localStorage.setItem('gameScores', JSON.stringify(scores));


    //displays the results after picks are made
document.getElementById('result-board').innerText= ` Computer picked ${ computerNumber} so therefore, ${result}.`;
document.getElementById( 'score-table').innerText= `computer score:${scores.computerScore} player score:${scores.playerscore}  `;
document.getElementById('wins-board').innerText= `WINS:${play.wins} TIES:${play.ties} LOSSES:${play.losses}`;

}

let computerNumber = '';
let result ='';
let play = JSON.parse(localStorage.getItem('gamePlays'));
// {wins: 0, ties: 0, losses: 0};
let scores = JSON.parse(localStorage.getItem('gameScores'));
//{playerscore: 0, computerScore: 0 };

function reset(){

//resets the saved scores from previous rounds to 0
localStorage.removeItem('gamePlays');
localStorage.removeItem('gameScores')
play = { wins: 0, losses:0, ties:0 }
scores ={ playerscore:0, computerScore:0}
//displays the default scores and results 0
document.getElementById( 'score-table').innerText= `computer score: 0 player score:0 `;
document.getElementById('wins-board').innerText= `WINS:0 TIES:0 LOSSES:0`;

}


