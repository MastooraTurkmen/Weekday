import { useState, useEffect, useCallback } from 'react'
import { Roles, employesNum, experience, remote, minJdSalary } from '../data';
import useFetch from './useFetch';
import Select from 'react-select'

const Navbar = ({ updateFilteredData }) => {
    const { search } = useFetch()

    // set all the select to null
    const [select, setSelect] = useState(null);
    const [select2, setSelect2] = useState(null);
    const [select3, setSelect3] = useState(null);
    const [select4, setSelect4] = useState(null);
    const [select5, setSelect5] = useState(null);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState("") // set the input empty

    const handleChange = (select) => {
        setSelect(select);
    }

    const handleChange2 = (select2) => {
        setSelect2(select2);
    }

    const handleChange3 = (select3) => {
        setSelect3(select3);
    };

    const handleChange4 = (select) => {
        setSelect4(select);
    }

    const handleChange5 = (select5) => {
        setSelect5(select5);
    };

    const handleInput = (e) => {
        const newInputValue = e.target.value
        setInput(newInputValue);
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginTop: '2rem'
        }}>
            <div>
                <Select
                    placeholder='Roles'
                    options={Roles}
                    onChange={handleChange}
                    value={select}
                    isLoading={loading}
                    isClearable
                    isMulti
                />
            </div>
            <div>
                <Select
                    placeholder='Number Of Employees'
                    options={employesNum}
                    onChange={handleChange2}
                    value={select2}
                    isClearable
                    isMulti
                />
            </div>
            <div>
                <Select
                    placeholder='Experience'
                    options={experience}
                    onChange={handleChange3}
                    value={select3}
                    isClearable

                />
            </div>
            <div>
                <Select
                    placeholder='Remote'
                    options={remote}
                    onChange={handleChange4}
                    value={select4}
                    isClearable
                    isMulti
                />
            </div>
            <div>
                <Select
                    placeholder='Mimimum Base Pay salary'
                    options={minJdSalary}
                    onChange={handleChange5}
                    value={select5}
                    isClearable
                    isMulti
                />
            </div>
            <input onChange={handleInput} type="text" className='input' placeholder='Search Company Name' />
        </div>
    )
}
export default Navbar;