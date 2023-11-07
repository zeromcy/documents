import AppBar from '@mui/material/AppBar';
import AddCardIcon from '@mui/icons-material/AddCard';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'


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
        <Button variant="contained"> 
          
         <AddCardIcon/>
        </Button>
        </Toolbar>

      
        </Box>
        
    )
}