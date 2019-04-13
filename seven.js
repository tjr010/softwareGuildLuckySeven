//Adds functionality to "Play" button
document.getElementById('playButton').addEventListener('click', function(){
    var addMoney = document.getElementById('prompter');
    addMoney.setAttribute('style', 'visibility: hidden');


    var again = document.getElementById('again');
    again.setAttribute('style', 'visibility: visible' )
});

// Plays the game

function luckySeven(){
    var startingBet = document.getElementById("initialBet").value;
    var money = 0;
    var firstDie = 0;
    var secondDie = 0;
    var dice = 0;
    var rolls = 0;
    var counter = 0;
    var money = startingBet;
    var moneyHeld = [startingBet];
    var maxHeld = 0;

    if(startingBet <= 0){
        alert('You need more money in your bet')
        window.location.reload();
    }
    else{

    do{
        rolls++;
        firstDie = Math.floor(Math.random() * 6) + 1;
        secondDie = Math.floor(Math.random() * 6) + 1;
        dice = firstDie + secondDie;

            if(dice === 7){
                money = money + 4;

                var last_roll = moneyHeld[moneyHeld.length - 1];

                var last_updated = last_roll + 4;

                moneyHeld.push(last_updated);
            }

            else{
                money--;
                counter++;

                var last_roll = moneyHeld[moneyHeld.length - 1];
                var last_updated = last_roll - 1;
                moneyHeld.push(last_updated);
                rolls = rolls++;
            }
    }while(money > 0){
        var totalMax = 0;
        totalMax = Math.max.apply(Math, moneyHeld);

        numRolls = moneyHeld.indexOf(totalMax);
        
        if(numRolls < 1){
            numRolls = 0;
        }
    }
}

    document.getElementById('result').innerHTML='Results'
    document.getElementById('table').innerHTML=(
        "<center><br><br><table style=\"width: 100% height: 100%; color: white;\"><tr><th class=\"th2\">Starting Bet</th><th class=\"th2\">$" + startingBet + ".00</th></tr><tr><td>Total Rolls Before Going Broke</td><td>"+ rolls +"</td></tr><tr><td>Highes Amount Won</td><td>$"+totalMax+".00</td></tr><tr><td>Roll Count at Highest Amount Held</td><td> "+ numRolls + "</td></tr></table></center>");
    var restart = document.getElementById("playButton").innerHTML="Play Again";
    
}