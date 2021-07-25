// Global Variables
const weapon = ["Pistols only", "Shotguns only", "LMGS only", "Sniper & Shotguns", "SMG only", "Assault rifles only","No Pink weapons (i.e.kraber)", "Only Light ammo", "Only Heavy Ammo", "Snipers only", "Only Energy Ammo", "No Shotguns", "No Snipers", "No Assualt Rifles", "No SMGs", "No Pistols", "No Scopes", "Hunter. Bow and shotguns only", "Marksman only"];

const meds = ["Phoenix kits are a lie", "No Syringes", "Shields only", "No medkits", "No shield cells", "No shield batteries", "Health heals only", "Small heals only", "Big heals only" ];

const gear = ["No head (no helmet)", "Upgrade only", "Body armour only", "No Body. You can't repair body armour.", "No Back pack", "Pauper. White or next lowest armour (ie. blue armour if no white can be found)", "Milion dollar man. Only Gold is worthy of adorning you"];

// all the characters after bangalore are optional later
const characterInput1 = ["Wraith", "Pathfinder", "Lifeline", "Gibraltar", "Bloodhound", "Bangalore"];
const characterInput3 = ["Wraith", "Pathfinder", "Lifeline", "Gibraltar", "Bloodhound", "Bangalore"];
const characterInput2 = ["Wraith", "Pathfinder", "Lifeline", "Gibraltar", "Bloodhound", "Bangalore"];
let character1;
let character2;
let character3;

let firstList = document.getElementsByClassName('first-checkbox-list')
let secondList = document.getElementsByClassName('second-checkbox-list')
let thirdList = document.getElementsByClassName('third-checkbox-list')

const checkableCharacters = ["Caustic", "Mirage", "Octane", "Wattson", "Crypto", "Revenant", "Loba", "Horizon", "Rampart", "Fuse", "Valkyrie"]

const special = ["The winner takes it all. When you kill take their guns as your own.", "Stuck. The first guns you see, you pick up, they are your only guns for the game.", "Mr President. One of your players is the president, the other 2 are agents, if the president dies the game is lost.", "No Russian. Only hip fire, no ADS.", "Fly by Night. When you down a person you have to rush to finish them.", "Basic bitch. You can't use your abilities. (You probably like pumpkin spiced lattes too)", "Makeshift guns. Each weapon has only 3 reloads", "Hot potato. ALL nades you come accross are live so yeet that bad boy.", "The floor is lava. You can only loot from the 1st floor up. (Second floor for you Americans)", "Crawl space. Ground floor (US:first floor) looting only"];

//Setting the amount of player outputs, so if only one/two/three are playing it will only show that many players.


function playerOne(){
    document.getElementById("second-player").style.display = "none"
    document.getElementById("third-player").style.display = "none"
    document.getElementById("player-two-character-list").parentElement.style.display = "none"
    document.getElementById("player-three-character-list").parentElement.style.display = "none"
};

function playerTwo(){
    document.getElementById("second-player").style.display = "flex"
    document.getElementById("third-player").style.display = "none"
    document.getElementById("player-two-character-list").parentElement.style.display = "unset"
    document.getElementById("player-three-character-list").parentElement.style.display = "none"
};

function playerThree(){
    document.getElementById("second-player").style.display = "flex"
    document.getElementById("third-player").style.display = "flex"
    document.getElementById("player-two-character-list").parentElement.style.display = "unset"
    document.getElementById("player-three-character-list").parentElement.style.display = "unset"
};
// Jquery doesn't work where i am hosting my site but it's nice to have this for a reference
// $('.one-player-only').click(function(){
//     $('.').css("display", "none")
//     $('.third-player').css("display", "none")
//     $('#player-two-character-list').parent().css("display", "none")
//     $('#player-three-character-list').parent().css("display", "none")
// });

// $('.duos').click(function(){
//     $('.second-player').css("display", "flex")
//     $('.third-player').css("display", "none")
//     $('#player-two-character-list').parent().css("display", "unset")
//     $('#player-three-character-list').parent().css("display", "none")
// });

// $('.standard-game').click(function(){
//     $('.second-player').css("display", "flex")
//     $('.third-player').css("display", "flex")
//     $('#player-two-character-list').parent().css("display", "unset")
//     $('#player-three-character-list').parent().css("display", "unset")
// });


//weapon restrictions
function weapons() {
    document.getElementById("weapon_output").innerHTML = weapon[Math.floor(Math.random() * weapon.length)];

    document.getElementById("weapon_output2").innerHTML = weapon[Math.floor(Math.random() * weapon.length)];

    document.getElementById("weapon_output3").innerHTML = weapon[Math.floor(Math.random() * weapon.length)];
    }

//medical restrictions
function medical() {
    document.getElementById("meds_output").innerHTML = meds[Math.floor(Math.random() * meds.length)];

    document.getElementById("meds_output2").innerHTML = meds[Math.floor(Math.random() * meds.length)];

    document.getElementById("meds_output3").innerHTML = meds[Math.floor(Math.random() * meds.length)];
    }

//gear section

function gearFunction() {
    document.getElementById("gear_output").innerHTML = gear[Math.floor(Math.random() * gear.length)];

    document.getElementById("gear_output2").innerHTML = gear[Math.floor(Math.random() * gear.length)];

    document.getElementById("gear_output3").innerHTML = gear[Math.floor(Math.random() * gear.length)];
    }

// Character selectors with randomisers fixed to not match


//need to add a check for the character selection area

// $('caustic-check').ready(function(){//this checks one of the check buttons but i need to iterate through the lists
//     $('input[type="checkbox"]').click(function(){
//         if($(this).prop("checked") == true){
//             console.log("Checkbox is checked.");
//         }
//         else if($(this).prop("checked") == false){
//             console.log("Checkbox is unchecked.");
//         }
//     });
// });

function charac() {
    for(i=0; i < firstList.length; i++){
        if(firstList[i].checked) {
            characterInput1.push(checkableCharacters[i]);
        }
        
    }

character1 = characterInput1[Math.floor(Math.random() * characterInput1.length)];

document.getElementById("character_output").innerHTML = character1;
}

function charac2() {
    for(i=0; i < secondList.length; i++){
        if(secondList[i].checked) {
            characterInput2.push(checkableCharacters[i]);
        }
        
    }

    character2 = characterInput2[Math.floor(Math.random() * characterInput2.length)];

    while ( character2 === character1) {
        character2 = characterInput2[Math.floor(Math.random() * characterInput2.length)];
    }

    document.getElementById("character_output2").innerHTML = character2;
}

function charac3() {

    for(i=0; i < thirdList.length; i++){
        if(thirdList[i].checked) {
            characterInput3.push(checkableCharacters[i]);
        }
        
    }

    character3 = characterInput3[Math.floor(Math.random() * characterInput3.length)];

    while (character3 === character1 || character3 === character2) {
        character3 = characterInput3[Math.floor(Math.random() * characterInput3.length)];
    } 

    document.getElementById("character_output3").innerHTML = character3;
}


function uncheck(){
    document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
}

function spec() {
    document.getElementById("special_output").innerHTML = special[Math.floor(Math.random() * special.length)];
    }