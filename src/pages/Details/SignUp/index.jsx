import { Container, Form, Background } from "./styles";
import { useState } from "react";
import { FiLock, FiLogIn, FiUser, FiMail} from 'react-icons/fi';
import { Input} from '../../../components/Input';
import { Button} from '../../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { api } from "../../../services/api";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);



    const navigate = useNavigate();

    async function handleSignUp(){
        setLoading(true);
        if(!name || !email || !password) {
           return alert ("Preencha todos os campos!");
        }
        
        var response = await api.post("/users", { name, email, password })
        if(response.status === 201) {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");  
        } else {
            alert("Não foi possível cadastrar");
        }
            
        setLoading(false);
    }


    return(
        <Container>
             <Background></Background>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Crie sua conta</h2>

                <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange = {e => setName(e.target.value)}
            />

                <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange = {e => setEmail(e.target.value)}

            />

            <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange = {e => setPassword(e.target.value)}

           />

            {isLoading ? 
            <Button title="Cadastrar" 
            disabled
            onClick={handleSignUp}/> 
            : <Button title="Cadastrar" 
            onClick={handleSignUp} 
           
            />
            }
            <Link to="/">
                Voltar para o login
            </Link>
          

            </Form>

           
        </Container>
    )
}