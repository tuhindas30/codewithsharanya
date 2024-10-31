export default function StudentNotifications() {
    return (
        <div className='px-5'>
            <h1>Notifications</h1>
            <ul className="list-group p-2">
                <li className="list-group-item position-relative d-flex justify-content-between">
                    <span class="position-absolute top-0 start-0 translate-middle p-1 bg-primary border border-light rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                    </span>
                    <span>Someone has accepted your tuition request for subject <b>Java</b></span>
                    <button type="button" class="btn btn-outline-primary btn-sm">Mark As Read</button>
                </li>

                <li className="list-group-item d-flex justify-content-between"><span>Someone has rejected your tuition request for subject <b>C++</b></span></li>
                <li className="list-group-item .text-warning-emphasis">Your request is pending with this teacher for subject <b>Python</b></li>
                
            </ul>
        </div>
    )
}
