export interface BossSeed {
  name: string;
  type: "boss" | "great" | "invasion" | "legendary";
  region: Region;
  location: string;
  hard: boolean;
  night: boolean;
  extra?: string;
}

type Region =
  | "Limgrave"
  | "Weeping Peninsula"
  | "Liurnia of the Lakes"
  | "Altus Plateau"
  | "Caelid"
  | "Mt. Gelmir & Volcano Manor";
// | "Limgrave"
// | "Liurnia"
// | "Caelid"
// | "Altus Plateau"
// | "Mountaintops of the Giants"
// | "Roundtable Hold"
// | "Siofra River"
// | "Ainsel River"
// | "Deeproot Depths"
// | "Crumbling Farum Azula";

export const caelidBosses = [
  {
    name: "Magma Wyrm",
    type: "boss",
    region: "Caelid",
    location: "Gael Tunnel",
    hard: false,
    night: false,
  },
  {
    name: "Erdtree Avatar",
    type: "boss",
    region: "Caelid",
    location: "West Minor Erdtree",
    hard: false,
    night: false,
  },
  {
    name: "Erdtree Burial Watchdog x2",
    type: "boss",
    region: "Caelid",
    location: "Minor Erdtree Catacombs",
    hard: false,
    night: false,
  },
  {
    name: "Mad Pumpkin Head x2",
    type: "boss",
    region: "Caelid",
    location: "Caelem Ruins Underground",
    hard: false,
    night: false,
  },
  {
    name: "Knights Of The Great Jar x3",
    type: "boss",
    region: "Caelid",
    location: "Caelid Colosseum",
    hard: false,
    night: false,
  },
  {
    name: "Frenzied Duelist",
    type: "boss",
    region: "Caelid",
    location: "Gael Tunnel",
    hard: false,
    night: false,
  },
  {
    name: "Decaying Ekzykes",
    type: "boss",
    region: "Caelid",
    location: "Caelid Highway South",
    hard: false,
    night: false,
  },
  {
    name: "Cemetery Shade",
    type: "boss",
    region: "Caelid",
    location: "Caelid Catacombs",
    hard: false,
    night: false,
  },
  {
    name: "Night's Cavalry",
    type: "boss",
    region: "Caelid",
    location: "Caelid Highway South",
    hard: true,
    night: true,
  },
  {
    name: "Death Rite Bird",
    type: "boss",
    region: "Caelid",
    location: "Southern Aeonia Swamp Bank",
    hard: true,
    night: true,
  },
  {
    name: "Commander O'Neil",
    type: "boss",
    region: "Caelid",
    location: "Aeonia Swamp",
    hard: false,
    night: false,
  },
  {
    name: "Millicent",
    type: "boss",
    region: "Caelid",
    location: "Aeonia Swamp",
    hard: false,
    night: false,
  },
  {
    name: "Nox Swordstress & Nox Priest",
    type: "boss",
    region: "Caelid",
    location: "Chair-Crypt Of Sellia",
    hard: false,
    night: false,
  },
  {
    name: "Fallingstar Beast",
    type: "boss",
    region: "Caelid",
    location: "Sellia Crystal Tunnel",
    hard: false,
    night: false,
  },
  {
    name: "Cleanrot Knight x2",
    type: "boss",
    region: "Caelid",
    location: "Abandoned Cave",
    hard: false,
    night: false,
  },
  {
    name: "Battlemage Hugues",
    type: "boss",
    region: "Caelid",
    location: "Sellia Evergaol",
    hard: false,
    night: false,
  },
  {
    name: "Elder Dragon Greyoll",
    type: "boss",
    region: "Caelid",
    location: "Outside Fort Faroth",
    hard: false,
    night: false,
  },
  {
    name: "Crystalians x3",
    type: "boss",
    region: "Caelid",
    location: "Sellia Hideaway",
    hard: false,
    night: false,
  },
  {
    name: "Godskin Apostle",
    type: "boss",
    region: "Caelid",
    location: "Divine Tower Of Caelid",
    hard: true,
    night: false,
  },
  {
    name: "Bell Bearing Hunter",
    type: "boss",
    region: "Caelid",
    location: "Isolated Merchant's Shack",
    hard: true,
    night: true,
  },
  {
    name: "Putrid Avatar",
    type: "boss",
    region: "Caelid",
    location: "East Minor Erdtree",
    hard: false,
    night: false,
  },
  {
    name: "Beastman Of Farum Azula x2",
    type: "boss",
    region: "Caelid",
    location: "Dragonbarrow Cave",
    hard: false,
    night: false,
  },
  {
    name: "Night's Cavalry",
    type: "boss",
    region: "Caelid",
    location: "Lenne's Rise Bridge",
    hard: false,
    night: true,
  },
  {
    name: "Flying Dragon Greyoll",
    type: "boss",
    region: "Caelid",
    location: "Farum Greatbridge",
    hard: false,
    night: false,
  },
  {
    name: "Black Blade Kindred",
    type: "boss",
    region: "Caelid",
    location: "Bestial Sanctum",
    hard: false,
    night: false,
  },
  {
    name: "Gurranq",
    type: "boss",
    region: "Caelid",
    location: "Bestial Sanctum",
    hard: false,
    night: false,
  },
  {
    name: "Misbegotten Warrior & Crucible Knight",
    type: "boss",
    region: "Caelid",
    location: "Redmane Castle",
    hard: false,
    night: false,
  },
  {
    name: "Starscourge Radahn",
    type: "legendary",
    region: "Caelid",
    location: "Redmane Castle",
    hard: true,
    night: false,
  },
  {
    name: "Putrid Tree Spirit",
    type: "boss",
    region: "Caelid",
    location: "War-Dead Catacombs",
    hard: false,
    night: false,
  },
] satisfies BossSeed[];

