import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BUTTONTEXT};
  border-radius: 8px;
  border: none;
`;