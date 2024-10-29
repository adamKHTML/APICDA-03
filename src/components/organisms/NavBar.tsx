import React from 'react';
import SearchBox from '../molecules/SearchBox';
import Button from '../atoms/button';

interface NavBarProps {
    onSearch: (query: string) => void;
    onLogin: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSearch, onLogin }) => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-2xl">MyApp</div>
            <SearchBox onSearch={onSearch} />
            <Button label="Login" onClick={onLogin} />
        </nav>
    );
};

export default NavBar;