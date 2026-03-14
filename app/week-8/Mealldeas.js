"use client";

import { useState, useEffect } from "react";

// API fetching function (outside component)
const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || []; // Return empty array if no meals found
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Load meal ideas when ingredient changes
  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient && ingredient.trim() !== "") {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
      } else {
        setMeals([]);
      }
    };

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
        Meal ideas with {ingredient ? (
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            {ingredient}
          </span>
        ) : (
          "selected ingredient"
        )}
      </h3>
      
      {meals.length > 0 ? (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li 
              key={meal.idMeal}
              className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                {meal.strMealThumb && (
                  <img 
                    src={meal.strMealThumb} 
                    alt={meal.strMeal}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {meal.strMeal}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 italic">
          {ingredient 
            ? `No meal ideas found for "${ingredient}"` 
            : "Select an ingredient to see meal ideas"}
        </p>
      )}
    </div>
  );
}