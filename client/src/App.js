import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Home from "./Accueil/Home"
import HomePages from "./Pages/Homepage";
function App() {
  return (
    <>
      <div className="App">
        <Route path="/" component={Home} exact/>
        <Route path="/auth" component={HomePages} />
        <Route path="/chats" component={Chatpage} />
      </div>
    </>
  );
}

export default App;
