import "./app.scss";
import Docs from "./components/Docs";
import Navbar from "./components/Navbar";
import MacWindow from "./components/windows/MacWindow";

const App = () => {
  return (
    <main className="main">
      <Docs />
      <Navbar />
      <MacWindow/>
    </main>
  );
};

export default App;
