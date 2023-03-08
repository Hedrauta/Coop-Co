const achievementObjs = [
    {
        name: 'Eggcellent',
        description: 'Start Playing!',
        img: `${eggImgPath}${eggData[0].id}.png`
    },
    {
        name: 'Superegg',
        description: 'Unlock the 2nd Egg',
        img: `${eggImgPath}${eggData[1].id}.png`
    },
    {
        name: 'Meggdical',
        description: 'Unlock the 3rd Egg',
        img: `${eggImgPath}${eggData[2].id}.png`
    },
    {
        name: 'Rockegg Fuel',
        description: 'Unlock the 4th Egg',
        img: `${eggImgPath}${eggData[3].id}.png`
    },
    {
        name: 'Uber Material',
        description: 'Unlock the 5th Egg',
        img: `${eggImgPath}${eggData[4].id}.png`
    },
    {
        name: 'Fused',
        description: 'Unlock the 6th Egg',
        img: `${eggImgPath}${eggData[5].id}.png`
    },
    {
        name: 'Quantum Flux',
        description: 'Unlock the 7th Egg',
        img: `${eggImgPath}${eggData[6].id}.png`
    },
    {
        name: 'Fountain of Youth',
        description: 'Unlock the 8th Egg',
        img: `${eggImgPath}${eggData[7].id}.png`
    },
    {
        name: 'Time and Space',
        description: 'Unlock the 9th Egg',
        img: `${eggImgPath}${eggData[8].id}.png`
    },
    {
        name: 'Gravity Well',
        description: 'Unlock the 10th Egg',
        img: `${eggImgPath}${eggData[9].id}.png`
    },
    {
        name: 'Diliuted',
        description: 'Unlock the 11th Egg',
        img: `${eggImgPath}${eggData[10].id}.png`
    },
    {
        name: 'Prodigy Child',
        description: 'Unlock the 12th Egg',
        img: `${eggImgPath}${eggData[11].id}.png`
    },
    {
        name: 'Terraforming Mars',
        description: 'Unlock the 13th Egg',
        img: `${eggImgPath}${eggData[12].id}.png`
    },
    {
        name: 'Anti Anti Matter',
        description: 'Unlock the 14th Egg',
        img: `${eggImgPath}${eggData[13].id}.png`
    },
    {   
        name: 'Moar Matter',
        description: 'Unlock the 15th Egg',
        img: `${eggImgPath}${eggData[14].id}.png`
    },
    {
        name: 'AEgg',
        description: 'Unlock the 16th Egg',
        img: `${eggImgPath}${eggData[15].id}.png`
    },
    {
        name: 'Nebulous',
        description: 'Unlock the 17th Egg',
        img: `${eggImgPath}${eggData[16].id}.png`
    },
    {
        name: 'Universal Problem',
        description: 'Unlock the 18th Egg',
        img: `${eggImgPath}${eggData[17].id}.png`
    },
    {
        name: 'Egglightenment',
        description: 'Unlock the 19th Egg',
        img: `${eggImgPath}${eggData[18].id}.png`
    },
    {
        name: 'Contracted',
        description: 'Completed a Contract',
        img: 'Imgs/greencheck.png'
    },
    {
        name: 'Contractual',
        description: 'Complete 10 Contracts',
        img: 'Imgs/greencheck.png'
    },
    {
        name: 'Contractful',
        description: 'Complete 100 Contracts',
        img: 'Imgs/greencheck.png'
    },
    {
        name: 'Contractor',
        description: 'Complete a Thousand Contracts',
        img: 'Imgs/greencheck.png'
    },
    {
        name: 'Soulful I',
        description: 'Get 1 Thousand Soul Eggs',
        img: `${eggImgPath}soul.png`
    },
    {
        name: 'Soulful II',
        description: 'Get 1 Million Soul Eggs',
        img: `${eggImgPath}soul.png`
    },
    {
        name: 'Soulful III',
        description: 'Get 1 Billion Soul Eggs',
        img: `${eggImgPath}soul.png`
    },
    {
        name: 'Soulful IV',
        description: 'Get 1 Trillion Soul Eggs',
        img: `${eggImgPath}soul.png`
    },
    {
        name: 'Prophet I',
        description: 'Get 10 Prophecy Eggs',
        img: `${eggImgPath}prophecy.png`
    },
    {
        name: 'Prophet II',
        description: 'Get 100 Prophecy Eggs',
        img: `${eggImgPath}prophecy.png`
    },
    {
        name: 'Prophet III',
        description: 'Get 1 Thousand Prophecy Eggs',
        img: `${eggImgPath}prophecy.png`
    },
    {
        name: 'Prophet IV',
        description: 'Get 10 Thousand Prophecy Eggs',
        img: `${eggImgPath}prophecy.png`
    },
    {
        name: 'Planetary I',
        description: 'Unlock the 1st Planet',
        img: `Imgs/planet1.png`
    },
    {
        name: 'Planetary II',
        description: 'Unlock the 2nd Planet',
        img: `Imgs/planet2.png`
    },
    {
        name: 'Planetary III',
        description: 'Unlock the 3rd Planet',
        img: `Imgs/planet3.png`
    },
    {
        name: 'Planetary IV',
        description: 'Unlock the 4th Planet',
        img: `Imgs/planet4.png`
    },
    {
        name: 'Planetary V',
        description: 'Unlock the 5th Planet',
        img: `Imgs/planet5.png`
    },
    {
        name: 'Planetary VI',
        description: 'Unlock the 6th Planet',
        img: `Imgs/planet6.png`
    },
    {
        name: 'Intelligent',
        description: 'Acquire 100 Knowledge',
        img: `Imgs/lightbulb.png`
    },
    {
        name: 'Genius',
        description: 'Acquire 1 Thousand Knowledge',
        img: `Imgs/lightbulb.png`
    },
    {
        name: 'Einstein',
        description: 'Acquire 10 Thousand Knowledge',
        img: `Imgs/lightbulb.png`
    },
    {
        name: 'True Egglightenment',
        description: 'Acquire 100 Thousand Knowledge',
        img: `Imgs/lightbulb.png`
    },
]

