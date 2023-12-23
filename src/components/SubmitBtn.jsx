import React from "react";
import styled from "styled-components";

const SubmitBtn = ({ children, disabled }) => {
  console.log(disabled);
  return (
    <BtnSubmitted>
      <button disabled={disabled}> {children} </button>
    </BtnSubmitted>
  );
};

const BtnSubmitted = styled.div`
  margin-top: 0.25rem;

  button {
    font-weight: 700;
    background-color: #ffc812;
    border-radius: 0.25rem;
    font-size: 1rem;
    gap: 0.5rem;
    font-family: aleo;
    color: #1b1d1b;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0;
    border: 0;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  button:disabled {
    background-color: #bebebe;
    cursor: not-allowed;
  }
`;

export default SubmitBtn;
