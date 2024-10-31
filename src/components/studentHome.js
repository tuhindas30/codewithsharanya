import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card'; 


export default function StudentHome() {
    const [masterData, setMasterData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [search, setSearch] = useState({
        subject:'',
        location:'',
    });
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



    const handleInputChange = (e, type)=> {
        switch(type){
            case 'subject':
              setSearch({...search, subject: e.target.value})
              break;
            case'location':
              setSearch({...search, location: e.target.value})
              break;
            default:
              break;
        }
    }

    const filterList = (value) => {
        let filteredValues = masterData.filter(o =>
            Object.keys(o).some(k => `${o[k]}`.toLowerCase().includes(value.toLowerCase())));
        setFilterData(filteredValues)
    }
    

    return (
        <div className='App'>
            
            <div class="input-group" style={{ width: '50%', margin: 'auto' }}>
                <input type="text" class="form-control" placeholder="Search Subject" onChange={(e) => handleInputChange(e, 'subject')} />
                <input type="text" class="form-control" placeholder="Search Location" onChange={(e) => handleInputChange(e, 'location')} />
                <button type="button" className="btn btn-primary">Search</button>
            </div>

            <div className="d-flex justify-content-between" style={{ gap: '2rem', padding: '4rem' }}>
                {filterData.map((tutor) => {
                    return (
                        <Card key={tutor.tutorName} tutor={tutor} />
                    )
                })}
            </div>
        </div>
        

    );
}
