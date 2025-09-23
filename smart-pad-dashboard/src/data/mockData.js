export const mockStorageData = [
  { id: 1, building: '도서관', floor: '1층', location: '여자화장실', currentStock: 18, maxStock: 20, status: 'normal', lastUpdated: '2024-12-07 14:30', dailyUsage: 25 },
  { id: 2, building: '도서관', floor: '2층', location: '여자화장실', currentStock: 4, maxStock: 20, status: 'low', lastUpdated: '2024-12-07 14:25', dailyUsage: 32 },
  { id: 3, building: '명신관', floor: '1층', location: '여자화장실', currentStock: 16, maxStock: 20, status: 'normal', lastUpdated: '2024-12-07 14:20', dailyUsage: 28 },
  { id: 4, building: '명신관', floor: '2층', location: '여자화장실', currentStock: 2, maxStock: 20, status: 'low', lastUpdated: '2024-12-07 14:15', dailyUsage: 35 },
  { id: 5, building: '프라임관', floor: '1층', location: '여자화장실', currentStock: 0, maxStock: 20, status: 'empty', lastUpdated: '2024-12-07 14:10', dailyUsage: 42 },
  { id: 6, building: '프라임관', floor: '3층', location: '여자화장실', currentStock: 19, maxStock: 20, status: 'normal', lastUpdated: '2024-12-07 14:05', dailyUsage: 18 },
  { id: 7, building: '순헌관', floor: '1층', location: '여자화장실', currentStock: 12, maxStock: 20, status: 'normal', lastUpdated: '2024-12-07 13:55', dailyUsage: 22 },
  { id: 8, building: '학생회관', floor: '2층', location: '여자화장실', currentStock: 3, maxStock: 20, status: 'low', lastUpdated: '2024-12-07 13:50', dailyUsage: 38 },
  { id: 9, building: '진리관', floor: '1층', location: '여자화장실', currentStock: 17, maxStock: 20, status: 'normal', lastUpdated: '2024-12-07 13:45', dailyUsage: 26 },
  { id: 10, building: '르네상스홀', floor: '1층', location: '여자화장실', currentStock: 8, maxStock: 20, status: 'normal', lastUpdated: '2024-12-07 13:40', dailyUsage: 15 }
];

export const hourlyData = [
  { hour: '06', usage: 2 }, { hour: '07', usage: 8 }, { hour: '08', usage: 15 },
  { hour: '09', usage: 22 }, { hour: '10', usage: 28 }, { hour: '11', usage: 32 },
  { hour: '12', usage: 38 }, { hour: '13', usage: 35 }, { hour: '14', usage: 30 },
  { hour: '15', usage: 25 }, { hour: '16', usage: 20 }, { hour: '17', usage: 15 },
  { hour: '18', usage: 12 }, { hour: '19', usage: 8 }, { hour: '20', usage: 5 }
];

export const weeklyData = [
  { day: '월', usage: 145, color: '#6366f1' },
  { day: '화', usage: 162, color: '#8b5cf6' },
  { day: '수', usage: 138, color: '#ec4899' },
  { day: '목', usage: 175, color: '#f59e0b' },
  { day: '금', usage: 128, color: '#10b981' },
  { day: '토', usage: 45, color: '#6b7280' },
  { day: '일', usage: 32, color: '#6b7280' }
];