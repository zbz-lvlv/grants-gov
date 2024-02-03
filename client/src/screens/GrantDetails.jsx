import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, TextField, Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NavBar from "../components/NavBar";
import { getTruncatedAddress } from "../utils/address-tools";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ContractorAccordion = ({ contractorName, contractorAddress }) => {

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
      >
        <Typography sx={{ fontFamily: 'Poppins-Bold' }}>{contractorName}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ fontFamily: 'Poppins-Medium' }} >{getTruncatedAddress(contractorAddress, 6)}</Typography>
        <IconButton onClick={() => {
          navigator.clipboard.writeText(contractorAddress);
        }} size="small" sx={{ marginLeft: 'auto' }}><ContentCopyIcon /></IconButton>
      </AccordionDetails>
    </Accordion>
  )

};

const GrantDetails = ({  }) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>

      <NavBar title={`Grant Details`} />

      <Box sx={{ background: '#f6f6f6', padding: '12px', flex: 1 }}>

        <Typography sx={{ fontFamily: 'Poppins-Bold', fontSize: '24px', color: '#0d4f9c' }}>{`2024 Hospitality Employee Training Fund`}</Typography>

        <Box sx={{ height: '16px' }} />

        <Typography sx={{ fontFamily: 'Poppins-Bold', fontSize: '22px', color: '#444', marginLeft: '10px', marginBottom: '2px' }}>{`General Information`}</Typography>

        <Box sx={{ padding: '12px', backgroundColor: 'white', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
          
          <Typography sx={{ fontFamily: 'Poppins-Medium', fontSize: '18px' }}>{`Grant Code:`}
            <Typography variant="span" sx={{ marginLeft: '6px', fontFamily: 'Poppins-Medium', color: '#888' }}>{`GRT-002`}</Typography>
          </Typography>

          <Typography sx={{ fontFamily: 'Poppins-Medium', fontSize: '18px' }}>{`Agency:`}
            <Typography variant="span" sx={{ marginLeft: '6px', fontFamily: 'Poppins-Medium', color: '#888' }}>{`Dept of Education`}</Typography>
          </Typography>

          <Typography sx={{ fontFamily: 'Poppins-Medium', fontSize: '18px' }}>{`Posted Date:`}
            <Typography variant="span" sx={{ marginLeft: '6px', fontFamily: 'Poppins-Medium', color: '#888' }}>{`2024-01-01`}</Typography>
          </Typography>

          <Typography sx={{ fontFamily: 'Poppins-Medium', fontSize: '18px' }}>{`Closing Date:`}
            <Typography variant="span" sx={{ marginLeft: '6px', fontFamily: 'Poppins-Medium', color: '#888' }}>{`2024-12-31`}</Typography>
          </Typography>

          <Typography sx={{ fontFamily: 'Poppins-Medium', fontSize: '18px' }}>{`Total Amount:`}
            <Typography variant="span" sx={{ marginLeft: '6px', fontFamily: 'Poppins-Medium', color: '#888' }}>{`$500000`}</Typography>
          </Typography>
          
        </Box>

        <Box sx={{ height: '16px' }} />

        <Typography sx={{ fontFamily: 'Poppins-Bold', fontSize: '22px', color: '#444', marginLeft: '10px', marginBottom: '2px' }}>{`Regulatory Entities`}</Typography>

        <Box sx={{ padding: '12px', backgroundColor: 'white', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
          
          <Typography sx={{ fontFamily: 'Poppins-Medium', fontSize: '18px' }}>{`Accredited Regulatory Entity:`}
            <Typography variant="span" sx={{ marginLeft: '6px', fontFamily: 'Poppins-Medium', color: '#888' }}>{`Bain & Company`}</Typography>
          </Typography>

          <Typography sx={{ fontFamily: 'Poppins-Medium', fontSize: '18px' }}>{`ANAB Number:`}
            <Typography variant="span" sx={{ marginLeft: '6px', fontFamily: 'Poppins-Medium', color: '#888' }}>{`ANAB-1234-5678`}</Typography>
          </Typography>
          
        </Box>

        <Box sx={{ height: '16px' }} />

        <Typography sx={{ fontFamily: 'Poppins-Bold', fontSize: '22px', color: '#444', marginLeft: '10px', marginBottom: '2px' }}>{`Pre-Approved Contractors`}</Typography>

        <Box sx={{ padding: '4x', borderRadius: '4px', display: 'flex', flexDirection: 'column' }}>
          
          {[
            {
              name: 'Sean & Sean Construction',
              address: 'rP8hH6Eb88UKZ9usXKwh6RAwpsDnRuN6GM'
            },
            {
              name: 'Eric\'s Spanish Lessons',
              address: 'rwAPZPUUJfAZNrkdDnuC5EGnLagR9HFSVM'
            },
            {
              name: 'Beverly Content Creation',
              address: 'rDzjdQM1DKdsJHwQdZuyhboBVxc3i8v98G'
            },
            {
              name: 'Giles Avenue Capital',
              address: 'rwkCCDi4VjaM9XKTDgWba4HnTfpsT5h1KD'
            }
          ].map((contractor, index) => {
            return <ContractorAccordion key={contractor.address} contractorName={contractor.name} contractorAddress={contractor.address} />
          })}
          
        </Box>

      </Box>

    </Box>
  )

};

export default GrantDetails;