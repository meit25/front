import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { BUILDINGS } from '../../utils/constants';

export const BuildingSelector = ({ selectedBuilding, setSelectedBuilding }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800">건물 선택</h3>
        <MoreHorizontal className="w-5 h-5 text-gray-400" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {BUILDINGS.map((building) => (
          <button
            key={building}
            onClick={() => setSelectedBuilding(building === '전체' ? 'all' : building)}
            className={`p-3 rounded-xl text-sm font-medium transition-all ${
              (selectedBuilding === 'all' && building === '전체') || selectedBuilding === building
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {building}
          </button>
        ))}
      </div>
    </div>
  );
};