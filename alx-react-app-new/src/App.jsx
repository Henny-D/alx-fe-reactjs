import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import { useState } from "react";
import Counter from "./components/Counter"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ backgroundColor: 'darkgreen',textAlign: 'center', padding:'10px'}}>
        <Header />
        <MainContent />
        <Counter  />

        <WelcomeMessage />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <UserProfile name="Dobby" age="20" bio="Loves making movies" />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
