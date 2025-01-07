import React, { useState } from "react";

const initialProducts = [
  {
    id: 1,
    title: "Bed Frame",
    category: "Bedroom",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=2585&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Dining Table",
    category: "Dining Room",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    id: 3,
    title: "Modern Sofa",
    category: "Living Room",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ProductPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [sortOption, setSortOption] = useState("name");

  const addProduct = async () => {
    const response = await fetch(
      "https://source.unsplash.com/random/300x400/?product"
    );
    const newProduct = {
      id: products.length + 1,
      title: "New Product",
      category: "New Category",
      price: Math.floor(Math.random() * 1000) + 500,
      image: response.url,
    };
    setProducts([newProduct, ...products]);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "name") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#F5F5F0] p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <a href="/">
            <h1 className="text-3xl font-bold">Our Products</h1>
          </a>
          <div className="flex items-center space-x-4">
            <button
              onClick={addProduct}
              className="bg-[#A67B5B] text-white px-4 py-2 rounded hover:bg-[#8F674A]"
            >
              Add Product
            </button>
            <select
              className="border border-gray-300 rounded px-4 py-2"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>
        </div>

        {/* Pinterest-style Grid */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Increased the minimum width from 250px to 300px
          }}
        >
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-lg p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-500 mb-4">{product.category}</p>
              <p className="text-lg font-bold mb-4">${product.price}</p>
              <button className="bg-[#A67B5B] text-white px-4 py-2 rounded hover:bg-[#8F674A]">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
