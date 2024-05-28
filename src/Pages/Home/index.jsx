import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Movies } from "../../Components/Movies";
import { Container } from "./styles";
import { IoAddOutline } from "react-icons/io5";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <div>
          <h1>Meus filmes</h1>
            <Link to="newmovie">
              <IoAddOutline /> Adicionar filme
            </Link>
        </div>

        <Movies />
        <Movies />
        <Movies />
      </main>
    </Container>
  );
}