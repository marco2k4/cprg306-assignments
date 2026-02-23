"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Sort items based on sortBy state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      {/* Sort Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            sortBy === "name" 
              ? "bg-purple-600 text-white" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            sortBy === "category" 
              ? "bg-purple-600 text-white" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* Items List */}
      <div className="space-y-3">
        {sortedItems.map((item) => (
          <Item 
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>

      {/* Show message if no items */}
      {sortedItems.length === 0 && (
        <p className="text-gray-500 text-center py-8">No items in your shopping list. Add some!</p>
      )}
    </div>
  );
}