import React from 'react';
import { weeklyData } from '../../data/mockData';

export const WeeklyChart = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-gray-800 mb-4">요일별 사용 패턴</h3>
      <div className="space-y-3">
        {weeklyData.map((data, index) => (
          <div key={data.day} className="flex items-center gap-3">
            <div className="w-8 text-center text-sm font-medium text-gray-600">{data.day}</div>
            <div className="flex-1 bg-gray-100 rounded-full h-6 relative overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${(data.usage / 180) * 100}%`,
                  background: `linear-gradient(90deg, ${data.color}, ${data.color}dd)`
                }}
              ></div>
            </div>
            <div className="w-12 text-right text-sm font-medium text-gray-800">{data.usage}</div>
          </div>
        ))}
      </div>
    </div>
  );
};