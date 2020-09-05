import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const{postId} =useParams();
    return (
        <div>
            <h2>Post Details of id:{postId} </h2>
        </div>
    );
};

export default PostDetails;