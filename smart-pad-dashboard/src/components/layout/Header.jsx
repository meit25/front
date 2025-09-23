import React from 'react';

export const Header = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
      {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
    </div>
  );
};