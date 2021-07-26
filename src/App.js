import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="App bg-gray-100">
      <Header />
      <Main />
      <footer style={{backgroundColor: 'red'}}>
        Test
      </footer>
    </div>
  );
}

export default App;
