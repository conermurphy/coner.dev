import React from 'react';
import styled from 'styled-components';
import { FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Services from '../data/services.json';

const ServiceSectionContainer = styled.section`
  background-color: var(--secondaryBg);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 5rem 0;

  & > h2,
  h3 {
    text-align: center;
  }

  .ServiceCardsContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(300px, 50vw, 400px), 1fr));
    align-items: flex-start;
    gap: clamp(1rem, 2vw, 2rem);
    padding-top: 2rem;

    width: clamp(300px, 80vw, var(--maxWidth));
  }
`;

const ServiceCardContainer = styled(motion.div)`
  background-color: var(--primaryBg);
  filter: drop-shadow(var(--shadow));
  border-radius: var(--borderRadius);
  padding: 3rem;
  margin: 1rem;

  .serviceCardTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;

    & > h4 {
      margin: 0;
      color: var(--primaryText);
    }

    & > svg {
      background-color: var(--accent);
      color: var(--accentText);
      padding: 1rem;
      border-radius: calc(var(--borderRadius) / 2);
    }
  }
`;

function ServiceCard({ service: { title, description, icon } }) {
  let displayIcon;
  switch (icon) {
    case 'laptop':
      displayIcon = <FaLaptopCode />;
      break;
    default:
      displayIcon = '';
  }

  return (
    <ServiceCardContainer whileHover={{ scale: 1.025 }}>
      <div className="serviceCardTitle">
        {displayIcon}
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </ServiceCardContainer>
  );
}

export function ServiceSection() {
  return (
    <ServiceSectionContainer id="services">
      <h2 className="title">Services</h2>
      <h3 className="subtitle">It's more than just a website...</h3>
      <div className="ServiceCardsContainer">
        {Services.map((service) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </div>
    </ServiceSectionContainer>
  );
}
