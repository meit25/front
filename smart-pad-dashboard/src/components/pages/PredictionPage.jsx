import React, { useState } from "react";
import axios from "axios";

export const PredictionPage = () => {
  const [history] = useState([
    { date: "2025-09-20", stock: 15 },
    { date: "2025-09-21", stock: 14 },
    { date: "2025-09-22", stock: 13 },
    { date: "2025-09-23", stock: 12 },
    { date: "2025-09-24", stock: 10 },
    { date: "2025-09-25", stock: 8 },
  ]); // 임시 데이터 (시연용)

  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    try {
      // ✅ 프록시 안 쓰고 Node.js 백엔드(3000번 포트)로 직접 요청
      const res = await axios.post("http://localhost:3000/api/predict", {
        history,
        periods: 7,
      });
      if (res.data.success) {
        setForecast(res.data.forecast);
      }
    } catch (err) {
      console.error("예측 API 오류:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">재고 예측</h2>
      <p className="text-gray-600">
        최근 사용 데이터를 기반으로 향후 재고 변화를 예측합니다.
      </p>

      <button
        onClick={handlePredict}
        disabled={loading}
        className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 disabled:opacity-50"
      >
        {loading ? "예측 중..." : "예측 실행"}
      </button>

      {/* 예측 결과 표시 */}
      {forecast.length > 0 && (
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">예측 결과</h3>
          <ul className="space-y-2">
            {forecast.map((f, idx) => (
              <li
                key={idx}
                className="flex justify-between border-b border-gray-100 pb-2"
              >
                <span>{new Date(f.ds).toLocaleDateString()}</span>
                <span className="font-medium text-gray-800">
                  {f.yhat.toFixed(1)}개
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
