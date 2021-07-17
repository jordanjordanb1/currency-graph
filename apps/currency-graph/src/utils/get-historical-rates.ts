import Axios from 'axios';

type Rates = {
  [currency: string]: number;
};

export const getHistoricalRates = async (
  currency: string,
  end: Date = new Date(),
  start: Date = new Date()
) => {
  const formattedStart = `${new Date(start).getFullYear()}-${new Date(
    start
  ).getMonth()}-${new Date(start).getDate()}`;

  const formattedEnd = `${new Date(end).getFullYear()}-${new Date(
    end
  ).getMonth()}-${new Date(end).getDate()}`;

  const [{ data: startData }, { data: endData }] = await Promise.all([
    Axios.get<{ rates: Rates }>(
      `https://api.exchangerate.host/${formattedStart}?base=${currency}`
    ),
    Axios.get<{ rates: Rates }>(
      `https://api.exchangerate.host/${formattedEnd}?base=${currency}`
    ),
  ]);

  const currencies = Object.keys(startData.rates);

  const historicalData = currencies.map((currency) => {
    const startRate = startData.rates[currency];
    const endRate = endData.rates[currency];

    return {
      label: currency,
      data: [
        {
          date: new Date(start),
          rate: isNaN(startRate) ? 0 : startRate,
        },
        {
          date: new Date(end),
          rate: isNaN(endRate) ? 0 : endRate,
        },
      ],
    };
  });

  console.log('historicalData', historicalData);

  return historicalData;
};
