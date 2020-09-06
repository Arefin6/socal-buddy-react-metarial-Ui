import React, { useState, useEffect } from 'react';
import './Comments.css';
import Box from '@material-ui/core/Box';


const Comments = (props) => {
     const {postId}=props;
    const [comments,setComments] =useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[]);
   
     let id = Math.floor(Math.random()*9+1); 
    return (
        <div>
           {
             comments.map(comment => 
               <div style={{ width: '90%' }} className="comment-warper">
                 <Box display="flex" p={1} >
                   <Box className="comment-content">
                  
                    <img src={require(`../../img/${id}.jpg`)}/>
                       
                   <h4>{comment.name}</h4>
                   <h5>{comment.email}</h5>
                     
                   </Box>
                    <Box className="comment-body">
    
                    <p>{comment.body}</p>  
                     </Box>
                 </Box>
               
             </div> 
              
             )
           } 
        </div>
    );
};

export default Comments;