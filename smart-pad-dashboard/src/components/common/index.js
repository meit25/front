// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// layout components
import { Header, Navigation } from './components/layout';

// page components
import { HomePage, ManagePage, AnalysisPage } from './components/pages';

// section components
import {
  EmergencyStatus,
  OverallStatus,
  BuildingSelector,
  StorageList,
  UsageChart,
  WeeklyChart,
} from './components/sections';

// UI components
import { StatusCard, StorageItem, StatCard } from './components/ui';

// hooks
import { useStorageData } from './hooks';

// utils
import { getStatusConfig, getStorageStats } from './utils';
import { BUILDINGS, STATUS_TYPES, PAGES } from './utils';

// data
import { mockStorageData, hourlyData, weeklyData } from './data';

// 앱 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
