

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
    upgrade: {
        2: 1300
    }

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
    bild:() => 1+1
   
}

function addGold(){
    if (player.gold < 2000){
        player.gold = player.gold + goldMine.goldPerHour;
    }
   else{
    console.log("FullGold")
   }


}

function build(player, building, slot) {

    if (  player.gold > building.cost ) 
      {
        player.village[slot] = building;
        player.gold = player.gold - building.cost

     }
   
    else { 
        console.log("InssuficentGold");
    }
}


function upgrade(player, building, slot) {
    if (player.goldMine){

    }
    // Check if building exists
    // Get the upgrade cost
    // Substract the gold from player (The upgrade cost)
    // Update the level of the current building
}

console.log(player.bild())

console.log()
build(player, goldMine, "goldMine");
addGold()
console.log(player);



const masina = {
    culoare: "rosu",
    model: "4x4",
    brand: "jeep",
    proprietari:[
     {
        Nume:"John"
    },{
        Nume:"Gabi"
    }
    ]
}
const blog = {
   sports: [{
    Title: "BUSINESS",
    Content: "This includes coverage of local and national business news, stock market updates, and financial advice."
    },
    {
     Title: "Sports",
     Content:"This includes coverage of local and professional sports teams and events, as well as sports news and analysis."
    }],
    medicine:[{
        Title: "BUSINESS",
        Content: "1This includes coverage of local and national business news, stock market updates, and financial advice."
        },
        {
         Title: "Sports",
         Content:"This includes coverage of local and professional sports teams and events, as well as sports news and analysis."
        }]

}
console.log(blog.medicine[0].Content)
