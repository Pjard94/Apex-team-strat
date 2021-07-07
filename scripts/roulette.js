// Global Variables
const weapon = ["Pistols only", "Shotguns only", "LMGS only", "Sniper & Shotguns", "SMG only", "Assault rifles only","No Pink weapons (i.e.kraber)", "Only Light ammo", "Only Heavy Ammo", "Snipers only", "Only Energy Ammo", "No Shotguns", "No Snipers", "No Assualt Rifles", "No SMGs", "No Pistols", "No Scopes", "Hunter. Bow and shotguns only"];

const meds = ["Phoenix kits are a lie", "No Syringes", "Shields only", "No medkits", "No shield cells", "No shield batteries", "Health heals only", "Small heals only", "Big heals only" ];

const gear = ["No head (no helmet)", "Upgrade only", "Body armour only", "No Body. You can't repair or pick up body armour.", "No Back pack", "Pauper. White or next lowest armour", "Milion dollar man. Only Gold is worthy of adorning you"];


const character = ["Loba", "Fuse", "Horizon", "Octane", "Wraith", "Wattson", "Revenant", "Rampart", "Pathfinder", "Mirage", "Lifeline", "Gibraltar", "Crypto", "Bloodhound", "Caustic", "Bangalore", "Valkyrie"];
let character1;
let character2;
let character3;




// Character selectors with randomisers

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
