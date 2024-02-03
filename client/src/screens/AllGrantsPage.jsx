import { Box, TextField, Typography } from "@mui/material";
import NavBar from "../components/NavBar";

const grants = [
  {
    name: '2024 School Building Renovation Fund',
    code: 'GRT-003',
    agencyName: 'Dept of Education',
    startDate: '2024-01-01',
    endDate: '2024-06-30'
  },
  {
    name: '2024-2025 Innovation Fund',
    code: 'GRT-006',
    agencyName: 'Dept of Energy',
    startDate: '2024-01-01',
    endDate: '2025-12-31'
  },
  {
    name: 'Route 66 Preservation Program',
    code: 'GRT-001',
    agencyName: 'NPS',
    startDate: '2024-01-01',
    endDate: '2024-12-31'
  },
  {
    name: '2024 Hospitality Employee Training Fund',
    code: 'GRT-002',
    agencyName: 'NPS',
    startDate: '2024-01-01',
    endDate: '2024-12-31'
  },
]

const SingleGrant = ({ grant }) => {

  return (
    <Box sx={{ borderRadius: '16px', background: 'white', padding: '12px' }}>
      <Typography sx={{ fontFamily: 'Poppins-Bold', fontSize: '18px' }}>{grant.name}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography sx={{ fontFamily: 'Poppins-Medium' }}>{grant.code}</Typography>
        <Typography sx={{ fontFamily: 'Poppins-Medium' }}>{grant.agencyName}</Typography>
      </Box>
      <Typography sx={{ fontFamily: 'Poppins-Medium', color: '#888' }}>{`${grant.startDate} to ${grant.endDate}`}</Typography>
    </Box>
  )

};

const AllGrantsPage = () => {

  return (
    <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', backgroundColor: '#f1f2f6' }}>

      <NavBar title={`Grants Overview`} />
      
      <Box sx={{ padding: '16px' }}>

        <TextField label="Search Grants" value={``} variant="outlined" fullWidth InputProps={{ style: { fontFamily: 'Poppins-Medium' } }} InputLabelProps={{ style: { fontFamily: 'Poppins-Medium' } }} />

        <Box sx={{ height: '16px' }} />

        <Typography sx={{ marginLeft: '10px', fontFamily: 'Poppins-Medium', fontSize: '14px' }}>
          {`Sort by`}
          <Typography sx={{ fontFamily: 'Poppins-Bold', color: '#0d4f9c', display: 'inline', fontSize: 'inherit' }}>{` Agency`}</Typography>
        </Typography>

        <Box sx={{ height: '4px' }} />

        {grants.map((grant, index) => {
          return (<>
            {index !== 0 && <Box sx={{ height: '16px' }} />}
            <Box onTouchEnd={() => window.location.href = '/grant_details'}>
              <SingleGrant key={index} grant={grant} />
            </Box>
          </>)
        })}
        
      </Box>

    </Box>
  )

};

export default AllGrantsPage;