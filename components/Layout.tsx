import { Nav } from './Nav';
import { ReactNode } from 'react';

export const Layout = ({ children, categories }: { children: ReactNode; categories?: any }) => {
  return (
    <>
      <Nav categories={categories} />
      {children}
    </>
  );
};
