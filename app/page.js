import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Weekly Assignments</h2>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Week 2</h3>
            <Link 
              href="/week-2" 
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Week 2 Assignment →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}