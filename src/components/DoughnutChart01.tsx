import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../charts/ChartjsConfig';

interface DoughnutChartProps {
  data: any;
  width?: number;
  height?: number;
}

const DoughnutChart01: React.FC<DoughnutChartProps> = ({ data, width, height }) => {
  return (
    <div className="grow flex flex-col justify-center">
      <div>
        <Doughnut
          data={data}
          width={width}
          height={height}
          options={{
            maintainAspectRatio: false,
            cutout: '80%',
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  title: (() => '') as any,
                  label: ((context: any) => {
                    let v = context.dataset.data[context.dataIndex];
                    return v.toLocaleString() + '%';
                  }) as any,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default DoughnutChart01;
