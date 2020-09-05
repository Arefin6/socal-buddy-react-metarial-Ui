import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const{postId} =useParams();
    const [postDetails,setPostDetails]=useState({});
    
    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
       .then(res=> res.json())
       .then(data => setPostDetails(data))
    },[]);
       const{title,body} =postDetails;
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
              
             <Comments postId={postId}></Comments>
        </div>
    );
};

export default PostDetails;