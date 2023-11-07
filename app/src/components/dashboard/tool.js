import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Divider from '@mui/material/Divider'
import ToggleButton from '@mui/material/ToggleButton';


export default function Tool() {
  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    
      <React.Fragment>

      
        <ToggleButton value="laptop" aria-label="laptop">
        <ViewListIcon />
        </ToggleButton>


        <ToggleButton value="tv" aria-label="tv">
        <ViewModuleIcon />
        </ToggleButton>
      </React.Fragment>
      
  
  );
}