import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FC, memo, MouseEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { currenciesModalState } from '../../../store';

export const Options: FC = memo(() => {
  const [, setCurrenciesModal] = useRecoilState(currenciesModalState);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: MouseEvent<HTMLLIElement>) => {
    const modal = e.currentTarget.dataset.modal;

    setAnchorEl(null);

    switch (modal) {
      case 'currencies':
        setCurrenciesModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Button
        id="options-button"
        aria-controls="options-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Options
      </Button>
      <Menu
        id="options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'options-button',
        }}
      >
        <MenuItem onClick={handleClose} data-modal="currencies">
          Currencies
        </MenuItem>
      </Menu>
    </div>
  );
});
