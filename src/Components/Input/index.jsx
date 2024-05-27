import { Container } from "./styles";

export function Input({title, type, icon: Icon, ...rest}) {
  return(
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} type={type} placeholder={title} />
    </Container>
  );
}