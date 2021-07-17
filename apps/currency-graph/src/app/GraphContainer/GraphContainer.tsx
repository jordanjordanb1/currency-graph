import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FC, memo } from 'react';
import Graph from './Graph';

export const GraphContainer: FC = memo(() => {
  return (
    <Paper square elevation={0} sx={{ bgcolor: 'transparent', marginTop: 2 }}>
      <Grid container sx={{ height: '80vh' }}>
        <Grid item xs={12} sx={{ height: '100%' }}>
          <Graph />
        </Grid>
      </Grid>
    </Paper>
  );
});
