import React, { useState, useEffect } from 'react';

const Comments = (props) => {
     const {postId}=props;
    const [comments,setComments] =useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[]);
    //  const[name,email,body] = comments;
    return (
        <div>
           {
             comments.map(comment => 
               <div>
                <h2>{comment.name}</h2>
               <h4>{comment.email}</h4>
               <p>{comment.body}</p>
             </div>  
             ) 
           } 
        </div>
    );
};

export default Comments;