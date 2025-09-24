import { useState, useEffect } from 'react';

export const useStorageData = () => {
  const [storageData, setStorageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/dashboard');
        const json = await res.json();
        if (json.success) {
          setStorageData(json.data);  // 백엔드 data 형식에 맞게
        } else {
          console.error('API 실패:', json.message);
        }
      } catch (err) {
        console.error('네트워크 오류:', err);
      }
    };

    fetchData();
  }, []);

  return { storageData, setStorageData };
};