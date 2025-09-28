import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, Building } from 'lucide-react';
import { getStorageStats } from '../../utils/statusUtils';

export const OverallStatus = ({ storageData }) => {
  const { totalBoxes, normalBoxes, lowBoxes, emptyBoxes } = getStorageStats(storageData);
  
  const statusCards = [
    {
      title: '전체 보관함',
      value: totalBoxes,
      subtitle: '7개 건물',
      icon: Building,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      textColor: 'text-white'
    },
    {
      title: '정상 상태',
      value: normalBoxes,
      subtitle: '보충 불필요',
      icon: CheckCircle,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      textColor: 'text-white'
    },
    {
      title: '부족 상태',
      value: lowBoxes,
      subtitle: '보충 권장',
      icon: AlertTriangle,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      textColor: 'text-white'
    },
    {
      title: '소진 상태',
      value: emptyBoxes,
      subtitle: '즉시 보충',
      icon: XCircle,
      color: 'bg-gradient-to-br from-gray-500 to-gray-600',
      textColor: 'text-white'
    }
  ];

  return (
    <>
      {statusCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className={`${card.color} rounded-xl p-6 ${card.textColor} shadow-lg`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm opacity-80 mb-1">{card.title}</p>
                <p className="text-3xl font-bold mb-1">{card.value}</p>
                <p className="text-sm opacity-80">{card.subtitle}</p>
              </div>
              <div className="ml-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};