export const mtGelmirAndVolcanoManor = [
  {
    name: "Anastasia, Tarnished-Eater",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Corpse-Stench Shack",
    hard: false,
    night: false,
  },
  {
    name: "Grafted Scion",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "North Mt. Gelmir",
    hard: false,
    night: false,
  },
  {
    name: "Demi-Human Queen Margot",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Volcano Cave",
    hard: false,
    night: false,
  },
  {
    name: "Ulcerated Tree Spirit",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Minor Erdtree",
    hard: false,
    night: false,
  },
  {
    name: "Kindred Of Rot x2",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Seethewater Cave",
    hard: false,
    night: false,
  },
  {
    name: "Red Wolf Of The Champion",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Gelmir Hero's Grave",
    hard: false,
    night: false,
  },
  {
    name: "Full-Grown Fallingstar Beast",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Ninth Mt. Gelmir Campsite",
    hard: true,
    night: false,
  },
  {
    name: "Wormface",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Road Of Iniquity",
    hard: false,
    night: false,
  },
  {
    name: "Fire Prelate",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Fort Laiedd",
    hard: false,
    night: false,
  },
  {
    name: "Magma Wyrm",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "South Of Fort Laiedd",
    hard: false,
    night: false,
  },
  {
    name: "Demi-Human Queen Maggie",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Hermit Village",
    hard: false,
    night: false,
  },
  {
    name: "Abductor Virgin x2",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Volcano Manor",
    hard: false,
    night: false,
    extra: "Accessible from Academy",
  },
  {
    name: "Inquisitor Ghiza",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Volcano Manor Upper Floor",
    hard: false,
    night: false,
  },
  {
    name: "Magma Wyrm",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Volcano Manor",
    hard: false,
    night: false,
  },
  {
    name: "Godskin Noble",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Volcano Manor",
    hard: true,
    night: false,
  },
  {
    name: "Rykard, Lord Of Blasphemy",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Volcano Manor",
    hard: true,
    night: false,
  },
  {
    name: "Tanith's Knight",
    type: "boss",
    region: "Mt. Gelmir & Volcano Manor",
    location: "Volcano Manor",
    hard: false,
    night: false,
  },
] satisfies BossSeed[];

