import React from 'react';
import { getStatusConfig } from '../../utils/statusUtils';

export const StatusCard = ({ storage }) => {
  const config = getStatusConfig(storage.status);
  
  return (
    <div className={`rounded-2xl p-4 text-white bg-gradient-to-br ${config.color} shadow-lg`}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs opacity-80">
          {storage.status === 'empty' ? '소진됨' : '부족함'}
        </div>
        {config.icon}
      </div>
      <div className="text-2xl font-bold mb-1">{storage.currentStock}개</div>
      <div className="text-sm opacity-90">{storage.building}</div>
      <div className="text-xs opacity-75">{storage.floor}</div>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-xs opacity-75">일일 사용량</span>
        <span className="text-sm font-medium">{storage.dailyUsage}개</span>
      </div>
    </div>
  );
};