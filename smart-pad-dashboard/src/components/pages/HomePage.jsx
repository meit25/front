import React from 'react';
import { EmergencyStatus, OverallStatus, BuildingSelector } from '../sections';

export const HomePage = ({ storageData, filteredData, selectedBuilding, setSelectedBuilding }) => {
  return (
    <div className="space-y-6">
      {/* 상단 통계 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <OverallStatus storageData={storageData} />
      </div>

      {/* 메인 컨텐츠 그리드 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* 왼쪽: 긴급상황 (2/3 영역) */}
        <div className="xl:col-span-2">
          <EmergencyStatus filteredData={filteredData} />
        </div>
        
        {/* 오른쪽: 컨트롤 패널 (1/3 영역) */}
        <div className="xl:col-span-1 space-y-6">
          <BuildingSelector 
            selectedBuilding={selectedBuilding}
            setSelectedBuilding={setSelectedBuilding}
          />
          
          {/* 실시간 알림 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">실시간 알림</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <div className="text-sm">
                  <span className="font-medium text-red-800">프라임관 1층</span>
                  <span className="text-red-600 ml-2">즉시 보충 필요</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-100">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="text-sm">
                  <span className="font-medium text-orange-800">학생회관 2층</span>
                  <span className="text-orange-600 ml-2">2시간 내 보충</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};