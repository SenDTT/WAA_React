import { useRef } from "react";
import { addPost } from "../utils/api";
import { Link, useNavigate } from "react-router";

const AddPostForm = () => {
    const formRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(formRef.current);
        const title = formData.get("title")?.toString().trim();
        const author_name = formData.get("author_name")?.toString().trim();
        const content = formData.get("content")?.toString().trim();

        if (!title || !content || !author_name) {
            alert("The fields are required!");
            return;
        }

        onAddPost({title, author_name, content});

        formRef.current?.reset();
    };

    async function onAddPost(data) {
        try {
            await addPost(data);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="flex flex-col gap-4 justify-center">
            <h1>Add New Post</h1>

            <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 gap-3 h-10">
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        name="title"
                        // value={formData.title}
                        className="col-span-2 border border-gray-300 p-2 h-10"
                        type="text"
                    />
                </div>
                <div className="grid grid-cols-3 gap-3 h-10">
                    <label htmlFor="title">Author:</label>
                    <input
                        id="author_name"
                        name="author_name"
                        //value={formData.author_name}
                        className="col-span-2 border border-gray-300 p-2 h-10"
                        type="text"
                    />
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <label htmlFor="title">Content:</label>
                    <textarea
                        id="content"
                        name="content"
                        //value={formData.content}
                        className="col-span-2 border border-gray-300 p-2"
                        type="textarea"
                    />
                </div>

                <div className="flex flex-row justify-end gap-2">
                    <Link to="/" className="text-blue-600 py-2 px-5 rounded">Cancel</Link>
                    <button className="bg-blue-600 border border-blue-600 text-blue-600 py-2 px-10 rounded" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddPostForm;