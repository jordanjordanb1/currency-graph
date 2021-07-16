import { Grid, Paper } from '@material-ui/core';
import { FC, memo } from 'react';
import Currency from './Currency';
import EndDate from './EndDate';
import StartDate from './StartDate';

export const InputBar: FC = memo(() => {
  return (
    <Paper square sx={{ height: '100%', minHeight: 'max(100px, 10vh)' }}>
      <Grid
        container
        spacing={2}
        sx={{ padding: '8px', height: '100%' }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md="auto">
          <Currency />
        </Grid>
        <Grid item xs={12} md="auto">
          <StartDate />
        </Grid>
        <Grid item xs={12} md="auto">
          <EndDate />
        </Grid>
      </Grid>
    </Paper>
  );
});
