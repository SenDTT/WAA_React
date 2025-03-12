import { useState } from "react";
import Posts from "../components/Posts";
import PostDetail from "../components/PostDetail";
import AddPostForm from "../components/AddPostForm";
import { usePostContext } from "../context/PostContext";

const Dashboard = () => {
    const [isShowAdd, setIsShowAdd] = useState(false);
    const {setRefreshPosts} = usePostContext();

    function onAfterSubmitAddPost() {
        setIsShowAdd(false);
        // reload posts
        setRefreshPosts(true);
    }

    return (
        <div className="flex flex-col gap-4 justify-center">
            <a href="#" className="underline text-blue-600" onClick={() => setIsShowAdd(!isShowAdd)}>Add Post</a>

            {isShowAdd && <AddPostForm onAfterSubmitAddPost={onAfterSubmitAddPost}/>}

            <Posts />
            <PostDetail />
        </div>
    )
}

export default Dashboard;