export const bosses = [
  {
    name: "Grafted Scion",
    type: "boss",
    region: "Limgrave",
    location: "Chapel of Anticipation",
    hard: true,
    night: false,
  },
  {
    name: "Soldier Of Godrick",
    type: "boss",
    region: "Limgrave",
    location: "Fringefold Hero's Grave",
    hard: false,
    night: false,
  },
  {
    name: "Demi-Human Chiefs",
    type: "boss",
    region: "Limgrave",
    location: "Coastal Cave",
    hard: false,
    night: false,
  },
  {
    name: "Burial Tree Watchdog",
    type: "boss",
    region: "Limgrave",
    location: "Stormfoot Catacombs",
    hard: false,
    night: false,
  },
  {
    name: "Beastman of Farum Azula",
    type: "boss",
    region: "Limgrave",
    location: "Groveside Cave",
    hard: false,
    night: false,
  },
  {
    name: "Stonedigger Troll",
    type: "boss",
    region: "Limgrave",
    location: "Limgrave Tunnels",
    hard: false,
    night: false,
  },
  {
    name: "Grave Warden Duelist",
    type: "boss",
    region: "Limgrave",
    location: "Murkwater Catacombs",
    hard: false,
    night: false,
  },
  {
    name: "Bloody Finger Nerijus",
    type: "invasion",
    region: "Limgrave",
    location: "Agheel River",
    hard: false,
    night: false,
  },
  {
    name: "Patches",
    type: "boss",
    region: "Limgrave",
    location: "Murkwater Cave",
    hard: false,
    night: false,
  },
  {
    name: "Guardian Golem",
    type: "boss",
    region: "Limgrave",
    location: "Highroad Cave",
    hard: false,
    night: false,
  },
  {
    name: "Black Knife Assassin",
    type: "boss",
    region: "Limgrave",
    location: "Deathtouched Catacombs",
    hard: false,
    night: false,
  },
  {
    name: "Recusant Henricus",
    type: "invasion",
    region: "Limgrave",
    location: "Colosseum Road",
    hard: false,
    night: false,
  },
  {
    name: "Mad Pumpkin Head",
    type: "boss",
    region: "Limgrave",
    location: "Waypoint Ruins",
    hard: false,
    night: false,
  },
  {
    name: "Night's Cavalry",
    type: "boss",
    region: "Limgrave",
    location: "Highway Bridge",
    hard: true,
    night: true,
  },
  {
    name: "Tree Sentinel",
    type: "boss",
    region: "Limgrave",
    location: "Church of Elleh Road",
    hard: false,
    night: false,
  },
  {
    name: "Flying Dragon Agheel",
    type: "boss",
    region: "Limgrave",
    location: "Agheel Lake",
    hard: false,
    night: false,
  },
  {
    name: "Tibia Mariner",
    type: "boss",
    region: "Limgrave",
    location: "Summonwater Village",
    hard: false,
    night: false,
  },
  {
    name: "Anastasia, Tarnished-Eater",
    type: "invasion",
    region: "Limgrave",
    location: "Smoldering Church",
    hard: false,
    night: false,
  },
  {
    name: "Bloodhound Knight Darriwil",
    type: "boss",
    region: "Limgrave",
    location: "Forlorn Hound Evergaol",
    hard: false,
    night: false,
  },
  {
    name: "Crucible Knight",
    type: "boss",
    region: "Limgrave",
    location: "Stormhill Evergaol",
    hard: true,
    night: false,
  },
  {
    name: "Bell Bearing Hunter",
    type: "boss",
    region: "Limgrave",
    location: "Warmaster's Shack",
    hard: true,
    night: true,
  },
  {
    name: "Deathbird",
    type: "boss",
    region: "Limgrave",
    location: "Warmaster's Shack East",
    hard: true,
    night: true,
  },
  {
    name: "Old Knight Istvan",
    type: "invasion",
    region: "Limgrave",
    location: "Colosseum Road",
    hard: false,
    night: false,
    extra: "VOLCANO MANOR CONTRACT",
  },
  {
    name: "Grafted Scion x2",
    type: "boss",
    region: "Limgrave",
    location: "Fringefolk Hero's Grave",
    hard: true,
    night: false,
  },
  {
    name: "Ulcerated Tree Spirit",
    type: "boss",
    region: "Limgrave",
    location: "Fringefolk Hero's Grave",
    hard: true,
    night: false,
  },
  {
    name: "Ulcerated Tree Spirit",
    type: "boss",
    region: "Limgrave",
    location: "Stormveil Castle",
    hard: true,
    night: false,
  },
  {
    name: "Crucible Knight",
    type: "boss",
    region: "Limgrave",
    location: "Stormveil Castle",
    hard: true,
    night: false,
  },
  {
    name: "Grafted Scion",
    type: "boss",
    region: "Limgrave",
    location: "Stormveil Castle",
    hard: true,
    night: false,
  },
  {
    name: "Margit, The Fell Omen",
    type: "boss",
    region: "Limgrave",
    location: "Stormveil Castle",
    hard: true,
    night: false,
  },
  {
    name: "Godrick The Grafted",
    type: "legendary",
    region: "Limgrave",
    location: "Stormveil Castle",
    hard: true,
    night: false,
  },
  {
    name: "Burial Tree Watchdog + Imps",
    type: "boss",
    region: "Weeping Peninsula",
    location: "Impaler's Catacombs",
    hard: false,
    night: false,
  },
  {
    name: "Runebear",
    type: "boss",
    region: "Weeping Peninsula",
    location: "Earthbore Cave",
    hard: false,
    night: false,
  },
  {
    name: "Night's Cavalry",
    type: "boss",
    region: "Weeping Peninsula",
    location: "Castle Morne Rampart",
    hard: true,
    night: true,
  },
  {
    name: "Deathbird",
    type: "boss",
    region: "Weeping Peninsula",
    location: "Castle Morne Outskirts",
    hard: true,
    night: true,
  },
  {
    name: "Cemetery Shade",
    type: "boss",
    region: "Weeping Peninsula",
    location: "Tombsward Catacombs",
    hard: false,
    night: false,
  },
  {
    name: "Erdtree Avatar",
    type: "boss",
    region: "Weeping Peninsula",
    location: "Minor Erdtree",
    hard: false,
    night: false,
  },
  {
    name: "Scaly Misbegotten",
    type: "boss",
    region: "Weeping Peninsula",
    location: "Morene Tunnel",
    hard: false,
    night: false,
  },
  {
    name: "Miranda The Blighted Bloom",
    type: "boss",
    region: "Weeping Peninsula",
    location: "Tombsward Cave",
    hard: false,
    night: false,
  },
  {
    name: "Ancient Hero of Zamor",
    type: "boss",
    region: "Weeping Peninsula",
    location: "Weeping Evergaol",
    hard: false,
    night: false,
  },
  {
    name: "Leonine Misbegotten",
    type: "boss",
    region: "Weeping Peninsula",
    location: "Castle Morne",
    hard: true,
    night: false,
  },
  {
    name: "Cleanrot Knight",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Stillwater Cave",
    hard: false,
    night: false,
  },
  {
    name: "Adan, Thief of Fire",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Malefactor's Evergaol",
    hard: false,
    night: false,
  },
  {
    name: "Burial Tree Watchdog",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Cliffbottom Catacombs",
    hard: false,
    night: false,
  },
  {
    name: "Tibia Mariner",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "East Liurnia",
    hard: false,
    night: false,
  },
  {
    name: "Night's Cavalry",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Gate Town Bridge",
    hard: false,
    night: true,
  },
  {
    name: "Preceptor Miriam",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Caria Study Hall",
    hard: true,
    night: false,
  },
  {
    name: "Godskin Noble",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Divine Tower Bridge",
    hard: true,
    night: false,
  },
  {
    name: "Deathbird",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Scenic Isle",
    hard: false,
    night: true,
  },
  {
    name: "Bloodhound Knight",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Lakeside Crystal Cave",
    hard: false,
    night: false,
  },
  {
    name: "Crayfish/Grafted Scion",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Fallen Ruins of the Lake",
    hard: false,
    night: false,
  },
  {
    name: "Glintstone Dragon Smarag",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Temple Quarter",
    hard: true,
    night: false,
  },
  {
    name: "Crystalians",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Academy Crystal Cave",
    hard: true,
    night: false,
  },
  {
    name: "Death Rite Bird",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Gate Town North",
    hard: true,
    night: false,
  },
  {
    name: "Ring Blade Crystalian",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Raya Lucaria Crystal Tunnel",
    hard: true,
    night: false,
  },
  {
    name: "Bell Bearing Hunter",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Church of Vows",
    hard: true,
    night: true,
  },
  {
    name: "Erdtree Avatar",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "East Minor Erdtree",
    hard: false,
    night: false,
  },
  {
    name: "Cemetery Shade & Black Knife Assassin",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Black Knife Catacombs",
    hard: false,
    night: false,
  },
  {
    name: "Festering Fingerprint Vyke",
    type: "invasion",
    region: "Liurnia of the Lakes",
    location: "Church of Inhibition",
    hard: true,
    night: false,
  },
  {
    name: "Night's Cavalry",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Bellum Highway",
    hard: true,
    night: true,
  },
  {
    name: "Royal Revenant",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Kingsrealm Ruins Underground",
    hard: false,
    night: false,
  },
  {
    name: "Bols, Carian Knight",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Cuckoo's Evergaol",
    hard: false,
    night: false,
  },
  {
    name: "Edgar the Revenger",
    type: "invasion",
    region: "Liurnia of the Lakes",
    location: "Revenger's Shack",
    hard: false,
    night: false,
  },
  {
    name: "Erdtree Avatar",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "West Minor Erdtree",
    hard: false,
    night: false,
  },
  {
    name: "Spirit-Caller Snail",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Road's End Catacombs",
    hard: false,
    night: false,
  },
  {
    name: "Omenkiller",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Village of the Albinaurics",
    hard: false,
    night: false,
  },
  {
    name: "Dragons x3",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Moonlight Altar",
    hard: false,
    night: false,
  },
  {
    name: "Red Wolf",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Moonlight Altar",
    hard: true,
    night: false,
  },
  {
    name: "Alecto, Black Knife Ringleader",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Ringleader's Evergaol",
    hard: true,
    night: false,
  },
  {
    name: "Royal Knight Loretta",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Caria Manor",
    hard: true,
    night: false,
  },
  {
    name: "Black Knife Loretta",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Caria Manor",
    hard: true,
    night: false,
  },
  {
    name: "Glintstone Dragon Adula",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Caria Manor & Moonlight Altar",
    hard: false,
    night: false,
    extra: "2 PARTS",
  },
  {
    name: "Blaidd",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Ranni's Rise",
    hard: false,
    night: false,
    extra: "RANNI'S QUESTLINE",
  },
  {
    name: "Red Wolf of Radagon",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Academy",
    hard: true,
    night: false,
  },
  {
    name: "Alabaster Lord",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Royal Grave Evergaol",
    hard: false,
    night: false,
  },
  {
    name: "Magma Wyrm Makar",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Ruin-Strewn Precipice",
    hard: true,
    night: false,
  },
  {
    name: "Great Horned Tragoth",
    type: "invasion",
    region: "Liurnia of the Lakes",
    location: "Ruin-Strewn Precipice",
    hard: false,
    night: false,
    extra: "VOLCANO MANOR CONTRACT",
  },
  {
    name: "Ravenmount Assassin",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Academy",
    hard: false,
    night: false,
  },
  {
    name: "Red Wolf of Radagon",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Academy",
    hard: true,
    night: false,
  },
  {
    name: "Moongrum, Carian Knight",
    type: "boss",
    region: "Liurnia of the Lakes",
    location: "Academy",
    hard: false,
    night: false,
  },
  {
    name: "Rennala, Queen of the Full Moon",
    type: "legendary",
    region: "Liurnia of the Lakes",
    location: "Academy",
    hard: true,
    night: false,
    extra: "LEGEND",
  },
  {
    name: "Sorceress Sellen or Witch-Hunter Jerren",
    type: "invasion",
    region: "Liurnia of the Lakes",
    location: "Academy",
    hard: false,
    night: false,
    extra: "SELLEN'S QUESTLINE",
  },
  {
    name: "Ancient Dragon Lansseax",
    type: "boss",
    region: "Altus Plateau",
    location: "Altus Plateau",
    hard: false,
    night: false,
    extra: "2 PARTS",
  },
  {
    name: "Misbegotten Warrior & Perfumer Tricia",
    type: "boss",
    region: "Altus Plateau",
    location: "Unsightly Catacombs",
    hard: false,
    night: false,
  },
  {
    name: "Godfrey The Grafted",
    type: "boss",
    region: "Altus Plateau",
    location: "Golden Lineage Evergaol",
    hard: false,
    night: false,
  },
  {
    name: "Night's Cavalry",
    type: "boss",
    region: "Altus Plateau",
    location: "Altus Highway",
    hard: false,
    night: true,
  },
  {
    name: "Demi-Human Queen Gilika",
    type: "boss",
    region: "Altus Plateau",
    location: "Lux Ruins",
    hard: false,
    night: false,
  },
  {
    name: "Tibia Mariner",
    type: "boss",
    region: "Altus Plateau",
    location: "Wyndham Ruins",
    hard: false,
    night: false,
  },
  {
    name: "Necromancer Garris & Black Knife Assassin",
    type: "boss",
    region: "Altus Plateau",
    location: "Sage's Cave",
    hard: false,
    night: false,
  },
  {
    name: "Erdtree Burial Watchdog",
    type: "boss",
    region: "Altus Plateau",
    location: "Wyndham Catacombs",
    hard: false,
    night: false,
  },
  {
    name: "Eleonora, Violet Bloody Finger",
    type: "invasion",
    region: "Altus Plateau",
    location: "Second Church Of Marika",
    hard: false,
    night: false,
  },
  {
    name: "Stonedigger Troll",
    type: "boss",
    region: "Altus Plateau",
    location: "Old Altus Tunnel",
    hard: false,
    night: false,
  },
  {
    name: "Maleigh Marais, Shaded Castle Castellan",
    type: "boss",
    region: "Altus Plateau",
    location: "The Shaded Castle",
    hard: false,
    night: false,
  },
  {
    name: "Elemer Of The Briar",
    type: "boss",
    region: "Altus Plateau",
    location: "The Shaded Castle",
    hard: true,
    night: false,
  },
  {
    name: "Rileigh The Idle",
    type: "invasion",
    region: "Altus Plateau",
    location: "Bridge Of Iniquity",
    hard: false,
    night: false,
    extra: "VOLCANO MANOR CONTRACT",
  },
  {
    name: "Sanguine Noble",
    type: "boss",
    region: "Altus Plateau",
    location: "Writheblood Ruins",
    hard: false,
    night: false,
  },
  {
    name: "Magnus The Beast Claw",
    type: "boss",
    region: "Altus Plateau",
    location: "Writheblood Ruins",
    hard: false,
    night: false,
  },
  {
    name: "Wormface",
    type: "boss",
    region: "Altus Plateau",
    location: "Minor Erdtree",
    hard: false,
    night: false,
  },
  {
    name: "Godskin Apostle",
    type: "boss",
    region: "Altus Plateau",
    location: "Dominula Windmill Village",
    hard: true,
    night: false,
  },
  {
    name: "Crystalians x2",
    type: "boss",
    region: "Altus Plateau",
    location: "Altus Tunnel",
    hard: false,
    night: false,
  },
  {
    name: "Black Knife Assassin",
    type: "boss",
    region: "Altus Plateau",
    location: "Sainted Hero's Grave Entrance",
    hard: false,
    night: false,
  },
  {
    name: "Ancient Hero Of Zamor",
    type: "boss",
    region: "Altus Plateau",
    location: "Sainted Hero's Grave",
    hard: false,
    night: false,
  },
  {
    name: "Omenkiller & Miranda The Blighted Bloom",
    type: "boss",
    region: "Altus Plateau",
    location: "Perfumer's Grotto",
    hard: false,
    night: false,
  },
  {
    name: "Fallingstar Beast",
    type: "boss",
    region: "Altus Plateau",
    location: "South Altus Plateau Crater",
    hard: false,
    night: false,
  },
  {
    name: "Tree Sentinel x2",
    type: "boss",
    region: "Altus Plateau",
    location: "Leyndell Entrance",
    hard: true,
    night: false,
  },
  ...caelidBosses,
  ...mtGelmirAndVolcanoManor,
] satisfies BossSeed[];

export type BossRegion = BossSeed["region"];
