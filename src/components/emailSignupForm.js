import React from 'react';
import styled from 'styled-components';
import { FaCheck, FaTimes } from 'react-icons/fa';
import useEmail from '../utils/useEmail';
import useForm from '../utils/useForm';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  padding: 5rem;
  background-color: var(--white);
  text-align: center;
  margin: auto;
  margin-top: -100px;
  margin-bottom: 50px;
  filter: var(--dropShadow);
`;

const FormGridContainer = styled.form`
  --height: 5rem;
  --padding: 0 1rem;

  position: relative;
  height: var(--height);
  background-color: var(--white);
  border-radius: 5px;
  overflow: hidden;
  filter: var(--dropShadow);
  max-width: 500px;

  fieldset {
    display: flex;
    height: var(--height);
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .signupButton {
    background-color: var(--green);
    border-color: none;
    color: var(--white);
    width: max-content;
    padding: var(--padding);
    height: var(--height);
    font-size: 1.75rem;
    border: none;
  }

  label {
    display: flex;
    align-items: center;
    padding: var(--padding);
    height: var(--height);
    font-size: 1.75rem;
    background-color: var(--grey);
  }

  .emailInput {
    padding: var(--padding);
    flex-grow: 1;
    border: none;
    height: var(--height);
  }
`;

const MessageContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: -30px;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: var(--borderRadius);
  padding: 1.5rem;
  filter: var(--dropShadow);

  ::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid var(--white);
    position: absolute;
    top: -15px;
  }

  > * {
    padding: 1rem;
    margin: 0;
  }

  svg {
    fill: var(--green);
    border: 2px solid var(--green);
    border-radius: 50%;
    padding: 0.5rem;
    margin: 0 1rem;
    margin-left: 0.5rem;
  }

  svg[data-error] {
    fill: var(--red);
    border: 2px solid var(--red);
  }

  p {
    padding-left: 0;
  }
`;

const OutcomeMessageContainer = ({ error, message }) => (
  <MessageContainer>
    {error ? <FaTimes data-error /> : <FaCheck />}
    <p>{message}</p>
  </MessageContainer>
);
export const EmailSignup = () => {
  const { values, updateValue } = useForm({
    email: '',
  });
  const { message, loading, error, submitEmail } = useEmail({ values });
  const { email } = values;

  return (
    <>
      <FormGridContainer onSubmit={submitEmail}>
        <fieldset disabled={loading}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" className="emailInput" onChange={updateValue} value={email} />
          <button className="signupButton" type="submit" disabled={loading}>
            {loading ? 'Subscribing...' : ' Subscribe'}
          </button>
        </fieldset>
      </FormGridContainer>
      {message ? <OutcomeMessageContainer error={error} message={message} /> : ''}
    </>
  );
};

export default function EmailSignupForm() {
  return (
    // TODO: Add in extra design here for MDX use in blog posts
    <FormContainer>
      <h4>Like what you see?</h4>
      <p>Please consider signing up to my newsletter using the form below.</p>
      <EmailSignup />
    </FormContainer>
  );
}
