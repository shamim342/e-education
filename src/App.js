
import { BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import './App.css';
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Services from './components/services/Services';
import About from './components/about/About';
import JoinUs from './components/joinUs/JoinUs';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path="/services">
            <Services></Services>
         </Route>
         <Route path="/about">
            <About></About>
         </Route>
         <Route path="/joinus">
            <JoinUs></JoinUs>
         </Route>
         <Route path="*">
            <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
