export const products = [
  {
    id: "1",
    name: "Laptop",
    price: 75000,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    rating: 4.5,
    created: "2024-05-01",
    attributes: [
      { name: "Color", values: ["Silver", "Black"] },
      { name: "Storage", values: ["256GB", "512GB"] },
    ],
    variations: [
      {
        sku: "LAP-SIL-256",
        attributes: { Color: "Silver", Storage: "256GB" },
        stock: 3,
        price: 75000,
      },
      {
        sku: "LAP-SIL-512",
        attributes: { Color: "Silver", Storage: "512GB" },
        stock: 2,
        price: 80000,
      },
      {
        sku: "LAP-BLK-256",
        attributes: { Color: "Black", Storage: "256GB" },
        stock: 4,
        price: 75000,
      },
      {
        sku: "LAP-BLK-512",
        attributes: { Color: "Black", Storage: "512GB" },
        stock: 1,
        price: 80000,
      },
    ],
  },
  {
    id: "2",
    name: "Smartphone",
    price: 45000,
    stock: 15,
    image:
      "https://images.pexels.com/photos/106400/pexels-photo-106400.jpeg?w=400&h=400&fit=crop",
    rating: 4.2,
    created: "2024-04-25",
    attributes: [
      { name: "Color", values: ["Blue", "White", "Black"] },
      { name: "Storage", values: ["128GB", "256GB"] },
    ],
    variations: [
      {
        sku: "SPH-BLU-128",
        attributes: { Color: "Blue", Storage: "128GB" },
        stock: 4,
        price: 45000,
      },
      {
        sku: "SPH-BLU-256",
        attributes: { Color: "Blue", Storage: "256GB" },
        stock: 3,
        price: 50000,
      },
      {
        sku: "SPH-WHT-128",
        attributes: { Color: "White", Storage: "128GB" },
        stock: 2,
        price: 45000,
      },
      {
        sku: "SPH-WHT-256",
        attributes: { Color: "White", Storage: "256GB" },
        stock: 1,
        price: 50000,
      },
      {
        sku: "SPH-BLK-128",
        attributes: { Color: "Black", Storage: "128GB" },
        stock: 5,
        price: 45000,
      },
      {
        sku: "SPH-BLK-256",
        attributes: { Color: "Black", Storage: "256GB" },
        stock: 0,
        price: 50000,
      },
    ],
  },
  {
    id: "3",
    name: "Wireless Earbuds",
    price: 12000,
    stock: 10,
    image:
      "https://images.pexels.com/photos/3780680/pexels-photo-3780680.jpeg?w=400&h=400&fit=crop",
    rating: 4.0,
    created: "2024-06-10",
    attributes: [{ name: "Color", values: ["Black", "White", "Blue"] }],
    variations: [
      {
        sku: "EAR-BLK",
        attributes: { Color: "Black" },
        stock: 5,
        price: 12000,
      },
      {
        sku: "EAR-WHT",
        attributes: { Color: "White" },
        stock: 3,
        price: 12000,
      },
      { sku: "EAR-BLU", attributes: { Color: "Blue" }, stock: 2, price: 12000 },
    ],
  },
  {
    id: "4",
    name: "Smartwatch",
    price: 20000,
    stock: 10,
    image:
      "https://images.pexels.com/photos/4379288/pexels-photo-4379288.jpeg?auto=compress&w=400&h=400&fit=crop",
    rating: 4.3,
    created: "2024-03-15",
    attributes: [
      { name: "Color", values: ["Black", "Silver"] },
      { name: "Band Material", values: ["Silicone", "Metal"] },
    ],
    variations: [
      {
        sku: "SWT-BLK-SIL",
        attributes: { Color: "Black", "Band Material": "Silicone" },
        stock: 2,
        price: 20000,
      },
      {
        sku: "SWT-BLK-MET",
        attributes: { Color: "Black", "Band Material": "Metal" },
        stock: 4,
        price: 22000,
      },
      {
        sku: "SWT-SIL-SIL",
        attributes: { Color: "Silver", "Band Material": "Silicone" },
        stock: 1,
        price: 20000,
      },
      {
        sku: "SWT-SIL-MET",
        attributes: { Color: "Silver", "Band Material": "Metal" },
        stock: 3,
        price: 22000,
      },
    ],
  },
  {
    id: "5",
    name: "Gaming Console",
    price: 35000,
    stock: 6,
    image:
      "https://images.pexels.com/photos/4523066/pexels-photo-4523066.jpeg?w=400&h=400&fit=crop",
    rating: 4.7,
    created: "2024-02-20",
    attributes: [
      { name: "Color", values: ["Black", "White"] },
      { name: "Storage", values: ["1TB", "2TB"] },
    ],
    variations: [
      {
        sku: "CON-BLK-1TB",
        attributes: { Color: "Black", Storage: "1TB" },
        stock: 1,
        price: 35000,
      },
      {
        sku: "CON-BLK-2TB",
        attributes: { Color: "Black", Storage: "2TB" },
        stock: 0,
        price: 40000,
      },
      {
        sku: "CON-WHT-1TB",
        attributes: { Color: "White", Storage: "1TB" },
        stock: 3,
        price: 35000,
      },
      {
        sku: "CON-WHT-2TB",
        attributes: { Color: "White", Storage: "2TB" },
        stock: 2,
        price: 40000,
      },
    ],
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    price: 8000,
    stock: 9,
    image:
      "https://images.pexels.com/photos/14309813/pexels-photo-14309813.jpeg?w=400&h=400&fit=crop",
    rating: 4.1,
    created: "2024-05-20",
    attributes: [{ name: "Color", values: ["Black", "Red", "Blue"] }],
    variations: [
      { sku: "SPK-BLK", attributes: { Color: "Black" }, stock: 4, price: 8000 },
      { sku: "SPK-RED", attributes: { Color: "Red" }, stock: 2, price: 8000 },
      { sku: "SPK-BLU", attributes: { Color: "Blue" }, stock: 3, price: 8000 },
    ],
  },
  {
    id: "7",
    name: "Tablet",
    price: 30000,
    stock: 10,
    image:
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?w=400&h=400&fit=crop",
    rating: 4.4,
    created: "2024-01-10",
    attributes: [
      { name: "Color", values: ["Space Gray", "Silver"] },
      { name: "Storage", values: ["64GB", "128GB"] },
    ],
    variations: [
      {
        sku: "TAB-GRY-64",
        attributes: { Color: "Space Gray", Storage: "64GB" },
        stock: 3,
        price: 30000,
      },
      {
        sku: "TAB-GRY-128",
        attributes: { Color: "Space Gray", Storage: "128GB" },
        stock: 1,
        price: 35000,
      },
      {
        sku: "TAB-SIL-64",
        attributes: { Color: "Silver", Storage: "64GB" },
        stock: 4,
        price: 30000,
      },
      {
        sku: "TAB-SIL-128",
        attributes: { Color: "Silver", Storage: "128GB" },
        stock: 2,
        price: 35000,
      },
    ],
  },
  {
    id: "8",
    name: "Digital Camera",
    price: 60000,
    stock: 6,
    image:
      "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&w=400&h=400&fit=crop",
    rating: 4.6,
    created: "2024-04-01",
    attributes: [
      { name: "Color", values: ["Black", "Silver"] },
      { name: "Lens Type", values: ["Standard", "Zoom"] },
    ],
    variations: [
      {
        sku: "CAM-BLK-STD",
        attributes: { Color: "Black", "Lens Type": "Standard" },
        stock: 2,
        price: 60000,
      },
      {
        sku: "CAM-BLK-ZOOM",
        attributes: { Color: "Black", "Lens Type": "Zoom" },
        stock: 3,
        price: 65000,
      },
      {
        sku: "CAM-SIL-STD",
        attributes: { Color: "Silver", "Lens Type": "Standard" },
        stock: 1,
        price: 60000,
      },
      {
        sku: "CAM-SIL-ZOOM",
        attributes: { Color: "Silver", "Lens Type": "Zoom" },
        stock: 0,
        price: 65000,
      },
    ],
  },
  {
    id: "9",
    name: "Headphones",
    price: 15000,
    stock: 10,
    image:
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?w=400&h=400&fit=crop",
    rating: 4.2,
    created: "2024-03-01",
    attributes: [
      { name: "Color", values: ["Black", "White"] },
      { name: "Type", values: ["Over-Ear", "On-Ear"] },
    ],
    variations: [
      {
        sku: "HPH-BLK-OVR",
        attributes: { Color: "Black", Type: "Over-Ear" },
        stock: 4,
        price: 15000,
      },
      {
        sku: "HPH-BLK-ON",
        attributes: { Color: "Black", Type: "On-Ear" },
        stock: 2,
        price: 14000,
      },
      {
        sku: "HPH-WHT-OVR",
        attributes: { Color: "White", Type: "Over-Ear" },
        stock: 3,
        price: 15000,
      },
      {
        sku: "HPH-WHT-ON",
        attributes: { Color: "White", Type: "On-Ear" },
        stock: 1,
        price: 14000,
      },
    ],
  },
  {
    id: "10",
    name: "Portable Charger",
    price: 5000,
    stock: 14,
    image:
      "https://images.pexels.com/photos/3921704/pexels-photo-3921704.jpeg?auto=compress&w=400&h=400&fit=crop",
    rating: 4.0,
    created: "2024-06-01",
    attributes: [
      { name: "Color", values: ["Black", "White"] },
      { name: "Capacity", values: ["10000mAh", "20000mAh"] },
    ],
    variations: [
      {
        sku: "PCH-BLK-10K",
        attributes: { Color: "Black", Capacity: "10000mAh" },
        stock: 5,
        price: 5000,
      },
      {
        sku: "PCH-BLK-20K",
        attributes: { Color: "Black", Capacity: "20000mAh" },
        stock: 3,
        price: 7000,
      },
      {
        sku: "PCH-WHT-10K",
        attributes: { Color: "White", Capacity: "10000mAh" },
        stock: 2,
        price: 5000,
      },
      {
        sku: "PCH-WHT-20K",
        attributes: { Color: "White", Capacity: "20000mAh" },
        stock: 4,
        price: 7000,
      },
    ],
  },
];
