import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Student Information</h2>
      <p className="mb-2"><strong>Name:</strong> Dhruv Patel</p>
      <p>
        <strong>GitHub:</strong>{" "}
        <Link href="https://github.com/marco2k4" className="text-blue-600 hover:text-blue-800 underline" target="_blank">
          https://github.com/marco2k4
        </Link>
      </p>
    </div>
  );
}