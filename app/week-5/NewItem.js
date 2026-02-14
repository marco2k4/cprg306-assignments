"use client";

import { useState } from "react";

export default function NewItem() {
  // Initialize state variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create item object
    const item = {
      name: name,
      quantity: quantity,
      category: category
    };

    // Log to console
    console.log(item);

    // Show alert
    alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Item</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Item Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter item name..."
          />
        </div>

        {/* Quantity and Category Row */}
        <div className="flex gap-4">
          {/* Quantity Field */}
          <div className="flex-1">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Category Field */}
          <div className="flex-1">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
        >
          + Add Item
        </button>
      </form>
    </div>
  );
}