import { Card } from '@/components/Card';
import { Layout } from '@/components/layout/Layout';
import { Post } from 'types';
import Seo from '../../components/Seo';
import { fetchAPI } from '../../lib/api';

interface PostsProps {
  posts: Post[];
}

export default ({ posts }: PostsProps) => {
  const seo = {
    metaTitle: 'All posts',
    metaDescription: 'Overview of all Archon posts',
  };
  return (
    <Layout>
      <Seo seo={seo} />
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
