import { Layout } from '@/components/layout/Layout';
import { Category, Post } from 'types';
import { Image } from '../../components/Image';
import Seo from '../../components/Seo';
import { fetchAPI } from '../../lib/api';
import { markdownToHtml } from '../../lib/markdownToHtml';

interface PostProps {
  post: Post;
  categories: Category[];
}

export default ({ post, categories }: PostProps) => {
  const seo = {
    metaTitle: post.title,
    metaDescription: post.description,
    shareImage: post.image,
    post: true,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className='container mx-auto'>
        <div className='relative w-40 h-40 overflow-hidden'>
          <Image image={post?.image} className='object-cover w-full h-full' />
          <div className='absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4'>
            <h1>{post.title}</h1>
          </div>
        </div>
        <div className='content'>
          <p>{markdownToHtml(post.content || '')}</p>
          <div>
            <p>By {post.author?.name}</p>
            <p>{post.created_at}</p>
          </div>
          <div className='relative w-10 h-10 rounded-full overflow-hidden'>
            {post.author?.picture && <Image image={post.author.picture} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts: Post[] = await fetchAPI('/posts');

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await fetchAPI(`/posts/${params.slug}`);
  const categories = await fetchAPI('/categories');

  return {
    props: { post, categories },
    revalidate: 1,
  };
}
