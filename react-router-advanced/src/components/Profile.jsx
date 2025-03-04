import { Link, Routes, Route } from "react-router-dom";

function ProfileDetails() {
  return <h2>Profile Details Section</h2>;
}

function ProfileSettings() {
  return <h2>Profile Settings Section</h2>;
}

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
