import React from 'react';
import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart';

const LineChartt = ({ users }) => {
 
  const fakeData = [
    { activeCount: 10, inProgressCount: 5, declinedCount: 3 },
    { activeCount: 15, inProgressCount: 8, declinedCount: 6 },
    { activeCount: 20, inProgressCount: 12, declinedCount: 9 },
    { activeCount: 25, inProgressCount: 10, declinedCount: 5 },
    { activeCount: 30, inProgressCount: 15, declinedCount: 12 },
  ];

  const joinDates = ['May 1, 2024', 'May 2, 2024', 'May 3, 2024', 'May 4, 2024', 'May 5, 2024'];

  const activeUsersData = fakeData.map(item => item.activeCount);
  const inProgressData = fakeData.map(item => item.inProgressCount);
  const declinedData = fakeData.map(item => item.declinedCount);

  return (
    <MuiLineChart
      width={500}
      height={300}
      series={[
        { data: activeUsersData, label: 'Active Users', stroke: '#3f51b5', strokeWidth: 2 },
        { data: inProgressData, label: 'In Progress', stroke: '#4caf50', strokeWidth: 2 },
        { data: declinedData, label: 'Declined', stroke: '#f44336', strokeWidth: 2 },
      ]}
      xAxis={[{ scaleType: 'point', data: joinDates }]}
    />
  );
};

export default LineChartt;
