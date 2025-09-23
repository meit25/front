import React from 'react';
import { Building, CheckCircle, TrendingUp } from 'lucide-react';

export const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
      <div className="flex justify-around py-3">
        <button
          onClick={() => setCurrentPage(1)}
          className={`flex flex-col items-center gap-1 px-4 py-2 ${
            currentPage === 1 ? 'text-blue-600' : 'text-gray-400'
          }`}
        >
          <Building className="w-5 h-5" />
          <span className="text-xs">홈</span>
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`flex flex-col items-center gap-1 px-4 py-2 ${
            currentPage === 2 ? 'text-blue-600' : 'text-gray-400'
          }`}
        >
          <CheckCircle className="w-5 h-5" />
          <span className="text-xs">관리</span>
        </button>
        <button
          onClick={() => setCurrentPage(3)}
          className={`flex flex-col items-center gap-1 px-4 py-2 ${
            currentPage === 3 ? 'text-blue-600' : 'text-gray-400'
          }`}
        >
          <TrendingUp className="w-5 h-5" />
          <span className="text-xs">분석</span>
        </button>
      </div>
    </div>
  );
};