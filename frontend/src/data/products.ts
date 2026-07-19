export interface ProductType {
      id: number;
    name: string;
    category: string;
    brand: string;
    price: number;
    oldPrice: number;
    rating: number;
    reviews: number;
    stock: number;
    description: string;
    image: string;
    images: string[];
    sold: number;
  };
 export const products = [  {
    id: 1,
    name: "Hydrating Serum",
    category: "Skincare",
    brand: "Velvet Beauty",
    price: 35,
    oldPrice: 45,
    rating: 4.9,
    reviews: 124,
    stock: 18,
     sold:250,
    description:
      "A lightweight hydrating serum enriched with Hyaluronic Acid and Vitamin B5 to deeply moisturize, restore skin elasticity, and reveal a healthy natural glow.",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900",
    images: [
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900",
    ],
  },
  
  {
    id: 2,
    name: "Matte Lipstick",
    category: "Makeup",
    brand: "Velvet Beauty",
    price: 22,
    oldPrice: 28,
    rating: 4.8,
    reviews: 87,
    stock: 34,
    sold: 150,
    description:
      "Long-lasting matte lipstick with intense pigmentation and a smooth comfortable finish that lasts all day.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900",
      "https://images.unsplash.com/photo-1583241800698-9c52bd8e3c36?w=900",
    ],
  },
  {
    id: 3,
    name: "Face Cream",
    category: "Skincare",
    brand: "Velvet Beauty",
    price: 29,
    oldPrice: 38,
    rating: 4.7,
    reviews: 63,
    sold: 100,
    stock: 15,
    description:
      "Rich moisturizing cream that nourishes dry skin while improving softness and protecting the skin barrier.",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900",
    ],
  },
  {
    id: 4,
    name: "Luxury Perfume",
    category: "Perfumes",
    brand: "Velvet Beauty",
    price: 55,
    oldPrice: 70,
    rating: 5,
    sold: 80,
    reviews: 203,
    stock: 9,
    description:
      "Elegant floral fragrance with notes of jasmine, vanilla and musk designed for everyday luxury.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=900",
    ],
  },
  {
    id: 5,
    name: "Body Lotion",
    category: "Body Care",
    brand: "Velvet Beauty",
    price: 30,
    oldPrice: 38,
    rating: 4.8,
    reviews: 95,
    stock: 26,
    sold: 120,
    description:
      "Silky body lotion enriched with Shea Butter to provide 24-hour hydration and smooth healthy-looking skin.",
    image:
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=900",
    images: [
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=900",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=900",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900",
    ],
  },
];