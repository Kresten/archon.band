import Container from './Container';
import { PageData } from 'types';

export default function Footer({ footer }: { footer?: PageData }) {
  const thisYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-900'>
      <div className='grid grid-cols-1 divide-y divide-gray-500'>
        <Container>
          <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-white text-center mb-10 lg:mb-0 lg:pr-4'>
            ARCHON
          </h3>
        </Container>
        <Container>
          <div>Ayo</div>
          <div className='text-white text-center'>ARCHON {thisYear}</div>
        </Container>
      </div>
    </footer>
  );
}
