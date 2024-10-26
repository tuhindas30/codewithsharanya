import React, { useEffect, useState } from 'react';
import Button from './buttonLogin';
import Option from './option';
import { Cards } from './cards';
import { useNavigate } from 'react-router-dom';


export default function StudentHome() {
    const [masterData, setMasterData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        fetch("/data/tutors.json",
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((response) => response.json())
            .then((results) => {
                setMasterData(results.Tutors);
                setFilterData(results.Tutors);
            })
            .catch((error) => {
                console.log("error", error);
            })
    }, [])



    const onSearch = (e) => {
        let value = e.target.value;
        const pattern = /^[A-Za-z0-9]+$/;
        if (value === "" || pattern.test(value)) {
            setSearchValue(value);
            filterList(value);
        }
    }
    const filterList = (value) => {
        let filteredValues = masterData.filter(o =>
            Object.keys(o).some(k => `${o[k]}`.toLowerCase().includes(value.toLowerCase())));
        setFilterData(filteredValues)
    }
    const handleFavClick = () => {
        let filteredValues = masterData.filter(o =>
            Object.keys(o).some(k => `${o[k]}`.toLowerCase().includes('shamb'.toLowerCase())));
        setFilterData(filteredValues)
    }

    return (
        <div className='App'>
            <nav className="navbar navbar-expand-sm bg-info navbar-dark bg-dark ps-5 pe-5 navblack">
                <div className='tutorRatingContainer'>
                    <i className="bi bi-alarm-fill"></i>
                    <Button name="6 Hrs" />
                </div>
                <div className="collapse navbar-collapse justify-content-end pe-3">
                    {/* <button  className={`btn btn-light btn-md ms-2 loginSignUp `} onClick={()=>navigate("/Student/Notifications")}>Notifications </button>  */}
                    <button type="button" className="btn btn-light position-relative btn-md ms-2 loginSignUp" onClick={() => navigate("/Student/Notifications")}>
                        Notifications
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            99+
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                    <Button name="Profile" />
                    <Button name="Log Out" />
                </div>
            </nav>
            <div class="d-flex justify-content-center align-items-center">
                <div className={`input-group searchBar searchBarOnfetch`} onChange={onSearch}>
                    <input type="text" className="p-2 form-control" placeholder="Search Subject" />

                </div>
                <div className={`input-group searchBar searchBarOnfetch`} onChange={onSearch}>
                    <input type="text" className="p-2 form-control" placeholder="Search Location" />

                </div>
                <button type="button" class="btn btn-primary">Search</button>
            </div>



            <div>
                <div className={`tutor-list-container`}>
                    <Cards filterData={filterData} />
                </div>
            </div>

        </div>

    );
}
