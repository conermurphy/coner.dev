import styled from 'styled-components';

const LandingSection = styled.section`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 50% 0.75fr;
  gap: 5rem;
  align-items: center;
  height: auto;
  margin-bottom: 100px;
  justify-content: space-evenly;

  @media (max-width: 1200px) {
    grid-template-columns: 50%;
    margin-bottom: 150px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 100%;
    height: 1000px;
  }

  h1 {
    color: var(--white);
    font-size: 8rem;
    text-transform: uppercase;
    font-family: var(--body-font);

    span {
      display: block;
      color: var(--white);
    }
  }

  .contactBlock {
    display: grid;
    grid-template-rows: repeat(2, 0.5fr);
    row-gap: 0.25rem;

    @media (max-width: 400px) {
      grid-template-rows: 1fr;
      margin: 0 5rem;
    }

    p {
      font-size: 2rem;
      overflow-wrap: break-word;
      color: var(--white);
      max-width: 500px;
    }
  }
`;

const InfoBlock = styled.div`
  background-color: var(--white);
  width: 20vw;
  max-width: 400px;
  height: 35rem;
  filter: drop-shadow(var(--shadow));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;

  @media (max-width: 1200px) {
    width: 100%;
    margin: auto;
  }

  @media (max-width: 400px) {
    width: 90%;
    margin: auto;
  }

  .aboutMe {
    padding: 2.5rem;
    background-color: var(--grey);
    width: calc(100% - 5rem);
    text-align: right;
    color: var(--black);
    font-family: var(--header-font);
  }

  & > ul {
    list-style: none;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    & > li {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 2rem;
      padding: 1rem 2.5rem;

      & > svg {
        background-color: var(--grey);
        margin-left: 1rem;
        align-self: flex-start;
      }
    }

    & > .languagesContainer {
      align-items: flex-start; // Targetting the language container individually to set to flex start to align centrally on page due to svg height being differnt

      & > ul {
        flex-wrap: wrap;
        gap: 1rem 0;
        justify-content: flex-end;
      }

      & > svg {
        align-self: center;
      }
    }

    svg {
      padding: 0.75rem;
      margin: 0;
      border-radius: 5px;
    }
  }

  .languages {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 0rem;

    & > li {
      padding: 0.25rem;
      margin: 0;

      & a {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  background-color: var(--black);
  width: 100vw;
  height: 650px;
  top: 0;
  overflow: hidden;
  left: 0;
  z-index: -1;
  filter: drop-shadow(var(--shadow));

  @media (max-width: 400px) {
    height: 900px;
  }
`;

const ContentSection = styled.section`
  & > .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 4rem;
    padding: 5rem;

    * {
      text-decoration: none;
    }
  }

  @media (max-width: 400px) {
    .headerTitleSeperator {
      justify-content: space-evenly;
    }
  }

  & > .testimonial {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
  }
`;

const NotesContentSection = styled.section`
  & > .content {
    display: flex;
    flex-direction: column;
    padding: 2.5rem 0;

    & > a :last-child {
      > div:last-child {
        border-bottom: none;
      }
    }

    * {
      text-decoration: none;
    }
  }

  @media (max-width: 400px) {
    .headerTitleSeperator {
      justify-content: space-evenly;
    }
  }
`;

export { ContentSection, LandingSection, InfoBlock, HeroBackground, NotesContentSection };
