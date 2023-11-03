function runAuto(a) {
    switch(a) {
        case 0:
            if(isCommonResearchMaxed(0,9)) break
            for(let i = 0; i < 10; i++)
                purchaseResearch(i)
            break
        case 1: 
            if(isCommonResearchMaxed(10,19)) break
            for(let i = 10; i < 20; i++)
                purchaseResearch(i)
            break
        case 2:
            if(data.money.gte(eggData[data.currentEgg].unlockReq) && data.onPlanet === false && ((data.currentEgg < 17 && !data.settingsToggles[3]) || (data.currentEgg < 18 && data.settingsToggles[3])))
                promoteEgg()
            break
        case 3:
            if(isCommonResearchMaxed(20,27)) break
            for(let i = 20; i < 28; i++)
                purchaseResearch(i)
            break
    }
}
const autoNames = ['Tier I-V Auto','Tier VI-X Auto','Promotion Auto','Tier XI-XIV Auto']
function updateAutomation() {
    for(let i = 0; i < data.autoActive.length; i++) {
        if(data.autoActive[i]) runAuto(i)
    }
}

function toggleAuto(id) {
    data.autoActive[id] = !data.autoActive[id]
}


