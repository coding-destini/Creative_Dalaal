import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const getStatusData = (users) => {
  //number of users for each status
  const statusCounts = users.reduce((acc, user) => {
    acc[user.status] = (acc[user.status] || 0) + 1;
    return acc;
  }, {});

  //status counts into an array of objects
  return Object.keys(statusCounts).map(status => ({
    value: statusCounts[status],
    label: `${status}`,
  }));
};

const PieChartt = ({ users }) => {
  const statusData = getStatusData(users);

  return ( 
    <PieChart series={[{ data: statusData, innerRadius: 70 }]} {...size}>
      <PieCenterLabel>User Status</PieCenterLabel>
    </PieChart>
  );
};

export default PieChartt;
