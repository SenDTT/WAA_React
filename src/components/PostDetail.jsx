import { useEffect, useState } from "react";
import { deletePost, getPostById } from "../utils/api";
import { useNavigate, useParams } from "react-router";

const PostDetail = () => {
    const [isShowEdit, setIsShowEdit] = useState(false);
    const [changeText, setChangeText] = useState("");
    const [post, setPost] = useState(null);
    const params = useParams();
    const nagative = useNavigate();
    
    useEffect(() => {
        const postId = params.id;
        console.log(params);
        const fetchPost = async (id) => {
            const data = await getPostById(id);
            setPost(data);
        }

        if (postId !== null) {
            fetchPost(postId);
            return;
        }

        if (postId == null) {
            setPost(null);
        }
        setIsShowEdit(false);

    }, [])

    async function onDeletePostHandler() {
        try {
            await deletePost(selectedPostId);

            nagative("/posts");
        } catch (err) {
            console.log(err);
        }
    };

    async function onChangeTitleHandler() {
        try {
            await editTitle(selectedPostId, {title: changeText, content: curPost.content});    
            setChangeText("");
            setIsShowEdit(false);

            nagative("/posts");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col gap-4 justify-center">
            {post && params.id && (
                <div className="flex flex-col gap-2 border border-blue-600 p-4 min-w-[600px]">
                    <div className="w-full text-center underline text-xl">{post.title}</div>
                    <div className="w-full text-center">{post.author.name}</div>

                    <div className="m-4">
                        <p>{post.content}</p>
                    </div>

                    <div className="w-full flex flex-row gap-4 justify-center">
                        <a onClick={() => setIsShowEdit(true)} href="#" className="text-red-500 underline">edit</a>
                        <a onClick={onDeletePostHandler} href="#" className="text-red-500 underline">delete</a>
                    </div>
                </div>
            )}

            {isShowEdit && (
                <div className="flex flex-col gap-4">
                    <input value={changeText} className="border border-gray-300 p-2" type="text" onChange={(e) => setChangeText(e.target.value)}></input>

                    <button className="border border-blue-600 text-blue-600 p-2 rounded" onClick={onChangeTitleHandler}>Change Text</button>
                </div>
            )}
        </div>
    )
}

export default PostDetail;