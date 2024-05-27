import styled from "styled-components";

export const Container = styled.button`
  font-size: 12px;
  padding: 16px;
  border-radius: 5px;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background: ${({ theme }) => theme.COLORS.WHITE};
`;