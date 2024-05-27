import { Container, Content } from "./styles";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { FiMail, FiLock } from "react-icons/fi";
import ImageSignin from "../../Assets/SignIn.svg"

export function SignIn() {
  return (
    <Container>
      <Content>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <div>
          <Input icon={FiMail} title="E-mail" type="email"/>
          <Input icon={FiLock} title="Senha" type="password"/>
        </div>

        <Button title="Entrar"/>
        <ButtonText title="Criar conta"/>
      </Content>

      <img src={ImageSignin} alt="Imagem de um cinema" />
    </Container>
  );
}