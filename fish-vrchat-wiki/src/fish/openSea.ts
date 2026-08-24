export interface FishData {
    name: string;
    photo: string;
    rarity: 'Abundant' | 'Common' | 'Curious' | 'Elusive' | 'Fabled' | 'Mythic' | 'Exotic';
    waterType: string;
    weather: string;
    time: string;
    minWeight: string;
    maxWeight: string;
    numericMaxWeightKg: number; // Para el cálculo matemático del validador
}

export const openSeaFish: FishData[] = [
    { name: "Herring", photo: "/images/fish/herring.png", rarity: "Abundant", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "0.3 kg", maxWeight: "1.1 kg", numericMaxWeightKg: 1.1 },
    { name: "Haddock", photo: "/images/fish/haddock.png", rarity: "Abundant", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "0.9 kg", maxWeight: "11 kg", numericMaxWeightKg: 11 },
    { name: "Cod", photo: "/images/fish/cod.png", rarity: "Common", waterType: "Saltwater", weather: "Any", time: "Morning", minWeight: "5 kg", maxWeight: "22 kg", numericMaxWeightKg: 22 },
    { name: "Atlantic Salmon", photo: "/images/fish/atlantic_salmon.png", rarity: "Common", waterType: "Saltwater", weather: "Any", time: "Evening", minWeight: "3 kg", maxWeight: "6 kg", numericMaxWeightKg: 6 },
    { name: "Pollock", photo: "/images/fish/pollock.png", rarity: "Common", waterType: "Saltwater", weather: "Rainy (1.5x)", time: "Any", minWeight: "0.5 kg", maxWeight: "21 kg", numericMaxWeightKg: 21 },
    { name: "Halibut", photo: "/images/fish/halibut.png", rarity: "Curious", waterType: "Saltwater", weather: "Stormy (1.5x)", time: "Any", minWeight: "13 kg", maxWeight: "70 kg", numericMaxWeightKg: 70 },
    { name: "Crab", photo: "/images/fish/crab.png", rarity: "Curious", waterType: "Saltwater", weather: "Any", time: "Night", minWeight: "0.4 kg", maxWeight: "2 kg", numericMaxWeightKg: 2 },
    { name: "Mahi-Mahi", photo: "/images/fish/mahi_mahi.png", rarity: "Curious", waterType: "Saltwater", weather: "Any", time: "Day", minWeight: "7 kg", maxWeight: "15 kg", numericMaxWeightKg: 15 },
    { name: "Flying Fish", photo: "/images/fish/flying_fish.png", rarity: "Curious", waterType: "Saltwater", weather: "Clear (1.5x)", time: "Any", minWeight: "0.4 kg", maxWeight: "1.5 kg", numericMaxWeightKg: 1.5 },
    { name: "Albacore Tuna", photo: "/images/fish/albacore_tuna.png", rarity: "Curious", waterType: "Saltwater", weather: "Rainy (1.5x)", time: "Any", minWeight: "10 kg", maxWeight: "30 kg", numericMaxWeightKg: 30 },
    { name: "Sailfish", photo: "/images/fish/sailfish.png", rarity: "Elusive", waterType: "Saltwater", weather: "Any", time: "Morning", minWeight: "50 kg", maxWeight: "100 kg", numericMaxWeightKg: 100 },
    { name: "Blobfish", photo: "/images/fish/blobfish.png", rarity: "Elusive", waterType: "Saltwater", weather: "Any", time: "Morning", minWeight: "1.5 kg", maxWeight: "15 kg", numericMaxWeightKg: 15 },
    { name: "Common Stingray", photo: "/images/fish/common_stingray.png", rarity: "Elusive", waterType: "Saltwater", weather: "Any", time: "Night", minWeight: "0.8 kg", maxWeight: "35 kg", numericMaxWeightKg: 35 },
    { name: "Seahorse", photo: "/images/fish/seahorse.png", rarity: "Elusive", waterType: "Saltwater", weather: "Rainy (1.5x)", time: "Evening", minWeight: "0.0 kg", maxWeight: "0.1 kg", numericMaxWeightKg: 0.1 },
    { name: "Sunfish", photo: "/images/fish/sunfish.png", rarity: "Elusive", waterType: "Saltwater", weather: "Any", time: "Day", minWeight: "234 kg", maxWeight: "1,023 kg", numericMaxWeightKg: 1023 },
    { name: "Plankfish", photo: "/images/fish/plankfish.png", rarity: "Elusive", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "-", maxWeight: "-", numericMaxWeightKg: 0 },
    { name: "Oarfish", photo: "/images/fish/oarfish.png", rarity: "Fabled", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "90 kg", maxWeight: "300 kg", numericMaxWeightKg: 300 },
    { name: "Manta Ray", photo: "/images/fish/manta_ray.png", rarity: "Fabled", waterType: "Saltwater", weather: "Any", time: "Day", minWeight: "55.5 kg", maxWeight: "1,555 kg", numericMaxWeightKg: 1555 },
    { name: "Bombfish", photo: "/images/fish/bombfish.png", rarity: "Fabled", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "-", maxWeight: "-", numericMaxWeightKg: 0 },
    { name: "Great White Shark", photo: "/images/fish/great_white_shark.png", rarity: "Mythic", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "489 kg", maxWeight: "1,457 kg", numericMaxWeightKg: 1457 },
    { name: "Giant Squid", photo: "/images/fish/giant_squid.png", rarity: "Mythic", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "89 kg", maxWeight: "512 kg", numericMaxWeightKg: 512 },
    { name: "Abyssal Serpentfish", photo: "/images/fish/abyssal_serpentfish.png", rarity: "Exotic", waterType: "Saltwater, Swampwater", weather: "Any", time: "Night", minWeight: "100 kg", maxWeight: "3,100 kg", numericMaxWeightKg: 3100 },
    { name: "Baby Megalodon", photo: "/images/fish/baby_megalodon.png", rarity: "Exotic", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "35,000 kg", maxWeight: "120,000 kg", numericMaxWeightKg: 120000 },
    { name: "Three-Headed Salmon", photo: "/images/fish/three_headed_salmon.png", rarity: "Exotic", waterType: "Saltwater", weather: "Any", time: "Any", minWeight: "-", maxWeight: "-", numericMaxWeightKg: 0 }
];