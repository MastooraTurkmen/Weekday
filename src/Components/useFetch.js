import { useEffect, useState } from 'react'

const useFetch = () => {
    const [search, setSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(10);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const body = JSON.stringify({
                "limit": page,
                "offset": 0,
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body
            };

            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);
            setSearch(result.jdList);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    // fetch the data for infinte scroll
    useEffect(() => {
        fetchData();
    }, [page]);

    return { search, isLoading, setPage, setSearch, setIsLoading }
}

export default useFetch
