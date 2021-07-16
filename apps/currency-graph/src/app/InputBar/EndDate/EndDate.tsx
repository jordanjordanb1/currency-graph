import { FC, memo, useState } from 'react';
import DatePicker from '../../DatePicker';

export const EndDate: FC = memo(() => {
  const [value, setValue] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => setValue(date);

  return <DatePicker label="End Date" value={value} onChange={handleChange} />;
});
