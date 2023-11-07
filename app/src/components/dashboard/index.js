

import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import EnhancedTableHead from './table';
import { Toolbar } from '@mui/material';

import Head from './head';
import Grid from '@mui/material/Grid';
import React from 'react';
import Bar from './bar';

const defaultTheme = createTheme()






export default function Dashboard(props){
    return(
       <React.Fragment>
         <ThemeProvider theme={defaultTheme}>
        <Container maxWidth="lg" >

        <Bar/>

        <Head/>
        <EnhancedTableHead/>
         <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />


          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>


            </Grid>
            
          </Container>

        </Box>
        </Container>
        
         </ThemeProvider>
       </React.Fragment>
    )
} 




