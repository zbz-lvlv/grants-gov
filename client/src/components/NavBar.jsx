import { Box, AppBar, Typography } from '@mui/material';

const NavBar = ({ title }) => {

  return (
    <Box>
      <AppBar position="static" sx={{ padding: '16px', backgroundColor: '#0d4f9c' }} elevation={0}>
        <Typography variant="h6" align="center" sx={{ fontFamily: 'Poppins-Bold' }}>{title}</Typography>
      </AppBar>
    </Box>
  )

};

export default NavBar;