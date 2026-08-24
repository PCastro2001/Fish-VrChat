export interface FishData {
    name: string;
    photo: string;
    rarity: 'Abundant' | 'Common' | 'Curious' | 'Elusive' | 'Fabled' | 'Mythic' | 'Exotic';
    waterType: string;
    weather: string;
    time: string;
    minWeight: string;
    maxWeight: string;
    numericMinKg: number;
    numericMaxKg: number;
}

export const coconutBayFish: FishData[] = [
    { name: "Bream", photo: "/images/fish/bream.png", rarity: "Abundant", waterType: "Freshwater", weather: "Any", time: "Day", minWeight: "1 kg", maxWeight: "6 kg", numericMinKg: 1, numericMaxKg: 6 },
    { name: "Roach", photo: "/images/fish/roach.png", rarity: "Abundant", waterType: "Freshwater", weather: "Any", time: "Evening", minWeight: "0.2 kg", maxWeight: "2 kg", numericMinKg: 0.2, numericMaxKg: 2 },
    { name: "Goldfish", photo: "/images/fish/goldfish.png", rarity: "Abundant", waterType: "Freshwater", weather: "Clear (1.5x)", time: "Any", minWeight: "0.5 kg", maxWeight: "2 kg", numericMinKg: 0.5, numericMaxKg: 2 },
    { name: "Mackerel", photo: "/images/fish/mackerel.png", rarity: "Abundant", waterType: "Saltwater", weather: "Foggy (1.5x)", time: "Any", minWeight: "0.2 kg", maxWeight: "2.5 kg", numericMinKg: 0.2, numericMaxKg: 2.5 },
    { name: "Needlefish", photo: "/images/fish/needlefish.png", rarity: "Abundant", waterType: "Saltwater", weather: "Stormy (1.5x)", time: "Any", minWeight: "0.9 kg", maxWeight: "11 kg", numericMinKg: 0.9, numericMaxKg: 11 },
    { name: "Carp", photo: "/images/fish/carp.png", rarity: "Common", waterType: "Freshwater", weather: "Any", time: "Morning", minWeight: "2 kg", maxWeight: "45 kg", numericMinKg: 2, numericMaxKg: 45 },
    { name: "Black Shark Minnow", photo: "/images/fish/black_shark_minnow.png", rarity: "Common", waterType: "Freshwater", weather: "Rainy (1.5x)", time: "Any", minWeight: "1 kg", maxWeight: "6 kg", numericMinKg: 1, numericMaxKg: 6 },
    { name: "Boxfish", photo: "/images/fish/boxfish.png", rarity: "Common", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "0.4 kg", maxWeight: "4 kg", numericMinKg: 0.4, numericMaxKg: 4 },
    { name: "Gulper Eel", photo: "/images/fish/gulper_eel.png", rarity: "Common", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "1 kg", maxWeight: "20 kg", numericMinKg: 1, numericMaxKg: 20 },
    { name: "John Dory", photo: "/images/fish/john_dory.png", rarity: "Common", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "1 kg", maxWeight: "8 kg", numericMinKg: 1, numericMaxKg: 8 },
    { name: "Lionfish", photo: "/images/fish/lionfish.png", rarity: "Curious", waterType: "Saltwater", weather: "Any", time: "Night", minWeight: "0.1 kg", maxWeight: "1.5 kg", numericMinKg: 0.1, numericMaxKg: 1.5 },
    { name: "Northern Pufferfish", photo: "/images/fish/northern_pufferfish.png", rarity: "Curious", waterType: "Saltwater", weather: "Any", time: "Day", minWeight: "0.4 kg", maxWeight: "2 kg", numericMinKg: 0.4, numericMaxKg: 2 },
    { name: "Red Melon Discus", photo: "/images/fish/red_melon_discus.png", rarity: "Curious", waterType: "Freshwater", weather: "Foggy (1.5x)", time: "Any", minWeight: "0.0 kg", maxWeight: "0.6 kg", numericMinKg: 0, numericMaxKg: 0.6 },
    { name: "Alligator Gar", photo: "/images/fish/alligator_gar.png", rarity: "Elusive", waterType: "Freshwater", weather: "Stormy (1.5x)", time: "Any", minWeight: "10 kg", maxWeight: "80 kg", numericMinKg: 10, numericMaxKg: 80 },
    { name: "Salween Rita Catfish", photo: "/images/fish/salween_rita_catfish.png", rarity: "Elusive", waterType: "Freshwater", weather: "Any", time: "Night", minWeight: "1 kg", maxWeight: "8 kg", numericMinKg: 1, numericMaxKg: 8 },
    { name: "European Anglerfish", photo: "/images/fish/european_anglerfish.png", rarity: "Elusive", waterType: "Saltwater", weather: "Any", time: "Night", minWeight: "7 kg", maxWeight: "40 kg", numericMinKg: 7, numericMaxKg: 40 },
    { name: "Hogfish", photo: "/images/fish/hogfish.png", rarity: "Elusive", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "1 kg", maxWeight: "15 kg", numericMinKg: 1, numericMaxKg: 15 },
    { name: "Goliath Tigerfish", photo: "/images/fish/goliath_tigerfish.png", rarity: "Fabled", waterType: "Freshwater", weather: "Any", time: "Any", minWeight: "20 kg", maxWeight: "100 kg", numericMinKg: 20, numericMaxKg: 100 },
    { name: "Frilled Shark", photo: "/images/fish/frilled_shark.png", rarity: "Fabled", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "15 kg", maxWeight: "220 kg", numericMinKg: 15, numericMaxKg: 220 },
    { name: "Blind Bladefish", photo: "/images/fish/blind_bladefish.png", rarity: "Mythic", waterType: "Freshwater", weather: "Any", time: "Any", minWeight: "4.24 kg", maxWeight: "6.8 kg", numericMinKg: 4.24, numericMaxKg: 6.8 },
    { name: "Red Dartfin", photo: "/images/fish/red_dartfin.png", rarity: "Mythic", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "1 kg", maxWeight: "24.7 kg", numericMinKg: 1, numericMaxKg: 24.7 },
    { name: "Spineback Ray", photo: "/images/fish/spineback_ray.png", rarity: "Exotic", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "1,500 kg", maxWeight: "6,000 kg", numericMinKg: 1500, numericMaxKg: 6000 },
    { name: "Dragonfly Fish", photo: "/images/fish/dragonfly_fish.png", rarity: "Exotic", waterType: "Freshwater", weather: "Any", time: "Any", minWeight: "2 kg", maxWeight: "69.6 kg", numericMinKg: 2, numericMaxKg: 69.6 }
];