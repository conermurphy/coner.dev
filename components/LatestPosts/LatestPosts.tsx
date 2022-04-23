import Link from 'next/link';
import React from 'react';
import { Post } from '../../types';
import { PostCard } from '../Blog';
import ComponentWrapper from '../ComponentWrapper/ComponentWrapper';

interface IProps {
  posts: Post[];
}

export default function LatestPosts({ posts }: IProps): JSX.Element {
  return (
    <ComponentWrapper
      data={{
        title: 'Latest Content...',
        subTitle: 'What I’m up to and more.',
      }}
    >
      <ul className="flex flex-wrap gap-6 flex-row w-full items-start justify-center xl:justify-start">
        {posts.map(({ data }) => {
          return (
            <li key={data.id}>
              <PostCard post={data} />
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col gap-1 mt-10 text-lg md:flex-row lg:text-xl justify-center xl:justify-start">
        <p>Want to read more?</p>
        <span className="font-semibold">
          <Link href="/blog">View all posts here</Link>
        </span>
      </div>
    </ComponentWrapper>
  );
}
