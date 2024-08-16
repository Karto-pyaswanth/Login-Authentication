import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting form with data:", data); // Debugging line
            const url = "http://localhost:8080/api/users";
            const response = await axios.post(url, data);
            console.log("Response from server:", response); // Debugging line
            navigate("/login");
        } catch (error) {
            console.error("Error occurred during submission:", error); // Debugging line
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message || "An error occurred. Please try again.");
            } else {
                setError("An unexpected error occurred.");
            }
        }
    };

    return (
        <div className="signup_container">
            <div className="signup_form_container">
                <div>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type="button">
                            Sign in
                        </button>
                    </Link>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                        />
                        {error && <div className="error_message">{error}</div>}
                        <button type="submit">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
