import React from 'react';
import { Line } from 'react-chartjs-2';
import '../charts/ChartjsConfig';

interface LineChartProps {
  data: any;
  width?: number;
  height?: number;
}

const LineChart01: React.FC<LineChartProps> = ({ data, width, height }) => {
  return (
    <div className="px-5 py-3">
      <Line
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
                  return '$' + v.toLocaleString();
                },
              },
            },
          },
          interaction: {
            intersect: false,
            mode: 'nearest',
          },
          scales: {
            x: { display: false },
            y: { display: false },
          },
          elements: {
            line: { tension: 0.2 },
          },
        }}
      />
    </div>
  );
};

export default LineChart01;
