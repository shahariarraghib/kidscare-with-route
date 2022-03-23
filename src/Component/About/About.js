import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './About.css'
const About = () => {
    return (
        <div>
            <h1 className='center'>Mission and Objectives</h1>

            <div className='header-about-center'>
      <Card sx={{width: 900, height: 450 }}>
   <div className='header-about'>
   <div>
   <CardActionArea>
        <CardMedia
          component="img"
          height="440"
         
          image="https://static.onecms.io/wp-content/uploads/sites/38/2013/05/12212901/p_101891101.jpg"
          alt="green iguana"
        />
 </CardActionArea>
   </div>

    <div>
    <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Our Mission
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
          To ensure appropriate developmental opportunities and effective activities for protection, participation and progress, that enable children to meet the goals of early care, stimulation and learning plans.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </div>
   </div>
    </Card>
      </div>

      <div className='header-about-center'>
      <Card sx={{ width: 900, height: 450 }}>
   <div className='header-about'>
   <div>
   <CardActionArea>
   <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Our Objectives
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
          To provide emotional and social care to the enrolled children which enable quality interaction with parents, family members, adults and peers and which will promote positive sustained relationships in later life;

To give young children support, security and ensure development of effective social behavior through dealing with in a constructive manner;

To give children experience of an environment in which their culture, spirit, dignity, individuality and age appropriate development are respected and nurtured in a conducive and appropriate manner.
          </Typography>
        </CardContent>
 </CardActionArea>
   </div>

    <div>
    <CardActionArea>
        
    <CardMedia
          component="img"
          height="440"
         
          image="https://www.sitters.co.uk/ImageGen.ashx?bgcolor=ffffff&pad=true&constrain=false&image=/media/1157324/learn-thru-play-main.png"
          alt="green iguana"
        />
       
      </CardActionArea>
     
    </div>
   </div>
    </Card>
      </div>
        </div>
    );
};

export default About;