export interface GearItem {
    name: string;
    photo: string;
    price: string;
    location: string;
    luck: string;
    strength: string;
    expertise: string;
    attractionRate: string;
    bigCatchRate: string;
    maxWeight?: string; // Solo aplica para Rods
}

export const rodsData: GearItem[] = [
    { name: "Stick and String", photo: "/images/rods/stick_and_string.png", price: "$0", location: "Default Rod", luck: "-50", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-100", maxWeight: "5kg" },
    { name: "Sunleaf Rod", photo: "/images/rods/sunleaf_rod.png", price: "$0", location: "Sell Shops", luck: "+10", strength: "+5", expertise: "+10", attractionRate: "+25%", bigCatchRate: "+15", maxWeight: "250kg" },
    { name: "Toy Rod", photo: "/images/rods/toy_rod.png", price: "$750", location: "Coconut Bay", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-", maxWeight: "15kg" },
    { name: "Sturdy Wooden Rod", photo: "/images/rods/sturdy_wooden_rod.png", price: "$2,000", location: "Coconut Bay", luck: "+15", strength: "-", expertise: "+5", attractionRate: "+20%", bigCatchRate: "-", maxWeight: "30kg" },
    { name: "Slim Rod", photo: "/images/rods/slim_rod.png", price: "$10,000", location: "Coconut Bay", luck: "+20", strength: "+10", expertise: "+10", attractionRate: "+25%", bigCatchRate: "+20", maxWeight: "500kg" },
    { name: "Telescopic Rod", photo: "/images/rods/telescopic_rod.png", price: "$15,000", location: "Coconut Bay", luck: "+10", strength: "+15", expertise: "+15", attractionRate: "+10%", bigCatchRate: "+5", maxWeight: "2,005kg" },
    { name: "Metallic Rod", photo: "/images/rods/metallic_rod.png", price: "$15,000", location: "Coconut Bay", luck: "-", strength: "+55", expertise: "+55", attractionRate: "+10%", bigCatchRate: "+10", maxWeight: "1,000kg" },
    { name: "Darkwood Rod", photo: "/images/rods/darkwood_rod.png", price: "$25,000", location: "Tanglewood", luck: "+30", strength: "+10", expertise: "+10", attractionRate: "+30%", bigCatchRate: "+5", maxWeight: "1,800kg" },
    { name: "Speedy Rod", photo: "/images/rods/speedy_rod.png", price: "$55,000", location: "Crescent Isle", luck: "+1", strength: "+5", expertise: "+5", attractionRate: "+60%", bigCatchRate: "-", maxWeight: "1500kg" },
    { name: "Fortunate Rod", photo: "/images/rods/fortunate_rod.png", price: "$75,000", location: "Crescent Isle", luck: "+100", strength: "+10", expertise: "+5", attractionRate: "+10%", bigCatchRate: "+65", maxWeight: "1500kg" },
    { name: "Alien Rod", photo: "/images/rods/alien_rod.png", price: "$200,000", location: "Alien Quest", luck: "+55", strength: "+10", expertise: "+10", attractionRate: "+45%", bigCatchRate: "+30", maxWeight: "32,000kg" },
    { name: "Rustfang Rod", photo: "/images/rods/rustfang_rod.png", price: "$250,000", location: "Luxian Dunes", luck: "+70", strength: "+20", expertise: "+20", attractionRate: "+25%", bigCatchRate: "+35", maxWeight: "35,000kg" },
    { name: "Runesteel Rod", photo: "/images/rods/runesteel_rod.png", price: "$700,000", location: "Vlad (Islander)", luck: "+90", strength: "+25", expertise: "+20", attractionRate: "+30%", bigCatchRate: "+40", maxWeight: "100,000kg" },
    { name: "Rod of the Pharaoh", photo: "/images/rods/rod_of_the_pharaoh.png", price: "$750,000", location: "Luxian Dunes", luck: "+222", strength: "+20", expertise: "+40", attractionRate: "-10%", bigCatchRate: "+35", maxWeight: "100,000kg" },
    { name: "Rod of Perpetuity", photo: "/images/rods/rod_of_perpetuity.png", price: "$0", location: "Reach level 500", luck: "+150", strength: "+30", expertise: "+30", attractionRate: "+50%", bigCatchRate: "+10", maxWeight: "500,000kg" },
    { name: "Leviathan Rod", photo: "/images/rods/leviathan_rod.png", price: "$1,000,000", location: "Crafted with Tomina's Crafting Services at Crescent Isle", luck: "+500", strength: "+20", expertise: "+20", attractionRate: "+25%", bigCatchRate: "+35", maxWeight: "100,000kg" }
];

export const linesData: GearItem[] = [
    { name: "Basic Line", photo: "/images/lines/basic_line.png", price: "$0", location: "Default Line", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-" },
    { name: "Aquamarine Line", photo: "/images/lines/aquamarine_line.png", price: "$100", location: "Coconut Bay", luck: "-", strength: "-", expertise: "-", attractionRate: "+5%", bigCatchRate: "-" },
    { name: "Carbon Line", photo: "/images/lines/carbon_line.png", price: "$1,000", location: "Coconut Bay", luck: "-", strength: "+7", expertise: "+7", attractionRate: "-", bigCatchRate: "-" },
    { name: "Heavy Duty Line", photo: "/images/lines/heavy_duty_line.png", price: "$4,000", location: "Crescent Isle", luck: "-", strength: "+10", expertise: "+10", attractionRate: "-", bigCatchRate: "+10" },
    { name: "Flavored Line", photo: "/images/lines/flavored_line.png", price: "$10,000", location: "Tanglewood", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+30" },
    { name: "Lucky Line", photo: "/images/lines/lucky_line.png", price: "$10,000", location: "Crescent Isle", luck: "+30", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-" },
    { name: "Diamond Line", photo: "/images/lines/diamond_line.png", price: "$25,000", location: "Luxian Dunes", luck: "+25", strength: "+15", expertise: "+15", attractionRate: "+10%", bigCatchRate: "-" },
    { name: "Fur of Cerberus", photo: "/images/lines/fur_of_cerberus.png", price: "$35,000", location: "Vlad (Islander)", luck: "+25", strength: "-5", expertise: "-15", attractionRate: "+20%", bigCatchRate: "+10" },
    { name: "Midas Line", photo: "/images/lines/midas_line.png", price: "$50,000", location: "Twilight Realm", luck: "+60", strength: "+15", expertise: "+10", attractionRate: "+15%", bigCatchRate: "+5" },
    { name: "Ethereal Line", photo: "/images/lines/ethereal_line.png", price: "$0", location: "Complete the Quest: Our Ship... It's Broken!", luck: "+75", strength: "-5", expertise: "-15", attractionRate: "+20%", bigCatchRate: "+20" }
];

export const bobbersData: GearItem[] = [
    { name: "Basic Bobber", photo: "/images/bobbers/basic_bobber.png", price: "$0", location: "Default Bobber", luck: "-", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-" },
    { name: "Paulie's Bobber", photo: "/images/bobbers/paulies_bobber.png", price: "$0", location: "Complete the Quest: Paulie's Lost Saw", luck: "-", strength: "-", expertise: "+5", attractionRate: "+5%", bigCatchRate: "-" },
    { name: "Blue Bobber", photo: "/images/bobbers/blue_bobber.png", price: "$100", location: "Coconut Bay", luck: "+5", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-" },
    { name: "Dud Bobber", photo: "/images/bobbers/dud_bobber.png", price: "$1,000", location: "Crescent Isle", luck: "+5", strength: "-", expertise: "+5", attractionRate: "-", bigCatchRate: "-" },
    { name: "Feline Bobber", photo: "/images/bobbers/feline_bobber.png", price: "$2,000", location: "Tanglewood", luck: "+5", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "+10" },
    { name: "Ornamental Bobber", photo: "/images/bobbers/ornamental_bobber.png", price: "$10,000", location: "Luxian Dunes", luck: "+10", strength: "+5", expertise: "-", attractionRate: "+10%", bigCatchRate: "-" },
    { name: "Lucky Bobber", photo: "/images/bobbers/lucky_bobber.png", price: "$10,000", location: "Luxian Dunes", luck: "+40", strength: "-", expertise: "-", attractionRate: "-", bigCatchRate: "-" },
    { name: "Rainbow Slime Bobber", photo: "/images/bobbers/rainbow_slime_bobber.png", price: "$35,000", location: "Vlad (Islander)", luck: "+30", strength: "+10", expertise: "-", attractionRate: "+10%", bigCatchRate: "+10" },
    { name: "Pyramid Bobber", photo: "/images/bobbers/pyramid_bobber.png", price: "$50,000", location: "Twilight Realm", luck: "+50", strength: "+10", expertise: "-", attractionRate: "+10%", bigCatchRate: "+10" },
    { name: "Undying Heart", photo: "/images/bobbers/undying_heart.png", price: "$0", location: "Complete the Quest: Undying Love", luck: "+50", strength: "+20", expertise: "+20", attractionRate: "+10%", bigCatchRate: "+5" }
];