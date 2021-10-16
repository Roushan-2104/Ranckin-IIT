import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Switch, useLocation } from "react-router-dom";
import Footer from "./components/foot";
import AboutUs from "./components/AboutUs";
import Error from "./components/error";
import join from "./components/join";
import { AnimatePresence } from "framer-motion";
import Youthkaksha from "./components/Youthkaksha";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/join-us" component={join} />
          <Route path="/youthkaksha" component={Youthkaksha} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
