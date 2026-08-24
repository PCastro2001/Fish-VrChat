export interface Enchantment {
    name: string;
    rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
    specialEffect: string;
    luck: string;
    strength: string;
    expertise: string;
    attractionRate: string;
    bigCatchRate: string;
    maxWeight: string;
    xp: string;
    numericMaxWeightKg: number;
}

export const enchantmentsData: Enchantment[] = [
    // Common
    { name: "Big Catch Boost", rarity: "Common", specialEffect: "-", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+10", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Curious", rarity: "Common", specialEffect: "-", luck: "-", strength: "-", expertise: "+5", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "+5%", numericMaxWeightKg: 0 },
    { name: "Expert", rarity: "Common", specialEffect: "-", luck: "-", strength: "-", expertise: "+10", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Lazy", rarity: "Common", specialEffect: "-", luck: "+10", strength: "+10", expertise: "+75", attractionRate: "-75%", bigCatchRate: "+10", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Lucky", rarity: "Common", specialEffect: "-", luck: "+15", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Pocket Watcher", rarity: "Common", specialEffect: "Earn 5% of fish value on catch", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Powerful", rarity: "Common", specialEffect: "-", luck: "-", strength: "+10", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Reinforced", rarity: "Common", specialEffect: "-", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "+400kg", xp: "-", numericMaxWeightKg: 400 },
    { name: "Speedy", rarity: "Common", specialEffect: "-", luck: "-", strength: "-", expertise: "-", attractionRate: "+10%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Trash Wrangler", rarity: "Common", specialEffect: "-", luck: "-100", strength: "-", expertise: "-", attractionRate: "+20%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },

    // Uncommon
    { name: "Day Walker", rarity: "Uncommon", specialEffect: "Stat bonuses only active during daytime", luck: "+50", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Fog Dweller", rarity: "Uncommon", specialEffect: "Stat bonuses only active during fog", luck: "+50", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Impatient", rarity: "Uncommon", specialEffect: "-", luck: "-30", strength: "-", expertise: "-", attractionRate: "+30%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Night Stalker", rarity: "Uncommon", specialEffect: "Stat bonuses only active at night", luck: "-", strength: "-", expertise: "-", attractionRate: "+35%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Power Grip", rarity: "Uncommon", specialEffect: "-", luck: "-", strength: "+15", expertise: "+15", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Rain Lover", rarity: "Uncommon", specialEffect: "Stat bonuses only active during rain/storms", luck: "+50", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Student", rarity: "Uncommon", specialEffect: "-", luck: "-", strength: "-", expertise: "+5", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "+12%", numericMaxWeightKg: 0 },
    { name: "Tubby Chaser", rarity: "Uncommon", specialEffect: "-", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+5", maxWeight: "+1,000kg", xp: "-", numericMaxWeightKg: 1000 },
    { name: "Undecided", rarity: "Uncommon", specialEffect: "-", luck: "+5", strength: "+5", expertise: "+5", attractionRate: "+5%", bigCatchRate: "+5", maxWeight: "+5kg", xp: "-", numericMaxWeightKg: 5 },
    { name: "Unstable", rarity: "Uncommon", specialEffect: "1.5x mutation rate", luck: "+10", strength: "-10", expertise: "-10", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },

    // Rare
    { name: "All-Rounder", rarity: "Rare", specialEffect: "-", luck: "+10", strength: "+10", expertise: "+10", attractionRate: "+10%", bigCatchRate: "+10", maxWeight: "+100kg", xp: "-", numericMaxWeightKg: 100 },
    { name: "Demon Hunter", rarity: "Rare", specialEffect: "15% chance to convert fish to Cursed", luck: "+10", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Dimensional Line", rarity: "Rare", specialEffect: "30% chance to catch a fish from any biome", luck: "-", strength: "-", expertise: "+10", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Enlightened", rarity: "Rare", specialEffect: "-", luck: "-", strength: "-", expertise: "+10", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "+35%", numericMaxWeightKg: 0 },
    { name: "Light-Speed Reels", rarity: "Rare", specialEffect: "-", luck: "-", strength: "-", expertise: "-", attractionRate: "+40%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Luck Sacrifice", rarity: "Rare", specialEffect: "-", luck: "-60", strength: "-", expertise: "-", attractionRate: "+60%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Mouth-Watering", rarity: "Rare", specialEffect: "-", luck: "-", strength: "-", expertise: "-", attractionRate: "+25%", bigCatchRate: "+30", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Notoriously Big", rarity: "Rare", specialEffect: "-", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+10", maxWeight: "+50,000kg", xp: "-", numericMaxWeightKg: 50000 },
    { name: "Patient", rarity: "Rare", specialEffect: "-", luck: "+100", strength: "-", expertise: "-", attractionRate: "-40%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "The Night Watcher", rarity: "Rare", specialEffect: "Stat bonuses only active at night", luck: "+30", strength: "+10", expertise: "+10", attractionRate: "+30%", bigCatchRate: "+30", maxWeight: "+25,000kg", xp: "-", numericMaxWeightKg: 25000 },

    // Epic
    { name: "BIG BOYS ONLY", rarity: "Epic", specialEffect: "-", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+65", maxWeight: "+100,000kg", xp: "-", numericMaxWeightKg: 100000 },
    { name: "Double Up!!", rarity: "Epic", specialEffect: "25% chance to catch 2 fish at once", luck: "+20", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Luck of the Chosen", rarity: "Epic", specialEffect: "-", luck: "+100", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+10", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Master of Balance", rarity: "Epic", specialEffect: "-", luck: "+20", strength: "+20", expertise: "+20", attractionRate: "+20%", bigCatchRate: "+20", maxWeight: "+400kg", xp: "-", numericMaxWeightKg: 400 },
    { name: "Money Maker", rarity: "Epic", specialEffect: "Earn an extra 20% of fish value on catch", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+20", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Mutator", rarity: "Epic", specialEffect: "2x mutation rate (extra fish modifiers)", luck: "+30", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Shiny Hunter", rarity: "Epic", specialEffect: "20% chance to convert fish to Shiny", luck: "+80", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Son of Kriptan", rarity: "Epic", specialEffect: "Stat bonuses only active during daytime", luck: "+50", strength: "+10", expertise: "+10", attractionRate: "+50%", bigCatchRate: "+50", maxWeight: "+50,000kg", xp: "-", numericMaxWeightKg: 50000 },
    { name: "Speed Demon", rarity: "Epic", specialEffect: "5% chance to convert fish to Cursed", luck: "-", strength: "-", expertise: "-", attractionRate: "+60%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },

    // Legendary
    { name: "God's Own Luck", rarity: "Legendary", specialEffect: "-", luck: "+250", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Messenger of the Heavens", rarity: "Legendary", specialEffect: "-", luck: "-", strength: "-", expertise: "-", attractionRate: "+100%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Strongest Angler", rarity: "Legendary", specialEffect: "-", luck: "+20", strength: "+85", expertise: "+85", attractionRate: "+10%", bigCatchRate: "+20", maxWeight: "+1,000,000kg", xp: "-", numericMaxWeightKg: 1000000 }
];

export const relicPoints = {
    oldRelicPiece: 1,
    mossyRelic: 3,
    powerfulRelic: 6,
    pityTarget: 200
};