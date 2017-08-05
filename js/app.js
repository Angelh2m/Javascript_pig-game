/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var score, roundScore, activePlayer, dice;

score = [0,0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display ='none';

document.getElementById('score-0').textContent= '0';
document.getElementById('score-1').textContent= '0';

document.getElementById('current-0').textContent= '0';
document.getElementById('current-1').textContent= '0';


document.querySelector('.button').addEventListener('click', function(){



  dice = Math.floor(Math.random() * 6) + 1;

  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'inline-block';
  diceDOM.src = './img/dice-' + dice + '.png';

  document.querySelector('.dice').style.display = 'inline-block';

  if( dice !== 1){

    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;

  }else{

    nextPlayer()

  }

});

function nextPlayer(){
  // Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

      document.getElementById('current-0').textContent= '0';
      document.getElementById('current-1').textContent= '0';
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'inline-block';



}


document.querySelector('.hold').addEventListener('click', function() {

        // Add CURRENT score to GLOBAL score
        score[activePlayer] += roundScore;


        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        // Check if player won the game
        if (score[activePlayer] >= 50) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('#name-' + activePlayer).classList.add('winner');
            document.querySelector('#name-' + activePlayer).classList.remove('active');
            // gamePlaying = false;

        } else {
            //Next player
            nextPlayer();
        }


});

document.querySelector('.new').addEventListener('click',init);


function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    // gamePlaying = true;


    // document.querySelector('.dice').style.display= 'none';


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('#name-1').classList.remove('winner');
    document.querySelector('#name-0').classList.remove('winner');
    document.querySelector('#name-1').classList.remove('active');
    document.querySelector('#name-0').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';





}
