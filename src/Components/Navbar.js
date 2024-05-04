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

    useEffect(() => {
        if (search) {
            setLoading(false);
        }
    }, [search]);

    const filterData = useCallback(() => {
        // Filter the search based on all the select values
        const filteredSearch = search.filter((item) => {
            // Check if the jobRole is included in the select value
            if (select && select.length > 0) {
                const selectedJobs = select.map((item) => item.value.toLowerCase());
                if (!selectedJobs.includes(item.jobRole.toLowerCase())) {
                    return false;
                }
            }

            // if the minExp matches the select value
            if (select3) {
                if (item.minExp !== parseInt(select3.value)) {
                    return false;
                }
            }

            // if the location matches the select value
            if (select4 && select4.length > 0) {
                if (select4[0].value === 'Remote' && item.location !== 'remote') {
                    return false;
                }
                if (select4[0].value === 'In-office' && item.location === 'remote') {
                    return false;
                }
            }

            // Check if the minJdSalary matches the select value
            if (select5 && select5[0]) {
                if (`${item.minJdSalary} ${item.salaryCurrencyCode}` !== (select5[0] && select5[0].value)) {
                    return false;
                }
            }

            // Check if the companyName includes the input value
            if (input) {
                if (!item.companyName.toLowerCase().includes(input.toLowerCase())) {
                    return false;
                }
            }

            return true;
        });

        updateFilteredData(filteredSearch);
    }, [select, select3, select4, select5, input, search, updateFilteredData]);


    // filter data when click to the select
    useEffect(() => {
        filterData()
    }, [select, select3, select4, select5, input])

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