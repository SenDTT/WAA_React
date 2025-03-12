import { useEffect, useState } from "react";
import Post from "./Post";
import { usePostContext } from "../context/PostContext";
import { getAllPosts } from "../utils/api";

function Posts() {
    const [posts, setPosts] = useState([]);
    const {refreshPosts, setRefreshPosts} = usePostContext();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getAllPosts();
                setPosts(data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchPosts();
    }, [refreshPosts]);

    useEffect(() => {
        setRefreshPosts(false);
    }, [posts]);

    const elements = posts.map((post, index) => {
        return (
            <Post {...post} key={index}/>
        )
    })

    if (posts.length == 0) return '';

    return (
        <div className="flex flex-row gap-4 justify-center min-w-[600px]">
            {elements}
        </div>
    );
}

export default Posts;