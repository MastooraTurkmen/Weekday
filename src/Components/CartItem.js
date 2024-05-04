import { useState } from 'react'

const CartItem = ({
    jdLink,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    jobRole,
    logoUrl,
    companyName }) => {

    // useStates for readMore
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="card">
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

            {/* About Company */}
            <div className="about">
                <div className="about-info">
                    <h2 className="about-company">About Company:</h2>
                    <h3 className="about-us">About us</h3>
                    <p className="about-text">
                        {readMore ? jobDetailsFromCompany : `${jobDetailsFromCompany.substring(0, 200)}...`}
                    </p>
                </div>
                <div className="founder-info">
                    <h3 className="founder">Founder/Recruiter profiles:</h3>
                    <p className="founder-name">John Doe</p>
                </div>
                <a href="#" className="job-link">view job</a>

                {minExp ? (
                    <div className="skills-info">
                        <h4 className="experience">Minimum Experience</h4>
                        <p className="year">{minExp} year</p>
                    </div>
                ) : <div className='white-space'></div>}
            </div>

            {/* Buttons */}
            <button className="button">
                ⚡
                Easy Apply
            </button>
        </div>
    )
}

export default CartItem