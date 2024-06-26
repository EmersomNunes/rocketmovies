import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  main {
    height: 100vh;
    overflow-y: auto;

    > div {
      padding: 50px 106px 60px 123px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > a {
        width: 207px;
        height: 48px;

        color: ${({ theme }) => theme.COLORS.GRAY_300};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 8px;

        svg {
          width: 16px;
          height: 16px;
          margin-right: 3px;
        }
      }
    }

    > section:last-child {
      padding-bottom: 200px;
    }
  }
`;
