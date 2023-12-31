import styled from "styled-components";
import { colors, fontSize } from "./root.ts";

export const DefaultButton = styled.button`
  text-align: start;
  font-weight: 500;
  width: 100%;
  text-decoration: underline;
  border-radius: 4px;

  &:hover {
    color: ${colors.purpleHover};
    outline: 2px solid ${colors.purpleHover};
  }
  &:active {
    outline: 2px solid ${colors.purpleActive};
  }
  &:focus {
    outline: 2px solid ${colors.purpleActive};
  }
`;

export const MenuButton = styled(DefaultButton)`
  text-decoration: underline;
  background-color: inherit;
  font-weight: 400;

  &:hover {
    color: ${colors.purpleHover};
    outline: 2px solid ${colors.grey5};
  }
`;
export const IconButton = styled.button<{ $bgColor?: boolean }>`
  background-color: ${(props) => props.$bgColor && colors.grey5};
  padding: 16px;
  border-radius: 20px;
  display: grid;
  place-items: center;

  &:hover {
    outline: 2px solid ${colors.purpleHover};
  }
`;
export const AddCartButton = styled(IconButton)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding-block-end: 0px;
  padding-block-start: 8px;
  z-index: 2;

  outline: 2px solid ${colors.purple};

  &:hover {
    background-color: ${colors.purpleSurface};
  }

  &:active {
    outline: 3px solid ${colors.purple};
  }

  &:focus {
    outline: 3px solid ${colors.purple};

  }
}
`;

export const InlineButton = styled(DefaultButton)`
  width: auto;
  color: ${colors.purple};
    &:disabled {
    background-color: ${colors.grey20};
    cursor: wait;
`;

export const WarningInlineButton = styled(InlineButton)`
  color: ${colors.red50};
  font-size: ${fontSize.text};
  position: absolute;
  top: 3ex;
  left: 00px;

  @media (min-width: 550px) {
    top: 0px;
    left: unset;
    right: 0px;
  }

  &:hover {
    color: ${colors.red80};
  }
`;

export const StyledButton = styled.button`
  padding-block: 16px;
  color: ${colors.offWhite};
  background-color: ${colors.purple};
  border-radius: 8px;
  margin-block: clamp(12px, 10%, 32px);
  font-weight: 500;
  transition: background-color 300ms;

  &:hover {
    outline: 2px solid ${colors.purpleBorder};
    background-color: ${colors.purpleHover};
  }

  &:focus {
    background-color: ${colors.purpleActive};
  }

  &:active {
    background-color: ${colors.purple};
  }
`;
export const SendBtn = styled(StyledButton)`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-block: 0;
  margin-top: 30px;
  font-weight: 500;
`;

export const ModalBottonButton = styled(SendBtn)`
  background-color: ${colors.offWhite};
  color: ${colors.purple};
  margin-block: 0;

  &:hover {
    background-color: ${colors.purpleHover};
    color: ${colors.offWhite};
  }
  &:focus {
    color: ${colors.purpleHover};
    background-color: ${colors.purpleSurface};
    outline: 3px solid ${colors.purple};
  }
`;

export const ModalButton = styled.button`
  position: absolute;
  top: 30px;
  right: 40px;

  max-height: 40px;

  width: auto;
  border-radius: 4px;
  padding: 8px;
  max-width: fit-content;
`;


export const QuitButton = styled(DefaultButton)`
  color: ${colors.red60};
  font-weight: 500;

  &:hover {
    color: ${colors.red80};
    outline: 2px solid ${colors.red80};
  }
  &:active {
    color: ${colors.red80};
    outline: 2px solid ${colors.red80};
  }
  &:focus {
    color: ${colors.red80};
    outline: 2px solid ${colors.red80};
  }
`;

export const RoundButton = styled.button<{ $positionLeft?: boolean }>`
  outline: 2px solid ${colors.grey60};
  width: fit-content;
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  background-color: ${colors.white000};

  &:hover {
    outline: 3px solid ${colors.purpleHover};
  }

  &:focus {
    outline: 3px solid ${colors.purpleHover};
  }

  top: 50%;
  left: ${(props) => (props.$positionLeft ? 0 : "none")};
  right: ${(props) => (props.$positionLeft ? "none" : 0)};
`;
