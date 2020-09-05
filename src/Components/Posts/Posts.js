import React from 'react';
import './Posts.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Posts = (props) => {
     const{title,body,id} = props.post;
     
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <Button variant="contained" color="secondary">
              <Link to={`posts/${id}`}>Show More</Link>
           </Button>
        </div>
    );
};

export default Posts;