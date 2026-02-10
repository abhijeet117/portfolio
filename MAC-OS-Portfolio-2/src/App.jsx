import "./app.scss";
import Docs from "./components/Docs";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="main">
      <Docs />
      <Navbar />
    </main>
  );
};

export default App;
