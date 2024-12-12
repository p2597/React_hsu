import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Search } from './SearchForm';

export default function Header() {
    const [name, setName] = useState('');

    const fetcher = url => axios.get(url).then(res => res.data);


    const { data, error, isLoading } = useSWR(name ? `${name}` : null, fetcher);


    if (isLoading) {
        return <p>Loading...</p>;
    }


    if (error) {
        return <p>Error: {error.message}</p>;
    }


    const onSubmit = (searchData) => {
        setName(searchData.search);
    };

    return (
        <header>
            <nav>
                <img src="/src/assets/ytube.png" width="150px" height="40px" alt="YouTube Logo" />
                <Search title="Search" onSubmit={onSubmit} />
                {data && (
                    <div>
                        {}
                    </div>
                )}
            </nav>
        </header>
    );
}
