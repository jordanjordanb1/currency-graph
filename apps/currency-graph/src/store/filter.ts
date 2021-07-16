import { atom } from 'recoil';

export const currencyFilterState = atom<string>({
  key: 'currencyFilterState',
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
