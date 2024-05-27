import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const Content = styled.form`
  display: grid;
  place-content: center;
  margin: 0 auto;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  }

  > h2 {
    margin: 48px 0px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-bottom: 24px;
  }

  > button {
    height: 56px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  > button:last-child {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-top: 8px;
  }
`;
