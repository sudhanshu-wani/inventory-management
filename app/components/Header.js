import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Container, Button, Typography } from '@mui/material';
import { auth } from '@/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import CustomAlert from './CustomAlert';

const Header = () => {
  const [user, setUser] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setAlertMessage('Logged out successfully');
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#8C6450' }}>
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Inventory Tracker
            </Typography>
            {user ? (
              <Button
                color="inherit"
                component={Link}
                href="/login"
                onClick={handleLogout}
                sx={{ color: 'white', '&:hover': { bgcolor: '#6A4A3C' } }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  href="/login"
                  sx={{ color: 'white', '&:hover': { bgcolor: '#6A4A3C' } }}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  href="/register"
                  sx={{ color: 'white', '&:hover': { bgcolor: '#6A4A3C' } }}
                >
                  Register
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {alertMessage && <CustomAlert message={alertMessage} />}
    </>
  );
};

export default Header;
