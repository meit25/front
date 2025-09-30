import { useState, useEffect, useCallback } from 'react';

export const useRealTimeData = (apiUrl = '/api/inventory', refreshInterval = 5000) => {
  const [data, setData] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(`http://localhost:3000${apiUrl}`);
      if (!response.ok) {
        throw new Error(`API 오류: ${response.status}`);
      }
      
      const result = await response.json();
      
      // 백엔드 응답 형식에 맞게 데이터 매핑
      if (result.success && result.data) {
        // location을 building과 floor로 변환
        const mappedData = result.data.map((item, index) => ({
          id: index + 1,
          building: locationToBuilding(item.location),
          floor: locationToFloor(item.location),
          location: '여자화장실',
          currentStock: item.stock ?? 0,
          maxStock: 18,
          status: item.status || 'normal',
          lastUpdated: item.last_updated || new Date().toISOString(),
          dailyUsage: Math.floor(Math.random() * 30) + 10 // 임시 더미값
        }));
        
        setData(mappedData);
        setLastUpdate(new Date());
      }
    } catch (err) {
      setError(err.message);
      console.error('데이터 fetch 오류:', err);
    } finally {
      setIsLoading(false);
    }
  }, [apiUrl]);

  // location 변환 함수들
  const locationToBuilding = (location) => {
    const buildingMap = {
      'Library_1F': '도서관',
      'Library_2F': '도서관',
      'Myungshin_1F': '명신관',
      'Myungshin_2F': '명신관',
      'Prime_1F': '프라임관',
      'Prime_3F': '프라임관',
      'Sunheon_1F': '순헌관',
      'Student_2F': '학생회관',
      'Jinri_1F': '진리관',
      'Renaissance_1F': '르네상스홀'
    };
    return buildingMap[location] || '알 수 없음';
  };

  const locationToFloor = (location) => {
    const floorMap = {
      'Library_1F': '1층',
      'Library_2F': '2층',
      'Myungshin_1F': '1층',
      'Myungshin_2F': '2층',
      'Prime_1F': '1층',
      'Prime_3F': '3층',
      'Sunheon_1F': '1층',
      'Student_2F': '2층',
      'Jinri_1F': '1층',
      'Renaissance_1F': '1층'
    };
    return floorMap[location] || '1층';
  };

  // 초기 데이터 로드
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // 주기적 업데이트
  useEffect(() => {
    const interval = setInterval(fetchData, refreshInterval);
    return () => clearInterval(interval);
  }, [fetchData, refreshInterval]);

  // 수동 새로고침
  const refresh = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    lastUpdate,
    isLoading,
    error,
    refresh
  };
};