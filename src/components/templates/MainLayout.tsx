
import React from 'react';
import LoginSection from '../organisms/LoginSection';

interface MainLayoutProps {
    onLogin: (email: string, password: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ onLogin }) => {
    return (
        <div className="flex min-h-screen">
            <div className="w-full max-w-md p-4 bg-gray-100">
                <LoginSection onLogin={onLogin} />
            </div>

            <div className="flex-grow bg-white"></div>
        </div>
    );
};

export default MainLayout;
