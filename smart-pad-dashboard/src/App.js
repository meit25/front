import React, { useState } from 'react';
import { Navigation } from './components/layout';
import { HomePage, ManagePage, AnalysisPage } from './components/pages';
import { useStorageData } from './hooks';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBuilding, setSelectedBuilding] = useState('all');
  const { storageData } = useStorageData();

  const filteredData = selectedBuilding === 'all' 
    ? storageData 
    : storageData.filter(item => item.building === selectedBuilding);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* 페이지 인디케이터 */}
        <div className="flex justify-center pt-6 pb-4">
          <div className="flex gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === page ? 'bg-blue-500 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 컨텐츠 */}
        <div className="px-4 pb-20">
          {currentPage === 1 && (
            <HomePage 
              storageData={storageData}
              filteredData={filteredData}
              selectedBuilding={selectedBuilding}
              setSelectedBuilding={setSelectedBuilding}
            />
          )}
          {currentPage === 2 && (
            <ManagePage 
              filteredData={filteredData}
              selectedBuilding={selectedBuilding}
            />
          )}
          {currentPage === 3 && <AnalysisPage />}
        </div>

        {/* 하단 네비게이션 */}
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default App;