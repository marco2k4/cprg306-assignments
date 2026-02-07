import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Shopping List</h1>
        <p className="text-gray-600 mb-8">Week 3 Assignment</p>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grocery Items</h2>
            <p className="text-gray-600 mb-4">Total items: 12</p>
          </div>
          
          <GroceryItemList />
          
        </div>
      </div>
    </main>
  );
}