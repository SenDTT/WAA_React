const Post = (props) => {
    const {id, title, author, curPostId, onClickPost} = props;

    const truncateTitle = () => {
        if (title && title.length > 10) {
            return title.slice(0, 10) + '...';
        }
        return title;
    }

    return (
        <div onClick={() => onClickPost(id)} className={"block bg-blue-400 text-white border-2 p-4 font-bold cursor-pointer min-w-[150px] text-center " + (curPostId == id ? "border-blue-700" : "")}>
            <p>Id: {id}</p>
            <div className="flex flex-row gap-2 justify-center">Title: <p className="truncate text-ellipsis">{truncateTitle()}</p></div>
            <p>Author: {author.name}</p>
        </div>
    )
}

export default Post;