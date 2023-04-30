import type { GetStaticProps, NextPage } from 'next';
import { ContactForm, Newsletter, PageHero, SEO, Socials } from '../components';
import { LatestVideo, Post } from '../types';
import { generateRssFeeds } from '../utils';
import pageDataSource from '../utils/pageDataSource';
import LatestContent from '../components/LatestContent';
import ContactCard from '../components/ContactCard';

interface IProps {
  latestBlogs: Post[];
  latestYouTubeVideo: LatestVideo['items'][0];
}

const Contact: NextPage<IProps> = ({ latestBlogs, latestYouTubeVideo }) => (
  <>
    <SEO
      metaTitle="Contact Me"
      metaDescription="Got a question you want to ask? Or, want to team up on an upcoming project? Here's how to get in touch with me."
    />
    <div className="flex flex-col gap-12 md:gap-24">
      <PageHero
        title="Say Hi 👋"
        description="Got a question you want to ask? Or, a project you want to team up on? Here's how to get in touch with me."
        tag="Contact"
      />
      <div className="flex flex-col gap-12 md:gap-24 items-center justify-center w-full">
        <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl p-6 gap-8">
          <ContactCard
            tag="Email Me"
            title="hey@conermurphy.com"
            description="Want to send me an email? Click the link below and say hi!"
            link={
              <a
                href="mailto:hey@conermurphy.com"
                className="text-brand font-heading font-extrabold text-lg"
              >
                Send an email ✉️
              </a>
            }
          />
          <ContactCard
            tag="Socials"
            title={<Socials />}
            description="Email not your thing? Come say hi on social media!"
            link={
              <p className="text-brand font-heading font-extrabold text-lg">
                Follow Me ✅
              </p>
            }
          />
        </section>
        <div className="flex justify-center p-6 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
    <LatestContent
      latestBlog={latestBlogs[0]}
      latestVideo={latestYouTubeVideo}
    />
    <Newsletter />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  await generateRssFeeds();

  const { latestBlogs, latestYouTubeVideo } = await pageDataSource({
    latestBlogs: true,
    latestYouTubeVideo: true,
  });

  return {
    props: { latestBlogs, latestYouTubeVideo },
  };
};

export default Contact;
