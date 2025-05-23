import React from 'react'; 
import { StepProps } from '../stepper';

const PatentInfoStep: React.FC<StepProps> = ({ 
  data, 
  onDataChange, 
  onNext, 
  canGoNext 
}) => {
  const handleInputChange = (field: string, value: string) => {
    onDataChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Información de la Patente</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Título de la Patente
          </label>
          <input
            type="text"
            id="title"
            value={data.title || ''}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ingrese el título de la patente"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            id="description"
            rows={4}
            value={data.description || ''}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describa la invención..."
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Categoría
          </label>
          <select
            id="category"
            value={data.category || ''}
            onChange={(e) => handleInputChange('category', e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Seleccione una categoría</option>
            <option value="software">Software</option>
            <option value="hardware">Hardware</option>
            <option value="biotechnology">Biotecnología</option>
            <option value="mechanical">Mecánica</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PatentInfoStep;