import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'modern-normalize';
import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'components/Loader';
import App from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
          <ToastContainer autoClose={1000} />
        </PersistGate>
      </Provider>
    </BrowserRouter>
    <GlobalStyles />
  </>
);
