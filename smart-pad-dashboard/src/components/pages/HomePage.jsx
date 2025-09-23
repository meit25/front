import React from 'react';
import { Header } from '../layout';
import { EmergencyStatus, OverallStatus, BuildingSelector } from '../sections';

export const HomePage = ({ storageData, filteredData, selectedBuilding, setSelectedBuilding }) => {
  return (
    <div className="space-y-6">
      <Header 
        title="스마트 정혈대 관리"
        subtitle="실시간 보관함 현황"
      />
      
      <EmergencyStatus filteredData={filteredData} />
      <OverallStatus storageData={storageData} />
      <BuildingSelector 
        selectedBuilding={selectedBuilding}
        setSelectedBuilding={setSelectedBuilding}
      />
    </div>
  );
};