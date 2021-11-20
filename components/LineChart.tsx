import { forwardRef } from 'react';
import { Line } from 'react-chartjs-2';

export interface LineChartProps extends React.ComponentPropsWithoutRef<'div'> {
  datasets: any;
  labels: string[];
  noBox?: boolean;
  legend?: boolean;
}

export const LineChart = forwardRef<HTMLInputElement, LineChartProps>(({ datasets, labels, className, noBox, legend }, ref) => {
  return (
    <div className={noBox ? className : `border border-primary-600 bg-primary-800 rounded-8 ${className}`}>
      <Line
        data={{
          labels: labels,
          datasets: datasets,
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: legend,
            },
          },
        }}
      />
    </div>
  );
});

LineChart.displayName = 'LineChart';
