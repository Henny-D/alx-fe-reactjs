import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { fetchUserData } from "./services/githubService";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find this user!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
};

export default App;
