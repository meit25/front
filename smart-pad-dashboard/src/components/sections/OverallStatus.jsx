import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { getStorageStats } from '../../utils/statusUtils';

export const OverallStatus = ({ storageData }) => {
  const { normalBoxes, lowBoxes, emptyBoxes } = getStorageStats(storageData);

  const statusItems = [
    { 
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />, 
      count: normalBoxes, 
      label: '정상',
      bgColor: 'bg-blue-100'
    },
    { 
      icon: <AlertTriangle className="w-6 h-6 text-pink-600" />, 
      count: lowBoxes, 
      label: '부족',
      bgColor: 'bg-pink-100'
    },
    { 
      icon: <XCircle className="w-6 h-6 text-gray-600" />, 
      count: emptyBoxes, 
      label: '소진',
      bgColor: 'bg-gray-100'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {statusItems.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
          <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-2`}>
            {item.icon}
          </div>
          <div className="text-lg font-bold text-gray-800">{item.count}</div>
          <div className="text-sm text-gray-500">{item.label}</div>
        </div>
      ))}
    </div>
  );
};