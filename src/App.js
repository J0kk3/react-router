import { Route } from 'react-router-dom';
//pages
import Welcome from './pages/Welcome';
import Products from './pages/Products';
//components
import MainHeader from './components/MainHeader';
function App ()
{
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;