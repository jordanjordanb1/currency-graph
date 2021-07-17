import { Grid } from '@material-ui/core';
import { FC, memo, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import GraphContainer from './GraphContainer';
import InputBar from './InputBar';

export const App: FC = memo(() => {
  return (
    <RecoilRoot>
      <Grid container>
        <Grid item xs={12}>
          <InputBar />
        </Grid>
        <Grid item xs={12}>
          <GraphContainer />
        </Grid>
      </Grid>
    </RecoilRoot>
  );
});
