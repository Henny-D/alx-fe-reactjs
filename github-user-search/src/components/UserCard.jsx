const UserCard = ({ user }) => {
    return (
      <div className="user-card">
        <img src={user.avatar_url} alt={user.login} />
        <h2>{user.name || user.login}</h2>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </div>
    );
  };
  
  export default UserCard;
  