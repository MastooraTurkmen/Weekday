import { useEffect, useState } from 'react'
import useFetch from './useFetch';
import CartItem from './CartItem';
import Loading from './Loading';

const Home = () => {
    const { search, isLoading } = useFetch()

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