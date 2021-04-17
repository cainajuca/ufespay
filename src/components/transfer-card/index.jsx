import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Typography, TextField } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Send } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import './styles.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: 20,
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

const TransferCard = ({ transaction }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const [likesNumber, setLikesNumber] = useState(transaction.likes.length);
  const [newComment, setNewComment] = useState('');

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
    };

    setLikesNumber(likesNumber + 1);
    // checar se o user ja esta na lista

    transaction.likes.push(thisUser);
  }

  function erase() {
    // tirar essa transção do array

    console.log('delete notification');
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {transaction.emitter.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={transaction.emitter.name}
        subheader={transaction.emitter.email}
      />

      <CardContent>
        <Typography paragraph>
          Transferiu{' '}
          {transaction.value.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}{' '}
          para {transaction.receiver.name}
        </Typography>

        <Typography paragraph>Mensagem: {transaction.message}</Typography>
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

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color="primary" variant="subtitle1" paragraph>
            Comentários:
          </Typography>

          {transaction.comments.map(comment => (
            <ul key={comment.id}>
              <div id="comment">
                <Typography paragraph>
                  <strong>{comment.author.name}:</strong> {comment.text}
                </Typography>
              </div>
            </ul>
          ))}

          <form
            className="comment-form"
            onSubmit={() => console.log('comment')}
          >
            <div className="comment-text">
              <TextField
                className="TextField"
                variant="outlined"
                id="outlined-multiline-static"
                placeholder="Escreva um comentário"
                type="text"
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
              />
            </div>

            <IconButton color="primary">
              <Send />
            </IconButton>
          </form>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default TransferCard;
