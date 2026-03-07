"use client";

import { useState } from "react";
import GroceryItem from "./GroceryItem";

export default function GroceryItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Create a sorted copy of items without mutating the original
  const getSortedItems = () => {
    // Create a copy of the items array
    const itemsCopy = [...items];
    
    // Sort the copy based on sortBy
    if (sortBy === "name") {
      itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
    }
    
    return itemsCopy;
  };

  const sortedItems = getSortedItems();

  return (
    <section className="space-y-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
            sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
            sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="list-none p-0 space-y-3">
        {sortedItems.map((item) => (
          <li key={item.id} className="mb-3">
            <GroceryItem 
              name={item.name} 
              quantity={item.quantity} 
              category={item.category} 
            />
          </li>
        ))}
      </ul>
    </section>
  );
}