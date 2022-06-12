import { ReactNode } from 'react';
import Header from '../Header';
import RangeNavigation from '../RangeNavigation';

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <RangeNavigation />
      <div>
        {children}
      </div>
      <div>
        footer
      </div>
    </div>
  );
}
