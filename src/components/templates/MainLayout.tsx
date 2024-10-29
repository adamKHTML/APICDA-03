import React, { ReactNode } from 'react';
import NavBar from '../organisms/NavBar';

interface MainLayoutProps {
    children: ReactNode;
    onSearch: (query: string) => void;
    onLogin: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, onSearch, onLogin }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar onSearch={onSearch} onLogin={onLogin} />
            <main className="flex-grow p-4">{children}</main>
            <footer className="p-4 bg-gray-800 text-white text-center">
                © 2023 MyApp
            </footer>
        </div>
    );
};

export default MainLayout;