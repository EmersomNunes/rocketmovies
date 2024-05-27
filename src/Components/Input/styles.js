import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  border-radius: 10px;

  > svg {
    margin-left: 12px;
    color: ${({ theme }) => theme.COLORS.BUTTONTEXT};
  }

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BUTTONTEXT};
    }
  }
`;
