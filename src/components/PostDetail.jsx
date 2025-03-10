const PostDetail = (props) => {
    const {post, onSetIsShowEdit} = props;

    return (
        <div className="flex flex-col gap-2 border border-blue-600 p-4">
            <div className="w-full text-center underline text-xl">{post.title}</div>
            <div className="w-full text-center">{post.author}</div>

            <div className="m-4">
                <p>This is the content in the post...</p>
            </div>

            <div className="w-full flex flex-row gap-4 justify-center">
                <a onClick={() => onSetIsShowEdit()} href="javascript:;" className="text-red-500 underline">edit</a>
                <a href="javascript:;" className="text-red-500 underline">delete</a>
            </div>
        </div>
    )
}

export default PostDetail;