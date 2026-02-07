export default function Item({ name, quantity, category }) {
  return (
    <div className="p-3 mb-3 bg-white border border-gray-300 rounded">
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm">Category: {category}</p>
        </div>
        <div className="px-2 py-1 bg-gray-100 rounded">
          Qty: {quantity}
        </div>
      </div>
    </div>
  );
}