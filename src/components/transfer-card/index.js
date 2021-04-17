import React, { useState, useEffect } from 'react';
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function TransferCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  
  const [likesNumber, setLikesNumber] = useState(props.transaction.likes.length)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function like() {

    // deve vir por context
    const thisUser = {
      name: 'Cainã Jucá',
      email: 'cainajuca@gmail.com',
      balance: 1500.49,
      password: '123',
    }

    setLikesNumber(likesNumber+1)
    // checar se o user ja esta na lista

    props.transaction.likes.push(thisUser)
    
  }

  function erase() {

    // tirar essa transção do array

    console.log("delete notification")
  }

  return (
    <Card className={classes.root}>

        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                {props.transaction.emitter.name[0]}
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={props.transaction.emitter.name}
            subheader={props.transaction.emitter.email}
        />

      <CardContent>
        <Typography paragraph>
          Transferiu {props.transaction.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} para {props.transaction.receiver.name}
        </Typography>

        <Typography paragraph>
          Mensagem: {props.transaction.message}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

        <p>{likesNumber}</p>

        <IconButton aria-label="add to favorites" onClick={like}>
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share" onClick={erase}>
          <DeleteForeverIcon />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>

      </CardActions>

        {/* 
          | 'initial'
          | 'inherit'
          | 'primary'
          | 'secondary'
          | 'textPrimary'
          | 'textSecondary'
          | 'error'
        */}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color='secondary' variant='subtitle1' paragraph>Comentários:</Typography>

          {props.transaction.comments.map((comment, index) => (
            <ul key={index}>
                <div id="comment">

                    <Typography paragraph>
                      {comment.author.name}: {comment.text}
                    </Typography>

                </div>
            </ul>
          ))}

        </CardContent>
      </Collapse>


    </Card>
  );
}