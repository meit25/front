import React from 'react';
import { Header } from '../layout';
import { StorageList } from '../sections';

export const ManagePage = ({ filteredData, selectedBuilding }) => {
  return (
    <div className="space-y-6">
      <Header 
        title="상세 현황"
        subtitle={`${selectedBuilding === 'all' ? '전체 보관함' : selectedBuilding} 관리`}
      />
      
      <StorageList filteredData={filteredData} />
    </div>
  );
};