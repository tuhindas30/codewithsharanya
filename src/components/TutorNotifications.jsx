import React,{useEffect, useState} from 'react';
import Button from './buttonLogin';
import Option from './option';

import { Cards } from './cards';


export default function TutorNotifications() {
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-info navbar-dark bg-dark ps-5 pe-5 navblack">
                <div className='tutorRatingContainer'>
                    <i className ="bi bi-star-fill"></i>
                    <Button name="4.5"/>
                </div>
                <div className='tutorRatingContainer'>
                    <i className ="bi bi-alarm-fill"></i>
                    <Button name="6 Hrs"/>
                </div>
                <div className="collapse navbar-collapse justify-content-end pe-3"> 
                        <Button name="Notifications"/>
                        <Button name="Profile"/>
                        <Button name="Log Out"/>   
                </div>                   
            </nav>
        <h1>Notifications</h1>
        <div className="card" style={{width:"18rem"}}>
  <div className="card-body">
    <h5 className="card-title">Amrit Roy</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">amritroy@gmail.com</h6>
    <p className="card-text">Location: Noida</p>
    <div class="d-flex justify-content-between"><button type="button" class="btn btn-success">Accept</button>
<button type="button" class="btn btn-danger">Reject</button></div>
    
  </div>
</div>

        </>
    )
}
