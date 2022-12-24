import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Skeleton_UI() {
  return (
    <Box sx={{ width: '100%' }} style={{
        display:'flex',
        flexDirection:'column',
        gap:'20px',
        marginTop:'50px'
    }}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}