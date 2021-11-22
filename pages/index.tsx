import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { fetchAPI } from '../lib/api';
import { Card } from '../components/Card';

export default function Home({ posts, categories, homepage }) {
  return (
    <Layout categories={categories}>
      <SEO seo={homepage.seo} />
      <div className='uk-section'>
        <div className='uk-container uk-container-large'>
          <h1>{homepage.hero.title}</h1>
          {posts.map((post, i) => (
            <Card key={i} post={post}></Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [posts, categories, homepage] = await Promise.all([
    fetchAPI('/posts'),
    fetchAPI('/categories'),
    fetchAPI('/homepage'),
  ]);

  return {
    props: { posts, categories, homepage },
    revalidate: 1,
  };
}
