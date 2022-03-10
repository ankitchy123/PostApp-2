const CommentsItem = (props) => {
    const { comment } = props
    return <div>
        <div className="card border border-primary">
            <div className="card-body">
                <h5 className="card-title">{comment.name}</h5>
                <p className="card-text text-secondary">{comment.body}</p>
            </div>
        </div>
    </div>
}

export default CommentsItem