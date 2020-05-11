import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import ContentCard from '../components/templates/contentCard';
import device from '../components/device';

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;

  & > p {
    text-align: center;
  }

  @media ${device.tablet} {
    padding: 0 3rem;
  }
`;

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  @media ${device.laptopL} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Work = ({ data }) => {
  const work = data.dataJson.content;

  return (
    <Layout>
      <WorkContainer>
        <h1>My Work</h1>
        <p>
          Here's all my recent projects I've been working on. Including a mixture of previous client work and personal projects I've built.
        </p>
        <p>
          If you have any questions or want to chat about working with me on a future project please get in touch using the methods listed
          on the{' '}
          <Link to="/#contact" style={{ fontWeight: 600 }}>
            Contact Section.
          </Link>
        </p>
        <PostContainer>
          {work.map((item, index) => {
            const contentData = {
              internal: false,
              link: item.URL,
              topLine: item.technologies,
              title: item.title,
              bottomLine: item.description,
            };
            return <ContentCard data={contentData} key={index} />;
          })}
        </PostContainer>
      </WorkContainer>
    </Layout>
  );
};

Work.propTypes = {
  data: PropTypes.shape({
    dataJson: PropTypes.shape(
      PropTypes.arrayOf({
        node: PropTypes.shape(
          PropTypes.arrayOf(
            PropTypes.shape({
              URL: PropTypes.string,
              description: PropTypes.string,
              technologies: PropTypes.string,
              title: PropTypes.string,
              type: PropTypes.string,
            })
          )
        ),
      }).isRequired
    ),
  }),
};

export const query = graphql`
  query {
    dataJson(title: { eq: "Portfolio" }) {
      id
      content {
        title
        type
        URL
        description
        technologies
        date
      }
    }
  }
`;

export default Work;
