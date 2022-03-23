import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Pricing = () => {
    return (
        <div>
            <h1 className='center'>Pricing</h1>
            <div>
            

            <div className='package-style'>
            

         <div className='package-style-one'>
         <Card sx={{ width: 900, height: 450 }}>
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
        <CardActions>
       
      </CardActions>
      </CardActionArea>
      <CardActions>
      <h4>Monthly: $500</h4>
      </CardActions>
    </Card>

    <Card sx={{ width: 900, height: 450 }}>
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
      <h4>Monthly: $500</h4>
      </CardActions>
    </Card>
    
    <Card sx={{ width: 900, height: 450}}>
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
        <h4>Monthly: $500</h4>
      </CardActions>
    </Card>
         </div>

        </div>
        </div>
        </div>
    );
};

export default Pricing;