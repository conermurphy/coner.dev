import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import {
  SEO,
  PageHero,
  ContactForm,
  LatestPosts,
  Testimonials,
} from '../components';
import { Post, Testimonial } from '../types';
import { pageDataSource, useScrollToTop } from '../utils';

interface IProps {
  testimonials: Testimonial[];
  latestPosts: Post[];
}

function Custom404({ testimonials, latestPosts }: IProps): JSX.Element {
  useScrollToTop();

  const { asPath } = useRouter();
  const path = asPath.split('/')[1];

  return (
    <>
      <SEO metaTitle="404 - Page Not Found" metaDescription="" url={path} />
      <PageHero title="404 - Page Not Found" showNewsletter={false} />
      <ContactForm />
      <LatestPosts posts={latestPosts} />
      <Testimonials testimonials={testimonials} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { testimonials, latestPosts } = await pageDataSource({
    testimonials: true,
    latestPosts: true,
  });

  return {
    props: { testimonials, latestPosts },
  };
};

export default Custom404;
