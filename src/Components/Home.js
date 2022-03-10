import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";
import AddPost from './AddPost'
const Home = () => {
    const postsInitial = [];
    const [posts, setPosts] = useState(postsInitial);
    const host = "https://jsonplaceholder.typicode.com/posts";

    // Get all notes
    useEffect(() => {
        const ac = new AbortController();
        const getNotes = async () => {
            const response = await fetch(`${host}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            // console.log(json);
            setPosts(json);
        }
        getNotes()
        return () => ac.abort(); // Abort both fetches on unmount
    }, []);


    return <div>
        <AddPost />
        <hr />
        <h3>Your Posts</h3>
        <div className="my-3 d-grid" style={{ gridTemplateColumns: "1fr", gap: "1rem" }}>
            {posts.length === 0 ? 'No posts to display' : posts.map((post) => {
                return <PostItem key={post.id} post={post} />
            })}
        </div>
    </div>
}

export default Home;