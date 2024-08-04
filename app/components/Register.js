'use client';
import { useState } from 'react';
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import CustomAlert from './CustomAlert';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const router = useRouter();

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user._tokenResponse) {
        setAlertMessage('Registered Successfully');
        setTimeout(() => {
          router.push('/');
        }, 2000); // Redirect after 2 seconds
      } else {
        setAlertMessage('Please Try Again');
      }
    } catch (error) {
      setAlertMessage(error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      {alertMessage && <CustomAlert message={alertMessage} />}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={5}
        bgcolor="#F4E1D2"
        p={4}
        borderRadius={2}
        boxShadow={3}
      >
        <Typography variant="h4" component="h1" gutterBottom color="#4A2C2A">
          Register Now!
        </Typography>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#8C6450',
              },
              '&:hover fieldset': {
                borderColor: '#4A2C2A',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#4A2C2A',
              },
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#8C6450',
              },
              '&:hover fieldset': {
                borderColor: '#4A2C2A',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#4A2C2A',
              },
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: '#8C6450',
            '&:hover': {
              bgcolor: '#4A2C2A',
            },
          }}
          onClick={registerUser}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
