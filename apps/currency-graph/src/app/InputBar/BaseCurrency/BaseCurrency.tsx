import Autocomplete from '@material-ui/core/Autocomplete';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import { FC, memo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { baseCurrencyFilterState, baseCurrencyQuery } from '../../../store';
import { countryToFlag } from '../../../utils';

type ExchangeRateSymbol = {
  description: string;
  code: string;
};

export const BaseCurrency: FC = memo(() => {
  const baseCurrency = useRecoilValue(baseCurrencyQuery);
  const [, setCurrency] = useRecoilState(baseCurrencyFilterState);
  const [value, setValue] = useState<ExchangeRateSymbol>({
    code: 'USD',
    description: 'United States Dollar',
  });
  const [open, setOpen] = useState(false);
  const loading = open && !baseCurrency.length;

  const handleOnOpen = () => setOpen(true);
  const handleOnClose = () => setOpen(false);

  const handleIsOptionEqualToValue = (
    option: ExchangeRateSymbol,
    value: ExchangeRateSymbol
  ) => option.code === value.code;

  const handleGetOptionLabel = (option: ExchangeRateSymbol) =>
    `${option.code} - ${option.description}`;

  const handleChange = (_e: any, value: ExchangeRateSymbol) => {
    setValue(value);

    setCurrency(value?.code || '');
  };

  return (
    <Autocomplete
      fullWidth
      disableClearable
      autoHighlight
      open={open}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
      value={value}
      onChange={handleChange}
      isOptionEqualToValue={handleIsOptionEqualToValue}
      getOptionLabel={handleGetOptionLabel}
      options={baseCurrency}
      loading={loading}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ fontSize: 15, '& > span': { mr: '10px', fontSize: 18 } }}
          {...props}
        >
          <span>{countryToFlag(option.code)}</span>

          {option.description}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          variant="filled"
          label="Base Currency"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
});
