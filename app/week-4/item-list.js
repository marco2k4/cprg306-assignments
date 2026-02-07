import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  return (
    <div className="space-y-3">
      {itemsData.map((item) => (
        <Item 
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}