//React Router v 5.3.3
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//SASS
import './App.scss';

//Components
import Footer from './components/Footer';
//Pages
import Home from './pages/Home';
import Plans from './pages/Plans';
import Support from './pages/Support';
import Apply from './pages/Apply';
import Bills from './pages/Bills';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/plans" component={Plans} />
        <Route path="/support" component={Support} />
        <Route path="/apply" component={Apply} />
        <Route path="/bills" component={Bills} />
      </Switch>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
