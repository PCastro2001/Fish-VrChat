export interface GearItem {
    name: string;
    price: string;
    costNum: number;
    location: string;
    luck: string;
    strength: string;
    expertise: string;
    attractionRate: string;
    bigCatchRate: string;
    maxWeight: string;
}

import { enchantmentsData as fullEnchantmentsData, type Enchantment } from './enchantments';

export type EnchantmentItem = Enchantment;
export const enchantmentsData = fullEnchantmentsData;

export const rodsData: GearItem[] = [
    { name: "Stick and String", price: "$0", costNum: 0, location: "Default Rod", luck: "-50", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-100", maxWeight: "5kg" },
    { name: "Sunleaf Rod", price: "$0", costNum: 0, location: "Sell Shops", luck: "+10", strength: "+5", expertise: "+10", attractionRate: "+25%", bigCatchRate: "+15", maxWeight: "250kg" },
    { name: "Toy Rod", price: "$750", costNum: 750, location: "Coconut Bay", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "15kg" },
    { name: "Sturdy Wooden Rod", price: "$2,000", costNum: 2000, location: "Coconut Bay", luck: "+15", strength: "-", expertise: "+5", attractionRate: "+20%", bigCatchRate: "-", maxWeight: "30kg" },
    { name: "Slim Rod", price: "$10,000", costNum: 10000, location: "Coconut Bay", luck: "+20", strength: "+10", expertise: "+10", attractionRate: "+25%", bigCatchRate: "+20", maxWeight: "500kg" },
    { name: "Telescopic Rod", price: "$15,000", costNum: 15000, location: "Coconut Bay", luck: "+10", strength: "+15", expertise: "+15", attractionRate: "+10%", bigCatchRate: "+5", maxWeight: "2,005kg" },
    { name: "Metallic Rod", price: "$15,000", costNum: 15000, location: "Coconut Bay", luck: "-", strength: "+55", expertise: "+55", attractionRate: "+10%", bigCatchRate: "+10", maxWeight: "1,000kg" },
    { name: "Darkwood Rod", price: "$25,000", costNum: 25000, location: "Tanglewood", luck: "+30", strength: "+10", expertise: "+10", attractionRate: "+30%", bigCatchRate: "+5", maxWeight: "1,800kg" },
    { name: "Speedy Rod", price: "$55,000", costNum: 55000, location: "Crescent Isle", luck: "+1", strength: "+5", expertise: "+5", attractionRate: "+60%", bigCatchRate: "-", maxWeight: "1,500kg" },
    { name: "Fortunate Rod", price: "$75,000", costNum: 75000, location: "Crescent Isle", luck: "+100", strength: "+10", expertise: "+5", attractionRate: "+10%", bigCatchRate: "+65", maxWeight: "1,500kg" },
    { name: "Alien Rod", price: "$200,000", costNum: 200000, location: "Alien Quest", luck: "+55", strength: "+10", expertise: "+10", attractionRate: "+45%", bigCatchRate: "+30", maxWeight: "32,000kg" },
    { name: "Rustfang Rod", price: "$250,000", costNum: 250000, location: "Luxian Dunes", luck: "+70", strength: "+20", expertise: "+20", attractionRate: "+25%", bigCatchRate: "+35", maxWeight: "35,000kg" },
    { name: "Runesteel Rod", price: "$700,000", costNum: 700000, location: "Vlad (Islander)", luck: "+90", strength: "+25", expertise: "+20", attractionRate: "+30%", bigCatchRate: "+40", maxWeight: "100,000kg" },
    { name: "Rod of the Pharaoh", price: "$750,000", costNum: 750000, location: "Luxian Dunes", luck: "+222", strength: "+20", expertise: "+40", attractionRate: "-10%", bigCatchRate: "+35", maxWeight: "100,000kg" },
    { name: "Rod of Perpetuity", price: "$0", costNum: 0, location: "Reach level 500", luck: "+150", strength: "+30", expertise: "+30", attractionRate: "+50%", bigCatchRate: "+10", maxWeight: "500,000kg" },
    { name: "Leviathan Rod", price: "$1,000,000", costNum: 1000000, location: "Crafted at Crescent Isle", luck: "+500", strength: "+20", expertise: "+20", attractionRate: "+25%", bigCatchRate: "+35", maxWeight: "100,000kg" }
];

export const linesData: GearItem[] = [
    { name: "Basic Line", price: "$0", costNum: 0, location: "Default Line", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-" },
    { name: "Aquamarine Line", price: "$100", costNum: 100, location: "Coconut Bay", luck: "-", strength: "-", expertise: "-", attractionRate: "+5%", bigCatchRate: "-", maxWeight: "-" },
    { name: "Carbon Line", price: "$1,000", costNum: 1000, location: "Coconut Bay", luck: "-", strength: "+7", expertise: "+7", attractionRate: "-", bigCatchRate: "-", maxWeight: "-" },
    { name: "Heavy Duty Line", price: "$4,000", costNum: 4000, location: "Crescent Isle", luck: "-", strength: "+10", expertise: "+10", attractionRate: "-", bigCatchRate: "+10", maxWeight: "-" },
    { name: "Flavored Line", price: "$10,000", costNum: 10000, location: "Tanglewood", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+30", maxWeight: "-" },
    { name: "Lucky Line", price: "$10,000", costNum: 10000, location: "Crescent Isle", luck: "+30", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-" },
    { name: "Diamond Line", price: "$25,000", costNum: 25000, location: "Luxian Dunes", luck: "+25", strength: "+15", expertise: "+15", attractionRate: "+10%", bigCatchRate: "-", maxWeight: "-" },
    { name: "Fur of Cerberus", price: "$35,000", costNum: 35000, location: "Vlad (Islander)", luck: "+25", strength: "-5", expertise: "-15", attractionRate: "+20%", bigCatchRate: "+10", maxWeight: "-" },
    { name: "Midas Line", price: "$50,000", costNum: 50000, location: "Twilight Realm", luck: "+60", strength: "+15", expertise: "+10", attractionRate: "+15%", bigCatchRate: "+5", maxWeight: "-" },
    { name: "Ethereal Line", price: "$0", costNum: 0, location: "Quest: Our Ship...", luck: "+75", strength: "-5", expertise: "-15", attractionRate: "+20%", bigCatchRate: "+20", maxWeight: "-" }
];

export const bobbersData: GearItem[] = [
    { name: "Basic Bobber", price: "$0", costNum: 0, location: "Default Bobber", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-" },
    { name: "Paulie's Bobber", price: "$0", costNum: 0, location: "Quest: Lost Saw", luck: "-", strength: "-", expertise: "+5", attractionRate: "+5%", bigCatchRate: "-", maxWeight: "-" },
    { name: "Blue Bobber", price: "$100", costNum: 100, location: "Coconut Bay", luck: "+5", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-" },
    { name: "Dud Bobber", price: "$1,000", costNum: 1000, location: "Crescent Isle", luck: "+5", strength: "-", expertise: "+5", attractionRate: "-", bigCatchRate: "-", maxWeight: "-" },
    { name: "Feline Bobber", price: "$2,000", costNum: 2000, location: "Tanglewood", luck: "+5", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+10", maxWeight: "-" },
    { name: "Ornamental Bobber", price: "$10,000", costNum: 10000, location: "Luxian Dunes", luck: "+10", strength: "+5", expertise: "-", attractionRate: "+10%", bigCatchRate: "-", maxWeight: "-" },
    { name: "Lucky Bobber", price: "$10,000", costNum: 10000, location: "Luxian Dunes", luck: "+40", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "-" },
    { name: "Rainbow Slime Bobber", price: "$35,000", costNum: 35000, location: "Vlad (Islander)", luck: "+30", strength: "+10", expertise: "-", attractionRate: "+10%", bigCatchRate: "+10", maxWeight: "-" },
    { name: "Pyramid Bobber", price: "$50,000", costNum: 50000, location: "Twilight Realm", luck: "+50", strength: "+10", expertise: "-", attractionRate: "+10%", bigCatchRate: "+10", maxWeight: "-" },
    { name: "Undying Heart", price: "$0", costNum: 0, location: "Quest: Undying Love", luck: "+50", strength: "+20", expertise: "+20", attractionRate: "+10%", bigCatchRate: "+5", maxWeight: "-" }
];