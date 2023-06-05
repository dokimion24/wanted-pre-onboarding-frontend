import { axiosInstance } from "./axiosInstance";

export const getTodos = async () => {
  try {
    const res = await axiosInstance.get(`/todos`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createTodo = async (todo) => {
  try {
    const res = await axiosInstance.post(`/todos`, { todo });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};