import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../charts/ChartjsConfig';

interface BarChartProps {
  data: any;
  width?: number;
  height?: number;
}

const BarChart01: React.FC<BarChartProps> = ({ data, width, height }) => {
  return (
    <div className="px-5 py-4">
      <Bar
        data={data}
        width={width}
        height={height}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                title: (() => '') as any,
                label: (context: any) => {
                  let v = context.dataset.data[context.dataIndex];
                  return v.toLocaleString();
                },
              },
            },
          },
          interaction: {
            intersect: false,
            mode: 'nearest',
          },
          scales: {
            x: {
              display: false,
              grid: { display: false },
            },
            y: {
              display: false,
              grid: { display: false },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart01;
