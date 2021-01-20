import Header from './Header';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main' style={{ border: '3px solid #000', width: '100vw', height: '80vh' }}>
        <Cart />
      </div>
    </div>
  );
}

export default App;
