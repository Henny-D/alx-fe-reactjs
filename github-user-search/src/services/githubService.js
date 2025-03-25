import axios from "axios";

// Function to fetch user data based on advanced search criteria
export const fetchUserData = async (username, location = "", minRepos = 0) => {
  const query = `${username}${location ? `+location:${location}` : ""}${minRepos ? `+repos:>=${minRepos}` : ""}`;
  const url = `https://api.github.com/search/users?q=${query}`;

  const response = await axios.get(url);
  return response.data.items;
};
