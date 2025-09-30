import React, { useState } from "react";
import axios from "axios";
import { Brain, TrendingUp, Calendar, AlertCircle, BarChart3 } from "lucide-react";

export const PredictionPage = () => {
  const [history] = useState([
  { date: "2025-09-01", stock: 18 },
  { date: "2025-09-02", stock: 17 },
  { date: "2025-09-03", stock: 16 },
  { date: "2025-09-04", stock: 16 },
  { date: "2025-09-05", stock: 15 },
  { date: "2025-09-06", stock: 14 },
  { date: "2025-09-07", stock: 14 },
  { date: "2025-09-08", stock: 13 },
  { date: "2025-09-09", stock: 12 },
  { date: "2025-09-10", stock: 11 },
  { date: "2025-09-11", stock: 11 },
  { date: "2025-09-12", stock: 10 },
  { date: "2025-09-13", stock: 9 },
  { date: "2025-09-14", stock: 9 },
  { date: "2025-09-15", stock: 8 },
  { date: "2025-09-16", stock: 7 },
  { date: "2025-09-17", stock: 6 },
  { date: "2025-09-18", stock: 6 },
  { date: "2025-09-19", stock: 5 },
  { date: "2025-09-20", stock: 4 },
  { date: "2025-09-21", stock: 4 },
  { date: "2025-09-22", stock: 3 },
  { date: "2025-09-23", stock: 2 },
  { date: "2025-09-24", stock: 2 },
  { date: "2025-09-25", stock: 1 },
  { date: "2025-09-26", stock: 18 }, // 보충
  { date: "2025-09-27", stock: 17 },
  { date: "2025-09-28", stock: 16 },
  { date: "2025-09-29", stock: 15 },
  { date: "2025-09-30", stock: 14 }
]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBuilding, setSelectedBuilding] = useState("학생회관 2층");

  const buildings = [
    "도서관 1층", "도서관 2층", "명신관 1층", "명신관 2층",
    "프라임관 1층", "프라임관 3층", "순헌관 1층",
    "학생회관 2층", "진리관 1층", "르네상스홀 1층"
  ];

  const handlePredict = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post("http://localhost:3000/api/predict", {
        history,
        periods: 7,
      });
      if (res.data.success) {
        setForecast(res.data.forecast);
      }
    } catch (err) {
      console.error("예측 API 오류:", err);
      setError("AI 서버 연결에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  // 소진 예상일 계산
  const getDepletionInfo = () => {
    if (forecast.length === 0) return null;
    
    const depletionDay = forecast.find(f => f.yhat <= 0);
    if (depletionDay) {
      const daysUntil = forecast.indexOf(depletionDay) + 1;
      return {
        date: new Date(depletionDay.ds).toLocaleDateString('ko-KR'),
        days: daysUntil
      };
    }
    return null;
  };

  const depletionInfo = getDepletionInfo();

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">AI 재고 예측</h2>
        <p className="text-gray-600">
          Prophet 모델 기반 시계열 분석으로 향후 7일간의 재고 변화를 예측합니다.
        </p>
      </div>

      {/* AI 모델 정보 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-5 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Brain className="w-7 h-7" />
            <div>
              <h3 className="font-semibold">Prophet 모델</h3>
              <p className="text-xs opacity-80">Facebook AI</p>
            </div>
          </div>
          <div className="text-2xl font-bold">Prophet</div>
          <div className="text-sm opacity-80">시계열 예측 모델</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-5 text-white">
          <div className="flex items-center gap-3 mb-3">
            <BarChart3 className="w-7 h-7" />
            <div>
              <h3 className="font-semibold">학습 데이터</h3>
              <p className="text-xs opacity-80">과거 사용 패턴</p>
            </div>
          </div>
          <div className="text-2xl font-bold">{history.length}일</div>
          <div className="text-sm opacity-80">분석 기간</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-5 text-white">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-7 h-7" />
            <div>
              <h3 className="font-semibold">예측 범위</h3>
              <p className="text-xs opacity-80">미래 전망</p>
            </div>
          </div>
          <div className="text-2xl font-bold">7일</div>
          <div className="text-sm opacity-80">주간 예측</div>
        </div>
      </div>

      {/* 건물 선택 & 예측 버튼 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              분석 대상 건물
            </label>
            <select
              value={selectedBuilding}
              onChange={(e) => setSelectedBuilding(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {buildings.map((building) => (
                <option key={building} value={building}>
                  {building}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={handlePredict}
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {loading ? "AI 분석 중..." : "예측 실행"}
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          * 과거 30일간의 사용 패턴을 분석하여 향후 7일을 예측합니다
        </p>
      </div>

      {/* 에러 메시지 */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-red-800 mb-1">오류 발생</h4>
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      )}

      {/* 과거 데이터 표시 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          학습 데이터 ({selectedBuilding})
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {history.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">
                {new Date(item.date).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
              </div>
              <div className="text-xl font-bold text-gray-800">{item.stock}</div>
              <div className="text-xs text-gray-500">개</div>
            </div>
          ))}
        </div>
      </div>

      {/* 예측 결과 */}
      {forecast.length > 0 && (
        <div className="space-y-6">
          {/* 주요 예측 요약 */}
          {depletionInfo && (
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    소진 예상 시점
                  </h3>
                  <p className="text-3xl font-bold text-orange-600 mb-2">
                    {depletionInfo.days}일 후
                  </p>
                  <p className="text-sm text-gray-600">
                    예상 날짜: {depletionInfo.date}
                  </p>
                  <div className="mt-3 inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {depletionInfo.days <= 2 ? '긴급 보충 필요' : '보충 권장'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 상세 예측 결과 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              7일 예측 결과
            </h3>
            <div className="space-y-3">
              {forecast.map((f, idx) => {
                const stock = Math.max(0, Math.round(f.yhat));
                const isLow = stock <= 3;
                const isEmpty = stock === 0;
                
                return (
                  <div
                    key={idx}
                    className={`flex justify-between items-center p-4 rounded-lg border-2 transition-colors ${
                      isEmpty ? 'bg-red-50 border-red-200' :
                      isLow ? 'bg-orange-50 border-orange-200' :
                      'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-500">
                          {new Date(f.ds).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', weekday: 'short' })}
                        </div>
                        <div className="text-xs font-medium text-gray-600 mt-1">
                          D+{idx + 1}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${
                          isEmpty ? 'text-red-600' :
                          isLow ? 'text-orange-600' :
                          'text-gray-800'
                        }`}>
                          {stock}개
                        </div>
                        {isEmpty && (
                          <div className="text-xs text-red-600 font-medium">소진 예상</div>
                        )}
                        {isLow && !isEmpty && (
                          <div className="text-xs text-orange-600 font-medium">부족</div>
                        )}
                      </div>
                      
                      {/* 프로그레스 바 */}
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all ${
                            isEmpty ? 'bg-red-500' :
                            isLow ? 'bg-orange-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${Math.min(100, (stock / 18) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI 인사이트 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              AI 분석 인사이트
            </h4>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>일일 평균 {((history[0].stock - history[history.length-1].stock) / history.length).toFixed(1)}개씩 감소하는 추세입니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>현재 사용 패턴이 유지될 경우 {depletionInfo ? `${depletionInfo.days}일 후` : '일주일 이내'} 보충이 필요합니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>안정적인 재고 유지를 위해 {depletionInfo && depletionInfo.days > 2 ? '2일 전' : '즉시'} 보충을 권장합니다.</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};