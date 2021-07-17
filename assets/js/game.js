window.alert("Welcome to Robot Gladiators! Godspeed.")

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);
    return value;
}

var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
      if (this.health >= 9) {
          window.alert("That'll be 9 tokens for +24 HEALTH. I know; healthcare ain't cheap.");
        this.health += 24;
        this.money -= 9;
      }
      else {
          window.alert("YOU BROKE, BITCH. Better get back out there and make some money.")
      }
    },
    upgradeAttack: function () {
      if (this.money >= 7) {
          window.alert("You got it, killa! Here's an UPGRADE of +6 attack power. Only 7 tokens!");
      this.attack += 6;
      this.money -= 7;
      }
        else {
          window.alert("YOU BROKE, BITCH. Better get back out there and make some money.");
        }
    }
}

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    },
];

var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    promptFight = promptFight.toLowerCase();
    

    if (promptFight === "" || promptFight === "null") {
        window.alert("Sorry, I didn't catch that. Please try again.");
        return fightOrSkip();
        
    }  
    
    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Sure you wanna skip this one, Bud?");  
    
    if (confirmSkip) {
        window.alert("Go ahead; catch your breath. " + playerInfo.name + " has chosen to skip this fight. And that's okay.");
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        shop();
        
        return true;
    }

    else {
        alert("LET'S GOOOOOOO!");
        // fight();
    }
    return false;
    }
}

var fight = function(enemy) {   
    while(playerInfo.health > 0 && enemy.health > 0) {
        if (fightOrSkip()) {
            break;
        }
        
        var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);  
        console.log(playerInfo.name + " attacked" +  enemy.name + ". "  +  enemy.name + " now has " + enemy.health + " health remaining.");
            
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has perished! Take their money and what's left of the poor sucker's battery life.");

            playerInfo.money = playerInfo.money + 20;
            playerInfo.health = playerInfo.health + 8; 

            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            // break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.") 
        }
    }
}

var startGame = function() {
   playerInfo.reset();

    for(var i = 0; i <= enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators: Round " + ( i + 1) + ". Hold on to your tin bucket hats!");

            var pickedEnemyObj = enemyInfo[i];
             
            pickedEnemyObj.health = randomNumber(40, 60);
        
            fight(pickedEnemyObj);

        if(playerInfo.health > 0 && i < enemyInfo.length -1) {
          var storeConfirm = window.confirm("Phew! This fight's over. Wanna visit the shop before you face your next enemy?")
            
            if (storeConfirm) {
                shop();
            } 
        }
        }
        
        else {
            alert("You have lost your robot in battle! RIP to them and a formal GAME OVER for you.");
            break;
        }
    }
    endGame();
};

var endGame = function() {
    if (playerInfo.health > 0) {
        window.alert("YASSSSS! YOU DID IT!!! YOU ARE THE GLADIATOR OF ALL GLADIATORS! Let's take a look at your spoils: " + playerInfo.money + " tokens and some scrap metal. Hey, one person's trash is another robot's upgrade, I guess.")
    }
    else {
    window.alert("Let us mourn " + playerInfo.name + ": A fighter til the end. Gone, but not forgotten.");
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
    "Come on in! Here you can charge up and REFILL those health batteries, put all that scrap metal to good use and UPGRADE your attack power.\nOr you can LEAVE after just having walked in and we can pretend this never happened.\nPlease enter 1 for REFILL, 2 for UPGRADE or 3 to LEAVE."
    ).toLowerCase(); 
    
    shopOptionPrompt = parseInt(shopOptionPrompt);

    switch(shopOptionPrompt) {
        case 1:
          playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        
        case 3:
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

//create exchange of variables--playerInfo.money for playerInfo.health or playerInfo.attack

//add those values to statements for player:

//REFILL health 

//UPGRADE attack

//LEAVE :alert with a thanks for playing.