import { Grid } from '@material-ui/core';
import InputBar from './InputBar';

export function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <InputBar />
      </Grid>
      <Grid item xs={12}>
        <h1>Graph</h1>
      </Grid>
    </Grid>
  );
}
