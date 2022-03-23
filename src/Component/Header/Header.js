import { Box, Typography } from '@mui/material';
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='background-style'>
            <Typography component="div">
      <Box sx={{ fontStyle: 'oblique', m: 1 }}><h1 > 
         <span style={{color: 'red'}}>kids</span>Care<span style={{color: 'red'}}>.</span></h1></Box>
      
    </Typography>
            
        </div>
    );
};

export default Header;