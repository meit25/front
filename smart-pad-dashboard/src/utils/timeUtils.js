export const getTimeAgo = (date) => {
  if (!date) return '정보 없음';
  
  const now = new Date();
  const past = new Date(date);
  const diffMs = now - past;
  
  // 시간 계산
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffSecs < 30) return '방금 전';
  if (diffSecs < 60) return `${diffSecs}초 전`;
  if (diffMins < 60) return `${diffMins}분 전`;
  if (diffHours < 24) return `${diffHours}시간 전`;
  if (diffDays < 7) return `${diffDays}일 전`;
  
  // 7일 이상은 날짜 표시
  return past.toLocaleDateString('ko-KR', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const formatDateTime = (date) => {
  if (!date) return '';
  
  return new Date(date).toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

export const getConnectionStatus = (lastUpdate) => {
  if (!lastUpdate) return { 
    status: 'offline', 
    text: '연결 안됨', 
    color: 'text-red-600 bg-red-100' 
  };
  
  const now = new Date();
  const diffMs = now - new Date(lastUpdate);
  const diffMins = Math.floor(diffMs / (1000 * 60));
  
  if (diffMins < 2) return { 
    status: 'online', 
    text: '연결됨', 
    color: 'text-green-600 bg-green-100' 
  };
  if (diffMins < 10) return { 
    status: 'warning', 
    text: '지연됨', 
    color: 'text-yellow-600 bg-yellow-100' 
  };
  return { 
    status: 'offline', 
    text: '연결 안됨', 
    color: 'text-red-600 bg-red-100' 
  };
};