import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Add New Item</h1>
        <p className="text-gray-600 mb-8">Week 5 Assignment - State and Event Handling</p>
        
        <div className="flex justify-center">
          <NewItem />
        </div>
        
        <div className="mt-8 text-gray-600 text-sm">
          <p className="mb-2">Instructions:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fill out the form to add a new shopping item</li>
            <li>Item will be logged to console when submitted</li>
            <li>Form resets after submission</li>
          </ul>
        </div>
      </div>
    </main>
  );
}