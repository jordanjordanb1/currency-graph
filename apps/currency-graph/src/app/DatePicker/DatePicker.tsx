import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import MuiDatePicker, {
  DatePickerProps as MuiDatePickerProps,
} from '@material-ui/lab/DatePicker';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import { FC, memo } from 'react';

interface DatePickerProps {
  inputFormat?: MuiDatePickerProps['inputFormat'];
  renderInput?: MuiDatePickerProps['renderInput'];
}

export const DatePicker: FC<
  Omit<MuiDatePickerProps<Date>, 'renderInput'> & DatePickerProps
> = memo(({ inputFormat, renderInput, ...rest }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        inputFormat={inputFormat || 'MM/dd/yyyy'}
        renderInput={(params) => (
          <TextField
            variant="filled"
            color="primary"
            size="small"
            {...params}
            error={false}
          />
        )}
        {...rest}
      />
    </LocalizationProvider>
  );
});
