

const API_URL =
  "http://localhost:5000/api/todos";

export const getTodos = async (
  token: string
) => {
  const response = await fetch(
    API_URL,
    {
      headers: {
        Authorization:
          "Bearer " + token,
      },
    }
  );

  return response.json();
};