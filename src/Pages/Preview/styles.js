import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > main {
    height: 100vh;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  padding: 40px 106px 156px 122px;

  button {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};

    display: flex;
    align-items: center;
  }

  h1 {
    display: flex;
    gap: 19px;

    margin: 24px 0px;
  }

  > div {
    display: flex;
    align-items: center;
    margin: 24px 0px 40px;

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;

      margin-right: 8px;
    }

    i {
      display: flex;
      margin: 0px 8px;
    }

    span {
      display: flex;
      align-items: center;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
    }
  }

  section {
    display: flex;
    margin-bottom: 40px;

    button {
      height: 30px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MOVIES};

      border: none;
    }
  }
`;
