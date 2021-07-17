import Box from '@material-ui/core/Box';
import { FC, memo, useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';
import { useRecoilValue } from 'recoil';
import { historicalDataQuery } from '../../../store';

export const Graph: FC = memo(() => {
  const historicalData = useRecoilValue(historicalDataQuery);

  const data = useMemo(() => historicalData, [historicalData]);

  const primaryAxis = useMemo<AxisOptions<{ date: Date; rate: number }>>(
    () => ({
      isPrimary: true,
      scaleType: 'time',
      position: 'bottom',
      getValue: (item) => item.date,
    }),
    []
  );

  const secondaryAxes = useMemo<AxisOptions<{ date: Date; rate: number }>[]>(
    () => [
      {
        scaleType: 'linear',
        position: 'left',
        getValue: (item) => item.rate,
        elementType: 'line',
      },
    ],
    []
  );

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
        dark: true,
      }}
    />
  );
});
