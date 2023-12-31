import { useContext } from "react";
import { Container, Form, Background } from "./styles";
import { FiLock, FiLogIn, FiMail} from 'react-icons/fi';
import { useState } from "react";
import { useAuth } from "../../../hooks/auth";
import { Input} from '../../../components/Input';
import { Button} from '../../../components/Button';
import { Link } from 'react-router-dom';




         export function SignIn() {

            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");
            const { signIn} = useAuth();
            const [isLoading, setLoading] = useState(false);


    async function handleSignIn(){
        setLoading(true);
        await signIn({email, password});

        setLoading(false)
    }



    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Faça seu login</h2>

            <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
            />

            <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
           />
            {isLoading ?
            <Button
             title="Entrar"
             disabled
              onClick={handleSignIn}/>
              : <Button title="Entrar"
              onClick={handleSignIn}/>
              }
            <Link to="/register">
                Criar conta
            </Link>
          

            </Form>

            <Background></Background>
        </Container>
    )
}