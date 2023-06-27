import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/Details/SignIn';
import { SignUp } from '../pages/Details/SignUp';


export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/register" element={<SignUp/>} />
          
        </Routes>
    );
}