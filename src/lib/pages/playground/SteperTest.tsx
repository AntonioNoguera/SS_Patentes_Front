import React, { ReactNode } from "react";

// Definir los tipos de props
interface RowProps {
  children: ReactNode;
  isHeader?: boolean;
  isEven?: boolean;
}

interface CellProps {
  children: ReactNode;
  center?: boolean;
}

const statusColors: Record<string, { label: string; color: string }> = {
  "activo": { label: "Activo", color: "green" },
  "inactivo": { label: "Inactivo", color: "red" },
  "pendiente": { label: "Pendiente", color: "yellow" },
  "bloqueado": { label: "Bloqueado", color: "gray" },
};

const Row: React.FC<RowProps> = ({ children, isHeader, isEven }) => {
  return (
    <div
      className={`w-full flex-grow flex border-b p-1 ${isHeader
          ? "font-bold bg-gray-200"
          : isEven
            ? "bg-white"
            : "bg-gray-100"
        }`}
    >
      {children}
    </div>
  );
};

// Componente de Celda (Cell)
const Cell: React.FC<CellProps> = ({ children, center = true }) => {
  return (
    <div
      className={`flex items-center flex-1 p-2 ${center ? "justify-center" : "justify-start"}`}
    >
      {children}
    </div>
  );
};

// Componente de Estado con Círculo de Color
const StatusCell: React.FC<{ status: string }> = ({ status }) => {
  const statusInfo = statusColors[status.toLowerCase()] || {
    label: "Desconocido",
    color: "gray",
  };

  return (
    <Cell>
      <div className="flex items-center flex-coljustify-center gap-2">
        <span
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: statusInfo.color }}
        ></span>
        {statusInfo.label}
      </div>
    </Cell>
  );
};

// Componente principal de la Tabla
const Table: React.FC = () => {
  const data = [
    { id: 1, title: "Juan", type: "25", numberOfReviews: 10, status: "", newComments: true },
    { id: 2, title: "Ana", type: "30", numberOfReviews: 5, status: "Active", newComments: false },
    { id: 3, title: "Luis", type: "28", numberOfReviews: 8, status: "Inactive", newComments: true },
    { id: 4, title: "Carlos", type: "22", numberOfReviews: 12, status: "Pending", newComments: false },
    { id: 5, title: "Marta", type: "35", numberOfReviews: 7, status: "Active", newComments: true },
    { id: 6, title: "Elena", type: "27", numberOfReviews: 9, status: "Inactive", newComments: false },
    { id: 7, title: "Pedro", type: "40", numberOfReviews: 3, status: "Active", newComments: true },
    { id: 8, title: "Sofía", type: "29", numberOfReviews: 6, status: "", newComments: false },
    { id: 9, title: "Diego", type: "31", numberOfReviews: 11, status: "Pending", newComments: true }, 
  ];

  return (
    <div className="w-full border rounded-lg">
      {/* Encabezados */}
      <Row isHeader>
        <Cell center={false}>ID</Cell>
        <Cell>Titulo de la patente</Cell>
        <Cell>Tipo de patente</Cell>
        <Cell>Num. de revisiones</Cell>
        <Cell>Estado</Cell>
        <Cell>Comentarios</Cell>
      </Row>

      {/* Filas de datos */}
      {data.map((item, index) => (
        <Row key={item.id} isEven={index % 2 === 0}>
          <Cell center={false}>{item.id}</Cell>
          <Cell>{item.title}</Cell>
          <Cell>{item.type}</Cell>
          <Cell>{item.numberOfReviews}</Cell>

          <StatusCell status={item.status} />
          
          <Cell>
            <h1 className="btn-primary text-sm text-cente !px-8">
              Ver Mensaje
            </h1>
          </Cell>
        </Row>
      ))}
    </div>
  );
};

export default Table;