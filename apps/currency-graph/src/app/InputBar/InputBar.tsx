import { Container, Grid, Paper } from '@material-ui/core';
import { FC, memo } from 'react';
import CountryCodes from './CountryCodes';
import EndDate from './EndDate';
import StartDate from './StartDate';

export const InputBar: FC = memo(() => {
  return (
    <Paper square>
      <Container>
        <Grid container spacing={2} sx={{ padding: '8px' }}>
          <Grid item xs={12} md="auto">
            <CountryCodes />
          </Grid>
          <Grid item xs={12} md="auto">
            <StartDate />
          </Grid>
          <Grid item xs={12} md="auto">
            <EndDate />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
});
