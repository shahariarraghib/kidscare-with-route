import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Package.css'
const Packages = () => {
const history = useHistory()
  const PackagePrice = () =>{
   history.push('/pricing')
  }
    return (
        <div>
            <h1 className='center'>Packages</h1>

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
      </CardActionArea>
      <CardActions>
        <Button onClick={PackagePrice} size="small" color="primary">
        Package Price
        </Button>
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
        <Button onClick={PackagePrice} size="small" color="primary">
        Package Price
        </Button>
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
        <Button onClick={PackagePrice} size="small" color="primary">
        Package Price
        </Button>
      </CardActions>
    </Card>
         </div>

        </div>
        </div>
    );
};

export default Packages;