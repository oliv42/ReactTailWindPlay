import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import Search from "./Search";
import TableUsers from './TableUsers';

const MyContacts = () => {
    
    const [search, setSearch] = useState('');
    const [resultSearch, setResultSearch] = useState([]);

    // Custom Hook
    const { data, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users');

   
    const filterUsers = () => {

        const foundUsers =  data.filter( user => {
            return Object.values(user)
            .join(' ')
            .toLowerCase()
            .includes(search.toLowerCase())
        })

        setResultSearch(foundUsers);
    }


    useEffect(() => {
        if (search !== '') {
            // Filter
            filterUsers();
        } else {
            setResultSearch([])
        }
    }, [search]);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const msgDisplay = (msg, color) => {
        return (
            <p style={{textAlign: 'center', color: color}}>
                { msg }
            </p>
        )
    }

    return (
        <React.Fragment>
        {
            isLoading ? msgDisplay('Veuillez patienter!', 'red') : (
                <Search 
                    searchStr={search}
                    searchhandler={handleChange}
                />
            )
            
        }
        
        {
            resultSearch.length === 0 && search !== '' ? msgDisplay('Pas de résultat!', 'red')
            :
            // search === '' ? msgDisplay('Veuillez effectuer une recherche', 'green')
            search === '' ? null
            :
            <TableUsers 
                dataArray={resultSearch}
            />
        }
        </React.Fragment>
        
    )
}

export default MyContacts