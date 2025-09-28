import React, { useState } from 'react';
import { Sidebar } from './components/layout';
import { HomePage, ManagePage, AnalysisPage } from './components/pages';
import { useRealTimeData } from './hooks/useRealTimeData';
import { getTimeAgo, getConnectionStatus } from './utils/timeUtils';
import { RefreshCw } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedBuilding, setSelectedBuilding] = useState('all');
  
  // 기존 useStorageData를 useRealTimeData로 변경
  const { data: storageData, lastUpdate, isLoading, error, refresh } = useRealTimeData('/api/inventory', 30000);

  const filteredData = selectedBuilding === 'all' 
    ? storageData 
    : storageData.filter(item => item.building === selectedBuilding);

  // 연결 상태 계산
  const connectionStatus = getConnectionStatus(lastUpdate);

  const renderContent = () => {
    switch(currentPage) {
      case 'dashboard':
        return (
          <HomePage 
            storageData={storageData}
            filteredData={filteredData}
            selectedBuilding={selectedBuilding}
            setSelectedBuilding={setSelectedBuilding}
          />
        );
      case 'manage':
        return (
          <ManagePage 
            filteredData={filteredData}
            selectedBuilding={selectedBuilding}
            setSelectedBuilding={setSelectedBuilding}
          />
        );
      case 'analysis':
        return <AnalysisPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 사이드바 */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* 메인 컨텐츠 */}
      <div className="flex-1 ml-64">
        {/* 상단 헤더 */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {currentPage === 'dashboard' ? '대시보드' :
                 currentPage === 'manage' ? '보관함 관리' :
                 currentPage === 'analysis' ? '사용량 분석' : '대시보드'}
              </h1>
              <p className="text-gray-600 mt-1">
                {currentPage === 'dashboard' ? '실시간 보관함 현황' :
                 currentPage === 'manage' ? '보관함 상세 정보 및 관리' :
                 currentPage === 'analysis' ? '데이터 분석 및 통계' : ''}
              </p>
            </div>
            
            {/* 실시간 상태 및 업데이트 정보 */}
            <div className="flex items-center gap-4">
              {error && (
                <div className="text-red-600 text-sm">
                  연결 오류: {error}
                </div>
              )}
              
              {/* 동적 연결 상태 */}
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${connectionStatus.color}`}>
                {connectionStatus.text}
              </div>
              
              {/* 새로고침 버튼 */}
              <button
                onClick={refresh}
                disabled={isLoading}
                className={`flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 rounded-lg'
                }`}
                title="수동으로 데이터 새로고침"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                새로고침
              </button>
              
              {/* 동적 업데이트 시간 */}
              <div className="text-sm text-gray-500">
                마지막 업데이트: {lastUpdate ? getTimeAgo(lastUpdate) : '정보 없음'}
              </div>
            </div>
          </div>
        </header>

        {/* 페이지 컨텐츠 */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;