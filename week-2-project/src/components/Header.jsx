import { SearchForm } from './SearchForm';
import { useSearchParams } from 'react-router'; 

export default function Header() {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (query) => {
        setSearchParams({ q: query }); 
    };

    return (
        <header>
            <nav>
                <img src="/src/assets/ytube.png" width="150px" height="40px" alt="YouTube Logo" />
                <SearchForm onSearch={handleSearch} /> 
            </nav>
        </header>
    );
}
