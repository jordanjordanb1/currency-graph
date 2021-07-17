import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FC, memo } from 'react';
import Graph from './Graph';

export const GraphContainer: FC = memo(() => {
  return (
    <Paper
      square
      elevation={0}
      sx={{ bgcolor: 'transparent', marginTop: '5vh' }}
    >
      <Grid container sx={{ height: '80vh' }} justifyContent="center">
        <Grid item xs={11} sx={{ height: '100%', width: '100%' }}>
          <Graph />
        </Grid>
      </Grid>
    </Paper>
  );
});
