import { useEffect, useState } from 'react'
import useFetch from './useFetch';

const Home = () => {
    const { search, isLoading } = useFetch()

    return (
        <div className="card-container">
            {search.length > 0 ? (search.map((item) => {
                const { jdUid,
                    jdLink,
                    jobDetailsFromCompany,
                    maxJdSalary,
                    minJdSalary,
                    salaryCurrencyCode,
                    location,
                    minExp,
                    maxExp,
                    jobRole,
                    logoUrl,
                    companyName
                } = item
                return (
                    
                )
            })) : (
                <h2>No Jobs available for this category at the moment</h2>
            )}
        </div>
    )
}

export default Home