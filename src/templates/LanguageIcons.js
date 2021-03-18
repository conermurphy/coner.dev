import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GrCss3, GrHtml5, GrJs, GrReactjs, GrGatsbyjs, GrGraphQl, GrNode } from 'react-icons/gr';
import { FaRProject } from 'react-icons/fa';

const IconContainer = styled.div`
  & > svg {
    width: ${(props) => (props.width ? props.width : '5rem')};
    height: ${(props) => (props.width ? props.width : '5rem')};
    transition: 0.5s all ease-in-out;
    & > path {
      stroke: inherit; // Override hidden to remove default black and take the inline style.
    }
  }
`;

export const languages = {
  HTML: <GrHtml5 style={{ stroke: 'hsl(12, 77%, 52%)' }} data-label="HTML" aria-label="HTML Icon" />,
  CSS: <GrCss3 style={{ stroke: 'rgb(38, 77, 228)' }} data-label="CSS" aria-label="CSS Icon" />,
  JavaScript: <GrJs style={{ backgroundColor: 'yellow' }} data-label="JavaScript" aria-label="JavaScript Icon" />,
  NodeJS: <GrNode style={{ color: 'rgb(68, 136, 62)' }} data-label="NodeJS" aria-label="NodeJS Icon" />,
  ReactJS: <GrReactjs style={{ color: '#61dafb' }} data-label="ReactJS" aria-label="ReactJS Icon" />,
  GatsbyJS: <GrGatsbyjs style={{ color: 'rgb(102 51 153' }} data-label="GatsbyJS" aria-label="GatsbyJS Icon" />,
  GraphQL: <GrGraphQl style={{ color: '#E10098' }} data-label="GraphQL" aria-label="GraphQL Icon" />,
  R: <FaRProject style={{ color: '#1f63b4' }} data-label="R Project" aria-label="R Project Icon" />,
};

export const languageList = Object.keys(languages);

export default function LanguageIcons({ language, width }) {
  return (
    <IconContainer width={width} height={width}>
      {languages[language.trim()]}
    </IconContainer>
  );
}

LanguageIcons.propTypes = {
  language: PropTypes.string,
  width: PropTypes.string,
};
