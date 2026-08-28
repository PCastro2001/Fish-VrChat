export interface Enchantment {
    name: string;
    rarity: 'None' | 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
    specialEffect: string;
    description: string;
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
    // None
    { name: "Sin Encantamiento", rarity: "None", specialEffect: "Ranura de encantamiento vacía.", description: "Ranura de encantamiento vacía.", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },

    // Common
    { name: "Big Catch Boost", rarity: "Common", specialEffect: "+10 Big Catch Rate", description: "Aumento de probabilidad de pez grande.", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+10", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Curious", rarity: "Common", specialEffect: "+5 Expertise, +5% XP", description: "+5 Pericia y +5% Experiencia.", luck: "-", strength: "-", expertise: "+5", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "+5%", numericMaxWeightKg: 0 },
    { name: "Expert", rarity: "Common", specialEffect: "+10 Expertise", description: "+10 Pericia para el minijuego.", luck: "-", strength: "-", expertise: "+10", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Lazy", rarity: "Common", specialEffect: "+10 Luck, +10 Strength, +75 Expertise, -75% Attraction Rate, +10 Big Catch", description: "Gran bono de estadísticas a cambio de velocidad.", luck: "+10", strength: "+10", expertise: "+75", attractionRate: "-75%", bigCatchRate: "+10", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Lucky", rarity: "Common", specialEffect: "+15 Luck", description: "Aumento ligero de suerte.", luck: "+15", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Pocket Watcher", rarity: "Common", specialEffect: "Earn 5% of fish value on catch", description: "Ganas un 5% extra del valor al pescar.", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Powerful", rarity: "Common", specialEffect: "+10 Strength", description: "+10 Fuerza para el minijuego.", luck: "-", strength: "+10", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Reinforced", rarity: "Common", specialEffect: "+400kg Max Weight", description: "Permite capturar peces medianos (+400kg).", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "+400kg", xp: "-", numericMaxWeightKg: 400 },
    { name: "Speedy", rarity: "Common", specialEffect: "+10% Attraction Rate", description: "Reduce el tiempo de espera (+10% velocidad).", luck: "-", strength: "-", expertise: "-", attractionRate: "+10%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Trash Wrangler", rarity: "Common", specialEffect: "-100 Luck, +20% Attraction Rate", description: "Reduce la suerte para pescar basura rápido.", luck: "-100", strength: "-", expertise: "-", attractionRate: "+20%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },

    // Uncommon
    { name: "Day Walker", rarity: "Uncommon", specialEffect: "Stat bonuses only active during daytime (+50 Luck)", description: "Bono notable de suerte diurna (+50 Suerte).", luck: "+50", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Fog Dweller", rarity: "Uncommon", specialEffect: "Stat bonuses only active during fog (+50 Luck)", description: "Bono de suerte activo solo en niebla.", luck: "+50", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Impatient", rarity: "Uncommon", specialEffect: "-30 Luck, +30% Attraction Rate", description: "Sacrifica suerte por mayor velocidad de picada.", luck: "-30", strength: "-", expertise: "-", attractionRate: "+30%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Night Stalker", rarity: "Uncommon", specialEffect: "Stat bonuses only active at night (+35% Attraction)", description: "Mayor velocidad de picada durante la noche.", luck: "-", strength: "-", expertise: "-", attractionRate: "+35%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Power Grip", rarity: "Uncommon", specialEffect: "+15 Strength, +15 Expertise", description: "+15 Fuerza y +15 Pericia.", luck: "-", strength: "+15", expertise: "+15", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Rain Lover", rarity: "Uncommon", specialEffect: "Stat bonuses only active during rain/storms (+50 Luck)", description: "Bono de suerte durante lluvia o tormenta.", luck: "+50", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Student", rarity: "Uncommon", specialEffect: "+5 Expertise, +12% XP", description: "+5 Pericia y +12% Experiencia.", luck: "-", strength: "-", expertise: "+5", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "+12%", numericMaxWeightKg: 0 },
    { name: "Tubby Chaser", rarity: "Uncommon", specialEffect: "+5 Big Catch Rate, +1,000kg Max Weight", description: "Enfocado en ejemplares pesados (+1,000kg).", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+5", maxWeight: "+1,000kg", xp: "-", numericMaxWeightKg: 1000 },
    { name: "Undecided", rarity: "Uncommon", specialEffect: "+5 Luck, +5 Str, +5 Exp, +5% Attr, +5 Big Catch, +5kg W", description: "Pequeña bonificación a todas las estadísticas.", luck: "+5", strength: "+5", expertise: "+5", attractionRate: "+5%", bigCatchRate: "+5", maxWeight: "+5kg", xp: "-", numericMaxWeightKg: 5 },
    { name: "Unstable", rarity: "Uncommon", specialEffect: "1.5x mutation rate (+10 Luck, -10 Str, -10 Exp)", description: "1.5x tasa de mutación a costa de control.", luck: "+10", strength: "-10", expertise: "-10", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },

    // Rare
    { name: "All-Rounder", rarity: "Rare", specialEffect: "+10 Luck, +10 Str, +10 Exp, +10% Attr, +10 Big Catch, +100kg W", description: "Bono equilibrado a todas las estadísticas.", luck: "+10", strength: "+10", expertise: "+10", attractionRate: "+10%", bigCatchRate: "+10", maxWeight: "+100kg", xp: "-", numericMaxWeightKg: 100 },
    { name: "Demon Hunter", rarity: "Rare", specialEffect: "15% chance to convert fish to Cursed (+10 Luck)", description: "15% probabilidad de convertir pez a Cursed.", luck: "+10", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Dimensional Line", rarity: "Rare", specialEffect: "30% chance to catch a fish from any biome (+10 Exp)", description: "30% probabilidad de pescar peces de cualquier bioma.", luck: "-", strength: "-", expertise: "+10", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Enlightened", rarity: "Rare", specialEffect: "+10 Expertise, +35% XP", description: "Gran aumento de experiencia (+35% XP).", luck: "-", strength: "-", expertise: "+10", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "+35%", numericMaxWeightKg: 0 },
    { name: "Light-Speed Reels", rarity: "Rare", specialEffect: "+40% Attraction Rate", description: "Gran aceleración de capturas (+40% velocidad).", luck: "-", strength: "-", expertise: "-", attractionRate: "+40%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Luck Sacrifice", rarity: "Rare", specialEffect: "-60 Luck, +60% Attraction Rate", description: "Sacrifica 60 de suerte por 60% de velocidad.", luck: "-60", strength: "-", expertise: "-", attractionRate: "+60%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Mouth-Watering", rarity: "Rare", specialEffect: "+25% Attraction Rate, +30 Big Catch Rate", description: "Aumento de velocidad y peces grandes.", luck: "-", strength: "-", expertise: "-", attractionRate: "+25%", bigCatchRate: "+30", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Notoriously Big", rarity: "Rare", specialEffect: "+10 Big Catch Rate, +50,000kg Max Weight", description: "Capacidad para monstruos marinos (+50,000kg).", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+10", maxWeight: "+50,000kg", xp: "-", numericMaxWeightKg: 50000 },
    { name: "Patient", rarity: "Rare", specialEffect: "+100 Luck, -40% Attraction Rate", description: "Gran aumento de suerte (+100) esperando más.", luck: "+100", strength: "-", expertise: "-", attractionRate: "-40%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "The Night Watcher", rarity: "Rare", specialEffect: "Stat bonuses active at night (+30 Luck, +10 Str, +10 Exp, +30% Attr, +30 Big Catch, +25,000kg)", description: "Grandes bonos nocturnos (+30 Suerte, +25,000kg).", luck: "+30", strength: "+10", expertise: "+10", attractionRate: "+30%", bigCatchRate: "+30", maxWeight: "+25,000kg", xp: "-", numericMaxWeightKg: 25000 },

    // Epic
    { name: "BIG BOYS ONLY", rarity: "Epic", specialEffect: "+65 Big Catch Rate, +100,000kg Max Weight", description: "Especializado en tamaños colosales (+100,000kg).", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+65", maxWeight: "+100,000kg", xp: "-", numericMaxWeightKg: 100000 },
    { name: "Double Up!!", rarity: "Epic", specialEffect: "25% chance to catch 2 fish at once (+20 Luck)", description: "25% probabilidad de capturar 2 peces a la vez.", luck: "+20", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Luck of the Chosen", rarity: "Epic", specialEffect: "+100 Luck, +10 Big Catch Rate", description: "+100 Suerte y +10 Peces grandes.", luck: "+100", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+10", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Master of Balance", rarity: "Epic", specialEffect: "+20 Luck, +20 Str, +20 Exp, +20% Attr, +20 Big Catch, +400kg W", description: "Bonificación simétrica a todas las estadísticas.", luck: "+20", strength: "+20", expertise: "+20", attractionRate: "+20%", bigCatchRate: "+20", maxWeight: "+400kg", xp: "-", numericMaxWeightKg: 400 },
    { name: "Money Maker", rarity: "Epic", specialEffect: "Earn an extra 20% of fish value on catch (+20 Big Catch)", description: "Ganas un 20% extra del valor del pez.", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+20", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Mutator", rarity: "Epic", specialEffect: "2x mutation rate (+30 Luck)", description: "Doble tasa de mutaciones (+30 Suerte).", luck: "+30", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Shiny Hunter", rarity: "Epic", specialEffect: "20% chance to convert fish to Shiny (+80 Luck)", description: "20% probabilidad de pez Shiny (+80 Suerte).", luck: "+80", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Son of Kriptan", rarity: "Epic", specialEffect: "Stat bonuses active daytime (+50 Luck, +10 Str, +10 Exp, +50% Attr, +50 Big Catch, +50,000kg)", description: "Poderosos bonos diurnos (+50 Suerte, +50,000kg).", luck: "+50", strength: "+10", expertise: "+10", attractionRate: "+50%", bigCatchRate: "+50", maxWeight: "+50,000kg", xp: "-", numericMaxWeightKg: 50000 },
    { name: "Speed Demon", rarity: "Epic", specialEffect: "5% chance to convert fish to Cursed (+60% Attraction)", description: "Elimina casi todo el tiempo de picada (+60%).", luck: "-", strength: "-", expertise: "-", attractionRate: "+60%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },

    // Legendary
    { name: "God's Own Luck", rarity: "Legendary", specialEffect: "+250 Luck", description: "El mayor multiplicador de suerte pura (+250).", luck: "+250", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Messenger of the Heavens", rarity: "Legendary", specialEffect: "+100% Attraction Rate", description: "Picada instantánea (0s de espera, +100%).", luck: "-", strength: "-", expertise: "-", attractionRate: "+100%", bigCatchRate: "-", maxWeight: "-", xp: "-", numericMaxWeightKg: 0 },
    { name: "Strongest Angler", rarity: "Legendary", specialEffect: "+20 Luck, +85 Str, +85 Exp, +10% Attr, +20 Big Catch, +1,000,000kg W", description: "Máxima facilidad en minijuego y +1,000,000kg.", luck: "+20", strength: "+85", expertise: "+85", attractionRate: "+10%", bigCatchRate: "+20", maxWeight: "+1,000,000kg", xp: "-", numericMaxWeightKg: 1000000 }
];


export const relicPoints = {
    oldRelicPiece: 1,
    mossyRelic: 3,
    powerfulRelic: 6,
    pityTarget: 200
};