import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import {Typography} from '@material-ui/core';
import {blueGrey,deepPurple,cyan} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


const PostDetails = () => {
    const{postId} =useParams();
    const [postDetails,setPostDetails]=useState({});
    
    
    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
       .then(res=> res.json())
       .then(data => setPostDetails(data))
    },[]);
       const{title,body} =postDetails;
       const useStyles = makeStyles({
        root: {
          width: '80%',
          padding:40,
          marginBottom:40,
          backgroundColor:blueGrey[100],
          marginTop:40,
          marginLeft:50,
          borderRadius:20,
        },
        title:{
          marginBottom:20,
          color:deepPurple[500]
        }
      });
      const classes = useStyles();
    return (
        <div>
     <div className={classes.root}>
       <Typography className={classes.title} variant="h4" component="h2" gutterBottom>
          {title}
       </Typography>
       <Typography variant="body1"  gutterBottom>
          {body}
       </Typography>   
      </div>  
           <div style={{marginTop:"20px"}}>
              <h2>Comments</h2> 
           <Comments postId={postId}></Comments> 
        </div>     
      
        </div> 
      
        
    );
};

export default PostDetails;