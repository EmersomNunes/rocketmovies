import { ButtonText } from "../ButtonText";
import { Input } from "../Input";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input 
        title="Pesquisar pelo título"
        type="text"
      />
      <div>
        <div>
          <span>Emersom Nunes</span>
          <ButtonText title="sair" />
        </div>

        <img src="https://github.com/EmersomNunes.png" alt="Foto do usuário" />
      </div>
    </Container>
  );
}