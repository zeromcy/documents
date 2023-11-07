import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function File() {
  return (
    <React.Fragment>
      <Grid item sx={12}>
        <Paper sx={{ p: 1, display: 'flex', flexDirection: 'column' ,height:700}}>

        </Paper>
      </Grid>
    </React.Fragment>
  );
}