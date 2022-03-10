import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Comments from "./Comments";
const ViewPost = () => {
    const id = localStorage.getItem('id');
    const postInitial = [];
    const [post, setPost] = useState(postInitial);
    const host = "https://jsonplaceholder.typicode.com/posts";

    // Get single post
    useEffect(() => {
        const ac = new AbortController();
        const getPost = async (id) => {
            const response = await fetch(`${host}/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            setPost(json);
        }
        getPost(id)
        return () => ac.abort(); // Abort both fetches on unmount
    }, []);

    const backToHome = () => {
        localStorage.removeItem('id')
    }
    return (
        <div>
            <div className="card border border-dark" style={{ marginTop: "2rem" }}>
                <div className="card-body">
                    <div className="d-flex flex-row align-items-center">
                        <h4>Title: </h4>
                        <h5 className="card-title text-primary mx-3">{post.title}</h5>
                    </div>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
            <hr />
            <h2>Comments on this post</h2>
            <Comments />
            <Link to="/" onClick={backToHome}>Go back to home page</Link>
        </div>
    )
}

export default ViewPost;