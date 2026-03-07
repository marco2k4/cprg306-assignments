"use client";

import { useState } from "react";
import NewItem from "./NewGroceryItem";
import ItemList from "./GroceryItemList";
import itemsData from "./grocery-items.json";

export default function Page() {
  // Initialize state with items from json file
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-4">
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
            ← Back to Assignments
          </a>
        </nav>
        
        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Shopping List
            </h1>
            <p className="text-gray-600 dark:text-gray-300">Week 7 Assignment</p>
          </header>
          
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                Add New Item
              </h2>
              <NewItem onAddItem={handleAddItem} />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                Grocery Items
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Total items: <span className="font-semibold">{items.length}</span>
              </p>
              <ItemList items={items} />
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}