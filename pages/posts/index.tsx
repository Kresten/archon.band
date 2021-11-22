import { Card } from '../../components/Card';
import { Layout } from '../../components/Layout';
import { SEO } from '../../components/SEO';
import { fetchAPI } from '../../lib/api';

export default ({ posts }) => {
  const seo = {
    metaTitle: 'All posts',
    metaDescription: 'Overview of all Archon posts',
  };
  return (
    <Layout>
      <SEO seo={seo} />
      <div className='container mx-auto'>
        <h1>All posts</h1>
        {posts.map((post) => (
          <Card post={post}></Card>
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [posts] = await Promise.all([fetchAPI('/posts')]);

  return {
    props: { posts },
    revalidate: 1,
  };
}
