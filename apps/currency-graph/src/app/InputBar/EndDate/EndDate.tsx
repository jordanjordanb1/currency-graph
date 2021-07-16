import { FC, memo } from 'react';
import { useRecoilState } from 'recoil';
import { endDateFilterState } from '../../../store';
import DatePicker from '../../DatePicker';

export const EndDate: FC = memo(() => {
  const [endDate, setEndDate] = useRecoilState(endDateFilterState);

  const handleChange = (date: Date | null) => setEndDate(date);

  return (
    <DatePicker label="End Date" value={endDate} onChange={handleChange} />
  );
});
