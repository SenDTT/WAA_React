const Post = (props) => {
    const {id, title, author, curPostId, onClickPost} = props;

    return (
        <div onClick={() => onClickPost(id)} className={"block bg-blue-400 text-white border-2 p-1 font-bold cursor-pointer min-w-28 " + (curPostId == id ? "border-blue-700" : "")}>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Author: {author}</p>
        </div>
    )
}

export default Post;