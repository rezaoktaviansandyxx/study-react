import "./App.css";
import "./style/LandingPage.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/Superhero";

function App() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>
      
      <div className="superhero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
