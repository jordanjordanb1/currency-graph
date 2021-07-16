import CssBaseline from '@material-ui/core/CssBaseline';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import GlobalStyle from './styles';

ReactDOM.render(
  <StrictMode>
    <>
      <CssBaseline />
      <GlobalStyle />
      <App />
    </>
  </StrictMode>,
  document.getElementById('root')
);
