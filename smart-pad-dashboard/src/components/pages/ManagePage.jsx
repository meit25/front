import React from 'react';
import { StorageList } from '../sections';
import { BuildingSelector } from '../sections';

export const ManagePage = ({ filteredData, selectedBuilding, setSelectedBuilding }) => {
  return (
    <div className="space-y-6">
      {/* 상단 건물 선택 탭 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">보관함 상세 현황</h2>
            <p className="text-gray-600">
              {selectedBuilding === 'all' ? '전체' : selectedBuilding} 보관함 ({filteredData.length}개)
            </p>
          </div>
        </div>
        
        {/* 가로 건물 선택기 */}
        <BuildingSelector 
          selectedBuilding={selectedBuilding}
          setSelectedBuilding={setSelectedBuilding}
          compact={true}
        />
      </div>
      
      {/* 보관함 리스트 */}
      <StorageList filteredData={filteredData} />
    </div>
  );
};