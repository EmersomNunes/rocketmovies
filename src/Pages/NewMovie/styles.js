import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
`;

export const CreateMovie = styled.form`
  padding: 25px 106px 0px 123px;

  > button {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  }

  > h1 {
    margin: 24px 0px 40px;
    font-size: 36px;
  }

  > main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2;
    gap: 40px;

    > textarea {
      width: 100%;
      height: 274px;
      grid-column: span 2;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
      color: ${({ theme }) => theme.COLORS.WHITE};

      border: none;
      border-radius: 10px;
      padding: 19px 0px 0px 16px;
      resize: none;
    }
  }
`;

export const Mark = styled.div`
  padding: 40px 106px 85px 123px;

  h2 {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.MOVIETEXT};
    margin-bottom: 24px;
  }

  div {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MARK};
    display: flex;
    align-items: center;

    padding: 16px;
    border-radius: 8px;
    margin-bottom: 40px;

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
      font-size: 24px;
    }

    button {
      height: 56px;
      width: 100px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
      color: ${({ theme }) => theme.COLORS.WHITE};

      border: none;
    }

    > button:nth-child(2) {
      width: 180px;
      padding: 16px;
      
      color: ${({ theme }) => theme.COLORS.BUTTONTEXT};

      font-size: 16px;
      background-color: transparent;

      border: dashed 1px;
    }
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    button {
      padding: 16px;
    }

    >button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MARK};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
    }

    > button:nth-child(2) {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`;
