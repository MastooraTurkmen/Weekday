import { useEffect, useState } from 'react'
import useFetch from './useFetch';
import CartItem from './CartItem';

const Home = () => {
    const { search, isLoading } = useFetch()

    return (
        <div className="card-container">
            {search.length > 0 ? (search.map((item) => {
                return <CartItem key={item.jdUid} {...item} />
            })) : (
                <h2>No Jobs available for this category at the moment</h2>
            )}
        </div>
    )
}

export default Home