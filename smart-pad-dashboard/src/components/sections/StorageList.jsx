import React from 'react';
import { StorageItem } from '../ui';

export const StorageList = ({ filteredData }) => {
  return (
    <div className="space-y-3">
      {filteredData.map((storage) => (
        <StorageItem key={storage.id} storage={storage} />
      ))}
    </div>
  );
};