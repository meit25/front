import React from 'react';

export const StatCard = ({ title, value, subtitle, gradient }) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-4 text-white`}>
      <div className="text-sm opacity-80 mb-1">{title}</div>
      <div className="text-2xl font-bold mb-2">{value}</div>
      <div className="text-xs opacity-75">{subtitle}</div>
    </div>
  );
};