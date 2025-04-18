import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState(0);
  const [users, setUsers] = useState([]); // Array to store multiple users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]); // Clear the previous users

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUsers(data); // Set the list of users
    } catch (err) {
      setError["Looks like we cant find the user."];
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container max-w-4xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-700">GitHub Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-gray-700">Location (Optional)</label>
          <input
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block text-gray-700">Minimum Repositories (Optional)</label>
          <input
            id="minRepos"
            type="number"
            placeholder="Min Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      {/* Display results for multiple users using map */}
      {users.length > 0 && (
        <div className="user-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {users.map((user) => (
            <div key={user.id} className="user-card p-4 border rounded">
              <img src={user.avatar_url} alt={user.login} className="user-avatar w-24 h-24 rounded-full" />
              <h2 className="text-2xl mt-2">{user.name || user.login}</h2>
              <p className="text-gray-500">Location: {user.location || "N/A"}</p>
              <p className="text-gray-500">Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
