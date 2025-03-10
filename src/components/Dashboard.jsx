import { useEffect, useState } from "react";
import Posts from "./Posts";
import PostDetail from "./PostDetail";

const Dashboard = () => {
    const [posts, setPosts] = useState([
        {id: 111, title: "Happiness", author: "John"},
        {id: 112, title: "MIU", author: "Dean"},
        {id: 113, title: "Enjoy life", author: "Jasmine"},
    ]);
    const [curPostId, setCurPostId] = useState(posts[0].id);
    const [curPost, setCurPost] = useState(null);
    const [changeText, setChangeText] = useState("");
    const [isShowEdit, setIsShowEdit] = useState(false);

    useEffect(() => {
        setChangeText("");
        setIsShowEdit(false);
        setCurPost(posts.find(p => p.id == curPostId));
    }, [curPostId, posts]);

    function onClickPost(id) {
        setCurPostId(id);
    }

    function onChangeTitleHandler() {
        const newPosts = posts.map((post) => {
            if (post.id == curPostId) {
                return {...post, title: changeText};
            }
            return post;
        });
        setPosts(newPosts);
    }

    function onSetIsShowEdit() {
        setIsShowEdit(!isShowEdit);
    }

    return (
        <div className="flex flex-col gap-4">
            <Posts posts={posts} curPostId={curPostId} onClickPost={onClickPost} />

            {curPost !== null && <PostDetail post={curPost} onSetIsShowEdit={onSetIsShowEdit}/>}

            {isShowEdit && (
                <div className="flex flex-col gap-4">
                    <input value={changeText} className="border border-gray-300 p-2" type="text" onChange={(e) => setChangeText(e.target.value)}></input>

                    <button className="border border-blue-600 text-blue-600 p-2 rounded" onClick={onChangeTitleHandler}>Change Text</button>
                </div>
            )}
        </div>
    )
}

export default Dashboard;