import Link from 'next/link';
import { Post } from 'types';
import { Image } from './Image';

export const Card = ({ post }: { post: Post }) => {
  return (
    <Link as={`/posts/${post.slug}`} href='/posts/[id]'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <div className='w-90 h-90'>{post.image && <Image width={400} height={400} image={post.image} />} </div>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{post.title}</div>
          <p className='text-gray-700 text-base'>{post.content}</p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {post.category?.name}
          </span>
        </div>
      </div>
    </Link>
  );
};
