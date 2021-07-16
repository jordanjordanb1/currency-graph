import { FC, memo } from 'react';
import { useRecoilState } from 'recoil';
import { startDateFilterState } from '../../../store';
import DatePicker from '../../DatePicker';

export const StartDate: FC = memo(() => {
  const [startDate, setStartDate] = useRecoilState(startDateFilterState);

  const handleChange = (date: Date | null) => setStartDate(date);

  return (
    <DatePicker label="Start Date" value={startDate} onChange={handleChange} />
  );
});
