import { Box, AppBar, Typography } from '@mui/material';

const NavBar = () => {

  return (
    <Box>
      <AppBar position="static" sx={{ padding: '16px', backgroundColor: '#0d4f9c' }}>
        <Typography variant="h6" align="center">{`Create New Grant`}</Typography>
      </AppBar>
    </Box>
  )

};

export default NavBar;