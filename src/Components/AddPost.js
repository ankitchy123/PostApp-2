import React, { useState } from 'react';

const AddPost = () => {
    const postsInitial = [];
    const [posts, setPosts] = useState(postsInitial);
    const host = "https://jsonplaceholder.typicode.com/posts";
    // Add a note
    const addPost = async (title, description) => {
        const response = await fetch(`${host}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            },
            body: JSON.stringify({ title, description, id: 1 })
        });
        const json = await response.json();
        let post = json;
        console.log(post);
        setPosts(posts.concat(post));
    }
    const [post, setPost] = useState({ title: "", description: "" });

    const handleAdd = (e) => {
        e.preventDefault();
        addPost(post.title, post.description);
        setPost({ title: "", description: "" });
    }

    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return <div className="container my-3">
        <h2>Add Post</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Add title</label>
                <input type="text" className="form-control" name='title' id="title" value={post.title} onChange={onChange} minLength={5} required />
            </div>
            <div className="mb-3">
                <label htmlFor="desc">Add description</label>
                <textarea className="form-control" id="desc" rows="5" name='description' value={post.description} onChange={onChange} minLength={5} required></textarea>
            </div>
            <button disabled={(post.title.length < 3 || post.description.length < 5 ? true : false)} type="submit" className="btn btn-primary" onClick={handleAdd}>Add post</button>
        </form>
    </div>;
};

export default AddPost