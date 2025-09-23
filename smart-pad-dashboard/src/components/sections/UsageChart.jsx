import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { hourlyData } from '../../data/mockData';

export const UsageChart = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-gray-800 mb-4">시간대별 사용량</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={hourlyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis dataKey="hour" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="usage" 
            stroke="#6366f1" 
            strokeWidth={3}
            dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#6366f1' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};