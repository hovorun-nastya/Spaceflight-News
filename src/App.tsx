import {Route, Routes} from "react-router";
import Search from "./pages/Home/Search";
import ArticlePage from "./pages/Article/ArticlePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Search/>}/>
        <Route path="/article/:id" element={<ArticlePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
