import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export const fetchUser = async (username) => {
  const response = await axios.get(`${BASE_URL}${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.REACT_APP_GITHUB_API_KEY}`, // If needed
    },
  });
  return response.data;
};
