

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Box from '@mui/material/Box';
import '../../css/bar.css'

export default function Bar (){
    return (
        <Box>
            {/* <AppBar position="static" sx={{
            backgroundColor:"#f5f5f5",
           
        }}> */}
        <Toolbar sx={{
            mt:5,
            mb:5,
        }}>
          
          <Typography variant="h4"  component="div" sx={{ flexGrow: 1 }}>
            iPhone
          </Typography>
          <Button variant="contained" size="large" startIcon={<DriveFolderUploadIcon/>}>上传</Button>
        </Toolbar>

      {/* </AppBar> */}
        </Box>
        
    )
}