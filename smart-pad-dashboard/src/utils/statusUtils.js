import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

export const getStatusConfig = (status) => {
  switch (status) {
    case 'normal': 
      return { 
        color: 'from-green-400 to-green-600', 
        textColor: 'text-white', 
        icon: <CheckCircle className="w-6 h-6" />,
        label: '정상',
        bgColor: 'bg-gradient-to-br from-green-400 to-green-600'
      };
    case 'low': 
      return { 
        color: 'from-orange-400 to-orange-400', 
        textColor: 'text-white', 
        icon: <AlertTriangle className="w-6 h-6" />,
        label: '부족',
        bgColor: 'bg-gradient-to-br from-orange-400 to-orange-600'
      };
    case 'empty': 
      return { 
        color: 'from-gray-400 to-gray-600', 
        textColor: 'text-white', 
        icon: <XCircle className="w-6 h-6" />,
        label: '소진',
        bgColor: 'bg-gradient-to-br from-gray-400 to-gray-600'
      };
    default: 
      return { 
        color: 'from-gray-400 to-gray-600', 
        textColor: 'text-white', 
        icon: <XCircle className="w-6 h-6" />,
        label: '알 수 없음',
        bgColor: 'bg-gradient-to-br from-gray-400 to-gray-600'
      };
  }
};

export const getStorageStats = (storageData) => {
  const totalBoxes = storageData.length;
  const normalBoxes = storageData.filter(item => item.status === 'normal').length;
  const lowBoxes = storageData.filter(item => item.status === 'low').length;
  const emptyBoxes = storageData.filter(item => item.status === 'empty').length;

  return { totalBoxes, normalBoxes, lowBoxes, emptyBoxes };
};