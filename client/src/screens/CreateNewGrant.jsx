import { Box, Button, InputLabel, Link, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { getTruncatedAddress } from "../utils/address-tools";

const contractors = [
  {
    address: 'rP8hH6Eb88UKZ9usXKwh6RAwpsDnRuN6GM',
    name: 'Sean & Sean Trading'
  },
  {
    address: 'rwAPZPUUJfAZNrkdDnuC5EGnLagR9HFSVM',
    name: 'Eric\'s Spanish Lessons'
  },
  {
    address: 'rDzjdQM1DKdsJHwQdZuyhboBVxc3i8v98G',
    name: 'Beverly Content Creation'
  },
  {
    address: 'rwkCCDi4VjaM9XKTDgWba4HnTfpsT5h1KD',
    name: 'Giles Avenue Capital'
  }
];

const recipients = [
  {
    address: 'rQrptA3E2D2z177dvx4qz25mHCKQhGomq',
    name: 'Tourism Agency'
  },
  {
    address: 'rDA7Pe9DCfAaTzZmcjvCrxR4WeXw1kpCUX',
    name: 'Dept of Education'
  }
]

const CreateNewGrant = () => {

  const [grantName, setGrantName] = useState('');
  const [grantAmount, setGrantAmount] = useState(0);
  const [recipientWallets, setRecipientWallets] = useState([]);
  const [contractorWallets, setContractorWallets] = useState([]);

  const handleContractorWalletsChange = (event) => {
    setContractorWallets(event.target.value);
  }

  const handleRecipientWalletsChange = (event) => {
    setRecipientWallets(event.target.value);
  }

  const handlePublish = () => {
    
    const data = {
      recipients: recipientWallets.map((recipientWallet) => recipientWallet.address),
      contractors: contractorWallets.map((contractorWallet) => contractorWallet.address),
      value: grantAmount,
    }

    fetch('http://localhost:5000/create_grant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        window.location.href = '/all_grants_page';
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = '/all_grants_page';
      });

  }

  return (
    <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column' }}>

      <NavBar title={`Create New Grant`} />

      <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>

        <Typography variant="h6" sx={{ fontFamily: 'Poppins-Bold', marginBottom: '4px' }}>{`Basic Information`}</Typography>
        <TextField value={grantName} onChange={(event) => setGrantName(event.target.value)} label="Grant Name" variant="outlined" fullWidth InputProps={{ style: { fontFamily: 'Poppins-Medium' } }} InputLabelProps={{ style: { fontFamily: 'Poppins-Medium' } }} />
        <Box sx={{ height: '12px' }} />
        <TextField value={grantAmount} onChange={(event) => setGrantAmount(event.target.value)} label="Grant Maximum Amount ($)" variant="outlined" fullWidth InputProps={{ style: { fontFamily: 'Poppins-Medium' } }} InputLabelProps={{ style: { fontFamily: 'Poppins-Medium' } }} />
        <Box sx={{ height: '12px' }} />
        <InputLabel id="demo-multiple-name-label" sx={{ fontFamily: 'Poppins-Medium', fontSize: '14px' }}>{`Recipient Wallets`}</InputLabel>
        <Select multiple value={recipientWallets} onChange={handleRecipientWalletsChange} variant="outlined" fullWidth InputProps={{ style: { fontFamily: 'Poppins-Medium' } }} InputLabelProps={{ style: { fontFamily: 'Poppins-Medium' } }} sx={{ fontFamily: 'Poppins-Medium' }}>
          {recipients.map((recipient, index) => {
            return <MenuItem key={recipient.address} value={recipient.address} sx={{ fontFamily: 'Poppins-Medium' }}>{`${recipient.name} - ${getTruncatedAddress(recipient.address, 4)}`}</MenuItem>
          })}
        </Select>
        <Box sx={{ height: '12px' }} />
        <InputLabel id="demo-multiple-name-label" sx={{ fontFamily: 'Poppins-Medium', fontSize: '14px' }}>{`Contractor Wallets`}</InputLabel>
        <Select multiple value={contractorWallets} onChange={handleContractorWalletsChange} variant="outlined" fullWidth InputProps={{ style: { fontFamily: 'Poppins-Medium' } }} InputLabelProps={{ style: { fontFamily: 'Poppins-Medium' } }} sx={{ fontFamily: 'Poppins-Medium' }}>
          {contractors.map((contractor, index) => {
            return <MenuItem key={contractor.address} value={contractor.address} sx={{ fontFamily: 'Poppins-Medium' }}>{`${contractor.name} - ${getTruncatedAddress(contractor.address, 4)}`}</MenuItem>
          })}
        </Select>

        <Box sx={{ height: '16px' }} />

        <Typography variant="h6" sx={{ fontFamily: 'Poppins-Bold', marginBottom: '4px' }}>{`Third Party Regulator`}</Typography>
        <TextField label="Accredited 3rd Party Regulator" variant="outlined" fullWidth InputProps={{ style: { fontFamily: 'Poppins-Medium' } }} InputLabelProps={{ style: { fontFamily: 'Poppins-Medium' } }} />
        <Box sx={{ height: '12px' }} />
        <TextField label="ANAB Accreditation Number" variant="outlined" fullWidth InputProps={{ style: { fontFamily: 'Poppins-Medium' } }} InputLabelProps={{ style: { fontFamily: 'Poppins-Medium' } }} />

        <Box sx={{ width: '100%', marginTop: 'auto', marginBottom: '0px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Button onClick={handlePublish} variant="contained" disableElevation sx={{ width: '240px', textTransform: 'none', backgroundColor: '#0d4f9c', color: 'white', fontFamily: 'Poppins-Medium', fontSize: '18px', borderRadius: '24px' }}>{`Publish`}</Button>
          <Box sx={{ height: '12px' }} />
          <Link href="/landing_page" sx={{ textDecoration: 'underline', fontFamily: 'Poppins-Medium', fontSize: '16px' }}>{`Save as Draft`}</Link>
        </Box>

      </Box>

    </Box>
  )

};

export default CreateNewGrant;