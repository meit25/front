import React from 'react';
import { Home, ClipboardList, TrendingUp, Settings, Building2 } from 'lucide-react';

export const Sidebar = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
  { id: 'dashboard', name: '대시보드', icon: Home },
  { id: 'manage', name: '보관함 관리', icon: ClipboardList },
  { id: 'analysis', name: '사용량 분석', icon: TrendingUp },
  { id: 'predict', name: 'AI 예측', icon: Settings }
];


  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50">
      {/* 헤더 */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Smart Pad</h1>
            <p className="text-sm text-gray-500">관리 시스템</p>
          </div>
        </div>
      </div>

      {/* 메뉴 */}
      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 하단 정보 */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-2">전체 보관함</div>
          <div className="text-2xl font-bold text-gray-800">10개소</div>
          <div className="text-xs text-gray-500 mt-1">7개 건물</div>
        </div>
      </div>
    </div>
  );
};