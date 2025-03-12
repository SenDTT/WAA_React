import { useEffect, useState } from "react";
import Posts from "../components/Posts";
import PostDetail from "../components/PostDetail";
import { addPost, deletePost, editTitle, getAllPosts } from "../utils/api";
const initialFormData = {
        title: '',
        author_name: '',
        content: ''
    };
const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [curPostId, setCurPostId] = useState(null);
    const [curPost, setCurPost] = useState(null);
    const [changeText, setChangeText] = useState("");
    const [isShowEdit, setIsShowEdit] = useState(false);
    const [isShowAdd, setIsShowAdd] = useState(false);
    const [refreshPosts, setRefreshPosts] = useState(true);
    const [formData, setFormData] = useState(initialFormData);

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
    }, [posts])

    useEffect(() => {
        setChangeText("");
        setIsShowEdit(false);
        if (curPostId != null) {
            setCurPost(posts.find(p => p.id == curPostId))
        } else {
            setCurPost(null);
        }
    }, [curPostId, posts]);

    function onClickPost(id) {
        setCurPostId(id);
    }

    async function onChangeTitleHandler() {
        try {
            await editTitle(curPostId, {title: changeText, content: curPost.content});
            
            // reload posts
            setRefreshPosts(true);
        } catch (err) {
            console.log(err);
        }
    };

    async function onDeletePostHandler() {
        try {
            await deletePost(curPostId);
            setCurPostId(null);
            setFormData({

            })

            // reload posts
            setRefreshPosts(true);
        } catch (err) {
            console.log(err);
        }
    };

    function onSetIsShowEdit() {
        setIsShowEdit(!isShowEdit);
    }

    async function onSubmitAddPost() {
        if (formData.title == '') {
            alert('Title must be required!');
            return;
        }
        if (formData.author_name == '') {
            alert('Author must be required!');
            return;
        }
        if (formData.content == '') {
            alert('Content must be required!');
            return;
        }

        try {
            await addPost(formData);
            setIsShowAdd(false);
            setFormData(initialFormData);

            // reload posts
            setRefreshPosts(true);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="flex flex-col gap-4 justify-center">
            <a href="#" className="underline text-blue-600" onClick={() => setIsShowAdd(!isShowAdd)}>Add Post</a>

            {isShowAdd && (
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-3 gap-3 h-10">
                        <label htmlFor="title">Title:</label>
                        <input
                            id="title"
                            value={formData.title}
                            className="col-span-2 border border-gray-300 p-2 h-10"
                            type="text"
                            onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-3 h-10">
                        <label htmlFor="title">Author:</label>
                        <input
                            id="title"
                            value={formData.author_name}
                            className="col-span-2 border border-gray-300 p-2 h-10"
                            type="text"
                            onChange={(e) => setFormData((prev) => ({ ...prev, author_name: e.target.value }))}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <label htmlFor="title">Content:</label>
                        <textarea
                            id="title"
                            value={formData.content}
                            className="col-span-2 border border-gray-300 p-2"
                            type="textarea"
                            onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                        />
                    </div>

                    <div className="flex flex-row justify-end">
                        <button className="bg-blue-600 border border-blue-600 text-blue-600 py-2 px-10 rounded" onClick={onSubmitAddPost}>Submit</button>
                    </div>
                </div>
            )}

            {posts.length > 0 && <Posts posts={posts} curPostId={curPostId} onClickPost={onClickPost} />}

            {curPost !== null && <PostDetail post={curPost} onSetIsShowEdit={onSetIsShowEdit} onDeletePostHandler={onDeletePostHandler}/>}

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