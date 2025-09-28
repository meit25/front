import React from 'react';
import { Header } from '../layout';
import { StatCard } from '../ui';
import { UsageChart, WeeklyChart } from '../sections';

export const AnalysisPage = () => {
  return (
    <div className="space-y-6">
      <Header 
        title="사용량 분석"
        subtitle="패턴 및 예측 정보"
      />

      {/* 주요 지표 카드 */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard
          title="오늘 총 사용량"
          value="284개"
          subtitle="어제 대비 +12.5%"
          gradient="from-blue-500 to-purple-600"
        />
        
        <StatCard
          title="긴급 보충 필요"
          value="3개소"
          subtitle="2시간 내 보충 권장"
          gradient="from-orange-500 to-red-500"
        />
      </div>

      <UsageChart />
      <WeeklyChart />

      {/* 예측 정보 */}
      <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-4 text-white">
        <h3 className="font-semibold mb-3">⚠️ 보충 알림</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">프라임관 1층</span>
            <span className="text-sm font-medium">즉시 보충</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">학생회관 2층</span>
            <span className="text-sm font-medium">2시간 후</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">명신관 2층</span>
            <span className="text-sm font-medium">4시간 후</span>
          </div>
        </div>
      </div>
    </div>
  );
};