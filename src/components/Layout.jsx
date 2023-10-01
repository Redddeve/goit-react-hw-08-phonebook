import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader';
import { LayoutWrapper, OutletWrapper } from 'styledComponents/Layout.styled';
import Header from './Header';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <OutletWrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </OutletWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
