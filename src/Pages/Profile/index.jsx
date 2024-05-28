import { Container, TopProfile, EditProfile } from "./styles";
import { ButtonText } from "../../Components/ButtonText";
import { Input } from "../../Components/Input";
import { VscDeviceCamera } from "react-icons/vsc";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../Components/Button"
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <TopProfile>
        <Link to="/">
          <FiArrowLeft /> voltar
        </Link>
      </TopProfile>

      <EditProfile>
        <div>
          <img src="https://github.com/EmersomNunes.png" alt="imagem do usuário" />
          <label htmlFor="avatar">
            <VscDeviceCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
        </div>

        <div>
          <Input 
            title='Nome' 
            type="text"
            icon={FiUser}   
          />
          <Input 
            title="E-mail" 
            type="email" 
            icon={FiMail}  
          />
        </div>
          <div>
            <Input 
              title="Senha atual" 
              type="password" 
              icon={FiLock}
            />
            <Input 
              title="Nova senha" 
              type="password" 
              icon={FiLock}  
            />
          </div>
        <Button title="Salvar"/>
      </EditProfile>
    </Container>
  );
}