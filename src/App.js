import NavBar from "./components/NavBar/NavBar";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <header><NavBar></NavBar></header>
<HomePage></HomePage>
 <AboutPage></AboutPage>
    </div>
  );
}

export default App;
