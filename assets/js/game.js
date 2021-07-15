alert("Welcome to Robot Gladiators! And godspeed.")

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack= 10;
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
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
        }
    }
    alert("LET'S GOOOOOOO!");
    var damage = randomNumber(playerAttack -3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);  
    console.log(
            playerName + " attacked" +  enemyName + ". "  +  enemyName + " now has " + enemyHealth + " health remaining."
            );
    
    
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has perished! Take their money and what's left of the poor sucker's battery life.");

            playerMoney = playerMoney + 20;
            playerHealth = playerHealth + 8; 

            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
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
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i <= enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators: Round " + ( i + 1) + ". Hold on to your tin bucket hats!");
        
            var pickedEnemyName = enemyNames[i];
        
            enemyHealth = randomNumber(40, 60);
        
            fight(pickedEnemyName);

        if(playerHealth > 0 && i < enemyNames.length -1) {
          var storeConfirm = window.confirm("Phew! This fight's over. Wanna visit the shop before you face your next enemy?")
            
            if (storeConfirm) shop();
        }
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
    if (playerHealth > 0) {
        window.alert("YASSSSS! YOU DID IT!!! YOU ARE THE GLADIATOR OF ALL GLADIATORS! Let's take a look at your spoils: " + playerMoney + " tokens and some scrap metal. Hey, one person's trash is another robot's upgrade, I guess.")
    }
    else {
    window.alert("Let us mourn " + playerName + ": A fighter til the end. Gone, but not forgotten.");
    }
var playAgainConfirm = window.confirm("Wanna have another go at it?");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Totally cool. Thanks for stopping by!")
    }
}

var shop = function() {
    
   
var shopOptionPrompt = window.prompt (
    "Come on in! Here you can charge up and REFILL those health batteries, put all that scrap metal to good use and UPGRADE your attack power.\nOr you can LEAVE after just having walked in and we can pretend this never happened."
    );
    switch(shopOptionPrompt) {
        case "refill":
        case "REFILL":
          if (playerMoney >= 7) {
            window.alert("That'll be 9 tokens for +24 HEALTH. I know; healthcare ain't cheap.");

            playerHealth = playerHealth +24;
            playerMoney = playerMoney -9;    
          }
        else {
            window.alert("YOU BROKE, BITCH. Better get back out there and make some money.");
        }
            break;
        case "upgrade":
        case "UPGRADE":
         if (playerMoney >= 7) {
            window.alert("You got it, killa! Here's an UPGRADE of +6 attack power. Only 7 tokens!")

            playerAttack = playerAttack +6;
            playerMoney = playerMoney -7;
            
         }
         else {window.alert("YOU BROKE, BITCH. Better get back out there and make some money.");
         }
            break;
        
        case "leave":
        case "LEAVE":
            window.alert("An awkward goodbye it is ...");

            break;
       
        default:
            window.alert("Was that Orkish? Elvish? You nerds and your funny languages--I don't understand them at all so you'll have to use plain English. You can REFILL, UPGRADE, or LEAVE. Up to you.");

            shop();
            break;
    }
}

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);
    return value;
}

startGame();

console.log(Math.max(10, 20, 200));

console.log(Math.max(0, -50));

console.log(Math.sqrt(144));

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