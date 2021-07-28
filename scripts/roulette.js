$(document).ready(function () {
    const defaultLegends = ["Wraith", "Pathfinder", "Lifeline", "Gibraltar", "Bloodhound", "Bangalore"];
    const weapon = ["Pistols only", "Shotguns only", "LMGS only", "Sniper & Shotguns", "SMG only", "Assault rifles only", "No Pink weapons (i.e.kraber)", "Only Light ammo", "Only Heavy Ammo", "Snipers only", "Only Energy Ammo", "No Shotguns", "No Snipers", "No Assualt Rifles", "No SMGs", "No Pistols", "No Scopes", "Hunter. Bow and shotguns only", "Marksman only"];
    const meds = ["Phoenix kits are a lie", "No Syringes", "Shields only", "No medkits", "No shield cells", "No shield batteries", "Health heals only", "Small heals only", "Big heals only"];
    const gear = ["No head (no helmet)", "Upgrade only", "Body armour only", "No Body. You can't repair body armour.", "No Back pack", "Pauper. White or next lowest armour (ie. blue armour if no white can be found)", "Milion dollar man. Only Gold is worthy of adorning you"];
    const special = ["The winner takes it all. When you kill take their guns as your own.", "Stuck. The first guns you see, you pick up, they are your only guns for the game.", "Mr President. One of your players is the president, the other 2 are agents, if the president dies the game is lost.", "No Russian. Only hip fire, no ADS.", "Fly by Night. When you down a person you have to rush to finish them.", "Basic bitch. You can't use your abilities. (You probably like pumpkin spiced lattes too)", "Makeshift guns. Each weapon has only 3 reloads", "Hot potato. ALL nades you come accross are live so yeet that bad boy.", "The floor is lava. You can only loot from the 1st floor up. (Second floor for you Americans)", "Crawl space. Ground floor (US:first floor) looting only"];

    let character1;
    let character2;
    let character3;

    let weapons = function() {
        $('#weapon_output1').text(weapon[Math.floor(Math.random() * weapon.length)]);
        $('#weapon_output2').text(weapon[Math.floor(Math.random() * weapon.length)]);
        $('#weapon_output3').text(weapon[Math.floor(Math.random() * weapon.length)]);
    }

    let medical = function() {
        $('#meds_output1').text(meds[Math.floor(Math.random() * meds.length)]);
        $('#meds_output2').text(meds[Math.floor(Math.random() * meds.length)]);
        $('#meds_output3').text(meds[Math.floor(Math.random() * meds.length)]);
    }

    let gearFunction = function() {
        $('#gear_output1').text(gear[Math.floor(Math.random() * gear.length)]);
        $('#gear_output2').text(gear[Math.floor(Math.random() * gear.length)]);
        $('#gear_output3').text(gear[Math.floor(Math.random() * gear.length)]);
    }

    let spec = function() {
        $('#special_output').text(special[Math.floor(Math.random() * special.length)]);
    }

    let characSelection = function(checkbox, output){
        let checked = $('.'+checkbox+'-checkbox-list:checked');

        let selectable = [...defaultLegends];

        checked.each(function(_,e){
            selectable.push($(e).val());
        });
        let character = selectable[Math.floor(Math.random() * selectable.length)];

        switch (output) {
            case 1:
                character1 = character;
                break;
            case 2:
                while (character1 === character) {
                    character = selectable[Math.floor(Math.random() * selectable.length)];
                }
                character2 = character;
            break;
            case 3:
                while (character === character1 || character === character2) {
                    character = selectable[Math.floor(Math.random() * selectable.length)];
                }
                character3 = character;
            break;
            default:
                break;
        }
    
        $('#character_output'+output).text(character);
    };

    let showPlayer = function(player){
        $('#player'+player+'Characters').show();
        $('#player'+player).show();
    }
    
    let hidePlayer = function(player){
        $('#player'+player+'Characters').hide();
        $('#player'+player).hide();
    }
    
    $('#stratButton').on('click', function () {
        console.log('the strat button has been clicked');
        weapons();
        medical();
        gearFunction();
        characSelection('first', 1);
        characSelection('second', 2);
        characSelection('third', 3);
        spec();
        //uncheck();
    });
    
    $('#onePlayer').on('click', function() {
        console.log(1);
        hidePlayer('Two');
        hidePlayer('Three');
    });
    
    $('#twoPlayers').on('click', function() {
        console.log(2);
        showPlayer('Two');
        hidePlayer('Three');
    });
    
    $('#threePlayers').on('click', function() {
        console.log(3);
        showPlayer('Two');
        showPlayer('Three');
    });
});