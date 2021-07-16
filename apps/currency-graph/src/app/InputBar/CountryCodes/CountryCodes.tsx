import Autocomplete from '@material-ui/core/Autocomplete';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import { FC, memo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { countryCodeQuery } from '../../../store';
import { countryToFlag } from '../../../utils';

type ExchangeRateSymbol = {
  description: string;
  code: string;
};

export const CountryCodes: FC = memo(() => {
  const countryCodes = useRecoilValue(countryCodeQuery);
  const [open, setOpen] = useState(false);
  const loading = open && !countryCodes.length;

  const handleOnOpen = () => setOpen(true);
  const handleOnClose = () => setOpen(false);

  const handleIsOptionEqualToValue = (
    option: ExchangeRateSymbol,
    value: ExchangeRateSymbol
  ) => option.code === value.code;

  const handleGetOptionLabel = (option: ExchangeRateSymbol) =>
    `${option.code} - ${option.description}`;

  return (
    <Autocomplete
      sx={{ width: 400 }}
      open={open}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
      isOptionEqualToValue={handleIsOptionEqualToValue}
      getOptionLabel={handleGetOptionLabel}
      options={countryCodes}
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
          label="Country Code"
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
