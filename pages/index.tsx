import { fetchAPI } from '../lib/api';
import { Category, PageData, Post } from 'types';
import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/Card';
import Seo from '../components/Seo';

interface HomeProps {
  posts: Post[];
  categories: Category[];
  homepage: PageData;
}

export default function Home({ posts, categories, homepage }: HomeProps) {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className='uk-section'>
        <div className='uk-container uk-container-large'>
          <h1>{homepage.hero?.title}</h1>
          {posts.map((post, i) => (
            <Card key={i} post={post}></Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let posts = [];
  let categories = [];
  let homepage;
  try {
    [posts, categories, homepage] = await Promise.all([
      fetchAPI('/posts'),
      fetchAPI('/categories'),
      fetchAPI('/homepage'),
    ]);
  } catch (e) {
    console.error(e);
  }
  return {
    props: { posts, categories, homepage },
    revalidate: 1,
  };
}
