import { Grid, Paper } from '@material-ui/core';
import { FC, memo, Suspense } from 'react';
import Skeleton from '../Skeleton';
import BaseCurrency from './BaseCurrency';
import EndDate from './EndDate';
import StartDate from './StartDate';

export const InputBar: FC = memo(() => {
  return (
    <Paper square>
      <Grid
        container
        spacing={2}
        sx={{ padding: 1, height: '100%', minHeight: 'max(100px, 10vh)' }}
        justifyContent="center"
        alignItems="center"
      >
        <Suspense fallback={<Skeleton />}>
          <Grid item xs={12} md={4} xl={3}>
            <BaseCurrency />
          </Grid>
          <Grid item xs={12} md={3} xl={2}>
            <StartDate />
          </Grid>
          <Grid item xs={12} md={3} xl={2}>
            <EndDate />
          </Grid>
        </Suspense>
      </Grid>
    </Paper>
  );
});
