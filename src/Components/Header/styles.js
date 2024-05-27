import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;

  padding: 24px 123px;

  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    padding: 0px 64px 0px 0px;
  }

  > div {
    display: flex;
    align-items: center;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-left: 9px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: end;
      width: 125px;
      
      button {
        width: 26px;
        height: 18px;
        font-size: 14px;
        text-align: end;
        color: ${({ theme }) => theme.COLORS.BUTTONTEXT};
      }
    }
  }
`;
