import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css'
const Home = () => {

    const hisrory = useHistory()
    const abouthandle=() =>{

    hisrory.push("/about");
    }

      const packageHandle = () =>{
      hisrory.push('/packages')
    }
    return (
        <>
        <div className='home-background'>
            

         <div className='home-card-style'>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.orchidsinternationalschool.com/wp-content/uploads/2019/11/indoor-games.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Indoor Games
          </Typography>
          <Typography variant="body2" color="text.secondary">
          There are several indoor games you can conduct at home to keep your child engaged and active. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={packageHandle} size="small" color="primary">
          LEARN MORE
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.cdnparenting.com/articles/2018/05/150311462-H.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Outdoor Games
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Exposure to outdoor play can also shape their personality and help them develop essential social skills.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={packageHandle} size="small" color="primary">
        LEARN MORE
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://pbs.twimg.com/media/FEmIudMXoAMvBLw.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          
          Campaigning With Children
          </Typography>
          <Typography variant="body2" color="text.secondary">
          All children have the right to speak out and participate in decision-making.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={packageHandle} size="small" color="primary">
        LEARN MORE
        </Button>
      </CardActions>
    </Card>
         </div>

        </div>

    {/* About part  */}


      <div className='header-about-center'>
      <Card sx={{ maxWidth: 600 }}>
   <div className='header-about'>
   <div>
   <CardActionArea>
        <CardMedia
          component="img"
          height="440"
          width=""
          image="https://womenshabitat.ca/wp-content/uploads/2013/12/kids-in-circle-smiling-june-2015-400x400.jpg"
          alt="green iguana"
        />
 </CardActionArea>
   </div>

    <div>
    <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              About Us
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
          To provide emotional and social care to the enrolled children which enable quality interaction with parents, family members, adults and peers and which will promote positive sustained relationships in later life
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={abouthandle} size="small" color="primary">
        LEARN MORE
        </Button>
      </CardActions>
    </div>
   </div>
    </Card>
      </div>
       
       
        </>
    );
};

export default Home;