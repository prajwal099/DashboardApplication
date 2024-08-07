import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { blue } from '@mui/material/colors';



function GraphData() {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,1000,3000,5000,2345,4455,1098,1765,4000,2000,1000,3400,4000,3333];
const xLabels = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
];


  return (
    <div className='dash-card'>
      <BarChart
      width={910}
      height={310}
      series={[
        { data: uData, id: 'uvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      colors={[[ '#252183']]}
      borderRadius={10}
    />
    </div>
  )
}

export default GraphData
