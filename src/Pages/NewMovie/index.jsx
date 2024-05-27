import { Container, CreateMovie, Mark } from "./styles";
import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { Input } from "../../Components/Input";
import { FiArrowLeft } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Tag } from "../../Components/Tag";
import { Button } from "../../Components/Button";

export function NewMovie() {
  return (
    <Container>
      <Header />
      <CreateMovie>
        <ButtonText icon={<FiArrowLeft />} title="Voltar" />
        <h1>Novo filme</h1>

        <main>
          <Input title="Título" />
          <Input title="Sua nota de 0 a 5" />
          <textarea placeholder="Observações"></textarea>
        </main>
      </CreateMovie>

      <Mark>
        <h2>Marcadores</h2>

        <div>
          <Tag title="React" icon={<IoMdClose />} />
          <Button title="Novo marcador" icon={<IoMdAdd />} />
        </div>

        <section>
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />
        </section>
      </Mark>
    </Container>
  );
}