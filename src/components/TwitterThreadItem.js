import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Components from './mdx/Components';

const TweetContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem;
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow);
  overflow: hidden;
  max-width: 550px;

  .imagesContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    & > .gatsby-image-wrapper {
      max-height: 300px;
    }
  }

  .tweetBody {
    padding: 2rem;
  }

  .tweetFooter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    background-color: var(--grey);

    .position {
      font-size: 1.6rem;
    }

    .viewTweet {
      background-color: #1da1f2;
      color: var(--white);
      border: none;
      padding: 0.75rem 1rem;
      border-radius: calc(var(--borderRadius) / 2);
      text-decoration: none;
    }
  }
`;

export default function TwitterThreadItem({ tweet }) {
  // 1: Querying for all tweets in all threads as unable to pass variables to static queries.
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "tweet" } } }) {
        edges {
          node {
            frontmatter {
              position
              tweetId
              date(formatString: "DD/MM/YYYY HH:mm")
              images {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
                id
              }
              links
            }
            body
          }
        }
      }
    }
  `);

  // 2: Finding the required tweet from all of the tweets.
  const allTweets = data.allMdx.edges;
  const [tweetToDispaly] = allTweets.filter(({ node }) => node.frontmatter.tweetId === tweet);

  // 3: Destructure values out from required tweet
  const { body, frontmatter } = tweetToDispaly.node;
  const { position, tweetId, date, images, links } = frontmatter;

  return (
    <TweetContainer>
      <div className="imagesContainer">
        {images && images.map((image) => <GatsbyImage image={image.childImageSharp.gatsbyImageData} />)}
      </div>
      <div className="tweetBody">
        <MDXProvider components={Components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        {!!links && (
          <p style={{ paddingBottom: 0, marginBottom: 0 }}>
            <b>Links:</b>
          </p>
        )}
        {!!links && (
          <ul style={{ paddingTop: 0, marginTop: 0 }}>
            {links.map((link) => (
              <li key={`TwitterThreadLink:${link}`}>
                <a href={link}>{link}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="tweetFooter">
        <p className="position">Tweet {position}</p>
        <a className="viewTweet" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/MrConerMurphy/status/${tweetId}`}>
          View On Twitter
        </a>
      </div>
    </TweetContainer>
  );
}

TwitterThreadItem.propTypes = {
  tweet: PropTypes.string,
};
