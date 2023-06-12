import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ComponentA />
      </Provider>
    </div>
  );
}

export default App;
