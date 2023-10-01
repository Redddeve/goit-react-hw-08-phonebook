import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from 'components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/auth/operations';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { selectisRefreshing } from 'redux/auth/selectors';
import Loader from 'components/Loader';

const App = () => {
  const Homepage = lazy(() => import('pages/HomePage'));
  const RegisterPage = lazy(() => import('pages/RegisterPage'));
  const LoginPage = lazy(() => import('pages/LoginPage'));
  const Contacts = lazy(() => import('pages/Contacts'));
  const PageNotFound = lazy(() => import('pages/PageNotFound'));

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectisRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return !isRefreshing ? (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  ) : (
    <Loader />
  );
};

export default App;
