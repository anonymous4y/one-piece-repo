import store from './redux/Store';
import { Provider } from 'react-redux';
import ComponentA from './components/ComponentA';

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
