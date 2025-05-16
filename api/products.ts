// File: /api/hello.js

export default function handler(req, res) {
  const products =[{
      id: 1,
      name: "HP Laptop",
      price: 29.99,
      imageUrl: "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "computing"
    },
    {
      id: 2,
      name: "Keyboard",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1630096711968-d118c17a173a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "computing"
    },
    {
      id: 3,
      name: "Mouse",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1671611822374-4719df5c89bb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "computing"
    },
    {
      id: 4,
      name: "Hardware",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1671017873709-ba0f8fba5e31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "computing"
    },
    {
      id: 5,
      name: "MacbookPro",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1592919933511-ea9d487c85e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "computing"
    },
    {
      id: 6,
      name: "MacbookPro",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1592919933511-ea9d487c85e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "computing"
    },
    {
      id: 7,
      name: "Sharp Keyboard",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1625130694338-4110ba634e59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "computing"
    },
    {
      id: 8,
      name: "Hard Drive",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1687071523279-93ec8e5e53b7?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "computing"
    },
    {
      id: 9,
      name: "Complete Dextop Set",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1678564741870-d68a69925537?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "computing"
    },
    {
      id: 10,
      name: "Red Coat",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "clothes"
    },
    {
      id: 11,
      name: "Brown Jacket",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "clothes"
    },
    {
      id: 12,
      name: "Cutton Knitted Top",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "clothes"
    },
    {
      id: 13,
      name: "Blue Top",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "clothes"
    },
    {
      id: 14,
      name: "Blue Top",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "clothes"
    },
    {
      id: 15,
      name: "Red Nike Swoosh",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "shoe"
    },
    {
      id: 16,
      name: "Red Vans",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "shoe"
    },
    {
      id: 17,
      name: "Red Vans",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "shoe"
    },
    {
      id: 18,
      name: "Blue Zoom",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1663100769321-9eb8fe5a8e6b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "shoe"
    },
    {
      id: 19,
      name: "Black Airforce",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "shoe"
    },
    {
      id: 20,
      name: "Green Zoom",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "shoe"
    },
    {
      id: 21,
      name: "White Bag",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1681498856888-2f3552c0b189?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "bag"
    },
    {
      id: 22,
      name: "Red Birkin Bag",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "bag"
    },
    {
      id: 23,
      name: "Brown Birkin Bag",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "bag"
    },
    {
      id: 24,
      name: "School Bag",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "bag"
    },
  ];

  res.status(200).json(products);
}
