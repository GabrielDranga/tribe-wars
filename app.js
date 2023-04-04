

const mainBase = {
    lv: 1,
    hp: 100,
    cost: 0,
}

const goldMine = {
    lv: 1,
    hp: 20,
    goldPerHour: 50,
    cost: 1200,

}
const academy = {
    lv: 1,
    hp: 30,
    soldiers: 1,
    archers: 1,
    cost: 1000,
}
const camp = {
    lv: 1,
    hp: 30,
    places: 50,
    cost: 500,
}

const wall = {
    lv: 1,
    hp: 100,
    cost: 1500,
}


const player = {
    name: "Gabi",
    lv: 1,
    villages: 1,
    gold: 2000,
    village: {
        mainBase,
    },

}

function build(player, building, slot) {

    if(player.gold > building.cost)
    {
        player.village[slot] = building;
        player.gold = player.gold - building.cost;
    }
    else { 
        console.log("InssuficentGold");
    }

}

build(player, goldMine, "goldMine");

console.log(player);