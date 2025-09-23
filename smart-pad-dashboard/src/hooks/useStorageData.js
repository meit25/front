import { useState, useEffect } from 'react';
import { mockStorageData } from '../data/mockData';

export const useStorageData = () => {
  const [storageData, setStorageData] = useState([]);

  useEffect(() => {
    setStorageData(mockStorageData);
  }, []);

  return {
    storageData,
    setStorageData
  };
};