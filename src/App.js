import Header from "./components/header/Header";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Header} />
      </Switch>
    </>
  );
}

export default App;
