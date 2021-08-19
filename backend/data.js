import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Admin",
      email: "admin@ads.asd",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: "Puma",
        logo: "/images/logo1.png",
        description: "Best seller",
        rating: 4.5,
        numReviews: 2,
      },
    },
    {
      name: "Customer",
      email: "firstcust@ads.asd",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Addidas Slim T-shirt",
      category: "T-Shirts",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 20,
      brand: "Addidas",
      rating: 4,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Lacoste Slim T-shirt",
      category: "T-Shirts",
      image: "/images/p3.jpg",
      price: 220,
      countInStock: 0,
      brand: "Lacoste",
      rating: 4.8,
      numReviews: 22,
      description: "high quality product",
    },
    {
      name: "Nike Slim Pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 99,
      countInStock: 15,
      brand: "Nike",
      rating: 4.7,
      numReviews: 15,
      description: "high quality product",
    },
    {
      name: "Puma Slim pants",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 111,
      countInStock: 5,
      brand: "Puma",
      rating: 4,
      numReviews: 55,
      description: "high quality product",
    },
    {
      name: "Addidas Fit pants",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 111,
      countInStock: 12,
      brand: "Addidas",
      rating: 4.9,
      numReviews: 35,
      description: "high quality product",
    },
  ],
};

export default data;
