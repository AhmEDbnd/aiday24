import React from 'react';
import { MetricsPanel } from './MetricsPanel';
import { ContentPerformance } from './ContentPerformance';

export const DashboardContent = ({ metrics, topPosts }) => {
  return (
    <div className="p-6 space-y-8">
      <MetricsPanel metrics={metrics} />
      <ContentPerformance topPosts={topPosts} />
    </div>
  );
};