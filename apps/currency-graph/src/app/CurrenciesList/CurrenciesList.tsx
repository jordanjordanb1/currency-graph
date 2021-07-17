import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Children, FC, memo, MouseEvent, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currenciesQuery, selectedCurrenciesFilterState } from '../../store';
import { countryToFlag } from '../../utils';

export const CurrenciesList: FC = memo(() => {
  const [selectedCurrencies, setSelectedCurrencies] = useRecoilState(
    selectedCurrenciesFilterState
  );
  const currencies = useRecoilValue(currenciesQuery);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const code = e.currentTarget.dataset.currency;

    if (!code) {
      return;
    }

    if (selectedCurrencies.includes(code)) {
      return setSelectedCurrencies((currencies) =>
        currencies.filter((c) => c !== code)
      );
    }

    return setSelectedCurrencies((currencies) => [...currencies, code]);
  };

  const list = useMemo(
    () =>
      currencies.length
        ? Children.toArray(
            currencies.map((currency) => (
              <ListItem disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={handleClick}
                  dense
                  data-currency={currency.code}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={selectedCurrencies.includes(currency.code)}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{
                        'aria-labelledby': `checkbox-list-label-${currency.code}`,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={`checkbox-list-label-${currency.code}`}
                    primary={`${countryToFlag(currency.code)} - ${
                      currency.description
                    }`}
                  />
                </ListItemButton>
              </ListItem>
            ))
          )
        : null,
    [currencies, selectedCurrencies]
  );

  return <List sx={{ width: '100%' }}>{list}</List>;
});
