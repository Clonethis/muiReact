import React from 'react'
import {Card,Fab,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button} from '@mui/material'
import niceImage from "../assets/nice.jpg"
const imageCard = () => {
    return (
        // sx is  prop for styling; Use camelCase for item; more pixels "10px 20px" dimensions turn into string
<Card sx={{ padding :"10px 20px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={niceImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
          Share
        </Button>
        <Button size="small" variant="contained">Ahoj</Button>
{/* or can use fab */}
 <Fab variant="extended" size="small"color="primary">Looking</Fab>
 <Fab variant="extended"color="secondary">To</Fab>
      </CardActions>
    </Card>    )
}

export default imageCard