function updateAchText(i) {
    if(i < 19)
    DOMCacheGetOrSet('achHoverText').innerText = `[${i+1}] - ${!data.achievements[i] ? '???' :achievementObjs[i].name}\n${achievementObjs[i].description}`
    else 
    DOMCacheGetOrSet('achHoverText').innerText = `[${i+1}] - ${achievementObjs[i].name}\n${achievementObjs[i].description}`
}

function getAchievement(i) {
    if(data.achievements[i] === true) return
    data.achievements[i] = true
    $.notify(`${achievementObjs[i].name} Unlocked!`,'success')
    updateAchClass()
}

function checkAchievements() {
    //Eggs
    if(data.achievements[0] === false) getAchievement(0)
    for(let i = 1; i < 19; i++) {
        if(data.unlockedEgg[i-1] === true && data.achievements[i] === false) getAchievement(i)
    }
    //Soul and Prophecy
    const contractCompleteReq = [D(1),D(10),D(100),D(1e3)]
    for(let i = 19; i < 23; i++) {
        if(data.stats.contractsComplete.gte(contractCompleteReq[i-19]) && data.achievements[i] === false) getAchievement(i)
    }
    const soulAchReq = [D(1e3),D(1e6),D(1e9),D(1e12)]
    for(let i = 23; i < 27; i++)
        if(data.soulEggs.gte(soulAchReq[i-23]) && data.achievements[i] === false) getAchievement(i)
    const prophecyAchReq = [D(10),D(1e3),D(1e6),D(1e7)]
    for(let i = 27; i < 31; i++)
        if(data.prophecyEggs.gte(prophecyAchReq[i-27]) && data.achievements[i] === false) getAchievement(i)
    //Planets and Knowledge
    for(let i = 31; i < 37; i++)
        if(data.planetsDiscovered[i-31] === true && data.achievements[i] === false) getAchievement(i)
    const knowledgeAchReq = [D(100),D(1e3),D(1e4),D(1e5)]
    for(let i = 37; i < 41; i++)
        if(data.knowledge.gte(knowledgeAchReq[i-37]) && data.achievements[i] === false) getAchievement(i)
}

function updateAchClass() {
    for(let i = 0; i < achievementObjs.length; i++) {
            DOMCacheGetOrSet('ach'+i).classList = data.achievements[i] ? 'achUnlock' : 'achLock'
    }
    for(let i = 0; i < 19; i++) {
        DOMCacheGetOrSet('ach'+i).src = data.achievements[i] ? achievementObjs[i].img : `${eggImgPath}question.png`
    }
}