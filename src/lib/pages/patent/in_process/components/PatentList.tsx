// components/PatentList.tsx
import { Patent } from '@services/Patent/Interfaces/PatentResponse';

interface Props {
  items: Patent[];
}

export default function PatentList({ items }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse bg-white">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-700 ">
            <th className="p-3 font-medium rounded-tl-lg">Nombre</th>
            <th className="p-3 font-medium">Tipo</th>
            <th className="p-3 font-medium">Última modificación</th>
            <th className="p-3 font-medium">Revisiones</th>
            <th className="p-3 font-medium rounded-tr-lg">Comentarios</th>
          </tr>
        </thead>
        <tbody>
          {items.map((p) => (
            <tr
              key={p.patentId}
              className="border-t hover:bg-gray-50 odd:bg-white even:bg-gray-50"
            >
              <td className="p-3 font-semibold text-gray-900">{p.name}</td>
              <td className="p-3 text-gray-700">{p.type}</td>
              <td className="p-3 text-gray-700">{new Date(p.lastModified).toLocaleDateString()}</td>
              <td className="p-3 text-gray-700">{p.revisionCount}</td>
              <td className="p-3">
                <button className={`${!p.hasNewComments ? "!bg-gray-500" : "" } btn-primary w-full`}>
                  Ver Mensajes
                </button>

                 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
