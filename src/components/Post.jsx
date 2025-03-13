import { Link } from "react-router";

const Post = (props) => {
    const {id, title, author} = props;

    const truncateTitle = () => {
        if (title && title.length > 10) {
            return title.slice(0, 10) + '...';
        }
        return title;
    }

    return (
        <Link to={`/posts/${id}`}>
            <div className={"block bg-blue-400 text-white border-2 p-4 font-bold cursor-pointer min-w-[150px] text-center"}>
                <p>Id: {id}</p>
                <div className="flex flex-row gap-2 justify-center">Title: <p className="truncate text-ellipsis">{truncateTitle()}</p></div>
                <p>Author: {author.name}</p>
            </div>
        </Link>
    )
}

export default Post;