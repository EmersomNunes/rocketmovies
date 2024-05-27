import { Container, Content } from "./styles";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import ImageSignin from "../../Assets/SignIn.svg"

export function SignUp() {
  return (
    <Container>
      <Content>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <div>
          <Input icon={FiMail} title="Name" type="text"/>
          <Input icon={FiMail} title="E-mail" type="email"/>
          <Input icon={FiLock} title="Senha" type="password"/>
        </div>

        <Button title="Cadastrar"/>
        <ButtonText icon={<FiArrowLeft />} title="Voltar para o login"/>
      </Content>

      <img src={ImageSignin} alt="Imagem de um cinema" />
    </Container>
  );
}