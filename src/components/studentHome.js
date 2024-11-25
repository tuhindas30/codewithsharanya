
import { useEffect, useState } from 'react';
import Card from './Card';


export default function StudentHome() {

    const [search, setSearch] = useState({
        subject: '',
        location: '',
    });

    useEffect(() => {
        fetch("http://localhost:8080/requests/student/11",{
            headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGFua2FyYUBnbWFpbC5jb20iLCJpYXQiOjE3MzIyOTE4MTYsImV4cCI6MTczMjMyNzgxNn0.dEHqf2CEY5ZFNQRZbpu1M8U8-7eTpX8vQOAheHD6PXI",
                "Content-Type":"application/json"
            }
        }
            ).then((response) => response.json())
            .then((results) => {
                console.log(results);
            })
            .catch((error) => {
                console.log("error", error);
            })
    }, [])



    const handleInputChange = (e, type) => {
        switch (type) {
            case 'subject':
                setSearch({ ...search, subject: e.target.value })
                break;
            case 'location':
                setSearch({ ...search, location: e.target.value })
                break;
            default:
                break;
        }
    }




    return (
        <div className='App'>

            <div class="input-group" style={{ width: '50%', margin: 'auto' }}>
                <input type="text" class="form-control" placeholder="Search Subject" onChange={(e) => handleInputChange(e, 'subject')} />
                <input type="text" class="form-control" placeholder="Search Location" onChange={(e) => handleInputChange(e, 'location')} />
                <button type="button" className="btn btn-primary">Search</button>
            </div>

            <div className="d-flex justify-content-between" style={{ gap: '2rem', padding: '4rem' }}>
                <Card/>

            </div>
        </div>


    );
}
