import axios from "axios";
import { NewPostRequest } from "./static/interfaces";

export const getPosts = async () => {
  try {
    const response = await axios.get("/api/posts");

    return response.data;
  } catch (error) {
    console.log("Get posts error", error);
    throw error;
  }
};

export const getPostById = async (id: string) => {
  try {
    const response = await axios.get(`/api/posts/${id}`);

    return response.data;
  } catch (error) {
    console.log("Get post by Id error", error);
    throw error;
  }
};

export const createNewPost = async (token: string, data: NewPostRequest) => {
  try {
    const headers = { authtoken: token };
    const response = await axios.post("/api/posts/add", data, { headers });
    return response.data;
  } catch (error) {
    console.log("Create post error", error);
    throw error;
  }
};

export const likeAPost = async (token: string, id: string) => {
  try {
    const headers = { authtoken: token };
    const response = await axios.put(`/api/posts/${id}/like`, {}, { headers });
    return response.data;
  } catch (error) {
    console.log("Like a post error", error);
    throw error;
  }
};

export const deleteAPost = async (token: string, id: string) => {
  try {
    const headers = { authtoken: token };
    await axios.delete(`/api/posts/${id}`, { headers });
  } catch (error) {
    console.log("Delete post error", error);
    throw error;
  }
};
