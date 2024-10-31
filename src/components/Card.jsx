import React from 'react'

const Card = () => {
    return (
        <div className="card" style={{ minWidth: '30%' }}>
            <div className="card-body">
                <h5 className="card-title">Tutor Name</h5>
                <p className="card-text">Email:</p>
                <p className="card-text">Subject:</p>
                <p className="card-text">Location:</p>
                <p className="card-text">Tution Fee:</p>
                <button className="btn btn-primary">Book Appointment</button>
            </div>
        </div>
    )
}

export default Card