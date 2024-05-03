import { useEffect, useState } from 'react'
import useFetch from './useFetch';

const Home = () => {
    const { search, isLoading } = useFetch()

    
    return (
        <div>Home</div>
    )
}

export default Home