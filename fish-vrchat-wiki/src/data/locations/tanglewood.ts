export interface Islander {
    name: string;
    job: string;
    photo: string;
}

export interface Quest {
    name: string;
    giver: string;
    prerequisites: string;
    rewards: string;
    notes: string;
}

export interface LocalFish {
    name: string;
    photo: string;
    rarity: 'Abundant' | 'Common' | 'Curious' | 'Elusive' | 'Fabled' | 'Mythic' | 'Exotic';
    waterType: string;
    weather: string;
    time: string;
    minWeight: string;
    maxWeight: string;
}

export const tanglewoodIslanders: Islander[] = [
    { name: "Samuel", job: "None", photo: "/images/npcs/samuel.png" },
    { name: "Ghostie (?????)", job: "None", photo: "/images/npcs/ghostie.png" },
    { name: "Grimbee", job: "Upgrades Shopkeeper", photo: "/images/npcs/grimbee.png" },
    { name: "Petey", job: "Sunleaf Exports Cashier", photo: "/images/npcs/petey.png" },
    { name: "Nessi", job: "Boat Shopkeeper", photo: "/images/npcs/nessi.png" },
    { name: "Pristina", job: "Priest NPC", photo: "/images/npcs/pristina.png" },
    { name: "Brenda", job: "Innkeeper", photo: "/images/npcs/brenda.png" },
    { name: "Billybob (Dartholemus Quandingus III)", job: "None", photo: "/images/npcs/billybob.png" }
];

export const tanglewoodQuests: Quest[] = [
    {
        name: "No Head?",
        giver: "Ghostie",
        prerequisites: "Skull Scare",
        rewards: "500 Coins + 500 XP",
        notes: "Deliver head to Ghostie at cemetery"
    },
    {
        name: "Celly's Lost Keys",
        giver: "Celly (Crescent Isle)",
        prerequisites: "25x Scrap Metal",
        rewards: "-",
        notes: "Found in Tanglewood"
    },
    {
        name: "Missing!",
        giver: "Billy Bob's poster (Crescent Isle)",
        prerequisites: "-",
        rewards: "500 Coins + 500 XP + Missing Poster",
        notes: "Billy bob is located in Tanglewood"
    }
];

export const tanglewoodFish: LocalFish[] = [
    { name: "Bluegill Sunfish", photo: "/images/fish/bluegill_sunfish.png", rarity: "Abundant", waterType: "Swampwater", weather: "Clear (1.5x)", time: "Any", minWeight: "0.1 kg", maxWeight: "2.5 kg" },
    { name: "Mudskipper", photo: "/images/fish/mudskipper.png", rarity: "Abundant", waterType: "Swampwater", weather: "Any", time: "Day", minWeight: "-", maxWeight: "-" },
    { name: "Bowfin", photo: "/images/fish/bowfin.png", rarity: "Common", waterType: "Swampwater", weather: "Any", time: "Evening", minWeight: "1 kg", maxWeight: "10 kg" },
    { name: "Channel Catfish", photo: "/images/fish/channel_catfish.png", rarity: "Common", waterType: "Swampwater", weather: "Foggy (1.5x)", time: "Any", minWeight: "0.5 kg", maxWeight: "26 kg" },
    { name: "Cottonmouth Snake", photo: "/images/fish/cottonmouth_snake.png", rarity: "Curious", waterType: "Swampwater", weather: "Clear (1.5x)", time: "Any", minWeight: "0.3 kg", maxWeight: "4.5 kg" },
    { name: "Frog", photo: "/images/fish/frog.png", rarity: "Curious", waterType: "Swampwater", weather: "Rainy (1.5x)", time: "Any", minWeight: "0.1 kg", maxWeight: "0.8 kg" },
    { name: "Alligator Snapping Turtle", photo: "/images/fish/alligator_snapping_turtle.png", rarity: "Elusive", waterType: "Swampwater", weather: "Any", time: "Any", minWeight: "10 kg", maxWeight: "113 kg" },
    { name: "Soft Shelled Turtle", photo: "/images/fish/soft_shelled_turtle.png", rarity: "Elusive", waterType: "Swampwater", weather: "Any", time: "Morning", minWeight: "-", maxWeight: "-" },
    { name: "American Alligator", photo: "/images/fish/american_alligator.png", rarity: "Fabled", waterType: "Swampwater", weather: "Any", time: "Night", minWeight: "100 kg", maxWeight: "450 kg" },
    { name: "Giant Gharial", photo: "/images/fish/giant_gharial.png", rarity: "Fabled", waterType: "Swampwater", weather: "Any", time: "Any", minWeight: "150 kg", maxWeight: "900 kg" },
    { name: "Venomous Watcher", photo: "/images/fish/venomous_watcher.png", rarity: "Mythic", waterType: "Swampwater", weather: "Any", time: "Any", minWeight: "2.2 kg", maxWeight: "-" },
    { name: "Dreadshell Colossus", photo: "/images/fish/dreadshell_colossus.png", rarity: "Exotic", waterType: "Swampwater", weather: "Any", time: "Any", minWeight: "26,000 kg", maxWeight: "50,000 kg" }
];