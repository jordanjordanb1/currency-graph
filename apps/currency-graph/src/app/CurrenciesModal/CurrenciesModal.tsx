import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FC, memo } from 'react';
import { useRecoilState } from 'recoil';
import { currenciesModalState } from '../../store';
import CurrenciesList from '../CurrenciesList';

export const CurrenciesModal: FC = memo(() => {
  const [currenciesModal, setCurrenciesModal] =
    useRecoilState(currenciesModalState);

  const handleClose = () => {
    setCurrenciesModal(false);
  };

  return (
    <Dialog open={currenciesModal} onClose={handleClose} fullWidth>
      <DialogTitle>Select Currencies to Display</DialogTitle>
      <DialogContent>
        <CurrenciesList />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
});
