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
                    <div key={jdUid} className="card">
                        <header className="job">
                            <div className="time-container">
                                <span>⏳</span>
                                <p className="time">Posted 10 days ago</p>
                            </div>
                            <div className="job-info">
                                <img src={logoUrl} alt="logo" className="logo" />
                                <div className="sub-info">
                                    <h4 className="company">{companyName}</h4>
                                    <h4 className="rol">{jobRole}</h4>
                                    <h4 className="city">{location}</h4>
                                </div>
                            </div>
                            <p className="salary">Estimated Salary: {minJdSalary} - {maxJdSalary} {salaryCurrencyCode} ✅</p>
                        </header>

                        <div className="about">
                            <div className="about-info">
                                <h2 className="about-company">About Company:</h2>
                                <h3 className="about-us">About us</h3>
                                <p className="about-text">
                                    {jobDetailsFromCompany}
                                </p>
                            </div>
                            <div className="founder-info">
                                <h3 className="founder">Founder/Recruiter profiles:</h3>
                                <p className="founder-name">John Doe</p>
                            </div>
                            <a href="#" className="job-link">view job</a>

                        </div>
                        <button className="button">
                            ⚡
                            Easy Apply
                        </button>
                    </div>
                )
            })) : (
                <h2>No Jobs available for this category at the moment</h2>
            )}
        </div>
    )
}

export default Home