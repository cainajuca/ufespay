import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import './styles.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 10,
    marginBottom: 10,
    
  },
  media: {
    WebkitMaxInlineSize: 10,
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  function like() {
    console.log("gostou ne")
  }

  function erase() {
    console.log("delete notification")
  }

  return (
    <Card className={classes.root}>

        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                A
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="André Salume"
            subheader="@andresalume"
        />

      <CardContent>
        <Typography paragraph>Transferiu R$30,00 para Luma Pontes (@lumap)</Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={like}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={erase}>
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}