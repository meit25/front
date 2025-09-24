import React from 'react';
import { BUILDINGS } from '../../utils/constants';

export const BuildingSelector = ({ selectedBuilding, setSelectedBuilding, compact = false }) => {
  if (compact) {
    // 상세 현황 페이지용 가로 탭 스타일
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-1">
        <div className="flex gap-1">
          {BUILDINGS.map((building) => (
            <button
              key={building}
              onClick={() => setSelectedBuilding(building === '전체' ? 'all' : building)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                (selectedBuilding === 'all' && building === '전체') || selectedBuilding === building
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {building}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 홈페이지용 기본 스타일 (기존 코드)
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800">건물 선택</h3>
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