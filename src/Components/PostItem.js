import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
    const { post } = props;
    const PostClicked = () => {
        localStorage.setItem('id', post.id)
    }
    return <div>
        <Link to="/viewpost" className="text-decoration-none" onClick={PostClicked}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-dark">{post.body}</p>
                </div>
            </div>
        </Link>
    </div>
};

export default PostItem;
