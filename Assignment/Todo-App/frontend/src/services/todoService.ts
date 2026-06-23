import axios from "axios";

export const createTodo = async (data: any) => {
  const response = await axios.post(
    "http://localhost:5000/api/todos",
    data
  );

  return response.data;
};