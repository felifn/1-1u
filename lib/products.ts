export interface Product {
  id: number
  name: string
  price: string
  priceCAD: string
  image: string
  images: string[]
  category: string
  colors: {
    name: string
    value: string
    image: string
  }[]
  sizes: string[]
  description: string
  sizeGuide: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "DECAY HENLEY (BLACK)",
    price: "$62.00 USD",
    priceCAD: "$81.00 CAD",
    image: "/placeholder.svg?height=600&width=600&text=Decay+Henley+Black",
    images: [
      "/placeholder.svg?height=600&width=600&text=Decay+Henley+Black+Front",
      "/placeholder.svg?height=600&width=600&text=Decay+Henley+Black+Back",
      "/placeholder.svg?height=600&width=600&text=Decay+Henley+Black+Detail",
    ],
    category: "tops",
    colors: [
      {
        name: "BLACK",
        value: "#000000",
        image: "/placeholder.svg?height=600&width=600&text=Decay+Henley+Black",
      },
      {
        name: "BONE",
        value: "#F5F5DC",
        image: "/placeholder.svg?height=600&width=600&text=Decay+Henley+Bone",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description:
      "Premium cotton henley with distressed detailing. Features button placket and long sleeves. Perfect for layering or wearing alone.",
    sizeGuide: "Fits true to size. Model is 6'0\" and wearing size M.",
  },
  {
    id: 2,
    name: "DECAY HENLEY (BONE)",
    price: "$62.00 USD",
    priceCAD: "$81.00 CAD",
    image: "/placeholder.svg?height=600&width=600&text=Decay+Henley+Bone",
    images: [
      "/placeholder.svg?height=600&width=600&text=Decay+Henley+Bone+Front",
      "/placeholder.svg?height=600&width=600&text=Decay+Henley+Bone+Back",
      "/placeholder.svg?height=600&width=600&text=Decay+Henley+Bone+Detail",
    ],
    category: "tops",
    colors: [
      {
        name: "BLACK",
        value: "#000000",
        image: "/placeholder.svg?height=600&width=600&text=Decay+Henley+Black",
      },
      {
        name: "BONE",
        value: "#F5F5DC",
        image: "/placeholder.svg?height=600&width=600&text=Decay+Henley+Bone",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description:
      "Premium cotton henley with distressed detailing. Features button placket and long sleeves. Perfect for layering or wearing alone.",
    sizeGuide: "Fits true to size. Model is 6'0\" and wearing size M.",
  },
  {
    id: 3,
    name: "WRECK CARGO SHORTS (BLACK)",
    price: "$48.00 USD",
    priceCAD: "$63.00 CAD",
    image: "/placeholder.svg?height=600&width=600&text=Wreck+Cargo+Black",
    images: [
      "/placeholder.svg?height=600&width=600&text=Wreck+Cargo+Black+Front",
      "/placeholder.svg?height=600&width=600&text=Wreck+Cargo+Black+Back",
    ],
    category: "bottoms",
    colors: [
      {
        name: "BLACK",
        value: "#000000",
        image: "/placeholder.svg?height=600&width=600&text=Wreck+Cargo+Black",
      },
      {
        name: "OLIVE",
        value: "#808000",
        image: "/placeholder.svg?height=600&width=600&text=Wreck+Cargo+Olive",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Distressed cargo shorts with multiple pockets. Made from durable cotton blend with vintage wash.",
    sizeGuide: "Relaxed fit. Size down for a more fitted look.",
  },
  {
    id: 4,
    name: "WRECK CARGO SHORTS (OLIVE)",
    price: "$48.00 USD",
    priceCAD: "$63.00 CAD",
    image: "/placeholder.svg?height=600&width=600&text=Wreck+Cargo+Olive",
    images: [
      "/placeholder.svg?height=600&width=600&text=Wreck+Cargo+Olive+Front",
      "/placeholder.svg?height=600&width=600&text=Wreck+Cargo+Olive+Back",
    ],
    category: "bottoms",
    colors: [
      {
        name: "BLACK",
        value: "#000000",
        image: "/placeholder.svg?height=600&width=600&text=Wreck+Cargo+Black",
      },
      {
        name: "OLIVE",
        value: "#808000",
        image: "/placeholder.svg?height=600&width=600&text=Wreck+Cargo+Olive",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Distressed cargo shorts with multiple pockets. Made from durable cotton blend with vintage wash.",
    sizeGuide: "Relaxed fit. Size down for a more fitted look.",
  },
  {
    id: 5,
    name: "TORN MESH TEE (BLACK)",
    price: "$38.00 USD",
    priceCAD: "$50.00 CAD",
    image: "/placeholder.svg?height=600&width=600&text=Torn+Mesh+Tee",
    images: [
      "/placeholder.svg?height=600&width=600&text=Torn+Mesh+Tee+Front",
      "/placeholder.svg?height=600&width=600&text=Torn+Mesh+Tee+Back",
    ],
    category: "tshirts",
    colors: [
      {
        name: "BLACK",
        value: "#000000",
        image: "/placeholder.svg?height=600&width=600&text=Torn+Mesh+Tee",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Oversized mesh tee with distressed details. Lightweight and breathable fabric perfect for layering.",
    sizeGuide: "Oversized fit. Size down for regular fit.",
  },
  {
    id: 6,
    name: "RUIN DENIM JACKET",
    price: "$128.00 USD",
    priceCAD: "$167.00 CAD",
    image: "/placeholder.svg?height=600&width=600&text=Ruin+Denim+Jacket",
    images: [
      "/placeholder.svg?height=600&width=600&text=Ruin+Denim+Jacket+Front",
      "/placeholder.svg?height=600&width=600&text=Ruin+Denim+Jacket+Back",
    ],
    category: "jackets",
    colors: [
      {
        name: "INDIGO",
        value: "#4B0082",
        image: "/placeholder.svg?height=600&width=600&text=Ruin+Denim+Jacket",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Classic denim jacket with heavy distressing and vintage wash. Features button closure and chest pockets.",
    sizeGuide: "True to size. Designed for layering.",
  },
  {
    id: 7,
    name: "DESTROYED JEANS (INDIGO)",
    price: "$98.00 USD",
    priceCAD: "$128.00 CAD",
    image: "/placeholder.svg?height=600&width=600&text=Destroyed+Jeans",
    images: [
      "/placeholder.svg?height=600&width=600&text=Destroyed+Jeans+Front",
      "/placeholder.svg?height=600&width=600&text=Destroyed+Jeans+Back",
    ],
    category: "bottoms",
    colors: [
      {
        name: "INDIGO",
        value: "#4B0082",
        image: "/placeholder.svg?height=600&width=600&text=Destroyed+Jeans",
      },
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    description: "Heavily distressed denim with rips and tears throughout. Slim fit with tapered leg.",
    sizeGuide: "Slim fit. Waist sizes run true to size.",
  },
  {
    id: 8,
    name: "SHREDDED HOODIE",
    price: "$78.00 USD",
    priceCAD: "$102.00 CAD",
    image: "/placeholder.svg?height=600&width=600&text=Shredded+Hoodie",
    images: [
      "/placeholder.svg?height=600&width=600&text=Shredded+Hoodie+Front",
      "/placeholder.svg?height=600&width=600&text=Shredded+Hoodie+Back",
    ],
    category: "hoodies",
    colors: [
      {
        name: "BLACK",
        value: "#000000",
        image: "/placeholder.svg?height=600&width=600&text=Shredded+Hoodie",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Oversized hoodie with shredded detailing. Heavy cotton blend with drawstring hood.",
    sizeGuide: "Oversized fit. Size down for regular fit.",
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
