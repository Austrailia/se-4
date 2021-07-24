const data = {
    type: 'champion',
    format: 'standAloneComplex',
    version: '11.14.1',
    data: {
      Aatrox: {
        id: 'Aatrox',
        key: '266',
        name: 'Aatrox',
        title: 'the Darkin Blade',
        image: {
          full: 'Aatrox.png',
          sprite: 'champion0.png',
          group: 'champion',
          x: 0,
          y: 0,
          w: 48,
          h: 48,
        },
        skins: [
          {
            id: '266000',
            num: 0,
            name: 'default',
            chromas: false,
          },
          {
            id: '266001',
            num: 1,
            name: 'Justicar Aatrox',
            chromas: false,
          },
          {
            id: '266002',
            num: 2,
            name: 'Mecha Aatrox',
            chromas: true,
          },
          {
            id: '266003',
            num: 3,
            name: 'Sea Hunter Aatrox',
            chromas: false,
          },
          {
            id: '266007',
            num: 7,
            name: 'Blood Moon Aatrox',
            chromas: false,
          },
          {
            id: '266008',
            num: 8,
            name: 'Blood Moon Aatrox Prestige Edition',
            chromas: false,
          },
          {
            id: '266009',
            num: 9,
            name: 'Victorious Aatrox',
            chromas: true,
          },
          {
            id: '266011',
            num: 11,
            name: 'Odyssey Aatrox',
            chromas: true,
          },
        ],
        lore: 'Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.',
        blurb:
          'Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...',
        allytips: [
          'Use Umbral Dash while casting The Darkin Blade to increase your chances of hitting the enemy.',
          "Crowd Control abilities like Infernal Chains or your allies' immobilizing effects will help you set up The Darkin Blade.",
          'Cast World Ender when you are sure you can force a fight.',
        ],
        enemytips: [
          "Aatrox's attacks are very telegraphed, so use the time to dodge the hit zones.",
          "Aatrox's Infernal Chains are easier to exit when running towards the sides or at Aatrox.",
          'Keep your distance when Aatrox uses his Ultimate to prevent him from reviving.',
        ],
        tags: ['Fighter', 'Tank'],
        partype: 'Blood Well',
        info: {
          attack: 8,
          defense: 4,
          magic: 3,
          difficulty: 4,
        },
        stats: {
          hp: 580,
          hpperlevel: 90,
          mp: 0,
          mpperlevel: 0,
          movespeed: 345,
          armor: 38,
          armorperlevel: 3.25,
          spellblock: 32,
          spellblockperlevel: 1.25,
          attackrange: 175,
          hpregen: 3,
          hpregenperlevel: 1,
          mpregen: 0,
          mpregenperlevel: 0,
          crit: 0,
          critperlevel: 0,
          attackdamage: 60,
          attackdamageperlevel: 5,
          attackspeedperlevel: 2.5,
          attackspeed: 0.651,
        },
        spells: [
          {
            id: 'AatroxQ',
            name: 'The Darkin Blade',
            description:
              'Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.',
            tooltip:
              'Aatrox slams his greatsword, dealing <physicalDamage>{{ qdamage }} physical damage</physicalDamage>. If they are hit on the edge, they are briefly <status>Knocked Up</status> and they take <physicalDamage>{{ qedgedamage }}</physicalDamage> instead. This Ability can be <recast>Recast</recast> twice, each one changing shape and dealing 25% more damage than the previous one.',
            leveltip: {
              label: ['Cooldown', 'Damage', 'Total AD Ratio'],
              effect: [
                '{{ cooldown }} -> {{ cooldownNL }}',
                '{{ qbasedamage }} -> {{ qbasedamageNL }}',
                '{{ qtotaladratio*100.000000 }}% -> {{ qtotaladrationl*100.000000 }}%',
              ],
            },
            maxrank: 5,
            cooldown: [14, 12, 10, 8, 6],
            cooldownBurn: '14/12/10/8/6',
            cost: [0, 0, 0, 0, 0],
            costBurn: '0',
            datavalues: {},
            effect: [
              null,
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
            ],
            effectBurn: [null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            vars: [],
            costType: 'No Cost',
            maxammo: '-1',
            range: [25000, 25000, 25000, 25000, 25000],
            rangeBurn: '25000',
            image: {
              full: 'AatroxQ.png',
              sprite: 'spell0.png',
              group: 'spell',
              x: 240,
              y: 48,
              w: 48,
              h: 48,
            },
            resource: 'No Cost',
          },
          {
            id: 'AatroxW',
            name: 'Infernal Chains',
            description:
              'Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.',
            tooltip:
              'Aatrox fires a chain, <status>Slowing</status> the first enemy hit by {{ wslowpercentage*-100 }}% for {{ wslowduration }} seconds and dealing <physicalDamage>{{ wdamage }} physical damage</physicalDamage>. Champions and large jungle monsters have {{ wslowduration }} seconds to leave the impact area or be <status>Pulled</status> back to the center and damaged again for the same amount.',
            leveltip: {
              label: ['Cooldown', 'Damage'],
              effect: [
                '{{ cooldown }} -> {{ cooldownNL }}',
                '{{ wbasedamage }} -> {{ wbasedamageNL }}',
              ],
            },
            maxrank: 5,
            cooldown: [26, 23, 20, 17, 14],
            cooldownBurn: '26/23/20/17/14',
            cost: [0, 0, 0, 0, 0],
            costBurn: '0',
            datavalues: {},
            effect: [
              null,
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
            ],
            effectBurn: [null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            vars: [],
            costType: 'No Cost',
            maxammo: '-1',
            range: [825, 825, 825, 825, 825],
            rangeBurn: '825',
            image: {
              full: 'AatroxW.png',
              sprite: 'spell0.png',
              group: 'spell',
              x: 288,
              y: 48,
              w: 48,
              h: 48,
            },
            resource: 'No Cost',
          },
          {
            id: 'AatroxE',
            name: 'Umbral Dash',
            description:
              'Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.',
            tooltip:
              '<spellPassive>Passive:</spellPassive> Aatrox gains <lifeSteal>{{ espellvamp }}% Omnivamp</lifeSteal> against champions, increased to <lifeSteal>{{ espellvampempowered }}% Omnivamp</lifeSteal> during <keywordMajor>World Ender</keywordMajor>.<br /><br /><spellActive>Active:</spellActive> Aatrox dashes. He can use this Ability while winding up his other Abilities.',
            leveltip: {
              label: ['Cooldown', 'Healing %', 'Healing % during World Ender'],
              effect: [
                '{{ cooldown }} -> {{ cooldownNL }}',
                '{{ espellvamp }}% -> {{ espellvampNL }}%',
                '{{ espellvampempowered }}% -> {{ espellvampempoweredNL }}%',
              ],
            },
            maxrank: 5,
            cooldown: [9, 8, 7, 6, 5],
            cooldownBurn: '9/8/7/6/5',
            cost: [0, 0, 0, 0, 0],
            costBurn: '0',
            datavalues: {},
            effect: [
              null,
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
            ],
            effectBurn: [null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            vars: [],
            costType: 'No Cost',
            maxammo: '1',
            range: [25000, 25000, 25000, 25000, 25000],
            rangeBurn: '25000',
            image: {
              full: 'AatroxE.png',
              sprite: 'spell0.png',
              group: 'spell',
              x: 336,
              y: 48,
              w: 48,
              h: 48,
            },
            resource: 'No Cost',
          },
          {
            id: 'AatroxR',
            name: 'World Ender',
            description:
              'Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and movement speed. If he gets a takedown, this effect is extended.',
            tooltip:
              'Aatrox reveals his true demonic form, <status>Fearing</status> nearby minions for {{ rminionfearduration }} seconds and gaining <speed>{{ rmovementspeedbonus*100 }}% Move Speed</speed> decaying over {{ rduration }} seconds. He also gains <scaleAD>{{ rtotaladamp*100 }}% Attack Damage</scaleAD> and increases <healing>self-healing by {{ rhealingamp*100 }}%</healing> for the duration.<br /><br />Champion takedowns extend the duration of this effect by {{ rextension }} seconds and refresh the <speed>Move Speed</speed> effect.',
            leveltip: {
              label: [
                'Total Attack Damage Increase',
                'Healing Increase',
                'Move Speed',
                'Cooldown',
              ],
              effect: [
                '{{ rtotaladamp*100.000000 }}% -> {{ rtotaladampnl*100.000000 }}%',
                '{{ rhealingamp*100.000000 }}% -> {{ rhealingampnl*100.000000 }}%',
                '{{ rmovementspeedbonus*100.000000 }}% -> {{ rmovementspeedbonusnl*100.000000 }}%',
                '{{ cooldown }} -> {{ cooldownNL }}',
              ],
            },
            maxrank: 3,
            cooldown: [120, 100, 80],
            cooldownBurn: '120/100/80',
            cost: [0, 0, 0],
            costBurn: '0',
            datavalues: {},
            effect: [
              null,
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ],
            effectBurn: [null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            vars: [],
            costType: 'No Cost',
            maxammo: '-1',
            range: [25000, 25000, 25000],
            rangeBurn: '25000',
            image: {
              full: 'AatroxR.png',
              sprite: 'spell0.png',
              group: 'spell',
              x: 384,
              y: 48,
              w: 48,
              h: 48,
            },
            resource: 'No Cost',
          },
        ],
        passive: {
          name: 'Deathbringer Stance',
          description:
            "Periodically, Aatrox's next basic attack deals bonus <physicalDamage>physical damage</physicalDamage> and heals him, based on the target's max health. ",
          image: {
            full: 'Aatrox_Passive.png',
            sprite: 'passive0.png',
            group: 'passive',
            x: 0,
            y: 0,
            w: 48,
            h: 48,
          },
        },
        recommended: [],
      },
    },
  };
  
  /*
  
  To deal with arrays:
  
  .filter()  - filter with a certain trait
  .map() - break down and return the array, you can run a function on each item
  .reduce() - combine all items into 1 under a function
  .forEach() - iterate through your array
   
  for loops - iterate through your array with a starting and ending index (i)
  
  .length - the size of your array
  .join() - put together all items in an array into a string with a delimiter
  .split() - break down a string into array items
  .splice() - remove item from array at an index
  .push() - put new item to the end of array
  .slice() - slice off a number of items from array with start and end
  .includes() - returns true if something is found within the array
  .indexOf() - returns the index of what you're looking for
  
  
  To deal with objects
  
  Object.keys()
  Object.values()
  Object.entries()
  
  const { key, anotherKey } = object;
  
  */
  
  // 1. Create a 'skins' list, and assign it to Aatrox's original skins list
  /*
  [
      {
      "id": "266000",
      "num": 0,
      "name": "default",
      "chromas": false
      },
      {
      "id": "266001",
      "num": 1,
      "name": "Justicar Aatrox",
      "chromas": false
      },
      {
      "id": "266002",
      "num": 2,
      "name": "Mecha Aatrox",
      "chromas": true
      }
  ]
  */
  



  // 2. From the skins list, I need an array of skin names, just the names.
  // ['Mecha Aatrox', 'Justicar Aatrox']


  
  // 3. From the skins list, I need a array of objects that looks like this:
  /*
  
  [
      {
          skinName: 'Mecha Aatrox',
          id: '266002'
      },
      {
          skinName: 'Blood Moon Aatrox',
          id: '266007'
      }
      ...
  ]
  
  */
  
  // 4. From the skins list, I need an object that looks like this:
  
  // push items into an object
  // data['Mecha Aatrox'] = id
  
  /*
  
  {
      'Mecha Aatrox': '266003',
      'Blood Moon Aatrox': '266007',
      ...
  }
  
  
  */
  
  // 5. Show me a list of skins with just the names like Q#2. But only show me skins that have chromas.
  
  const q1 = (champion) => {
    return champion.data.Aatrox.skins;
  };

  const q2 = champion => champion.data.Aatrox.skins.map(v => v.name)

  const q3 = (champion) => {
    let skinAndId = champion.data.Aatrox.skins.map((v) => ({
        ["skinName"]: v.name,
        ["id"]: v.id
    }));
    return skinAndId.slice(1, skinAndId.length);
};


const q4 = (champion) => {
  let objectList = {};
  for (let i = 0; i < champion.data.Aatrox.skins.length; i++) {
    objectList[champion.data.Aatrox.skins.name] = champion.data.Aatrox.skins.id;
  }
  return objectList;
};


const q5 = (champion) => {
  let championChromas = [];
  return(champion.data.Aatrox.skins.filter(v => v.chromas))
};

  
  console.log(q1(data)); 

  console.log(q2(data));

  console.log(q3(data));

  console.log(q4(data));

  console.log(q5(data));