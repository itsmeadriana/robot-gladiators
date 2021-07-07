alert("Welcome to Robot Gladiators! And godspeed.")

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack= 30;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble", "Merlin"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
// console.log(enemyNames.length);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);

var fight = function(enemyName) {    
    while(playerHealth > 0 && enemyHealth > 0) {
      var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        if (promptFight === "skip" || promptFight === "SKIP") {
          var confirmSkip = window.confirm("Sure you wanna skip this one, Bud?");

        if (confirmSkip) {
            window.alert("Go ahead; catch your breath. " + playerName + " has chosen to skip this fight. And that's okay.");
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
    alert("LET'S GOOOOOOO!");
    enemyHealth = enemyHealth - playerAttack;  
    console.log(
            playerName + " attacked" +  enemyName + ". "  +  enemyName + " now has " + enemyHealth + " health remaining."
            );
    
    
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has perished! Take their money and what's left of the poor sucker's health.");

            playerMoney = playerMoney + 20;
            playerHealth = playerHealth + 8; 

            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.") 
        }
    }
};

var startGame = function() {
    playerHealth = 100;
    playerAttack = 30;
    playerMoney = 10;

    for(var i = 0; i <= enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators: Round " + ( i + 1) + ". Hold on to your tin bucket hats!");
        
            var pickedEnemyName = enemyNames[i];
        
            enemyHealth = 50;
        
            fight(pickedEnemyName);
        }
        
        else {
            alert("You have lost your robot in battle! RIP to them and a formal GAME OVER for you.");
            break;
        }
    }
    // startGame();
    endGame();
};

var endGame = function() {
    if (playerHealth => 1) {
        // debugger;
        window.alert("YASSSSS! YOU DID IT!!! YOU ARE THE GLADIATOR OF ALL GLADIATORS! Let's take a look at your spoils: " + playerMoney + " tokens and some scrap metal. Hey, one person's trash is another robot's upgrade, I guess.")
    }
    else {
    window.alert("Let us mourn " + playerName + ": A fighter til the end. Gone, but not forgotten.");
    }
var playAgainConfirm = window.confirm("Wanna have another go at it, Sport?");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Alright, well catch you on the flipside, Sport. Thanks for stopping by!")
    }
}

startGame();


//create alert at the end of the player's health, asking if they'd like to play again.

//add if/else conditional

//if yes, restart the game (loop back to the beginning)

//if no, alert with a thanks for playing, perhaps even their score

//build shop? or build different input functions

//create exchange of variables--playerMoney for playerHealth or playerAttack

//add those values to statements for player:

//REFILL health 

//UPGRADE attack

//LEAVE :alert with a thanks for playing.