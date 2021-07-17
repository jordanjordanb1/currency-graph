import Box from '@material-ui/core/Box';
import MuiSkeleton from '@material-ui/core/Skeleton';
import { FC, memo } from 'react';

export const Skeleton: FC = memo(() => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <MuiSkeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
      />
    </Box>
  );
});
