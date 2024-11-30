import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../api/helper";

const StudentProfile = () => {
    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        phoneNo: "",
        location: ""

    });
    const [formErrors, setFormErrors] = useState({
        email: false,
        phoneNo: false,

    });
    const user = JSON.parse(localStorage.getItem("__auth_user"))

    const emailPattern = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]');
    const pwdPattern = new RegExp("[a-z0-9A-Z][A-Za-z\d@$!%*?&]{6,}");
    const phoneNoPattern = new RegExp("^\\d{10}$");

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "fullName":
                setFormValues({ ...formValues, fullName: e.target.value });
                break;
            case "email":
                setFormValues({ ...formValues, email: e.target.value });
                if (emailPattern.test(e.target.value)) {
                    setFormErrors({ ...formErrors, email: false });
                }
                else {
                    setFormErrors({ ...formErrors, email: true });
                }
                break;
            case "phoneNo":
                setFormValues({ ...formValues, phoneNo: e.target.value });
                if (phoneNoPattern.test(e.target.value)) {
                    setFormErrors({ ...formErrors, phoneNo: false });
                }
                else {
                    setFormErrors({ ...formErrors, phoneNo: true });
                }
                break;
            case "location":
                setFormValues({ ...formValues, location: e.target.value });


            default:
                break;
        }
    }

    const shouldEnableSubmitButton = () => {
        return (
            !formErrors.email || !formErrors.phoneNo
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        if (!shouldEnableSubmitButton()) return;

    }
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`${BASE_URL}/auth/students/${user.userId}`)
                setFormValues({
                    fullName: response.data.name,
                    email: response.data.email,
                    phoneNo: response.data.mobile,
                    location: response.data.location
                })
            } catch (error) {
                alert(error.message)
            }

        })()
    }, [])
    return (
        <>
            <h1 className='text-center mb-5'>Update Student Details</h1>
            <div className='d-flex justify-content-center'>
                <form className="d-flex flex-column needs-validation" style={{ gap: "1rem" }} onSubmit={handleSubmit} noValidate>
                    <div>
                        <label htmlFor="inputFullName" className="form-label">
                            Full Name*
                        </label>
                        <input
                            id="inputFullName"
                            name="fullName"
                            className="form-control"
                            type="text"
                            placeholder="John Doe"
                            value={formValues.fullName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="inputEmail" className="form-label">
                            Email*
                        </label>
                        <input
                            id="inputEmail"
                            name="email"
                            className={`form-control ${formValues.email && (formErrors.email ? "is-invalid" : "is-valid")}`}
                            type="email"
                            placeholder="john@example.com"
                            value={formValues.email}
                            onChange={handleInputChange}
                            required
                        />
                        {formValues.email && formErrors.email && <div className="form-text text-danger fst-italic">
                            Please enter a valid email.
                        </div>}
                    </div>
                    <div>
                        <label htmlFor="inputPhoneNo" className="form-label">
                            Phone Number*
                        </label>
                        <input
                            id="inputPhoneNo"
                            name="phoneNo"
                            className={`form-control ${formValues.phoneNo && (formErrors.phoneNo ? "is-invalid" : "is-valid")}`}
                            type="tel"
                            placeholder="1234567890"
                            value={formValues.phoneNo}
                            onChange={handleInputChange}
                            required
                        />
                        {formValues.phoneNo && formErrors.phoneNo && <div className="form-text text-danger fst-italic">
                            Please enter 10 digit mobile number.
                        </div>}
                    </div>
                    <div>
                        <label htmlFor="inputLocation" className="form-label">
                            Location*
                        </label>
                        <input
                            id="inputLocation"
                            name="location"
                            className={`form-control ${formValues.location && "is-valid"}`}
                            type="text"
                            placeholder="Location"
                            value={formValues.location}
                            onChange={handleInputChange}
                            required
                        />

                    </div>



                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!shouldEnableSubmitButton()}
                    >
                        Update
                    </button>
                </form>
            </div>
        </>
    )
}

export default StudentProfile;