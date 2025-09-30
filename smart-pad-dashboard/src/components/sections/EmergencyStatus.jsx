import React from 'react';
import { ChevronRight } from 'lucide-react';
import { StatusCard } from '../ui';

export const EmergencyStatus = ({ filteredData }) => {
  // ✅ undefined/null 방어
  const safeData = Array.isArray(filteredData) ? filteredData : [];

  const emergencyItems = safeData
    .filter(item => item.status === 'empty' || item.status === 'low')
    .slice(0, 4);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">긴급 상황</h2>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {emergencyItems.map((storage) => (
          <StatusCard key={storage.id} storage={storage} />
        ))}
      </div>
    </div>
  );
};
