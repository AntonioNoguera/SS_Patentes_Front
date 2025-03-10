import React from "react";

type Item = {
  id: number;
  name: string;
  quantity: number;
};

const data: Item[] = [
  { id: 1, name: "Laptop", quantity: 10 },
  { id: 2, name: "Mouse", quantity: 25 },
  { id: 3, name: "Teclado", quantity: 15 },
];

const InventoryTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Nombre</th>
            <th className="py-2 px-4 border">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border text-center">{item.id}</td>
              <td className="py-2 px-4 border">{item.name}</td>
              <td className="py-2 px-4 border text-center">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;