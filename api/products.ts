// File: /api/hello.js

export default function handler(req, res) {
  const products =[{
      id: 1,
      name: "HP Laptop",
      price: 29.99,
      imageUrl: "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Keyboard",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1630096711968-d118c17a173a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Mouse",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1671611822374-4719df5c89bb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Hardware",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1671017873709-ba0f8fba5e31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "MacbookPro",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1592919933511-ea9d487c85e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "MacbookPro",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1592919933511-ea9d487c85e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Sharp Keyboard",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1625130694338-4110ba634e59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Hard Drive",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1687071523279-93ec8e5e53b7?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Complete Dextop Set",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1678564741870-d68a69925537?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  res.status(200).json(products);
}
