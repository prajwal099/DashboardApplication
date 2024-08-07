import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
const DataCard = () => {
    const data = [
        { value: 70, color:"#252183"},
        { value: 30,color:"#d3c9f2b0",border:"none"},
      ];
      function PieCenterLabel({ children }: { children: React.ReactNode }) {
        const { width, height, left, top } = useDrawingArea();
        return (
          <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
          </StyledText>
        );
      }
      const size = {
        width: 250,
        height: 150,
      };
      
      const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 30,
        fontWeight:600,
      }));
  return (
    <div className="dash-card">
   <div className="row">
    <div className="info col-8">
<h3> Net Profit</h3>
<h2>$ 6759.25</h2>
<p>3%</p></div>
<div className="piechartSection col-4">
 <PieChart series={[{ data, innerRadius: 50,outerRadius:60}]} {...size}>
      <PieCenterLabel>70%</PieCenterLabel>
    </PieChart></div>
   </div></div>
  )
}

export default DataCard