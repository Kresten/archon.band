import ReactMarkdown from 'react-markdown';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { SEO } from '../../components/SEO';
import { fetchAPI } from '../../lib/api';
import { getStrapiMedia } from '../../lib/media';

export default ({ post, categories }) => {
  const imageUrl = getStrapiMedia(post.image);

  const seo = {
    metaTitle: post.title,
    metaDescription: post.description,
    shareImage: post.image,
    post: true,
  };

  if (!post) {
    return <>Loading...</>;
  }

  return (
    <Layout categories={categories}>
      <SEO seo={seo} />
      <div className='container mx-auto'>
        <div className='relative w-40 h-40 overflow-hidden'>
          <Image image={post.image} className='object-cover w-full h-full' />
          <div className='absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4'>
            <h1>{post.title}</h1>
          </div>
        </div>
        <div className='content'>
          <ReactMarkdown children={post.content} skipHtml={false} />
          <div>
            <p>By {post.author.name}</p>
            <p>{post.published_at}</p>
          </div>
          <div className='relative w-10 h-10 rounded-full overflow-hidden'>
            {post.author.picture && <Image image={post.author.picture} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await fetchAPI('/posts');

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const posts = await fetchAPI(`/posts?slug=${params.slug}`);
  const categories = await fetchAPI('/categories');

  return {
    props: { post: posts[0], categories },
    revalidate: 1,
  };
}
