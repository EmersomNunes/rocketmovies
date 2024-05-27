import { Container } from "./styles";

export function Tag({ title, icon }) {
  return(
    <Container>
      {title}
      {icon}
    </Container>
  );
}