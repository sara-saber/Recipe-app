import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/App.css';
import './css/styles.css';
import './css/form.css';
import { BrowserRouter as  Router , Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import AddRecipe from './pages/AddRecipe';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Header />
        <div className="app-content" >
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route  path='/details/:id'>
              <RecipeDetail />
            </Route>
            <Route  path='/add'>
              <AddRecipe />
            </Route>
            <Route  path='/recipes'>
              <Recipes/>
            </Route>
            <Route  path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router >);
    
}

export default App;
