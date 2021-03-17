import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./Components/SearchBox";

const App = () => {
  return (
    <div className="container mt-5">
      <h1>A Github App</h1>

      <div className="row">
        <SearchBox />
      </div>
    </div>
  );
};

export default App;
