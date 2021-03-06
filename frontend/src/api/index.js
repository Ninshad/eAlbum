import axios from "axios";

const url = 'http://localhost:5000/posts';

export const createPost = (newPost) => axios.post(url, newPost);
export const fetchPost = () => axios.get(url);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);