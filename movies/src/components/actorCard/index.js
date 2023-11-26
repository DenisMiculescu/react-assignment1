import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, Typography, Button, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Link } from 'react-router-dom';

const ActorCard = ({ actor }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={
          <Typography variant="h5" component="p">
            {actor.name}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : 'default-image-url' // Replace with a default image URL or leave it as an empty string
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {actor.known_for_department}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actor.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ActorCard;
