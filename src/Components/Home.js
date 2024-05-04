import { useEffect, useState } from 'react'
import useFetch from './useFetch';
import CartItem from './CartItem';
import Loading from './Loading';

const Home = ({ filteredData }) => {
    // get the data from useFetch
    const { search, isLoading, setPage, setIsLoading } = useFetch()
    const [dataToDisplay, setDataToDisplay] = useState([]);

    // when loading is not true display data
    useEffect(() => {
        if (!isLoading) {
            setDataToDisplay(search);
        } else {
            setDataToDisplay(filteredData)
        }
    }, [search]);

    // filter data 
    useEffect(() => {
        if (filteredData) {
            setDataToDisplay(filteredData);
        }
    }, [filteredData]);
    
    // For handleScroll for infinite scroll
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight) {
            setIsLoading(true)
            setPage((prev) => prev + 4)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="card-container">
            {search.length > 0 ? (search.map((item) => {
                return <CartItem key={item.jdUid} {...item} />
            })) : (
                !isLoading && <h2>No Jobs available for this category at the moment</h2>
            )}
            {isLoading && <Loading />}
        </div>
    )
}

export default Home