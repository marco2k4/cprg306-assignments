import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Weekly Assignments</h2>
        
        <div className="space-y-4">
          {/* WEEK 2 ADDED HERE */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Week 2</h3>
            <Link 
              href="/week-2" 
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Week 2 Assignment →
            </Link>
          </div>
          
          {/* WEEK 3 ADDED HERE */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Week 3</h3>
            <Link 
              href="/week-3" 
              className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              View Week 3 Assignment →
            </Link>
          </div>

          {/* WEEK 4 ADDED HERE */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Week 4</h3>
            <Link 
              href="/week-4" 
              className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              View Week 4 Assignment →
            </Link>
          </div>
          {/* WEEK 5 ADDED HERE*/}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Week 5</h3>
            <Link 
              href="/week-5" 
              className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              View Week 5 Assignment →
            </Link>
          </div>
          {/* WEEK 6 ADDED HERE*/}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Week 6</h3>
            <Link 
              href="/week-6" 
              className="inline-block px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              View Week 6 Assignment →
            </Link>
          </div>
          {/* WEEK 7 ADDED HERE*/}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Week 7</h3>
            <Link 
              href="/week-7" 
              className="inline-block px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
            >
              View Week 7 Assignment →
            </Link>
          </div>
        </div>
      </div>
      
      <div className="text-gray-600">
        <p className="mb-2">This project contains all assignments for CPRG 306.</p>
        <p>Each week will have its own folder and page.</p>
      </div>
    </main>
  );
}