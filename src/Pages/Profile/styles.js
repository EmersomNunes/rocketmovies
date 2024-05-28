import styled from "styled-components";

export const Container = styled.div``;

export const TopProfile = styled.div`
  width: 100%;
  height: 144px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MOVIES};

  > a {
    padding: 64px 0px 59px 168px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};

    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
  }
`;

export const EditProfile = styled.form`
  max-width: 340px;
  margin: -100px auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    position: relative;

    > img {
      height: 186px;
      width: 186px;
      border-radius: 50%;
    }

    > label {
      width: 48px;
      height: 48px;

      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: 7px;
      right: 7px;

      cursor: pointer;

      input {
        display: none;
      }

      svg {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      }
    }
  }

  > div:nth-child(2) {
    width: 340px;
    margin-top: 64px;

    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > div:nth-child(3) {
    width: 340px;
    margin-top: 24px;

    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > button {
    height: 48px;
    margin-top: 24px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-weight: 500;
  }
`;
