const Shoes = [
    {
        id: "a7d4f1b",
        name: "Nike Air Force 1",
        brand: "Nike",
        price: 150,
        sizes: ["7", "8", "9", "10", "11"],
        image: "/shoes1.jpeg",
        description: "The Nike Air Force 1 '07 is the basketball OG that combines crisp leather, bold colors, and timeless style for a fresh and classic look."
    },
    {
        id: "b39c2e5",
        name: "Nike Air Max Plus",
        brand: "Nike",
        price: 180,
        sizes: ["7", "8", "9", "10", "11"],
        image: "/shoes2.png",
        description: "The Nike Air Max Plus features Tuned Air cushioning and a dynamic design inspired by palm leaves and ocean waves."
    },
    {
        id: "f8a91c0",
        name: "Air Jordan 1 Low",
        brand: "Nike",
        price: 120,
        sizes: ["7", "8", "9", "10", "11"],
        image: "/shoe3.png",
        description: "The Air Jordan 1 Low offers iconic style in a low-top silhouette with premium materials and a comfortable fit."
    },
    {
        id: "c6d731a",
        name: "Onitsuka Tiger Classic 66",
        brand: "Reebok",
        price: 90,
        sizes: ["7", "8", "9", "10", "11"],
        image: "/shoes4.jpeg",
        description: "The Onitsuka Tiger Classic 66 combines retro style with modern comfort, making it a versatile choice for everyday wear."
    },
    {
        id: "e3b4f7d",
        name: "Vans Old Skool",
        brand: "Vans",
        price: 60,
        sizes: ["7", "8", "9", "10", "11"],
        image: "/shoes5.png",
        description: "The Vans Old Skool is a timeless skate shoe featuring a durable canvas and suede upper with the iconic side stripe."
    },
    {
        id: "9fa27c1",
        name: "Nike Blazer Mid '77",
        brand: "Converse",
        price: 70,
        sizes: ["7", "8", "9", "10", "11"],
        image: "/shoes6.png",
        description: "The Nike Blazer Mid '77 boasts vintage-inspired details and a sleek profile for a modern take on a classic style."
    }
];

const Accessories = [
    {
        id: "d2e5f7a",
        name: "Tissot PR516",
        brand: "Tissot",
        price: 1099,
        colors: ["Black", "Brown", "Tan"],
        image: "/accessories1.avif",
        description: "The Tissot PR516 is a premium wristwatch combining precision engineering with timeless design."
    },
    {
        id: "b1c3a9d",
        name: "Aviator Sunglasses",
        brand: "Ray-Ban",
        price: 150,
        colors: ["Black", "Brown", "Gold"],
        image: "/accessories2.jpeg",
        description: "Ray-Ban Aviator Sunglasses feature iconic styling and UV protection for a classic and practical accessory."
    },
    {
        id: "f7a2e1c",
        name: "Leather Wallet",
        brand: "Hermes",
        price: 300,
        colors: ["Black", "Brown", "Tan"],
        image: "/accessories3.jpeg",
        description: "This Hermes Leather Wallet offers luxury craftsmanship and ample space for your essentials."
    },
    {
        id: "e9d4b6f",
        name: "Beanie Hat",
        brand: "Nike",
        price: 20,
        colors: ["Black", "Gray", "Navy"],
        image: "/accessories4.jpeg",
        description: "Stay warm and stylish with this Nike Beanie Hat, designed for comfort and everyday use."
    },
    {
        id: "a3c7f5e",
        name: "Backpack",
        brand: "Coach",
        price: 250,
        colors: ["Black", "Brown", "Tan"],
        image: "/accessories5.jpeg",
        description: "The Coach Leather Backpack offers a sleek design and functional compartments for everyday essentials."
    },
    {
        id: "c8b1d9a",
        name: "Leather Gloves",
        brand: "Gucci",
        price: 100,
        colors: ["Black", "Brown", "Tan"],
        image: "/accessories6.jpeg",
        description: "Gucci Leather Gloves provide warmth and luxury, perfect for cold-weather elegance."
    }
];

const Clothing = [
    {
        id: "f4c7e2a",
        name: "Grey Cotton Shirt",
        brand: "Zara",
        price: 120,
        sizes: ["S", "M", "L", "XL"],
        image: "/clothing1.jpeg",
        description: "This Zara Grey Cotton Shirt combines comfort and style, ideal for casual and formal wear."
    },
    {
        id: "d9a1b5c",
        name: "Leather Jacket",
        brand: "H&M",
        price: 90,
        sizes: ["S", "M", "L", "XL"],
        image: "/clothing2.avif",
        description: "H&M's Leather Jacket offers a trendy and durable outer layer for versatile styling."
    },
    {
        id: "a8e3f6d",
        name: "Regular Fit Hoodie",
        brand: "Champion",
        price: 60,
        sizes: ["S", "M", "L", "XL"],
        image: "/clothing3.jpeg",
        description: "The Champion Regular Fit Hoodie is a cozy essential for everyday casual wear."
    },
    {
        id: "b7f2d4a",
        name: "Flannel Shirt",
        brand: "Abercrombie & Fitch",
        price: 45,
        sizes: ["S", "M", "L", "XL"],
        image: "/clothing4.jpeg",
        description: "This Abercrombie & Fitch Flannel Shirt provides a warm and classic look for cooler days."
    },
    {
        id: "c5a9e1f",
        name: "Loose Fit Sweatpants",
        brand: "Nike",
        price: 50,
        sizes: ["S", "M", "L", "XL"],
        image: "/clothing5.jpeg",
        description: "Nike Loose Fit Sweatpants deliver comfort and functionality for workouts or lounging."
    },
    {
        id: "e6d3b8c",
        name: "Suit Pants",
        brand: "Ralph Lauren",
        price: 80,
        sizes: ["S", "M", "L", "XL"],
        image: "/clothing6.jpeg",
        description: "Ralph Lauren Suit Pants offer a tailored fit and premium materials for a polished appearance."
    }
];

export const categories = [
    {
        name: "CLOTHING",
        image: "/clothing1.jpeg",
        href: "/clothing",
    },
    {
        name: "SHOES",
        image: "/shoes1.jpeg",
        href: "/shoes",
    },
    {
        name: "ACCESSORIES",
        image: "accessories1.avif",
        href: "/accessories",    // Make sure this matches the route path
    },
];

export { Shoes, Accessories, Clothing };
