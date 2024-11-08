
export default function TutorHome() {
    

    return (
        <div className='px-5'>
            <h1>Tuition Requests</h1>
            <div className='d-flex justify-content-between p-2' >
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Amrit Roy</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">amritroy@gmail.com</h6>
                    <p className="card-text">Location: Noida</p>
                    <div class="d-flex justify-content-between"><button type="button" class="btn btn-success">Accept</button>
                        <button type="button" class="btn btn-danger">Reject</button></div>

                </div>
            </div>
        </div>
        </div>

    );
}
