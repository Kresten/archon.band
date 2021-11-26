import { ReactNode } from 'react';

export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div {...className} className='container mx-auto px-5'>
      {children}
    </div>
  );
}
