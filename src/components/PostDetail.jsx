const PostDetail = (props) => {
    const {post, onSetIsShowEdit, onDeletePostHandler} = props;

    return (
        <div className="flex flex-col gap-2 border border-blue-600 p-4 min-w-[600px]">
            <div className="w-full text-center underline text-xl">{post.title}</div>
            <div className="w-full text-center">{post.author.name}</div>

            <div className="m-4">
                <p>{post.content}</p>
            </div>

            <div className="w-full flex flex-row gap-4 justify-center">
                <a onClick={onSetIsShowEdit} href="#" className="text-red-500 underline">edit</a>
                <a onClick={onDeletePostHandler} href="#" className="text-red-500 underline">delete</a>
            </div>
        </div>
    )
}

export default PostDetail;