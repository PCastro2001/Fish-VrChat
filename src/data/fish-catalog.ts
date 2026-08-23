export interface FishRecord {
  name: string;
  habitat: string;
  waterType: string;
  weather: string;
  timeOfDay: string;
  rarity?: string;
  minWeight?: string;
  maxWeight?: string;
  imageUrl?: string;
  conditionMultiplier?: number;
}

/** Normal-size fish records imported from the public TRUE Perfection Tracker. */
export const FISH_CATALOG: readonly FishRecord[] = [
  {
    "name": "Bream",
    "habitat": "Coconut Bay",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Day",
    "rarity": "Abundant",
    "minWeight": "1 kg",
    "maxWeight": "6 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/8/8c/Bream.webp/120px-Bream.webp.png"
  },
  {
    "name": "Roach",
    "habitat": "Coconut Bay",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Evening",
    "rarity": "Abundant",
    "minWeight": "0.2 kg",
    "maxWeight": "2 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/9/99/Roach.webp/120px-Roach.webp.png"
  },
  {
    "name": "Goldfish",
    "habitat": "Coconut Bay",
    "waterType": "Freshwater",
    "weather": "Clear",
    "timeOfDay": "Any",
    "rarity": "Abundant",
    "minWeight": "0.5 kg",
    "maxWeight": "2 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/4/4f/Goldfish.webp/120px-Goldfish.webp.png",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Mackerel",
    "habitat": "Coconut Bay",
    "waterType": "Saltwater",
    "weather": "Foggy",
    "timeOfDay": "Any",
    "rarity": "Abundant",
    "minWeight": "0.2 kg",
    "maxWeight": "2.5 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/6/6d/Mackerel.webp/120px-Mackerel.webp.png",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Needlefish",
    "habitat": "Coconut Bay",
    "waterType": "Saltwater",
    "weather": "Stormy",
    "timeOfDay": "Any",
    "rarity": "Abundant",
    "minWeight": "0.9 kg",
    "maxWeight": "11 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/5/59/Needlefish.webp/120px-Needlefish.webp.png",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Carp",
    "habitat": "Coconut Bay",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Morning",
    "rarity": "Common",
    "minWeight": "2 kg",
    "maxWeight": "45 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/a/af/Carp.webp/120px-Carp.webp.png"
  },
  {
    "name": "Black Shark Minnow",
    "habitat": "Coconut Bay",
    "waterType": "Freshwater",
    "weather": "Rainy",
    "timeOfDay": "Any",
    "rarity": "Common",
    "minWeight": "1 kg",
    "maxWeight": "6 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/d/d6/Black_Sharkminnow.webp/120px-Black_Sharkminnow.webp.png",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Boxfish",
    "habitat": "Coconut Bay",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Common",
    "minWeight": "0.4 kg",
    "maxWeight": "4 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/f/fa/Boxfish.webp/120px-Boxfish.webp.png"
  },
  {
    "name": "Gulper Eel",
    "habitat": "Coconut Bay",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Common",
    "minWeight": "1 kg",
    "maxWeight": "20 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/c/ca/Gulper_Eel.webp/120px-Gulper_Eel.webp.png"
  },
  {
    "name": "John Dory",
    "habitat": "Coconut Bay",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Common",
    "minWeight": "1 kg",
    "maxWeight": "8 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/9/9a/John_Dory.webp/120px-John_Dory.webp.png"
  },
  {
    "name": "Lionfish",
    "habitat": "Coconut Bay",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Night",
    "rarity": "Curious",
    "minWeight": "0.1 kg",
    "maxWeight": "1.5 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/3/3a/Lionfish.webp/120px-Lionfish.webp.png"
  },
  {
    "name": "Northern Pufferfish",
    "habitat": "Coconut Bay",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Day",
    "rarity": "Curious",
    "minWeight": "0.4 kg",
    "maxWeight": "2 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/e/e1/Nothern_Pufferfish.webp/120px-Nothern_Pufferfish.webp.png"
  },
  {
    "name": "Red Melon Discus",
    "habitat": "Coconut Bay",
    "waterType": "Freshwater",
    "weather": "Foggy",
    "timeOfDay": "Any",
    "rarity": "Curious",
    "minWeight": "0.0 kg",
    "maxWeight": "0.6 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/e/e6/Red_Melon_Discus.webp/120px-Red_Melon_Discus.webp.png",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Alligator Gar",
    "habitat": "Coconut Bay",
    "waterType": "Freshwater",
    "weather": "Stormy",
    "timeOfDay": "Any",
    "rarity": "Elusive",
    "minWeight": "10 kg",
    "maxWeight": "80 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/9/9c/Alligator_Gar.webp/120px-Alligator_Gar.webp.png",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Salween Rita Catfish",
    "habitat": "Coconut Bay",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Night",
    "rarity": "Elusive",
    "minWeight": "1 kg",
    "maxWeight": "8 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/6/6a/Salween_Rita_Catfish.webp/120px-Salween_Rita_Catfish.webp.png"
  },
  {
    "name": "European Anglerfish",
    "habitat": "Coconut Bay",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Night",
    "rarity": "Elusive",
    "minWeight": "7 kg",
    "maxWeight": "40 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/d/d4/European_Anglerfish.webp/120px-European_Anglerfish.webp.png"
  },
  {
    "name": "Hogfish",
    "habitat": "Coconut Bay",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Elusive",
    "minWeight": "1 kg",
    "maxWeight": "15 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/8/82/Hogfish.webp/120px-Hogfish.webp.png"
  },
  {
    "name": "Goliath Tigerfish",
    "habitat": "Coconut Bay",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Fabled",
    "minWeight": "20 kg",
    "maxWeight": "100 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/7/78/Goliath_Tigerfish.webp/120px-Goliath_Tigerfish.webp.png"
  },
  {
    "name": "Frilled Shark",
    "habitat": "Coconut Bay",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Fabled",
    "minWeight": "15 kg",
    "maxWeight": "220 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/f/f5/Frilled_Shark.webp/120px-Frilled_Shark.webp.png"
  },
  {
    "name": "Blind Bladefish",
    "habitat": "Coconut Bay",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Mythic",
    "minWeight": "4.24 kg",
    "maxWeight": "6.8 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/4/41/Blind_Bladefish.webp/120px-Blind_Bladefish.webp.png"
  },
  {
    "name": "Red Dartfin",
    "habitat": "Coconut Bay",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Mythic",
    "minWeight": "1 kg",
    "maxWeight": "24.7 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/b/b3/Red_Dartfin.webp/120px-Red_Dartfin.webp.png"
  },
  {
    "name": "Spineback Ray",
    "habitat": "Coconut Bay",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Exotic",
    "minWeight": "1,500 kg",
    "maxWeight": "6,000 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/2/20/Spineback_Ray.webp/120px-Spineback_Ray.webp.png"
  },
  {
    "name": "Dragonfly Fish",
    "habitat": "Coconut Bay",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Exotic",
    "minWeight": "2 kg",
    "maxWeight": "69.6 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/2/2e/Dragonfly_Fish.webp/120px-Dragonfly_Fish.webp.png"
  },
  {
    "name": "Ocean Perch",
    "habitat": "Crescent Isle",
    "waterType": "Saltwater",
    "weather": "Stormy",
    "timeOfDay": "Any"
  },
  {
    "name": "Tarpon",
    "habitat": "Crescent Isle",
    "waterType": "Saltwater",
    "weather": "Foggy",
    "timeOfDay": "Any"
  },
  {
    "name": "Black Scorpionfish",
    "habitat": "Crescent Isle",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Evening"
  },
  {
    "name": "Snook",
    "habitat": "Crescent Isle",
    "waterType": "Saltwater",
    "weather": "Rainy",
    "timeOfDay": "Any"
  },
  {
    "name": "Lionfish",
    "habitat": "Crescent Isle",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Night"
  },
  {
    "name": "Clownfish",
    "habitat": "Crescent Isle",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Day"
  },
  {
    "name": "Regal Blue Tang",
    "habitat": "Crescent Isle",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Morning"
  },
  {
    "name": "Parrotfish",
    "habitat": "Crescent Isle",
    "waterType": "Saltwater",
    "weather": "Clear",
    "timeOfDay": "Day"
  },
  {
    "name": "Permit",
    "habitat": "Crescent Isle",
    "waterType": "Saltwater",
    "weather": "Stormy",
    "timeOfDay": "Any"
  },
  {
    "name": "Hammerhead Shark",
    "habitat": "Crescent Isle",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Evening"
  },
  {
    "name": "Brickfish",
    "habitat": "Crescent Isle",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Armored Brutefish",
    "habitat": "Crescent Isle",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Celestial Whitefin",
    "habitat": "Crescent Isle",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Flame Guppy",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Magma Carp",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Ashscale Trout",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Basalt Eel",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Cinderfin",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Obsidian Fish",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Crystal Pike",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Molten Angler",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Ifrit Barracuda",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Pyrite Snapper",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Igneous Stingray",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Red Demonfish",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Hellmaw Grouper",
    "habitat": "Volcanic Depths",
    "waterType": "Lava",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Bluegill Sunfish",
    "habitat": "Tanglewood",
    "waterType": "Swampwater",
    "weather": "Clear",
    "timeOfDay": "Any"
  },
  {
    "name": "Bowfin",
    "habitat": "Tanglewood",
    "waterType": "Swampwater",
    "weather": "Any",
    "timeOfDay": "Evening"
  },
  {
    "name": "Channel Catfish",
    "habitat": "Tanglewood",
    "waterType": "Swampwater",
    "weather": "Foggy",
    "timeOfDay": "Any"
  },
  {
    "name": "Cottonmouth Snake",
    "habitat": "Tanglewood",
    "waterType": "Swampwater",
    "weather": "Clear",
    "timeOfDay": "Any"
  },
  {
    "name": "Frog",
    "habitat": "Tanglewood",
    "waterType": "Swampwater",
    "weather": "Rainy",
    "timeOfDay": "Any"
  },
  {
    "name": "Alligator Snapping Turtle",
    "habitat": "Tanglewood",
    "waterType": "Swampwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "American Alligator",
    "habitat": "Tanglewood",
    "waterType": "Swampwater",
    "weather": "Any",
    "timeOfDay": "Night"
  },
  {
    "name": "Giant Gharial",
    "habitat": "Tanglewood",
    "waterType": "Swampwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Venomous Watcher",
    "habitat": "Tanglewood",
    "waterType": "Swampwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Dreadshell Colossus",
    "habitat": "Tanglewood",
    "waterType": "Swampwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Ide",
    "habitat": "Luxian Dunes",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Morning"
  },
  {
    "name": "Tench",
    "habitat": "Luxian Dunes",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Night"
  },
  {
    "name": "Perch",
    "habitat": "Luxian Dunes",
    "waterType": "Freshwater",
    "weather": "Stormy",
    "timeOfDay": "Any"
  },
  {
    "name": "GiltHead Bream",
    "habitat": "Luxian Dunes",
    "waterType": "Saltwater",
    "weather": "Clear",
    "timeOfDay": "Any"
  },
  {
    "name": "Tilefish",
    "habitat": "Luxian Dunes",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Rainbow Trout",
    "habitat": "Luxian Dunes",
    "waterType": "Freshwater",
    "weather": "Foggy",
    "timeOfDay": "Any"
  },
  {
    "name": "Eel",
    "habitat": "Luxian Dunes",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Night"
  },
  {
    "name": "Bluefish",
    "habitat": "Luxian Dunes",
    "waterType": "Saltwater",
    "weather": "Rainy",
    "timeOfDay": "Any"
  },
  {
    "name": "Hawaiian Triggerfish",
    "habitat": "Luxian Dunes",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "John Dory",
    "habitat": "Luxian Dunes",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Barracuda",
    "habitat": "Luxian Dunes",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Morning"
  },
  {
    "name": "Snow Yellow Discus",
    "habitat": "Luxian Dunes",
    "waterType": "Freshwater",
    "weather": "Foggy",
    "timeOfDay": "Any"
  },
  {
    "name": "Amberjack",
    "habitat": "Luxian Dunes",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Goonch Catfish",
    "habitat": "Luxian Dunes",
    "waterType": "Freshwater",
    "weather": "Rainy",
    "timeOfDay": "Any"
  },
  {
    "name": "Siamese Giant Carp",
    "habitat": "Luxian Dunes",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Morning"
  },
  {
    "name": "Wahoo",
    "habitat": "Luxian Dunes",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Ironfin Stalker",
    "habitat": "Luxian Dunes",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Pinnate Batfish",
    "habitat": "Luxian Dunes",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Ancient Warriorfish",
    "habitat": "Luxian Dunes",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Humpback Gar",
    "habitat": "Luxian Dunes",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Shellonodon",
    "habitat": "Luxian Dunes",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Royal Bananafish",
    "habitat": "Luxian Dunes",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Any"
  },
  {
    "name": "Herring",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Abundant",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/e/e6/Herring.webp/120px-Herring.webp.png",
    "minWeight": "0.3 kg",
    "maxWeight": "1.1 kg"
  },
  {
    "name": "Haddock",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Abundant",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/9/96/Haddock.webp/120px-Haddock.webp.png",
    "minWeight": "0.9 kg",
    "maxWeight": "11 kg"
  },
  {
    "name": "Cod",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Morning",
    "rarity": "Common",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/c/c0/Cod.webp/120px-Cod.webp.png",
    "minWeight": "5 kg",
    "maxWeight": "22 kg"
  },
  {
    "name": "Atlantic Salmon",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Evening",
    "rarity": "Common",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/b/be/Atlantic_Salmon.webp/120px-Atlantic_Salmon.webp.png",
    "minWeight": "3 kg",
    "maxWeight": "6 kg"
  },
  {
    "name": "Pollock",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Rainy",
    "timeOfDay": "Any",
    "rarity": "Common",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/0/03/Pollock.webp/120px-Pollock.webp.png",
    "minWeight": "0.5 kg",
    "maxWeight": "21 kg",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Halibut",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Stormy",
    "timeOfDay": "Any",
    "rarity": "Curious",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/9/9a/Halibut.webp/120px-Halibut.webp.png",
    "minWeight": "13 kg",
    "maxWeight": "70 kg",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Crab",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Night",
    "rarity": "Curious",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/5/5b/Crab.webp/120px-Crab.webp.png",
    "minWeight": "0.4 kg",
    "maxWeight": "2 kg"
  },
  {
    "name": "Mahi-Mahi",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Day",
    "rarity": "Curious",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/f/f0/Mahi-Mahi.webp/120px-Mahi-Mahi.webp.png",
    "minWeight": "7 kg",
    "maxWeight": "15 kg"
  },
  {
    "name": "Flying Fish",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Clear",
    "timeOfDay": "Any",
    "rarity": "Curious",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/9/9a/Flying_Fish.webp/120px-Flying_Fish.webp.png",
    "minWeight": "0.4 kg",
    "maxWeight": "1.5 kg",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Albacore Tuna",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Rainy",
    "timeOfDay": "Any",
    "rarity": "Curious",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/9/90/Albacore_Tuna.webp/120px-Albacore_Tuna.webp.png",
    "minWeight": "10 kg",
    "maxWeight": "30 kg",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Sailfish",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Morning",
    "rarity": "Elusive",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/1/1e/Sailfish.webp/120px-Sailfish.webp.png",
    "minWeight": "50 kg",
    "maxWeight": "100 kg"
  },
  {
    "name": "Blobfish",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Morning",
    "rarity": "Elusive",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/b/b6/Blobfish.webp/120px-Blobfish.webp.png",
    "minWeight": "1.5 kg",
    "maxWeight": "15 kg"
  },
  {
    "name": "Common Stingray",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Night",
    "rarity": "Elusive",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/0/01/Common_Stingray.webp/120px-Common_Stingray.webp.png",
    "minWeight": "0.8 kg",
    "maxWeight": "35 kg"
  },
  {
    "name": "Seahorse",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Rainy",
    "timeOfDay": "Evening",
    "rarity": "Elusive",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/5/56/Seahorse.webp/120px-Seahorse.webp.png",
    "minWeight": "0.0 kg",
    "maxWeight": "0.1 kg",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Sunfish",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Day",
    "rarity": "Elusive",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/e/e1/Sunfish.webp/120px-Sunfish.webp.png",
    "minWeight": "234 kg",
    "maxWeight": "1,023 kg"
  },
  {
    "name": "Oarfish",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Fabled",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/0/0e/Oarfish.webp/120px-Oarfish.webp.png",
    "minWeight": "90 kg",
    "maxWeight": "300 kg"
  },
  {
    "name": "Manta Ray",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Day",
    "rarity": "Fabled",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/f/fb/Manta_Ray.webp/120px-Manta_Ray.webp.png",
    "minWeight": "55.5 kg",
    "maxWeight": "1,555 kg"
  },
  {
    "name": "Great White Shark",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Mythic",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/3/39/Great_White_Shark.webp/120px-Great_White_Shark.webp.png",
    "minWeight": "489 kg",
    "maxWeight": "1,457 kg"
  },
  {
    "name": "Giant Squid",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Mythic",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/1/1a/Giant_Squid.webp/120px-Giant_Squid.webp.png",
    "minWeight": "89 kg",
    "maxWeight": "512 kg"
  },
  {
    "name": "Abyssal Serpentfish",
    "habitat": "Open Sea",
    "waterType": "Saltwater, Swampwater",
    "weather": "Any",
    "timeOfDay": "Night",
    "rarity": "Exotic",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/5/51/Abyssal_Serpentfish.webp/120px-Abyssal_Serpentfish.webp.png",
    "minWeight": "100 kg",
    "maxWeight": "3,100 kg"
  },
  {
    "name": "Baby Megalodon",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Exotic",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/9/98/Baby_Megalodon.webp/120px-Baby_Megalodon.webp.png",
    "minWeight": "35,000 kg",
    "maxWeight": "120,000 kg"
  },
  {
    "name": "Three-Headed Salmon",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Exotic",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/4/47/Three-Headed_Salmon.webp/120px-Three-Headed_Salmon.webp.png"
  },
  {
    "name": "Barbel",
    "habitat": "Twilight Realms",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Abundant",
    "minWeight": "2.0 kg",
    "maxWeight": "11.9 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/1/1c/Barbel.webp/120px-Barbel.webp.png"
  },
  {
    "name": "Grayling",
    "habitat": "Twilight Realms",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Morning",
    "rarity": "Abundant",
    "minWeight": "0.5 kg",
    "maxWeight": "2 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/3/31/Grayling.webp/120px-Grayling.webp.png"
  },
  {
    "name": "Zander",
    "habitat": "Twilight Realms",
    "waterType": "Freshwater",
    "weather": "Clear",
    "timeOfDay": "Any",
    "rarity": "Common",
    "minWeight": "2.0 kg",
    "maxWeight": "9.5 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/7/78/Zander.webp/120px-Zander.webp.png",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Pangasius",
    "habitat": "Twilight Realms",
    "waterType": "Freshwater",
    "weather": "Foggy",
    "timeOfDay": "Any",
    "rarity": "Common",
    "minWeight": "2.2 g",
    "maxWeight": "29.9 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/6/64/Pangasius.webp/120px-Pangasius.webp.png",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Largemouth Bass",
    "habitat": "Twilight Realms",
    "waterType": "Freshwater",
    "weather": "Any",
    "timeOfDay": "Day",
    "rarity": "Common",
    "minWeight": "1.5 kg",
    "maxWeight": "5.4 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/8/8f/Largemouth_Bass.webp/120px-Largemouth_Bass.webp.png"
  },
  {
    "name": "Pike",
    "habitat": "Twilight Realms",
    "waterType": "Freshwater",
    "weather": "Foggy",
    "timeOfDay": "Any",
    "rarity": "Common",
    "minWeight": "2.0 kg",
    "maxWeight": "15.3 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/1/14/Pike.webp/120px-Pike.webp.png",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Tilapia",
    "habitat": "Twilight Realms",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Common",
    "minWeight": "1.0 kg",
    "maxWeight": "3.0 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/6/69/Tilapia.webp/120px-Tilapia.webp.png"
  },
  {
    "name": "Blue Diamond Discus",
    "habitat": "Twilight Realms",
    "waterType": "Freshwater",
    "weather": "Foggy",
    "timeOfDay": "Any",
    "rarity": "Curious",
    "minWeight": "0.1 kg",
    "maxWeight": "1.5 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/7/7b/Blue_Diamond_Discus.webp/120px-Blue_Diamond_Discus.webp.png",
    "conditionMultiplier": 1.5
  },
  {
    "name": "African Lungfish",
    "habitat": "Twilight Realms",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Curious",
    "minWeight": "1.2 kg",
    "maxWeight": "7.6 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/c/c5/African_Lungfish.webp/120px-African_Lungfish.webp.png"
  },
  {
    "name": "African Pike",
    "habitat": "Twilight Realms",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Curious",
    "minWeight": "5.1 kg",
    "maxWeight": "9.6 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/0/09/African_Pike.webp/120px-African_Pike.webp.png"
  },
  {
    "name": "Arowana",
    "habitat": "Twilight Realms",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Curious",
    "minWeight": "1.0 kg",
    "maxWeight": "8.7 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/7/79/Arowana.webp/120px-Arowana.webp.png"
  },
  {
    "name": "Knife Fish",
    "habitat": "Twilight Realms",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Curious",
    "minWeight": "3.8 kg",
    "maxWeight": "7.9 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/4/43/Knife_Fish.webp/120px-Knife_Fish.webp.png"
  },
  {
    "name": "High-Fin Banded Shark",
    "habitat": "Twilight Realms",
    "waterType": "Freshwater",
    "weather": "Stormy",
    "timeOfDay": "Any",
    "rarity": "Elusive",
    "minWeight": "3.2 kg",
    "maxWeight": "14.5 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/3/37/High-Fin_Banded_Shark.webp/120px-High-Fin_Banded_Shark.webp.png",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Wels Catfish",
    "habitat": "Twilight Realms",
    "waterType": "Freshwater",
    "weather": "Clear",
    "timeOfDay": "Any",
    "rarity": "Elusive",
    "minWeight": "7.2 kg",
    "maxWeight": "73.3 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/d/d4/Wels_Catfish.webp/120px-Wels_Catfish.webp.png",
    "conditionMultiplier": 1.5
  },
  {
    "name": "Bichir",
    "habitat": "Twilight Realms",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Elusive",
    "minWeight": "1 kg",
    "maxWeight": "3 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/a/a4/Bichir.webp/120px-Bichir.webp.png"
  },
  {
    "name": "Electric Catfish",
    "habitat": "Twilight Realms",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Elusive",
    "minWeight": "6.2 kg",
    "maxWeight": "50.9 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/7/7a/Electric_Catfish.webp/120px-Electric_Catfish.webp.png"
  },
  {
    "name": "Nile Perch",
    "habitat": "Twilight Realms",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Elusive",
    "minWeight": "56.2 kg",
    "maxWeight": "385.2 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/f/f3/Nile_Perch.webp/120px-Nile_Perch.webp.png"
  },
  {
    "name": "Tiger Shovelnose Catfish",
    "habitat": "Twilight Realms",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Elusive",
    "minWeight": "4.3 kg",
    "maxWeight": "6.0 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/8/83/Tiger_Shovelnose_Catfish.webp/120px-Tiger_Shovelnose_Catfish.webp.png"
  },
  {
    "name": "Elephant Fish",
    "habitat": "Twilight Realms",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Fabled",
    "minWeight": "0.5 kg",
    "maxWeight": "1.5 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/7/73/Elephant_Fish.webp/120px-Elephant_Fish.webp.png"
  },
  {
    "name": "Mirage Fish",
    "habitat": "Twilight Realms",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Mythic",
    "minWeight": "215.8 kg",
    "maxWeight": "299.5 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/8/86/Mirage_Fish.webp/120px-Mirage_Fish.webp.png"
  },
  {
    "name": "Sarcophagus",
    "habitat": "Twilight Realms",
    "waterType": "Any",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Exotic",
    "minWeight": "3476.4 kg",
    "maxWeight": "6978.1 kg",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/3/3c/Sarcophagus.webp/120px-Sarcophagus.webp.png"
  },
  {
    "name": "Plankfish",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Elusive",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/f/f7/Plankfish.webp/120px-Plankfish.webp.png"
  },
  {
    "name": "Bombfish",
    "habitat": "Open Sea",
    "waterType": "Saltwater",
    "weather": "Any",
    "timeOfDay": "Any",
    "rarity": "Fabled",
    "imageUrl": "https://static.wikitide.net/fishwikiwiki/thumb/2/22/Bombfish.webp/120px-Bombfish.webp.png"
  }
] as const;

