import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import RangeNavigation from '../RangeNavigation';

interface LayoutProps {
  children?: ReactNode;
  titlePage: string;
}

export default function Layout({ children, titlePage }: LayoutProps) {
  return (
    <div>
      <Header />
      <RangeNavigation titlePage={titlePage} />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  );
}
