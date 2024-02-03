import { Box, Button, Typography } from "@mui/material"
import imageGrantsLogo from "../assets/images/grants-gov-logo.jpg";
import imageGrantsLandingPage from "../assets/images/grants-landing-page.jpg";

const GovLandingPage = () => {

  const handleStart = () => {
    // Navigate to the CreateNewGrant screen
    window.location.href = '/create_new_grant';
  };

  return (
    <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column' }}>
      
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <img src={imageGrantsLogo} width={'128px'} style={{ marginTop: '2px', marginBottom: '2px' }} />
        <Button disableElevation variant="contained" sx={{ borderRadius: 0, marginLeft: 'auto', marginRight: 0, backgroundColor: '#0d4f9c', fontFamily: 'Poppins-Medium', fontSize: '17px' }}>{`MENU`}</Button>
      </Box>

      <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#f1f2f6' }}>

        <Typography sx={{ fontFamily: 'Poppins-Medium', color: '#888' }}>{`Menu > Grantor > Create New Grant`}</Typography>
        <Box sx={{ height: '8px' }} />
        <Typography sx={{ fontFamily: 'Poppins-Bold', color: '#0d4f9c', fontSize: '40px', lineHeight: '42px' }}>{`Create New Grant`}</Typography>
        <Box sx={{ height: '8px' }} />
        <Typography sx={{ fontFamily: 'Poppins-Medium', color: '#559bed' }}>{`For grantors representing government agencies`}</Typography>
        <Box sx={{ height: '8px' }} />

        <Box>
          <img src={imageGrantsLandingPage} width={'100%'} />
        </Box>

        <Box sx={{ width: '100%', marginTop: 'auto', marginBottom: '0px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Button onClick={handleStart} variant="contained" disableElevation sx={{ width: '240px', textTransform: 'none', backgroundColor: '#0d4f9c', color: 'white', fontFamily: 'Poppins-Bold', fontSize: '18px', borderRadius: '24px' }}>{`START FORM`}</Button>
        </Box>

      </Box>

    </Box>
  );
}

export default GovLandingPage;