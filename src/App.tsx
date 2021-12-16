import "./App.scss";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./pages/product-detail/product";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
