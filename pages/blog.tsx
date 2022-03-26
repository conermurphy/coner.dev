import type { GetStaticProps, NextPage } from 'next';
import { Testimonials, PageHero } from '../components';
import { PostCardGrid } from '../components/blog';
import { Testimonial, Posts } from '../types';
import { pageDataSource } from '../utils';
import { getAllPosts } from '../utils/posts';

interface IProps {
  testimonials: Testimonial[];
  posts: Posts;
}

const Blog: NextPage<IProps> = ({ testimonials, posts }) => {
  return (
    <>
      <PageHero
        title="My Content"
        body="Blog posts, tutorials, technical writing and much more. All of my
            content in one place to enjoy..."
      />
      <div className="flex flex-row items-center justify-center mb-10 xl:mt-72 md:mb-12">
        <div className="flex flex-col items-center gap-y-10 justify-between w-full max-w-[272px] md:max-w-[1372px] md:px-20 lg:px-106 xl:flex-row xl:items-start">
          <p>Blog page sidebar</p>
          <PostCardGrid posts={posts} />
        </div>
      </div>
      <Testimonials testimonials={testimonials} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { testimonials } = await pageDataSource({
    services: false,
    testimonials: true,
    latestPosts: false,
  });

  const posts = await getAllPosts({});

  return {
    props: { testimonials, posts },
  };
};

export default Blog;
