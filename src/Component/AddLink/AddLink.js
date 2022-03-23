import { Box, Container, Tabs } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Addlink.css'

const AddLink = () => {
    
    return ( 
           <Container >  
                    <div className='nav-stayle'>
                <Box sx={{ width: '100%' }}>

                 <Tabs>

                   <div className='link-style'>
                   <NavLink className='style' to="/home">Home</NavLink>
                    <NavLink className='style' to="/about">About</NavLink>
                    <NavLink className='style' to="/packages">Packages</NavLink>
                    <NavLink className='style' to="/pricing">Pricing</NavLink>
                     <NavLink className='style' to="/contact">Contact</NavLink>
                   </div>

                     </Tabs>

                     </Box>
                   </div>
                </Container>
            

           
    );
};

export default AddLink;