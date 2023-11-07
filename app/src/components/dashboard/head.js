import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



import Box from '@mui/material/Box';
import '../../css/bar.css'
import TabIcon from '@mui/icons-material/Tab';
export default function Head (){
    return (
        <Box>
            
        <Toolbar 
        
        sx={{
        }}>
          
          <Typography  variant="h6"  component="div" sx={{ flexGrow: 1 }}>
            Documents
          </Typography>
         <TabIcon/>
        </Toolbar>

      
        </Box>
        
    )
}