/** Tracker mutations. Tiny and Huge are size variants, not mutations. */
export const MUTATION_NAMES = [
  "Regular",
  "Albino",
  "Blessed",
  "Burning",
  "Camo",
  "Cursed",
  "Electric",
  "Frozen",
  "Galaxy",
  "Ghastly",
  "Glitched",
  "Golden",
  "Holographic",
  "Negative",
  "Radioactive",
  "Rainbow",
  "Sandy",
  "Shadow",
  "Shiny",
  "Static",
  "Stone",
  "Tiger",
  "Void",
  "Zebra"
] as const;

export interface MutationBenefit {
  name: string;
  valueMultiplier: number;
  poolBonus?: string;
}

export const MUTATION_BENEFITS: readonly MutationBenefit[] = [
  { name: "Regular", valueMultiplier: 1 },
  { name: "Cursed", valueMultiplier: 1.1, poolBonus: "Occult Pool: 1.9× de probabilidad" },
  { name: "Sandy", valueMultiplier: 1.2, poolBonus: "Sandy Updraft: 1.9× de probabilidad" },
  { name: "Stone", valueMultiplier: 1.3 },
  { name: "Zebra", valueMultiplier: 1.3, poolBonus: "Savanna Rift: 1.9× junto a Tiger" },
  { name: "Negative", valueMultiplier: 1.5 },
  { name: "Albino", valueMultiplier: 1.5 },
  { name: "Ghastly", valueMultiplier: 1.5 },
  { name: "Glitched", valueMultiplier: 1.5 },
  { name: "Tiger", valueMultiplier: 1.6, poolBonus: "Savanna Rift: 1.9× junto a Zebra" },
  { name: "Camo", valueMultiplier: 1.8 },
  { name: "Void", valueMultiplier: 2 },
  { name: "Shadow", valueMultiplier: 2, poolBonus: "Shadow Chasm: 1.9× de probabilidad" },
  { name: "Shiny", valueMultiplier: 2, poolBonus: "Sparkling Pool: 1.9× de probabilidad" },
  { name: "Frozen", valueMultiplier: 2 },
  { name: "Blessed", valueMultiplier: 3 },
  { name: "Golden", valueMultiplier: 3, poolBonus: "Midas Rift: 1.9× de probabilidad" },
  { name: "Galaxy", valueMultiplier: 3, poolBonus: "Celestial Chasm: 1.9× de probabilidad" },
  { name: "Radioactive", valueMultiplier: 3, poolBonus: "Ionized Fissure: 1.9× de probabilidad" },
  { name: "Rainbow", valueMultiplier: 3 },
  { name: "Burning", valueMultiplier: 4 },
  { name: "Electric", valueMultiplier: 4 },
  { name: "Holographic", valueMultiplier: 5 },
  { name: "Static", valueMultiplier: 5 },
] as const;

export const FISH_DATA_COVERAGE = {
  source: "TRUE Perfection Tracker + Twilight Realms table supplied by the maintainer",
  habitats: 7,
  records: FISH_CATALOG.length,
  missingHabitats: [],
} as const;
