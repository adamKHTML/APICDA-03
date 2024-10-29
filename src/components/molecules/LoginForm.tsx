// src/components/molecules/LoginForm.tsx
import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/button';
import Checkbox from '../atoms/Checkbox';

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem('email') || '';
        const savedPassword = localStorage.getItem('password') || '';

        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = () => {
        onLogin(email, password);
        if (rememberMe) {

            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        } else {

            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.target.checked);
    };

    return (
        <div className="login-form">
            <h2 className='login-title'>Log In</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <Input
                    email={email}
                    password={password}
                    onEmailChange={(e) => setEmail(e.target.value)}
                    onPasswordChange={(e) => setPassword(e.target.value)}
                />
                <Checkbox
                    label="Remember me"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                />
                <Button label="Log In" onClick={handleSubmit} />

            </form>
        </div>
    );
};

export default LoginForm;
