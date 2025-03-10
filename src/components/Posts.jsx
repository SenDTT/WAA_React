import Post from "./Post";

function Posts(props) {
    const {posts, onClickPost, curPostId} = props;

    const elements = posts.map((post, index) => {
        return (
            <Post {...post} curPostId={curPostId} key={index} onClickPost={onClickPost} />
        )
    })

    return (
        <div className="flex flex-row gap-4">
            {elements}
        </div>
    );
}

export default Posts;