import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com"}

  return (
    <div style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', padding:'5%', marginLeft:'500px'}}>
  <UserContext.Provider value={userData}>
  <ProfilePage />
  </UserContext.Provider>
  </div>
  );
}

export default App;