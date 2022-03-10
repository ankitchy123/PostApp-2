import React, { useState, useEffect } from "react";
import CommentsItem from "./CommentsItem";

const Comments = () => {
    const commentsInitial = [];
    const [comments, setComments] = useState(commentsInitial);
    const host = "https://jsonplaceholder.typicode.com/posts";
    const id = localStorage.getItem('id')
    // Get all comments
    useEffect(() => {
        const ac = new AbortController();
        const getComments = async (id) => {
            const response = await fetch(`${host}/${id}/comments`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            setComments(json);
        }
        getComments(id)
        return () => ac.abort();
    }, []);

    return (
        <div>
            <div className="my-3 d-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gridGap: '2rem' }}>
                {comments.length === 0 ? 'No comments to display' : comments.map((comment) => {
                    return <CommentsItem key={comment.id} comment={comment} />
                })}
            </div>
        </div>
    )
}

export default Comments