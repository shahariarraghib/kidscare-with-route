import { Box, Button, TextareaAutosize, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='footer-style back'>

            <div>
            <h1 className='center'>Get In Touch Using The Contact Form</h1>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  style={{ width: 500 }} id="outlined-basic" label="First Name" variant="outlined" />
      <br />
      <TextField  style={{ width: 500 }}id="filled-basic" label="Second Name" variant="filled" />
      <br />
      <TextField  style={{ width: 500 }} id="outlined-basic" label="Email" variant="outlined" />
      <br />
      <TextField  style={{ width: 500 }} id="filled-basic" label="Phone Number" variant="filled" />
    </Box>

    <TextareaAutosize
  aria-label="minimum height"
  minRows={10}
  placeholder="Write your message"
  style={{ width: 500 }}
/>
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
            </div>

        </div>
    );
};

export default Contact;