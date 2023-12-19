import { Grid } from '@mui/material';
import React from 'react';
const RootLayout = ({ children }: any) => {
  return (
    <div>
      <header>
        {/* Header content goes here */}
      </header>
      <main>
        {children} {/* This is where your page content will be rendered */}
      </main>
      <footer>
        <Grid container spacing={1/2}>
          <Grid item xs={12} md={12} style={{ border: '1/2px solid #1976D2', backgroundColor: '#1976D2', justifyContent: 'flex-end', display: 'flex' }}>
            <div style={{ textAlign: 'center', width: '100%', color: 'white' }}>
              <p>Copyright 2023, PromptGov, All rights reserved</p>
              <p>Terms & Conditions</p>
            </div>
          </Grid>
        </Grid>
      {/* Add any additional footer content here */}
      </footer>
    </div>
  );
};

export default RootLayout;
