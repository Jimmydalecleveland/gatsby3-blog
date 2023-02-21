import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const buttonStyles = css`
  border: none;
  width: 100%;
  max-width: 400px;
  height: 70px;
  font-size: 26px;
  text-align: center;
  color: #fff;
  border-radius: 12px;
  background: linear-gradient(
    -45deg,
    #c0d086,
    #78b191,
    #3f8796,
    #113459,
    #113459,
    #3f8796,
    #78b191,
    #c0d086
  );
  background-size: 600%;

  &.loading {
    animation: ${gradient} 10s linear infinite;
  }
`;

export const SubmitButton = styled.button`
  position: relative;
  ${buttonStyles}
`;

export const SubmitButtonGlow = styled.div`
  position: absolute;
  top: 30px;
  left: 20px;
  z-index: 1;
  filter: blur(30px);
  opacity: 0.8;

  &.loading {
    ${buttonStyles}
  }
`;
