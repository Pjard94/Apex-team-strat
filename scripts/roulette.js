// Global Variables
const weapon = ["Pistols only", "Shotguns only", "LMGS only", "Sniper & Shotguns", "SMG only", "Assault rifles only","No Pink weapons (i.e.kraber)", "Only Light ammo", "Only Heavy Ammo", "Snipers only", "Only Energy Ammo", "No Shotguns", "No Snipers", "No Assualt Rifles", "No SMGs", "No Pistols", "No Scopes", "Hunter. Bow and shotguns only"];

const meds = ["Phoenix kits are a lie", "No Syringes", "Shields only", "No medkits", "No shield cells", "No shield batteries", "Health heals only", "Small heals only", "Big heals only" ];

const gear = ["No head (no helmet)", "Upgrade only", "Body armour only", "No Body. You can't repair or pick up body armour.", "No Back pack", "Pauper. White or next lowest armour", "Milion dollar man. Only Gold is worthy of adorning you"];

const character = ["Loba", "Fuse", "Horizon", "Octane", "Wraith", "Wattson", "Revenant", "Rampart", "Pathfinder", "Mirage", "Lifeline", "Gibraltar", "Crypto", "Bloodhound", "Caustic", "Bangalore", "Valkyrie"];
let character1;
let character2;
let character3;

const special = ["The winner takes it all. When you kill take their guns as your own.", "Stuck. The first guns you see, you pick up, they are your only guns for the game.", "Mr President. One of your players is the president, the other 2 are agents, if the president dies the game is lost.", "No Russian. Only hip fire, no ADS.", "Fly by Night. When you down a person you have to rush to finish them.", "Basic bitch. You can't use your abilities. (You probably like pumpkin spiced lattes too)", "Makeshift guns. Each weapon has only 3 reloads", "Hot potato. ALL nades you come accross are live so yeet that bad boy.", "The floor is lava. You can only loot from the 1st floor up. (Second floor for you Americans)", "Crawl space. Ground floor (US:first floor) looting only"];

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

function charac() {
character1 = character[Math.floor(Math.random() * character.length)];

document.getElementById("character_output").innerHTML = character1;
}

function charac2() {
    character2 = character[Math.floor(Math.random() * character.length)];

    while ( character2 === character1) {
        character2 = character[Math.floor(Math.random() * character.length)];
    }

    document.getElementById("character_output2").innerHTML = character2;
}

function charac3() {
    character3 = character[Math.floor(Math.random() * character.length)];

    while (character3 === character1 || character3 === character2) {
        character3 = character[Math.floor(Math.random() * character.length)];
    } 

    document.getElementById("character_output3").innerHTML = character3;
}


function spec() {
    document.getElementById("special_output").innerHTML = special[Math.floor(Math.random() * special.length)];
    }