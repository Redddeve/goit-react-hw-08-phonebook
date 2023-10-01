import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader';
import Header from './Header';

const Layout = () => {
  return (
    <main className="grid">
      <Header />
      <div className="p-5">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default Layout;
