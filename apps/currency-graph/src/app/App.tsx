import { Grid } from '@material-ui/core';
import { FC, memo } from 'react';
import { RecoilRoot } from 'recoil';
import CurrenciesModal from './CurrenciesModal';
import GraphContainer from './GraphContainer';
import InputBar from './InputBar';

export const App: FC = memo(() => {
  return (
    <RecoilRoot>
      <>
        <CurrenciesModal />
        <Grid container>
          <Grid item xs={12}>
            <InputBar />
          </Grid>
          <Grid item xs={12}>
            <GraphContainer />
          </Grid>
        </Grid>
      </>
    </RecoilRoot>
  );
});
