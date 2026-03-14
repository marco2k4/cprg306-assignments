"use client";

import { useState } from "react";
import NewItem from "./NewGroceryItem";
import ItemList from "./GroceryItemList";
import MealIdeas from "./MealIdeas";
import itemsData from "./grocery-items.json";

export default function Page() {
  // Initialize state with items from json file
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Event handler to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Event handler to select an item from the list
  const handleItemSelect = (item) => {
    // Clean up the item name by removing quantity, emojis, and extra text
    let cleanName = item.name
      .split(',')[0]                 // Remove everything after comma
      .replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '') // Remove emojis
      .replace(/[0-9\s]+$/, '')       // Remove numbers and spaces at the end
      .trim();                         // Trim whitespace
    
    setSelectedItemName(cleanName);
  };

  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
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
            <p className="text-gray-600 dark:text-gray-300">Week 8 Assignment - Meal Ideas</p>
          </header>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left column - Shopping List */}
            <section className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
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
                <ItemList 
                  items={items} 
                  onItemSelect={handleItemSelect}
                />
              </div>
            </section>

            {/* Right column - Meal Ideas */}
            <section className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                Meal Ideas
              </h2>
              {selectedItemName ? (
                <MealIdeas ingredient={selectedItemName} />
              ) : (
                <p className="text-gray-500 dark:text-gray-400 italic">
                  Select an item to see meal ideas
                </p>
              )}
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}