import React from 'react';
import './Posts.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Card,CardActions,CardContent,Typography} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      padding:20
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
      marginBottom:20
    },
    pos: {
      marginBottom: 12,
    },
  });

const Posts = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

     const{title,body,id} = props.post;
     const history = useHistory();
     const handleClick = (id) =>{
       const url = `posts/${id}`;
        history.push(url);
     }
    
    return (
        <div className="container">
         <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {body}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" onClick={()=>handleClick(id)}>Learn More</Button>
      </CardActions>
    </Card>        
                  

        </div>
    );
};

export default Posts;