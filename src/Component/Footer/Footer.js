import { Button, TextField } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import './Footer.css'

import { Facebook } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {

    return (
       <>
       <div className='footer-style'>
            <div >
            <h4 style={{color: "red"}}>About Us</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

            <h4 style={{color: "red"}}>Newsletter</h4>
            <form  noValidate autoComplete="off">
            <TextField style={{ width: 500 }} id="standard-basic" label="Gmail" />
            <br />
            <Button 
style={{ width: 200,
height:40,
borderRadius:15,
marginTop:10
}}
variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
    
    </form>
        </div>
       

        <div className='footerIcon'>
<Facebook color="primary"></Facebook>
<InstagramIcon style={{color:'purple'}}></InstagramIcon>

        </div>
        
       </div>
       <hr />

       <small className='copyRight'>© 2022 All Rights Reserved. Developed By Shahariar</small>
       </>
       
    );
};

export default Footer;