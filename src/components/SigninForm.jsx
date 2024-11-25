import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const SigninForm = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState({
        email: false,
        password: false,
    });
    const {signin}=useAuth();
    const navigate = useNavigate();


    const emailPattern = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]');
    // const pwdPattern = new RegExp("[a-z0-9A-Z][A-Za-z\d@$!%*?&]{6,}");

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "email":
                setFormValues({ ...formValues, email: e.target.value });
                if (emailPattern.test(e.target.value)) {
                    setFormErrors({ ...formErrors, email: false });
                }
                else {
                    setFormErrors({ ...formErrors, email: true });
                }
                break;
            case "password":
                setFormValues({ ...formValues, password: e.target.value });
                // if (pwdPattern.test(e.target.value)) {
                //     setFormErrors({ ...formErrors, password: false });

                // }
                // else {
                //     setFormErrors({ ...formErrors, password: true });
                //     ;
                // }
                setFormErrors({ ...formErrors, password: false });
                break;
            default:
                break
        }
    }

    const shouldEnableSubmitButton = () => {
        return formValues.email && formValues.password && !formErrors.email && !formErrors.password;

    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formValues);
        if (!shouldEnableSubmitButton()) return;
        await signin(formValues);
        navigate('/student/home')
    }


    return (
        <form className="d-flex flex-column needs-validation" style={{ gap: "1rem" }} onSubmit={handleSubmit} noValidate>
            <div>
                <label htmlFor="inputLoginEmail" className="form-label">
                    Email*
                </label>
                <input
                    id="inputLoginEmail"
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
                <label htmlFor="inputLoginPassword" className="form-label">
                    Password*
                </label>
                <input
                    id="inputLoginPassword"
                    name="password"
                    className={`form-control ${formValues.password && (formErrors.password ? "is-invalid" : "is-valid")}`}
                    type="password"
                    placeholder="*****"
                    value={formValues.password}
                    onChange={handleInputChange}
                    required
                />
                {formValues.password && formErrors.password && <div className="form-text text-danger fst-italic">
                    Please enter a valid password.
                </div>}
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                disabled={!shouldEnableSubmitButton()}
            >
                Login
            </button>
        </form>
    )
}

export default SigninForm