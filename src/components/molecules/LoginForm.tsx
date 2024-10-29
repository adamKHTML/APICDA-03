// src/components/molecules/LoginForm.tsx
import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/button';

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        onLogin(email, password);
    };

    return (
        <div className="login-form">
            <h2>Log In</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <Input
                    email={email}
                    password={password}
                    onEmailChange={(e) => setEmail(e.target.value)}
                    onPasswordChange={(e) => setPassword(e.target.value)}
                />
                <Button label="Log In" onClick={handleSubmit} />
            </form>
        </div>
    );
};

export default LoginForm;
