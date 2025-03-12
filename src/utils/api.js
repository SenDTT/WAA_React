import axios from "axios";

export async function getAllPosts() {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/auth/posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export async function editTitle(id, data) {
  try {
    const response = await axios.put(
      `http://localhost:8080/api/v1/auth/posts/${id}`,
      data
    );
    return response.data;
  } catch (err) {
    console.error("Error edit post:", error);
    throw error;
  }
}

export async function deletePost(id) {
  try {
    await axios.delete(`http://localhost:8080/api/v1/auth/posts/${id}`);
    return true;
  } catch (err) {
    console.error("Error edit post:", error);
    throw error;
  }
}

export async function addPost(data) {
  try {
    await axios.post(`http://localhost:8080/api/v1/auth/posts`, data);
    return true;
  } catch (err) {
    console.error("Error edit post:", error);
    throw error;
  }
}
