import React, { useEffect, useState } from 'react';
import Button from './buttonLogin';
import Option from './option';

import { Cards } from './cards';


export default function StudentNotifications() {
    return (
        <>
            <h1>Notifications</h1>
            <ul className="list-group p-2">
                <li className="list-group-item position-relative d-flex justify-content-between">
                    <span class="position-absolute top-0 start-0 translate-middle p-1 bg-primary border border-light rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                    </span>
                    <span>Someone has accepted your tuition request for subject <b>Java</b></span>
                    <button type="button" class="btn btn-primary btn-sm">Mark As Read</button>
                </li>

                <li className="list-group-item .text-danger-emphasis">Someone has rejected your tuition request for subject <b>C++</b></li>
                <li className="list-group-item .text-warning-emphasis">Your request is pending with this teacher for subject <b>Python</b></li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </>
    )
}
