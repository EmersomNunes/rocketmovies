import styled from "styled-components";

export const Container = styled.section`
  padding: 24px 106px 0px 123px;

  > div {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MOVIES};

    padding: 32px;
    border-radius: 16px;

    > a {

      > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 8px;
        font-size: 24px;
      }

      > p {
        margin-top: 15px;
        color: ${({ theme }) => theme.COLORS.MOVIETEXT};
        display: -webkit-box;
        -webkit-line-clamp: 2; /** número de linhas que você quer exibir */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      > span {
        color: ${({ theme }) => theme.COLORS.PINK};
      }

      > button {
        width: 121px;
        height: 24px;

        border-radius: 8px;
        font-size: 12px;
        margin-top: 15px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-right: 8px;
      }
    }
  }
`;
