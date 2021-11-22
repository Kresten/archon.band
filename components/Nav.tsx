import Link from 'next/link';

export const Nav = ({ categories }) => {
  return (
    <div>
      <nav className='archon-navbar-container' data-uk-navbar>
        <div className='archon-navbar-left'>
          <ul className='archon-navbar-nav'>
            <li>
              <Link href='/'>
                <a>Archon</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='archon-navbar-right'>
          <ul className='archon-navbar-nav'>
            {categories &&
              categories.map((category) => {
                return (
                  <li key={category.id}>
                    <Link as={`/category/${category.slug}`} href='/category/[id]'>
                      <a className='archon-link-reset'>{category.name}</a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </nav>
    </div>
  );
};
