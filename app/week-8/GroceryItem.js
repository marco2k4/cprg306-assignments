export default function GroceryItem({ name, quantity, category, onSelect }) {
  return (
    <div 
      onClick={() => onSelect?.({ name, quantity, category })}
      className="p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm transition-colors cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-md"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Category: {category}</p>
        </div>
        <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
          <span className="text-blue-800 dark:text-blue-200 font-medium">
            Qty: {quantity}
          </span>
        </div>
      </div>
    </div>
  );
}