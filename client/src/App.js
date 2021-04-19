import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
// import ProductList from './components/productList';
// import ProductForm from './components/productForm';




function App() {
  return (
    <div className="App">
      <Router>
        <Main default />
        <ProductDetail path='/product/:id' />

      
      </Router>
    
    </div>
  );
}

export default App;
