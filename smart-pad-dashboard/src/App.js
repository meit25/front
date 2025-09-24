import React, { useState } from 'react';
import { Sidebar } from './components/layout';
import { HomePage, ManagePage, AnalysisPage } from './components/pages';
import { useStorageData } from './hooks';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedBuilding, setSelectedBuilding] = useState('all');
  const { storageData } = useStorageData();

  const filteredData = selectedBuilding === 'all' 
    ? storageData 
    : storageData.filter(item => item.building === selectedBuilding);

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
            <div className="flex items-center gap-4">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                연결됨
              </div>
              <div className="text-sm text-gray-500">
                마지막 업데이트: 방금 전
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