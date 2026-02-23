"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import itemsData from "./items.json";

export default function Page() {
  // Initialize state with data from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler to add new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Shopping List</h1>
        <p className="text-gray-600 mb-8">Week 6 Assignment - Lifting State Up & Sorting</p>
        
        {/* Form Section */}
        <div className="mb-8 flex justify-center">
          <NewItem onAddItem={handleAddItem} />
        </div>

        {/* List Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">My Items</h2>
            <p className="text-gray-600 text-sm">Total items: {items.length}</p>
          </div>
          
          <ItemList items={items} />
        </div>

        {/* Instructions */}
        <div className="mt-8 text-gray-600 text-sm">
          <p className="mb-2">Features:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Add new items using the form</li>
            <li>Sort items by name or category using buttons</li>
            <li>All items persist in parent state</li>
          </ul>
        </div>
      </div>
    </main>
  );
}