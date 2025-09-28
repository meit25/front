import React from 'react';
import { getStatusConfig } from '../../utils/statusUtils';

export const StorageItem = ({ storage }) => {
  const config = getStatusConfig(storage.status);
  const percentage = (storage.currentStock / storage.maxStock) * 100;
  
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${config.color}`}>
            {config.icon}
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{storage.building}</h4>
            <p className="text-sm text-gray-500">{storage.floor} · ID {storage.id}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-800">{storage.currentStock}개</div>
          <div className="text-xs text-gray-500">/ {storage.maxStock}개</div>
        </div>
      </div>
      
      {/* 프로그레스 바 */}
      <div className="mb-3">
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div 
           // StorageItem.jsx에서 프로그레스바 색상
className={`h-2 rounded-full bg-gradient-to-r transition-all duration-500 ${
  storage.status === 'normal' ? 'from-green-400 to-green-600' :
  storage.status === 'low' ? 'from-orange-400 to-orange-600' :
  'from-gray-400 to-gray-600'
}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>일일 사용량: {storage.dailyUsage}개</span>
        <span>{storage.lastUpdated}</span>
      </div>
    </div>
  );
};