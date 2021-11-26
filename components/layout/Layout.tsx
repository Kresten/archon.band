import { Nav } from '../Nav';
import { ReactNode } from 'react';
import Footer from './Footer';

export const Layout = ({ children, categories }: { children: ReactNode; categories?: any }) => {
  return (
    <>
      <Nav categories={categories} />
      {children}
      <Footer />
    </>
  );
};
