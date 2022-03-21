import { Provider } from 'react-redux';
import './App.css';
import Layout from './components/core/Layout';
import configureStore from './components/reducers/configure-store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
