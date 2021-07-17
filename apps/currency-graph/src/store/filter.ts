import { atom } from 'recoil';

export const baseCurrencyFilterState = atom<string>({
  key: 'baseCurrencyFilterState',
  default: 'USD',
});

export const startDateFilterState = atom<Date | null>({
  key: 'startDateFilterState',
  default: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
});

export const endDateFilterState = atom<Date | null>({
  key: 'endDateFilterState',
  default: new Date(),
});
